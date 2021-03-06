#[macro_use]
extern crate clap;
#[macro_use]
extern crate serde_derive;
extern crate toml;
extern crate regex;

mod client_config;
mod forwarder;

use clap::App;
use client_config::ClientConfig;
use forwarder::Forwarder;
use std::net::TcpStream;
use std::process::exit;
use std::sync::{Arc, Mutex};
use std::thread;

fn forward_file(file: String, stream: Arc<Mutex<TcpStream>>) {
    let mut forwarder = match Forwarder::register(stream, file.clone()) {
        Err(e) => {
            eprintln!("failed forwarding file {}: {}", file.clone(), e);
            return;
        }
        Ok(f) => f,
    };
    forwarder.watch();
}

fn main() {
    let _matches = App::new(format!("{} {}", crate_name!(), "client"))
        .version(crate_version!())
        .about("TCP Server Client");

    let config = ClientConfig::new(String::from("config.toml")).unwrap();

    // Connect to socket
    let stream = match TcpStream::connect(format!("{}:{}", config.host, config.port)) {
        Err(e) => {
            println!("Failed to connect: {}", e);
            exit(1);
        }
        Ok(stream) => Arc::new(Mutex::new(stream)),
    };

    println!(
        "Successfully connected to server at {}:{}",
        config.host, config.port
    );

    let mut children = vec![];
    for file in config.files {
        let stream_clone = Arc::clone(&stream);

        let handle = thread::spawn(move || forward_file(file, stream_clone));

        children.push(handle);
    }

    // Wait for each thread to finish.
    for child in children {
        let _ = child.join();
    }
}

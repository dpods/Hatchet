#[macro_use]
extern crate clap;
#[macro_use]
extern crate serde_derive;
extern crate toml;

mod config;
mod forwarder;

use clap::{App};
use std::net::{TcpStream};
use std::thread;
use forwarder::Forwarder;
use config::Config;

fn forward_file(file: String, stream: TcpStream) {
    let mut forwarder = Forwarder::register(stream, file).unwrap();
    forwarder.watch();
}

fn main() {
    let matches = App::new(format!("{} {}", crate_name!(), "client"))
        .version(crate_version!())
        .about("TCP Server Client");

    let config = Config::new(String::from("config.toml")).unwrap();

    println!("{}:{}", config.host, config.port);

    // Connect to socket
    let stream = match TcpStream::connect(format!("{}:{}", config.host, config.port)) {
        Err(e) => {
            println!("Failed to connect: {}", e);
            return;
        },
        Ok(stream) => stream
    };

    println!("Successfully connected to server at {}:{}", config.host, config.port);

    let mut children = vec![];
    for file in config.files {
        let stream_clone = stream.try_clone().expect("Failed to clone socket");

        let handle = thread::spawn(move|| {
            forward_file(file, stream_clone)
        });

        children.push(handle);
    }

    // Wait for each thread to finish.
    for child in children {
        let _ = child.join();
    }
}
#[macro_use]
extern crate clap;

#[macro_use]
extern crate serde_derive;

extern crate toml;

mod config;
mod forwarder;

use std::net::{TcpStream};
use clap::{Arg, App};
use std::process::{Child, Command, Stdio};
use forwarder::Forwarder;
use std::thread;

const HOST: &str = "0.0.0.0";
const PORT: &str = "8888";

fn forward_file(file: String, stream: TcpStream) {
    let mut forwarder = Forwarder::register(stream, file).unwrap();
    forwarder.watch();
}

fn main() {
    let matches = App::new(format!("{} {}", crate_name!(), "client"))
        .version(crate_version!())
        .about("TCP Server Client")
        .arg(Arg::with_name("host")
            .short("h")
            .long("host")
            .value_name("HOST")
            .help("The IP of the host server")
            .default_value(HOST)
            .takes_value(true))
        .arg(Arg::with_name("port")
            .short("p")
            .long("port")
            .value_name("PORT")
            .help("The port the server is listening on")
            .default_value(PORT)
            .takes_value(true))
        .get_matches();

    let host = matches.value_of("host").unwrap();
    let port = matches.value_of("port").unwrap();
    let config = config::Config::new(String::from("config.toml")).unwrap();
    let filename = config.files[0].clone();

    // Connect to socket
    match TcpStream::connect(format!("{}:{}", host, port)) {
        Err(e) => {
            println!("Failed to connect: {}", e);
        },
        Ok(stream) => {
            println!("Successfully connected to server at {}:{}", host, port);

            let handle = thread::spawn(move|| {
                // connection succeeded
                forward_file(filename, stream)
            });

            handle.join().unwrap();
        }
    }

    println!("Terminated.");
}
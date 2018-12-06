#[macro_use]
extern crate clap;

mod archiver;

use std::thread;
use std::net::{TcpListener, TcpStream, Shutdown};
use std::io::{Read, Write};
use clap::{Arg, App};
use std::str::from_utf8;
use archiver::Archiver;

const HOST: &str = "0.0.0.0";
const PORT: &str = "8888";

fn handle_client(mut stream: TcpStream) {
    let mut data = [0 as u8; 256]; // using 256 byte buffer
    let success = "OK";

    let mut archiver = match Archiver::new() {
        Err(e) => {
            println!("Could not open archive file: {}", e);
            return;
        },
        Ok(a) => a
    };

    while match stream.read(&mut data) {
        Err(_) => {
            println!("An error occurred, terminating connection with {}", stream.peer_addr().unwrap());
            stream.shutdown(Shutdown::Both).unwrap();
            false
        },
        Ok(size) => {
            match size {
                0 => {
                    // A successful read of length zero indicates there is no more data to be read
                    println!("Client closed connection: {}", stream.peer_addr().unwrap());
                    false
                },
                _ => {
                    let text = from_utf8(&data[0..size]).unwrap();
                    println!("Received line: {}", text);

                    archiver.archive(text);

                    stream.write(success.as_bytes()).unwrap();
                    true
                }
            }
        },
    } {}
}

fn main() {
    let matches = App::new(format!("{} {}", crate_name!(), "server"))
        .version(crate_version!())
        .about("TCP Server")
        .arg(Arg::with_name("port")
            .short("p")
            .long("port")
            .value_name("PORT")
            .help("The port the server will listen on")
            .default_value(PORT)
            .takes_value(true))
        .get_matches();

    let port = matches.value_of("port").unwrap();
    let listener = TcpListener::bind(format!("{}:{}", HOST, port)).unwrap();

    println!("Server listening on port {}", port);

    // accept connections and process them, spawning a new thread for each one
    for stream in listener.incoming() {
        match stream {
            Ok(stream) => {
                println!("New connection: {}", stream.peer_addr().unwrap());
                thread::spawn(move|| {
                    // connection succeeded
                    handle_client(stream)
                });
            }
            Err(e) => {
                println!("Error: {}", e);
                /* connection failed */
            }
        }
    }

    // close the socket server
    drop(listener);
}
#[macro_use]
extern crate clap;
extern crate hyper;

mod archiver;
mod webserver;

use archiver::Archiver;
use clap::{App, Arg};
use std::io::{Read, Write};
use std::net::{Shutdown, TcpListener, TcpStream};
use std::str::from_utf8;
use std::sync::{Arc, Mutex};
use std::thread;
use std::process::exit;

const HOST: &str = "0.0.0.0";
const PORT: &str = "8888";

fn handle_logserver_client(mut stream: TcpStream, archiver: Arc<Mutex<Archiver>>) {
    let mut data = [0 as u8; 1024]; // using 1kb buffer
    let success = "OK";

    while match stream.read(&mut data) {
        Err(_) => {
            println!(
                "An error occurred, terminating connection with {}",
                stream.peer_addr().unwrap()
            );
            stream.shutdown(Shutdown::Both).unwrap();
            false
        }
        Ok(size) => {
            match size {
                0 => {
                    // A successful read of length zero indicates there is no more data to be read
                    println!("Client closed connection: {}", stream.peer_addr().unwrap());
                    false
                }
                _ => {
                    let text = from_utf8(&data[0..size]).unwrap();
                    println!("Received line: {}", text);

                    let mut archiver = archiver.lock().unwrap();
                    archiver.archive(text);

                    stream.write(success.as_bytes()).unwrap();
                    true
                }
            }
        }
    } {}
}


fn start_logserver(port: &str) {
    let listener = TcpListener::bind(format!("{}:{}", HOST, port)).unwrap();

    println!("Server listening on port {}", port);

    let archiver_mutex = match Archiver::new() {
        Err(e) => {
            println!("Could not open archive file: {}", e);
            exit(1);
        }
        Ok(a) => a,
    };

    // accept connections and process them, spawning a new thread for each one
    for stream in listener.incoming() {
        match stream {
            Ok(stream) => {
                println!("New connection: {}", stream.peer_addr().unwrap());
                let archiver_clone = Arc::clone(&archiver_mutex);
                thread::spawn(move || {
                    // connection succeeded
                    handle_logserver_client(stream, archiver_clone)
                });
            }
            Err(e) => {
                println!("Could not listen on new connection: {}", e);
                exit(1);
            }
        }
    }

    // close the socket server
    drop(listener);
}

fn start_webserver() {
    thread::spawn(move || {
        webserver::run();
    });
}

fn main() {
    let matches = App::new(format!("{} {}", crate_name!(), "server"))
        .version(crate_version!())
        .about("TCP Server")
        .arg(
            Arg::with_name("port")
                .short("p")
                .long("port")
                .value_name("PORT")
                .help("The port the server will listen on")
                .default_value(PORT)
                .takes_value(true),
        ).get_matches();

    let port = matches.value_of("port").unwrap();

    start_webserver();
    start_logserver(port);
}

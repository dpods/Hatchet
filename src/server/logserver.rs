use archiver::Archiver;
use std::io::{Read, Write};
use std::net::{Shutdown, TcpListener, TcpStream};
use std::process::exit;
use std::str::from_utf8;
use std::sync::{Arc, Mutex};
use std::thread;

const HOST: &str = "0.0.0.0";

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

pub fn run(port: u16) {
    let listener = TcpListener::bind(format!("{}:{}", HOST, port)).unwrap();

    println!("LogServer listening on port {}", port);

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

#[macro_use]
extern crate clap;
#[macro_use]
extern crate serde_derive;
extern crate hyper;

mod archiver;
mod webserver;
mod logserver;
mod server_config;

use clap::{App};
use std::thread;
use server_config::ServerConfig;

fn main() {
    let _matches = App::new(format!("{} {}", crate_name!(), "server"))
        .version(crate_version!())
        .about("TCP Server");

    let config = ServerConfig::new(String::from("server.toml")).unwrap();
    let logserver_port = config.logserver_port;
    let webserver_port = config.webserver_port;

    let mut children = vec![];

    let handle = thread::spawn(move || {
        logserver::run(logserver_port);
    });
    children.push(handle);

    let handle = thread::spawn(move || {
        webserver::run(webserver_port);
    });
    children.push(handle);

    // Wait for each thread to finish.
    for child in children {
        let _ = child.join();
    }
}

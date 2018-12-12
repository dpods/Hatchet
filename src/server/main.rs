#[macro_use]
extern crate clap;
#[macro_use]
extern crate serde_derive;
extern crate hyper;
extern crate ws;
extern crate regex;
extern crate stopwatch;

mod archiver;
mod logserver;
mod server_config;
mod webserver;
mod websocketserver;

use clap::App;
use server_config::ServerConfig;
use std::thread;

fn main() {
    let _matches = App::new(format!("{} {}", crate_name!(), "server"))
        .version(crate_version!())
        .about("TCP Server");

    let config = ServerConfig::new(String::from("server.toml")).unwrap();
    let logserver_port = config.logserver_port;
    let webserver_port = config.webserver_port;
    let websocketserver_port = config.websocketserver_port;

    let mut children = vec![];

    let handle = thread::spawn(move || {
        logserver::run(logserver_port);
    });
    children.push(handle);

    let handle = thread::spawn(move || {
        webserver::run(webserver_port);
    });
    children.push(handle);

    let handle = thread::spawn(move || {
        websocketserver::run(websocketserver_port);
    });
    children.push(handle);

    // Wait for each thread to finish.
    for child in children {
        let _ = child.join();
    }
}

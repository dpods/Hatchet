#[macro_use]
extern crate clap;
#[macro_use]
extern crate serde_derive;
extern crate hyper;
extern crate ws;
extern crate regex;
extern crate stopwatch;
extern crate chrono;
extern crate walkdir;

mod archiver;
mod logserver;
mod server_config;
mod webserver;
mod websocketserver;

use clap::App;
use server_config::ServerConfig;
use std::thread;
use std::sync::Arc;

fn main() {
    let _matches = App::new(format!("{} {}", crate_name!(), "server"))
        .version(crate_version!())
        .about("TCP Server");

    let config = ServerConfig::new(String::from("server.toml")).unwrap();
    let config = Arc::new(config);

    let config_clone = config.clone();
    let logserver_handle = thread::spawn(move || {
        logserver::run(config_clone);
    });

    let config_clone = config.clone();
    let webserver_handle = thread::spawn(move || {
        webserver::run(config_clone);
    });

    let config_clone = config.clone();
    let websocketserver_handle = thread::spawn(move || {
        websocketserver::run(config_clone);
    });

    logserver_handle.join().expect("Couldn't join on LogServer thread");
    webserver_handle.join().expect("Couldn't join on WebServer thread");
    websocketserver_handle.join().expect("Couldn't join on WebsocketServer thread");
}

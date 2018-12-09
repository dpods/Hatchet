use std::fs::File;
use std::io;
use std::io::prelude::*;
use std::io::BufReader;

#[derive(Deserialize)]
pub struct ServerConfig {
    pub logserver_port: u16,
    pub webserver_port: u16,
    pub websocketserver_port: u16,
}

impl ServerConfig {
    pub fn new(filename: String) -> Result<ServerConfig, io::Error> {
        let f = match File::open(filename) {
            Err(e) => return Err(e),
            Ok(x) => x,
        };

        // read file into a string
        let mut buf_reader = BufReader::new(f);
        let mut contents = String::new();
        buf_reader.read_to_string(&mut contents)?;

        // deserialize toml string to Config object
        let config: ServerConfig = toml::from_str(&contents).unwrap();

        Ok(config)
    }
}

use std::fs::File;
use std::io;
use std::io::prelude::*;
use std::io::BufReader;

#[derive(Deserialize)]
pub struct Config {
    pub host: String,
    pub port: u16,
    pub files: Vec<String>,
}

impl Config {
    pub fn new(filename: String) -> Result<Config, io::Error> {
        let f = match File::open(filename) {
            Err(e) => return Err(e),
            Ok(x) => x,
        };

        // read file into a string
        let mut buf_reader = BufReader::new(f);
        let mut contents = String::new();
        buf_reader.read_to_string(&mut contents)?;

        // deserialize toml string to Config object
        let config: Config = toml::from_str(&contents).unwrap();

        Ok(config)
    }
}

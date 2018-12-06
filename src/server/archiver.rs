use std::fs::OpenOptions;
use std::fs::File;
use std::io;
use std::io::prelude::*;

pub struct Archiver {
    file: File
}

impl Archiver {
    pub fn new() -> Result<Archiver, io::Error> {
        let file = match OpenOptions::new()
            .create(true)
            .write(true)
            .append(true)
            .open("./archive.log") {
            Err(e) => return Err(e),
            Ok(x) => x
        };

        Ok(Archiver {
            file: file
        })
    }

    pub fn archive(&mut self, line: &str) {
        if let Err(e) = writeln!(self.file, "{}", line) {
            eprintln!("Couldn't write to file: {}", e);
        }
    }
}
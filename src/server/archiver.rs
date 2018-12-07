use std::fs::File;
use std::fs::OpenOptions;
use std::io;
use std::io::prelude::*;
use std::sync::{Arc, Mutex};

pub struct Archiver {
    file: File,
}

impl Archiver {
    pub fn new() -> Result<Arc<Mutex<Archiver>>, io::Error> {
        let file = match OpenOptions::new()
            .create(true)
            .write(true)
            .append(true)
            .open("./archive.log")
        {
            Err(e) => return Err(e),
            Ok(x) => x,
        };

        let archiver = Archiver { file: file };
        Ok(Arc::new(Mutex::new(archiver)))
    }

    pub fn archive(&mut self, line: &str) {
        if let Err(e) = writeln!(self.file, "{}", line) {
            eprintln!("Couldn't write to file: {}", e);
        }
    }
}

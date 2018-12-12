use std::fs::File;
use std::fs::OpenOptions;
use std::io;
use std::io::prelude::*;
use std::sync::{Arc, Mutex};
use chrono::prelude::*;
use std::fs;
use std::path::Path;

pub struct Archiver {
    filepath: String,
    filename: String,
    file: File,
}

impl Archiver {
    pub fn new(path: &String) -> Result<Arc<Mutex<Archiver>>, io::Error> {
        // First, create archive directory if it does not exist
        fs::create_dir_all(path.clone())?;

        let filepath = path.clone();
        let filename = Archiver::get_filename();
        let file = Archiver::new_file(&filepath, &filename);

        let archiver = Archiver {
            filepath: filepath,
            filename: filename,
            file: file
        };

        Ok(Arc::new(Mutex::new(archiver)))
    }

    pub fn new_file(filepath: &String, filename: &String) -> File {
        // The open file for archiving and return an arc mutex to it since multiple threads
        // will be writing to this file
        match OpenOptions::new()
            .create(true)
            .write(true)
            .append(true)
            .open(format!("{}/{}", filepath, filename)) {
                Err(e) => panic!("Couldn't open file for archiving: {}", e),
                Ok(x) => x,
            }
    }

    pub fn get_filename() -> String {
        let dt = Local::now();
        format!("{}{}{}.log", dt.year(), dt.month(), dt.day())
    }

    pub fn archive(&mut self, line: &str) {
        let new_filename = Archiver::get_filename();
        let file_exists = Path::new(&self.get_fullpath()).exists();

        if new_filename != self.filename || !file_exists {
            self.file = Archiver::new_file(&self.filepath, &new_filename);
        }

        if let Err(e) = writeln!(self.file, "{}", line) {
            eprintln!("Couldn't write to file: {}", e);
        }
    }

    fn get_fullpath(&self) -> String {
        format!("{}/{}", self.filepath, self.filename)
    }
}

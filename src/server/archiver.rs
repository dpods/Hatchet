use std::fs::OpenOptions;
use std::io;
use std::io::prelude::*;
use std::sync::{Arc, Mutex};
use chrono::prelude::*;
use std::fs::{self, DirBuilder};

const FILENAME: &str = "archive.log";

pub struct Archiver {
    archive_dir: String,
    utc: DateTime<Utc>,
}

impl Archiver {
    pub fn new(archive_dir: &String) -> Result<Arc<Mutex<Archiver>>, io::Error> {
        let archive_dir = archive_dir.clone();

        let archiver = Archiver {
            archive_dir: archive_dir,
            utc: Utc::now(),
        };

        Ok(Arc::new(Mutex::new(archiver)))
    }

    fn current_year(&self) -> i32 {
        self.utc.year()
    }

    fn current_month(&self) -> u32 {
        self.utc.month()
    }

    fn current_day(&self) -> u32{
        self.utc.day()
    }

    fn current_hour(&self) -> u32 {
        self.utc.hour()
    }

    fn current_directory(&self) -> String {
        format!(
            "{}/{}/{}/{}/{}",
            self.archive_dir,
            self.current_year(),
            self.current_month(),
            self.current_day(),
            self.current_hour(),
        )
    }

    fn current_filepath(&self) -> String {
        format!(
            "{}/{}",
            self.current_directory(),
            FILENAME
        )
    }

    pub fn archive(&mut self, line: &str) {
        println!("{}", self.current_directory());

        let path = self.current_directory();

        DirBuilder::new()
            .recursive(true)
            .create(&path).unwrap();

        let mut file = OpenOptions::new()
            .create(true)
            .write(true)
            .append(true)
            .open(self.current_filepath())
            .expect("Couldn't open file for archiving");

        if let Err(e) = writeln!(file, "{}", line) {
            eprintln!("Couldn't write to file: {}", e);
        }
    }
}

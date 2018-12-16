use std::fs::OpenOptions;
use std::io;
use std::io::prelude::*;
use std::sync::{Arc, Mutex};
use chrono::prelude::*;
use std::fs::DirBuilder;

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

    fn current_year(&self) -> String {
        self.utc.format("%y").to_string()
    }

    fn current_month(&self) -> String {
        self.utc.format("%m").to_string()
    }

    fn current_day(&self) -> String {
        self.utc.format("%d").to_string()
    }

    fn current_hour(&self) -> String {
        self.utc.format("%H").to_string()
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

use std::fs::File;
use std::io;
use std::io::prelude::*;
use std::io::BufReader;
use std::io::SeekFrom;
use std::net::TcpStream;
use std::os::unix::fs::MetadataExt;
use std::str::from_utf8;
use std::sync::{Arc, Mutex};
use regex::Regex;

pub struct Forwarder {
    stream_mutex: Arc<Mutex<TcpStream>>,
    filename: String,
    inode: u64,
    pos: u64,
    reader: BufReader<File>,
    finish: bool,
}

impl Forwarder {
    pub fn register(
        stream: Arc<Mutex<TcpStream>>,
        filename: String,
    ) -> Result<Forwarder, io::Error> {
        let f = match File::open(filename.clone()) {
            Err(e) => return Err(e),
            Ok(x) => x,
        };

        let metadata = match f.metadata() {
            Err(e) => return Err(e),
            Ok(x) => x,
        };

        let mut reader = BufReader::new(f);
        let pos = metadata.len();

        reader.seek(SeekFrom::Start(pos)).unwrap();

        Ok(Forwarder {
            stream_mutex: stream,
            filename: filename.split('/').last().unwrap().to_string(),
            inode: metadata.ino(),
            pos: pos,
            reader: reader,
            finish: false,
        })
    }

    pub fn watch(&mut self) {
        loop {
            let mut line = String::new();
            let resp = self.reader.read_line(&mut line);
            let len = match resp {
                Err(e) => {
                    println!("Error: {}", e);
                    continue;
                }
                Ok(len) => len,
            };

            if len > 0 {
                // New line detected
                let line_copy = line.clone();
                let re = Regex::new(r"(\d{4}/\d{2}/\d{2} \d{2}:\d{2}:\d{2})").unwrap();
                let re2 = Regex::new(r"(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})").unwrap();

                for cap in re.captures_iter(&line_copy[..]) {
                    let source = format!("datetime=\"{}\" ", &cap[1]);
                    line.insert_str(0, &source[..]);
                }

                for cap in re2.captures_iter(&line_copy[..]) {
                    let source = format!("datetime=\"{} ", &cap[1]);
                    line.insert_str(0, &source[..]);
                }

                let source = format!("source={} ", self.filename);
                line.insert_str(0, &source[..]);

                self.pos += len as u64;
                self.reader.seek(SeekFrom::Start(self.pos)).unwrap();

                let mut stream = self.stream_mutex.lock().unwrap();
                stream.write(line.trim_end().as_bytes()).unwrap();

                // Sent log data to server, waiting on response
                let mut data = [0 as u8; 2]; // using 2 byte buffer for "OK" response

                match stream.read_exact(&mut data) {
                    Ok(_) => {
                        let text = from_utf8(&data).unwrap();

                        if text != "OK" {
                            println!("Unexpected reply: {}", text);
                        }
                    }
                    Err(e) => {
                        println!("Failed to receive data: {}", e);
                    }
                }

                line.clear();
            } else {
                if self.finish {
                    break;
                }
            }
        }
    }
}

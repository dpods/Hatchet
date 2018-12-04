use std::io;
use std::io::prelude::*;
use std::io::BufReader;
use std::io::SeekFrom;
use std::fs::File;
use std::os::unix::fs::MetadataExt;
use std::net::{TcpStream};
use std::str::from_utf8;

pub struct LogWatcher {
    stream: TcpStream,
    filename: String,
    inode: u64,
    pos: u64,
    reader: BufReader<File>,
    finish: bool
}

impl LogWatcher {
    pub fn register(stream: TcpStream, filename: String) -> Result<LogWatcher, io::Error> {
        let f = match File::open(filename.clone()) {
            Ok(x) => x,
            Err(e) => return Err(e)
        };

        let metadata = match f.metadata() {
            Ok(x) => x,
            Err(e) => return Err(e)
        };

        let mut reader = BufReader::new(f);
        let pos = metadata.len();

        reader.seek(SeekFrom::Start(pos)).unwrap();

        Ok(LogWatcher {
            stream: stream,
            filename: filename,
            inode: metadata.ino(),
            pos: pos,
            reader: reader,
            finish: false
        })
    }

    pub fn watch(&mut self) {
        loop {
            let mut line = String::new();
            let resp = self.reader.read_line(&mut line);
            match resp {
                Ok(len) => {
                    if len > 0 {
                        println!("new line detected");
                        self.pos += len as u64;
                        self.reader.seek(SeekFrom::Start(self.pos)).unwrap();
                        self.stream.write(line.trim_end().as_bytes()).unwrap();
                        println!("Sent line, awaiting reply...");

                        let mut data = [0 as u8; 2]; // using 2 byte buffer for "OK" response
                        match self.stream.read_exact(&mut data) {
                            Ok(_) => {
                                let text = from_utf8(&data).unwrap();
                                if &data == "OK".as_bytes() {
                                    println!("Reply is ok!");
                                } else {
                                    println!("Unexpected reply: {}", text);
                                }
                            },
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
                },
                Err(e) => {
                    println!("Error: {}", e);
                }
            }
        }
    }
}
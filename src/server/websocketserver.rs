use ws::{listen, Message};
use regex::Regex;
use std::fs::File;
use std::io::{BufRead, BufReader};
use stopwatch::{Stopwatch};
use std::str;
use std::sync::Arc;
use server_config::ServerConfig;
use std::path::Path;
use pathfinder::find_paths;

const HOST: &str = "0.0.0.0";

#[derive(Serialize, Deserialize)]
struct Query {
    query: String,
    from: String,
    to: String,
}

pub fn run(config: Arc<ServerConfig>) {
    let addr = format!("{}:{}", HOST, config.websocketserver_port);
    let archive_path = Path::new(&config.archive_path);

    println!("WebsocketServer listening on port {}", config.websocketserver_port);

    listen(addr, |out| {
        move |msg: Message| {
            let sw = Stopwatch::start_new();
            let msg_copy = msg.clone();
            let json = msg_copy.as_text().unwrap();
            let q: Query = serde_json::from_str(json).unwrap();
            let re = Regex::new(&q.query).unwrap();

            const BUFFER_SIZE: usize = 1024 * 16;

            let paths = find_paths(q.from, q.to);

            for path in paths {
                let path_str = format!("{}/{}/archive.log", archive_path.to_str().unwrap(), path);

                let path = Path::new(&path_str);

                if !path.exists() {
                    continue;
                }

                let mut file = try!(File::open(path_str.clone()));
                let mut reader = BufReader::with_capacity(BUFFER_SIZE, file);

                loop {
                    let length = {
                        let buffer = try!(reader.fill_buf());
                        let mut line = str::from_utf8(&buffer).unwrap();

                        // Search entire 16mb buffer for regex match
                        if re.is_match(&line) {
                            // If we have a match, search each individual line for a match and
                            // output to client
                            for line in line.lines() {
                                if re.is_match(&line) {
                                    out.send(line).unwrap();
                                }
                            }
                        }

                        buffer.len()
                    };

                    if length == 0 { break; }

                    reader.consume(length);
                }
            }

            // Let the client know we're done searching
            out.send(format!("done|{}", sw.elapsed_ms()))
        }
    }).unwrap();
}

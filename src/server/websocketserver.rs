use ws::{listen, Message};
use regex::Regex;
use std::fs::File;
use std::io::{BufRead, BufReader};
use std::str;

const HOST: &str = "0.0.0.0";

#[derive(Serialize, Deserialize)]
struct Query {
    query: String,
    from: String,
    to: String,
}

pub fn run(port: u16) {
    let addr = format!("{}:{}", HOST, port);

    println!("WebsocketServer listening on port {}", port);

    listen(addr, |out| {
        move |msg: Message| {
            let msg_copy = msg.clone();
            let json = msg_copy.as_text().unwrap();
            let q: Query = serde_json::from_str(json).unwrap();
            let re = Regex::new(&q.query).unwrap();

            let filenames = vec![
                "./archive.log".to_string(),
                "./archive2.log".to_string(),
                "./archive3.log".to_string(),
                "./access.log".to_string(),
                "./error.log".to_string(),
            ];


            const BUFFER_SIZE: usize = 1024 * 16;

            for filename in filenames.iter() {
                let mut file = try!(File::open(filename));
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
            out.send("done")
        }
    }).unwrap();
}

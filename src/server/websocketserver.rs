use ws::{listen, Message};
use regex::Regex;
use std::fs::File;
use std::io::{BufRead, BufReader};
use std::time::{Duration, SystemTime};

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

            let files = vec![
                "./archive.log".to_string(),
                "./archive2.log".to_string(),
                "./archive3.log".to_string(),
                "./access.log".to_string(),
                "./error.log".to_string(),
            ];


            for file in files.iter() {
                let now = SystemTime::now();
                println!("opening file {}", file);
                let f = File::open(file).unwrap();
                println!("{}", now.elapsed().unwrap().as_secs());
                println!("searching file {}", file);
                for line in BufReader::new(f).lines() {
                    let l = line.unwrap();
                    if re.is_match(&l) {
                        out.send(l).unwrap();
                    }
                }
                println!("{}", now.elapsed().unwrap().as_secs());
            }

            out.send("done")
        }
    }).unwrap();
}

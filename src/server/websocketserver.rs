use ws::listen;

const HOST: &str = "0.0.0.0";

pub fn run(port: u16) {
    let addr = format!("{}:{}", HOST, port);

    println!("WebsocketServer listening on port {}", port);

    listen(addr, |out| {
        move |msg| {
            println!("Received message: {}", msg);

            out.send("log data 1").unwrap();
            out.send("log data 2, plus other log data")
        }
    }).unwrap();
}

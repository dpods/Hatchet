use ws::listen;

const HOST: &str = "0.0.0.0";

pub fn run(port: u16) {
    let addr = format!("{}:{}", HOST, port);

    println!("WebsocketServer listening on port {}", port);

    listen(addr, |out| {
        move |msg| {
            out.send(msg)
        }
    }).unwrap();
}
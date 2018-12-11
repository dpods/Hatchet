extern crate futures;
extern crate hyper;
extern crate tokio_fs;
extern crate tokio_io;

use self::futures::{future, Future};
use hyper::service::service_fn;
use hyper::{Body, Method, Request, Response, Server, StatusCode};
use std::path::Path;

use std::io;

static NOTFOUND: &[u8] = b"Not Found";
static INDEX: &str = "src/public/index.html";

pub fn run(port: u16) {
    let addr = format!("127.0.0.1:{}", port).parse().unwrap();

    let server = Server::bind(&addr)
        .serve(|| service_fn(response_examples))
        .map_err(|e| eprintln!("server error: {}", e));

    println!("WebServer listening on port {}", port);

    hyper::rt::run(server);
}

type ResponseFuture = Box<Future<Item = Response<Body>, Error = io::Error> + Send>;

fn response_examples(req: Request<Body>) -> ResponseFuture {
    println!("requested: {} {}", req.method(), req.uri().path());

    match (req.method(), req.uri().path()) {
        (&Method::GET, "/") => simple_file_send(INDEX),
        _ => {
            let full_path = format!("src/public/{}", req.uri().path());

            // TODO: This should be refactored as it's unsafe but for now it works to continue development
            if Path::new(&*full_path).exists() {
                simple_file_send(&*full_path)
            } else {
                Box::new(future::ok(
                    Response::builder()
                        .status(StatusCode::NOT_FOUND)
                        .body(Body::empty())
                        .unwrap(),
                ))
            }
        }
    }
}

fn simple_file_send(f: &str) -> ResponseFuture {
    // Serve a file by asynchronously reading it entirely into memory.
    // Uses tokio_fs to open file asynchronously, then tokio_io to read into
    // memory asynchronously.
    let filename = f.to_string(); // we need to copy for lifetime issues
    Box::new(
        tokio_fs::file::File::open(filename)
            .and_then(|file| {
                let buf: Vec<u8> = Vec::new();
                tokio_io::io::read_to_end(file, buf)
                    .and_then(|item| Ok(Response::new(item.1.into())))
                    .or_else(|_| {
                        Ok(Response::builder()
                            .status(StatusCode::INTERNAL_SERVER_ERROR)
                            .body(Body::empty())
                            .unwrap())
                    })
            }).or_else(|_| {
                Ok(Response::builder()
                    .status(StatusCode::NOT_FOUND)
                    .body(NOTFOUND.into())
                    .unwrap())
            }),
    )
}

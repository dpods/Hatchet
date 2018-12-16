use chrono::prelude::*;
use chrono::Duration;

pub fn find_paths(from: String, to: String) -> Vec<String> {
    let mut paths: Vec<String> = Vec::new();

    let from_dirs: Vec<u32> = from.split("/")
        .map(|v| v.parse::<u32>().unwrap())
        .collect();

    let to_dirs: Vec<u32> = to.split("/")
        .map(|v| v.parse::<u32>().unwrap())
        .collect();

    let mut from_dt = Utc
        .ymd(from_dirs[0] as i32, from_dirs[1], from_dirs[2])
        .and_hms(from_dirs[3], 0, 0);

    let to_dt = Utc
        .ymd(to_dirs[0] as i32, to_dirs[1], to_dirs[2])
        .and_hms(to_dirs[3], 0, 0);

    while from_dt.format("%Y/%m/%d/%H").to_string() != to_dt.format("%Y/%m/%d/%H").to_string() {
        from_dt = from_dt + Duration::hours(1);
        paths.push(from_dt.format("%Y/%m/%d/%H").to_string());
    }

    paths.push(from_dt.format("%Y/%m/%d/%H").to_string());

    paths
}

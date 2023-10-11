use std::sync::mpsc::channel;
use std::sync::{Arc, Mutex};
use std::thread;
use std::time;
const NUM_THREADS: usize = 2;
const NUM_INCREMENTS: usize = 4;

fn main() {
    let data = Arc::new(Mutex::new(0));
    let (tx, rx) = channel();

    for i in 0..NUM_THREADS {
        let (data, tx) = (Arc::clone(&data), tx.clone());
        thread::spawn(move || {
            println!("Created thread {}", i);
            for ii in 0..NUM_INCREMENTS {
                println!("Thread/loop {}, {}", i, ii);
                let mut data = data.lock().unwrap();
                *data += 1;
                println!("Data: {:?}", *data);
                if (ii % 2 == 0) {
                    let ten_millis = time::Duration::from_millis(1000);
                    thread::sleep(ten_millis);
                }
            }
            tx.send(());
        });
    }

    for _ in 0..NUM_THREADS {
        rx.recv().unwrap();
    }

    println!("{:?}", *data);
}

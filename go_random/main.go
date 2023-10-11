package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	var wg sync.WaitGroup
	ch := make(chan string, 10)

	ch <- "foo"
	wg.Add(1)
	ch <- "bar"
	wg.Add(1)

	go func() {
		i := 0
		for {
			fmt.Println("i am a server")
			time.Sleep(1 * time.Second)
			if i%2 == 0 {
				ch <- fmt.Sprintf("msg %d", i)
			}
			if i%3 == 0 {
				for ii := 0; ii < 50; ii++ {
					ch <- fmt.Sprintf("msg %d %d", i, ii)
				}
			}
			i++
		}
	}()

	go func() {
		for elem := range ch {
			fmt.Println(elem)
			time.Sleep(500 * time.Millisecond)
			// wg.Done()
		}
	}()

	wg.Wait()

	// close(ch)
}

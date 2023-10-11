package main

import "fmt"

// sync
// func main() {
// 	var prints []func()
// 	for i := 1; i <= 3; i++ {
// 		prints = append(prints, func() { fmt.Println(i) })
// 	}
// 	for _, print := range prints {
// 		print()
// 	}
// }

// async
func main() {
	done := make(chan bool)

	values := []string{"a", "b", "c"}
	for _, v := range values {
		go func() {
			fmt.Println(v)
			done <- true
		}()
	}

	// wait for all goroutines to complete before exiting
	for range values {
		<-done
	}
}

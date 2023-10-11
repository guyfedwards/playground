package main

import (
	"fmt"
	"strconv"
)

func main() {
	// var n int32
	// var bss []byte
	// bs := make([]byte, 4)

	bs := []byte(strconv.Itoa(20))
	fmt.Println(bs)
	fmt.Println("bs: %s %s", string(bs), bs)

	// bs = binary.Write()
}

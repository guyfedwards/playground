package main

import (
	"encoding/json"
	"fmt"
	"log"
)

type Segment struct {
	IP []byte `json:"ip"`
}

func main() {
	s := "\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\ufffd\ufffd\ufffd\u0011\ufffd"
	b := []byte("\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\ufffd\ufffd\ufffd\u0011\ufffd")

	se := Segment{IP: b}

	v, err := json.Marshal(se)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(s)
	fmt.Println(b)
	fmt.Println(v)
}

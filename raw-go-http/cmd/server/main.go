package main

import (
	"log"
	hh "tmpserver/internal/handlers"
	rr "tmpserver/internal/router"
)

func main() {
	h := hh.Handlers{}

	r := rr.NewRouter()

	r.Get("/hello", h.Hello())
	r.Post("/hello/{id}", h.PostHello())

	log.Fatal(r.ListenAndServe(":8008"))
}

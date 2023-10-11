package handlers

import (
	"fmt"
	"net/http"
)

type Handlers struct {
	// logger
	// db
}

func (h Handlers) Hello() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "hello\n")
	}
}

func (h Handlers) PostHello() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "posthello\n")
	}
}

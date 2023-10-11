package router

import (
	"fmt"
	"net/http"
	"strings"
	"time"
)

type mainHandler struct {
	router *Router
}

type Router struct {
	handlers map[string]map[string]http.HandlerFunc
}

func NewRouter() *Router {
	return &Router{
		handlers: make(map[string]map[string]http.HandlerFunc),
	}
}

func (r *Router) Get(path string, hf http.HandlerFunc) {
	if r.handlers[path] == nil {
		r.handlers[path] = map[string]http.HandlerFunc{"get": hf}
	} else {
		r.handlers[path]["get"] = hf
	}
}

func (r *Router) Post(path string, hf http.HandlerFunc) {
	if r.handlers[path] == nil {
		r.handlers[path] = map[string]http.HandlerFunc{"post": hf}
	} else {
		r.handlers[path]["post"] = hf
	}
}

func (r *Router) getHandlerForPath(path, method string) http.HandlerFunc {
	h := r.handlers[path][method]

	if h == nil {
		return func(w http.ResponseWriter, r *http.Request) {
			w.WriteHeader(404)
		}
	} else {
		return h
	}
}

func (m mainHandler) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	method := strings.ToLower(req.Method)
	path := req.URL.Path
	var hf http.HandlerFunc

	fmt.Printf("%s  %s\n", method, path)

	switch method {
	case "get":
		hf = m.router.getHandlerForPath(path, method)
	case "post":
		hf = m.router.getHandlerForPath(path, method)
	}

	hf(w, req)
}

func (r *Router) ListenAndServe(addr string) error {
	s := &http.Server{
		Addr:           addr,
		Handler:        mainHandler{router: r},
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}
	return s.ListenAndServe()
}

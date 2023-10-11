package main

import "fmt"

type Tree struct {
	root *Node
}

type Node struct {
	left  *Node
	right *Node
	data  int64
}

func (t *Tree) insert(data int64) {
	if t.root == nil {
		t.root = &Node{data: data, left: nil, right: nil}
	} else {
		t.root.insert(data)
	}
}

func (n *Node) insert(data int64) {
	if n.left == nil {
		n.left = &Node{data: data, left: nil, right: nil}
	} else {
		n.right = &Node{data: data, left: nil, right: nil}
	}
}

func main() {
	t := Tree{}
	t.insert(9)
	t.insert(99)
	t.insert(9999)
	fmt.Printf("%+v\n", t)
}

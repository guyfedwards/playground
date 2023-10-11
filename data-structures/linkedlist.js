class LinkedList {
  constructor () {
    this.id = 0
    this.nodes = []
  }

  insert(data) {
    if (this.nodes.length === 0) {
      const newNode = new Node(null, null, data, this.id)
      this.nodes.push(newNode)
    } else {
      const tail = this.nodes[this.nodes.length - 1]
      const newNode = new Node(tail, null, data, this.id)
      tail.next = newNode
      this.nodes.push(newNode)
    }

    this.id = this.id++
  }
}

class Node {
  constructor (prev, next, data, id) {
    this.prev = prev
    this.next = next
    this.data = data
    this.id = id
  }
}

const ll = new LinkedList()

ll.insert(111)
ll.insert(333)
ll.insert(54)
ll.insert(4389)

console.log(ll.nodes)

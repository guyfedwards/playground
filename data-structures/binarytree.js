class Tree {
  insert(data) {
    if (!this.root) {
       this.root = new Node(null, null, data)
    } else {
      this.root.insert(data)
    }
    return this
  }

  print(node, depth, side) {
    if (!node) {
      return
    }

    if (!side) {
      console.log('M: ', node.data)
    } else {
      console.log(`${new Array(depth).join(' ')}${side}: `, node.data)
    }

    this.print(node.left, depth+2, 'L')
    this.print(node.right, depth+2, 'R')
  }
}

class Node  {
  constructor(left, right, data) {
    this.left = left
    this.right = right
    this.data = data
  }

  insert(data) {
    if (this.data && data <= this.data) {
      if (this.left) {
        this.left.insert(data)
      } else {
        this.left = new Node(null, null, data)
      }
    } else {
      if (this.right) {
        this.right.insert(data)
      } else {
        this.right = new Node(null, null, data)
      }
    }
    return this
  }
}

// remove above
const t = new Tree()
t.insert(100).
    insert(-20).
		insert(-50).
		insert(-15).
		insert(-60).
    insert(50).
		insert(60).
		insert(55).
    insert(85).
		insert(15).
		insert(5).
    insert(-10)

// console.log(print(t.root, 0))
console.log(t.print(t.root, 0))
// Root:  100
//  L:  -20
//    L:  -50
//      L:  -60
//    R:  -15
//      R:  50
//        L:  15
//          L:  5
//            L:  -10
//        R:  60
//          L:  55
//          R:  85

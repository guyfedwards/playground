class Bucket {
  constructor() {
    this.items = []
    this.plugged = false
  }

  add(data) {
    this.items.push(data)
  }

  plug() {
    this.plugged = true
  }

  *drip() {
    while (!this.plugged) {
      yield this.items.shift()
    }
    // if (this.items.length > 0){
    //   yield this.items.shift()
    // }
  }
}

const b = new Bucket()

b.add(1)
b.add(43)
b.add(4);

(async () => {
  for await (const i of b.drip()) {
    console.log(i)
  }
})()

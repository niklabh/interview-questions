class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor () {
    this.head = null
    this.tail = null
  }

  enqueue (data) {
    const temp = new Node(data)
    if (!this.head && !this.tail) {
      this.head = temp
      this.tail = temp

      return
    }

    this.tail.next = temp
    this.tail = temp
  }

  dequeue () {
    if (!this.head) {
      throw new Error('Underflow')
    }

    const temp = this.head

    this.head = this.head.next

    if (!this.head) {
      this.tail = null
    }

    return temp.data
  }

  isEmpty () {
    return !this.head
  }

  traverse (processor) {
    let ptr = this.head

    while (ptr) {
      processor(ptr)
      ptr = ptr.next
    }
  }
}

module.exports = Queue

// if (require.main === module) {
//   const queue = new Queue()

//   queue.enqueue(1)
//   queue.enqueue(2)
//   queue.enqueue(3)
//   queue.enqueue(4)
//   queue.enqueue(5)

//   queue.traverse((node) => {
//     process.stdout.write(`${node.data}->`)
//   })

//   console.log('')

//   console.log(queue.dequeue())
//   console.log(queue.dequeue())
//   console.log(queue.dequeue())

//   queue.traverse((node) => {
//     process.stdout.write(`${node.data}->`)
//   })

//   console.log(queue.dequeue())
//   console.log(queue.dequeue())
// }

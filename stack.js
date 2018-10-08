class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.head = null
  }

  push(data) {
    const temp = new Node(data)
    temp.next = this.head
    this.head = temp
  }

  pop() {
    if (!this.head) {
      throw new Error('Underflow!')
    }
    const data = this.head.data
    this.head = this.head.next
    return data
  }

  peek() {
    if (!this.head) {
      throw new Error('Underflow!')
    }
    return this.head.data
  }

  isEmpty() {
    return !this.head
  }
}

module.exports = Stack

if (require.main === module) {
  const stack = new Stack()

  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)

  console.log('pop', stack.pop())
  console.log('pop', stack.pop())
  console.log('peek', stack.peek())
  console.log('peek', stack.peek())
  console.log('pop', stack.pop())
  console.log('peek', stack.peek())
  console.log('pop', stack.pop())
  console.log('pop', stack.pop())
}

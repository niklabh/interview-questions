const Queue = require('./queue')

const max = (a, b) => (a > b ? a : b)
const leftpad = (str, pads, ch) => {
  for (let i = 0; i < pads; i++) {
    str = ch + str
  }
  return str
}

class Node {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor () {
    this.head = null
  }

  static preOrder (head, traverse) {
    if (!head) { return }

    traverse(head.data)

    this.preOrder(head.left, traverse)
    this.preOrder(head.right, traverse)
  }

  static postOrder (head, traverse) {
    if (!head) { return }

    this.postOrder(head.left, traverse)
    this.postOrder(head.right, traverse)

    traverse(head.data)
  }

  static inOrder (head, traverse) {
    if (!head) { return }

    this.inOrder(head.left, traverse)
    traverse(head.data)
    this.inOrder(head.right, traverse)
  }

  static levelOrder (head, traverse) {
    if (!head) { return }

    const queue = new Queue()

    queue.enqueue(head)

    while (!queue.isEmpty()) {
      const current = queue.dequeue()

      traverse(current.data)

      if (current.left) {
        queue.enqueue(current.left)
      }

      if (current.right) {
        queue.enqueue(current.right)
      }
    }
  }

  static height (head) {
    if (!head) {
      return 0
    }

    return max(this.height(head.left), this.height(head.right)) + 1
  }

  static mirror (head) {
    if (!head) {
      return
    }

    this.mirror(head.left)
    this.mirror(head.right)

    const temp = head.left
    head.left = head.right
    head.right = temp
  }

  static isBst (head) {
    let isBst = true
    let prev = -Infinity

    Tree.inOrder(head, (data) => {
      if (data < prev) {
        isBst = false
      }

      prev = data
    })

    return isBst
  }

  static print (head) {
    const data = []

    function level (head) {
      if (!head) { return }

      const queue = new Queue()

      head.height = 0
      queue.enqueue(head)

      while (!queue.isEmpty()) {
        const current = queue.dequeue()

        data[current.height] = data[current.height] || []
        data[current.height].push(current.data)

        if (current.left) {
          current.left.height = current.height + 1
          queue.enqueue(current.left)
        }

        if (current.right) {
          current.right.height = current.height + 1
          queue.enqueue(current.right)
        }
      }
    }

    const height = Tree.height(head)

    level(head)

    console.log(data.map((level, i) => leftpad(level.join(' '), height - i, ' ')).join('\n'))
  }

  static maxSumPath (head) {
    let maxSum = -Infinity
    const path = []

    function traverse (head, sum, height) {
      if (!head) {
        if (sum > maxSum) {
          maxSum = sum
        }

        return
      }

      path[height] = head.data

      traverse(head.left, sum + head.data, height + 1)
      traverse(head.right, sum + head.data, height + 1)
    }

    traverse(head, 0, 0)

    return {
      maxSum, path
    }
  }
}

const tree = new Tree()

tree.head = new Node(1)
tree.head.left = new Node(2)
tree.head.right = new Node(3)
tree.head.left.left = new Node(4)
tree.head.left.right = new Node(5)
tree.head.right.left = new Node(6)
tree.head.right.right = new Node(7)

console.log('preorder:')
Tree.preOrder(tree.head, (node) => console.log(`${node} `))

console.log('postorder:')
Tree.postOrder(tree.head, (node) => console.log(`${node} `))

console.log('inorder:')
Tree.inOrder(tree.head, (node) => console.log(`${node} `))

console.log('levelorder:')
Tree.levelOrder(tree.head, (node) => console.log(`${node} `))

console.log('height:' + Tree.height(tree.head))

// Tree.mirror(tree.head)

// console.log('levelorder mirror:')
// Tree.levelOrder(tree.head, (node) => console.log(`${node} `))

const bst = new Tree()

bst.head = new Node(2)
bst.head.left = new Node(1)
bst.head.right = new Node(3)

console.log('inorder bst:')
Tree.inOrder(bst.head, (node) => console.log(`${node}`))

console.log('isBst:')
console.log(Tree.isBst(bst.head))

Tree.print(tree.head)

console.log(Tree.maxSumPath(tree.head))

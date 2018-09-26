class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

const arrayToLL = (arr) => {
  let ptr = new Node(arr[0])
  let head = ptr

  for (let i = 1; i < arr.length; i++) {
    ptr.next = new Node(arr[i])
    ptr = ptr.next
  }

  return head
}

const print = (head) => {
  let ptr = head
  let str = ''
  while (ptr) {
    str += `${ptr.data}->`
    ptr = ptr.next
  }
  console.log(str)
}

const reverse = (head) => {
  let prev
  let curr = head
  let next

  if (!curr || !curr.next) {
    return curr
  }

  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}

print(reverse(arrayToLL([1, 2, 3, 4, 5, 6])))

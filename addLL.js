/**
 * Linked List Node
 * @constructor {Number} data: single digit int
 */
class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

/**
 * arrayToLL
 * @param {Array} arr: array of single digit int
 */
const arrayToLL = (arr) => {
  let ptr = new Node(arr[0])
  let head = ptr

  for (let i = 1; i < arr.length; i++) {
    ptr.next = new Node(arr[i])
    ptr = ptr.next
  }

  return head
}

/**
 * print
 * @param {pointer} head: head of linked list
 */
const print = (head) => {
  let ptr = head
  let str = ''
  while (ptr) {
    str += `${ptr.data}->`
    ptr = ptr.next
  }
  console.log(str)
}

/**
 * addReversed
 * add two linked list assumed to be from least significant digit to most significant digit
 *
 * @param {pointer} head1
 * @param {pointer} head2
 */
const addReversed = (head1, head2) => {
  let carry = 0
  let curr1 = head1
  let curr2 = head2
  let sum
  let head
  let ptr
  let tmp

  while (curr1 || curr2) {
    sum = (curr1 ? curr1.data : 0) + (curr2 ? curr2.data : 0) + carry
    tmp = new Node(sum % 10)
    if (ptr) {
      ptr.next = tmp
      ptr = ptr.next
    } else {
      head = tmp
      ptr = head
    }
    carry = sum > 9 ? 1 : 0

    curr1 = curr1 && curr1.next
    curr2 = curr2 && curr2.next
  }

  if (carry) {
    ptr.next = new Node(carry)
  }

  return head
}

/**
 * reverse
 * reverse a linked list
 *
 * @param {pointer} head
 */
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

/**
 * add
 * Add two linked list
 *
 * @param {*} head1
 * @param {*} head2
 */
const add = (head1, head2) => {
  const reverse1 = reverse(head1)
  const reverse2 = reverse(head2)

  return reverse(addReversed(reverse1, reverse2))
}

const l1 = arrayToLL([3, 7, 8, 9])
const l2 = arrayToLL([2, 1, 3, 6, 7, 9])

print(add(l1, l2))

class Stack {
  constructor() {
    this._size = 0
    this.head = null
  }

  size() {
    return this._size
  }

  push(value) {
    const node = { value, next: this.head }
    this.head = node
    this._size++
  }

  pop() {
    if (this.head == null) {
      throw new Error('Stack is empty')
    }
    const node = this.head
    this.head = this.next
    this._size--
    return node.value
  }

  peek() {
    if (this.head == null) {
      throw new Error('Stack is empty')
    }
    return this.head.value
  }
}

module.exports = Stack

const Stack = require('./stack')

// * TDD
// * 테스트 케이스 하나 작성 -> 구현 -> 하나 작성 -> 구현

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  it('is created empty', () => {
    expect(stack.size()).toBe(0)
  })

  it('allows to push item', () => {
    stack.push('foo')
    expect(stack.size()).toBe(1)
  })

  describe('pop', () => {
    it('throws an error if stack is empty', () => {
      expect(() => {
        stack.pop()
      }).toThrow('Stack is empty')
    })

    it('returns the last pushed item and return', () => {
      stack.push('foo')
      stack.push('bar')
      expect(stack.pop()).toBe('bar')
      expect(stack.size()).toBe(1)
    })
  })

  // 엿보기
  describe('peek', () => {
    it('throws an error if stack is empty', () => {
      // * 실행 시점의 권한을 Jest에게 주려면 콜백으로 작성!
      expect(() => {
        stack.peek()
      }).toThrow('Stack is empty')
    })

    it('returns the last pushed item but keeps it in the stack', () => {
      stack.push('foo')
      stack.push('bar')
      expect(stack.peek()).toBe('bar')
      expect(stack.size()).toBe(2)
    })
  })
})

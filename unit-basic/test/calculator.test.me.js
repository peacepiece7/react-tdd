const Calculator = require('../calculator')

const SET = 'set'
const CLEAR = 'clear'
const ADD = 'add'
const SUBTRACT = 'subtract'
const MULTIPLY = 'multiply'
const DIVIE = 'divide'

const TEST_CASE_NUMBER = 999

function testArange(num, cb) {
  const arange = []
  for (let i = 0; i < num; i++) {
    // HACK : 랜덤 넘버 생성은 라이브러리 쓰자
    const randomValue = cb()
    arange.push(randomValue)
  }
  return arange
}

test(SET, () => {
  const calculator = new Calculator()
  const arange = testArange(TEST_CASE_NUMBER, () =>
    parseInt(Math.floor(Math.random() * Math.random()))
  )
  for (let i = 0; i < arange.length; i++) {
    calculator.set(arange[i])
    expect(calculator.value).toBe(arange[i])
  }
})

test(CLEAR, () => {
  const calculator = new Calculator()
  const arange = testArange(TEST_CASE_NUMBER, () =>
    parseInt(Math.floor(Math.random() * Math.random()))
  )
  for (let i = 0; i < arange.length; i++) {
    calculator.set(arange[i])
    calculator.clear()
    expect(calculator.value).toBe(0)
  }
})

test(ADD, () => {
  const calculator = new Calculator()
  const arange = testArange(TEST_CASE_NUMBER, () =>
    parseInt(Math.floor(Math.random() * Math.random()))
  )
  for (let i = 0; i < arange.length; i++) {
    const prevValue = calculator.value
    calculator.add(arange[i])
    expect(calculator.value).toBeGreaterThanOrEqual(prevValue)
  }
})

test(SUBTRACT, () => {
  const calculator = new Calculator()
  const arange = testArange(TEST_CASE_NUMBER, () =>
    parseInt(Math.floor(Math.random() * Math.random()))
  )
  for (let i = 0; i < arange.length; i++) {
    const prevValue = calculator.value
    calculator.subtract(arange[i])
    expect(calculator.value).toBeLessThanOrEqual(prevValue)
  }
})

test(MULTIPLY, () => {
  const calculator = new Calculator()
  const arange = testArange(TEST_CASE_NUMBER, () =>
    parseInt(Math.floor(Math.random() * Math.random()))
  )
  for (let i = 0; i < arange.length; i++) {
    const prevValue = calculator.value
    calculator.multiply(arange[i])
    expect(calculator.value).toBeLessThanOrEqual(prevValue * arange[i])
  }
})

const Calculator = require('../calculator')
const calc = new Calculator()

// this를 return한다면 메서드 체이닝으로 간편하게 가능
test('set function', () => {
  expect(calc.set(9).value).toBe(9)
})

test('clear function', () => {
  expect(calc.clear().value).toBe(0)
})

test('add function', () => {
  expect(calc.set(1).add(2).value).toBe(3)
})

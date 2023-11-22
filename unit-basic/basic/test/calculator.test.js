const Calculator = require('../calculator')
// API keyword
// it : `describe` 하고있는 key의 3인칭
// beforeEach, afterEach, beforeAll, afterAll : 테스트 코드의 독립성을 보장하기 위한 기능들

describe('Calculator', () => {
  let cal

  /**
   * @see https://jestjs.io/docs/setup-teardown
   */
  beforeEach(() => {
    // 각각의 테스트 코드는 독립적이어야 함
    cal = new Calculator()
  })

  it('inits with 0', () => {
    expect(cal.value).toBe(0)
  })

  it('sets', () => {
    cal.set(9)
    expect(cal.value).toBe(9)
  })

  it('clear', () => {
    cal.set(9)
    cal.clear()
    expect(cal.value).toBe(0)
  })

  it('adds', () => {
    cal.set(1)
    cal.add(2)
    expect(cal.value).toBe(3)
  })

  it('Add should throw an error if value is greater than 100', () => {
    expect(() => {
      cal.add(101)
    }).toThrow('Value can not be greater than 100')
    // .toThrow(/Value can not be greater than 100/)
    // .toThrow(Error)
    // Error, RegExp, String 등 다양한 방법으로 Throw
  })

  it('subtracts', () => {
    cal.set(1)
    cal.subtract(2)
    expect(cal.value).toBe(-1)
  })

  it('multiplies', () => {
    cal.set(1)
    cal.multiply(2)
    expect(cal.value).toBe(2)
  })

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0)
      expect(cal.value).toBe(NaN)
    })

    it('1 / 0 === Infinity', () => {
      cal.set(1)
      cal.divide(0)
      expect(cal.value).toBe(Infinity)
    })

    it('4 / 4 === 1', () => {
      cal.set(4)
      cal.divide(4)
      expect(cal.value).toBe(1)
    })
  })
})

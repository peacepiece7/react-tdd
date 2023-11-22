const check = require('../check')

describe('check', () => {
  let onSuccess
  let onFail

  beforeEach(() => {
    onSuccess = jest.fn()
    onFail = jest.fn()
  })

  it('calls onSuccess when predicate returns true', () => {
    check(() => true, onSuccess, onFail)

    /**
     * console.log(onSuccess)
     * expect(onSuccess.mock.calls.length).toBe(1)
     * expect(onSuccess.mock.calls[0][0]).toBe('yes')
     * expect(onFail.mock.calls.length).toBe(0)
     * @see https://jestjs.io/docs/mock-functions#using-a-mock-function
     */

    // 위 코드를 간소화한 `toHaveBeenCalled` matcher
    // 셋 중 하나만 사용해도 된다.
    expect(onSuccess).toHaveBeenCalled()
    expect(onSuccess).toHaveBeenCalledTimes(1)
    expect(onSuccess).toHaveBeenCalledWith('yes')

    expect(onFail).not.toHaveBeenCalled()
  })

  it('calls onFali when predicate returns false', () => {
    check(() => false, onSuccess, onFail)

    expect(onFail).toHaveBeenCalledTimes(1)
    expect(onFail).toHaveBeenCalledWith('no')
    expect(onSuccess).toHaveBeenCalledTimes(0)
  })
})

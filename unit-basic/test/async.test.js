const fetchProduct = require('../async')

describe('Async', () => {
  /**
   * @see https://jestjs.io/docs/asynchronous#callbacks
   * @description done은 선호되진 않음, 메모리 누수를 막기 위해(timeout error) done 콜백이 있음
   */
  it('async - done', (done) => {
    fetchProduct().then((data) => {
      expect(data).toEqual({ item: 'Milk', price: 200 })
      done()
    })
  })

  /**
   * @see https://jestjs.io/docs/asynchronous#promises
   */
  it('async - return', () => {
    return fetchProduct().then((data) => {
      expect(data).toEqual({ item: 'Milk', price: 200 })
    })
  })

  /**
   * @see https://jestjs.io/docs/asynchronous#asyncawait
   */
  it('async - await', async () => {
    const product = await fetchProduct()
    expect(product).toEqual({ item: 'Milk', price: 200 })
  })

  /**
   * @see https://jestjs.io/docs/asynchronous#asyncawait
   */
  it('async - resolves', async () => {
    await expect(fetchProduct()).resolves.toEqual({ item: 'Milk', price: 200 })
  })
  it('async - reject', async () => {
    await expect(fetchProduct('error')).rejects.toBe('network error')
    //  or expect.assertions(1); try/catch
  })
})

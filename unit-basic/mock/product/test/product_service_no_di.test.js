// WANNING : Bad example

// ESM ISSUE (no-babel) : https://github.com/jestjs/jest/issues/10025
// 런던파, 고전파 단위 테스트 https://kukim.tistory.com/107
const ProductService = require('../product_service_no_di.js')
const ProductClient = require('../product_client.js')

// jest.mock을 사용하면 모듈을 모킹할 수 있다.
jest.mock('../product_client.js')

// avaliable의 값만 비교, 네트워크, 의존성을 제외시킬 수 있음 이는 "단위 테스트" 때문
describe('Product service', () => {
  // * 테스트 코드는 네트워크나 다른 의존성으로 인한 변수가 존재하지 않아야 한다.
  // * ProductClient.fetchItems를 fetchItems로 대체
  const fetchItems = jest.fn(async () => [
    { item: 'Milk', available: true },
    { item: 'Banana', available: false },
  ])

  // * `ProductClient.fetchItems`를 `ProductService.mockImplementation` cb이 반환한 fetchItems로 대체
  ProductClient.mockImplementation(() => {
    return {
      fetchItems: fetchItems,
    }
  })

  let productService
  beforeEach(() => {
    productService = new ProductService()
    fetchItems.mockClear()
    ProductClient.mockClear()
  })

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems() // * fetchItems는 네트워크를 사용하지 않고 mock으로 대체됨
    expect(items.length).toBe(1)
    expect(items).toEqual([{ item: 'Milk', available: true }])
  })
  it('test', async () => {
    await productService.fetchAvailableItems()
    // jest.config.js에 clearMocks를 true로 하거나, test 전에 clearMocks를 호출해야 한다.
    expect(fetchItems).toHaveBeenCalledTimes(1)
  })
})

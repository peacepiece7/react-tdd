const ProductService = require('../product_service.js')
const StubProductClient = require('./stub_product_clinet.js')

describe('Product service - stub', () => {
  let productService

  beforeEach(() => {
    productService = new ProductService(new StubProductClient())
  })

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems()
    expect(items.length).toBe(1)
    expect(items).toEqual([{ item: 'Milk', available: true }])
  })
})

// 해당 코드는 테스트를 위한 스텁 코드로 번들링시 제외되어야 합니다.

class StubProductClient {
  async fetchItems() {
    return [
      { item: 'Milk', available: true },
      { item: 'Banana', available: false },
    ]
  }
}

module.exports = StubProductClient

const add = require('../add')

/**
 * Creates a test closure.
 * @param name The name of your test
 * @param fn The function for your test
 * @param timeout The timeout for an async function test
 */
test('add', () => {
  expect(add(1, 2)).toBe(3)
})

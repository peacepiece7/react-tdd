// * 1. 여러번 호출해도 한 번만 호출 되는지 테스트

// * Mock => 행동을 테스트
// * Stub => 결과물을 테스트

const UserService = require('../user_service')
const UserClient = require('../user_client')

jest.mock('../user_client')

describe('UserService', () => {
  const login = jest.fn(async () => 'success')
  UserClient.mockImplementation(() => {
    return {
      login,
    }
  })
  let userService

  beforeEach(() => {
    userService = new UserService(new UserClient())
    login.mockClear()
    UserClient.mockClear()
  })

  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('foo', 'bar')
    expect(login.mock.calls.length).toBe(1)
    // expect(login).toHaveBeenCalledTimes(1)
  })

  it('calls not call login() on UserClient again if already logged in', async () => {
    await userService.login('foo', 'bar')
    await userService.login('foo', 'bar')

    expect(login.mock.calls.length).toBe(1)
  })
})

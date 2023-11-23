class UserService {
  constructor(userClient) {
    this.userClient = userClient
  }

  login(id, password) {
    if (!this.isLogedIn) {
      return this.userClient
        .login(id, password)
        .then((data) => ((this.isLogedIn = true), data))
    }
  }
}

module.exports = UserService

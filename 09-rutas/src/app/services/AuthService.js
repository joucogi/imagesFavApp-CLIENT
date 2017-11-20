const userData = require('../data/user.json')

class AuthService {
  constructor () {
    this.user = userData
  }
}

export default AuthService

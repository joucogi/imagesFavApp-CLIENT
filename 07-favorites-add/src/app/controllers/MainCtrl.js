class MainCtrl {
  constructor (DataService, AuthService) {
    this.data = DataService
    this.auth = AuthService
  }
}

MainCtrl.$inject = ['DataService', 'AuthService']

export default MainCtrl

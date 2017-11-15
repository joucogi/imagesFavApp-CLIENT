class MainCtrl {
  constructor (DataService, AuthService) {
    this.data = DataService
    this.auth = AuthService
  }

  handleLike (e, idFavorite) {
    e.preventDefault()
    this.data.addFavorite(idFavorite)
  }
}

MainCtrl.$inject = ['DataService', 'AuthService']

export default MainCtrl

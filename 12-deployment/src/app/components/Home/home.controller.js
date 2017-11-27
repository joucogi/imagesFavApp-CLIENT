class HomeCtrl {
  constructor (DataService) {
    this.data = DataService
    this.handleClickLike = this.handleClickLike.bind(this)
  }

  handleClickLike (idFavorite) {
    this.data.addFavorite(idFavorite)
  }
}

HomeCtrl.$inject = ['DataService']

export default HomeCtrl

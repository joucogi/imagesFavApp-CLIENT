class HomeCtrl {
  constructor (DataService) {
    this.data = DataService
  }

  handleClickLike (idFavorite) {
    this.data.addFavorite(idFavorite)
  }
}

HomeCtrl.$inject = ['DataService']

export default HomeCtrl

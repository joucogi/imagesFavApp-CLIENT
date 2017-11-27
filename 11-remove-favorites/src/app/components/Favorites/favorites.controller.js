class FavoritesCtrl {
  constructor (DataService) {
    this.data = DataService
    this.handleClickDislike = this.handleClickDislike.bind(this)
  }
  handleClickDislike (idFavorite) {
    this.data.removeFavorite(idFavorite)
  }
}

FavoritesCtrl.$inject = ['DataService']

export default FavoritesCtrl

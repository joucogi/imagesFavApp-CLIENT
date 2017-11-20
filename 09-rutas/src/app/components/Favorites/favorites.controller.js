class FavoritesCtrl {
  constructor (DataService) {
    this.data = DataService
  }
}

FavoritesCtrl.$inject = ['DataService']

export default FavoritesCtrl

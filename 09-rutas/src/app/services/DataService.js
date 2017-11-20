class DataService {
  constructor ($http, AuthService) {
    this.$http = $http
    this.AuthService = AuthService

  }

  getPhotos () {
    this.$http
      .get(API_URL + '/search/' + this.query)
      .then(response => response.data.results)
      .then(photos => {
        this.photos = photos
      })
  }

  addFavorite (idFavorite) {
    const user_id = this.AuthService.user.sub
    console.log(idFavorite, user_id)
    this.$http
      .post(API_URL + '/favorites/' + idFavorite, { user_id })
      .then(response => response.data.msg)
      .then(msg => {
        console.log(msg)
        this.getFavorites()
      })
  }

  getFavorites () {
    const user_id = this.AuthService.user.sub
    var config = {
      headers:  { user_id }
    }

    this.$http
      .get(API_URL + '/favorites', config)
      .then(response => response.data)
      .then(favorites => {
        this.favorites = favorites
      })
  }
}

DataService.$inject = ['$http', 'AuthService']

export default DataService

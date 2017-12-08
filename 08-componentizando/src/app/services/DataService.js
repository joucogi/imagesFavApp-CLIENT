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
      .post(API_URL + '/favorite/' + idFavorite, { user_id })
      .then(response => response.data.msg)
      .then(console.log)
  }
}

DataService.$inject = ['$http', 'AuthService']

export default DataService

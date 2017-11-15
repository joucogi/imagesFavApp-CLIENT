class DataService {
  constructor ($http, AuthService) {
    this.$http = $http
    this.AuthService = AuthService
  }

  getPhotos () {
    this.$http
      .get('http://localhost:3000/search/' + this.query)
      .then(response => response.data.results)
      .then(photos => {
        this.photos = photos
      })
  }

  addFavorite (idFavorite) {
    const user_id = this.AuthService.user.sub
    console.log(idFavorite, user_id)
    this.$http
      .post('http://localhost:3000/favorites/' + idFavorite, { user_id })
      .then(response => response.data.msg)
      .then(console.log)
  }
}

DataService.$inject = ['$http', 'AuthService']

export default DataService

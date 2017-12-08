import 'babel-polyfill'

class DataService {
  constructor ($http, AuthService) {
    this.$http = $http
    this.AuthService = AuthService
  }

  async getPhotos () {
    const url = 'http://localhost:3000/search/' + this.query
    const { data: { results: photos }} = await this.$http.get(url)
    this.photos = photos
  }

  async addFavorite (idFavorite) {
    const user_id = this.AuthService.user.sub
    console.log(idFavorite, user_id)
    const url = 'http://localhost:3000/favorite/' + idFavorite
    const data = { user_id }
    const { data: msg } = await this.$http.post(url, data)
    console.log(msg)
  }
}

DataService.$inject = ['$http', 'AuthService']

export default DataService

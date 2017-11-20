import 'babel-polyfill'

class DataService {
  constructor ($http, AuthService) {
    this.$http = $http
    this.AuthService = AuthService
  }

  async getPhotos () {
    const url = 'https://03-server-proxy-api-unsplash-vdtemyvvjy.now.sh/search/' + this.query
    const { data: { results: photos }} = await this.$http.get(url)
    this.photos = photos
  }

  async addFavorite (idFavorite) {
    const user_id = this.AuthService.user.sub
    console.log(idFavorite, user_id)
    const url = 'https://03-server-proxy-api-unsplash-vdtemyvvjy.now.sh/favorites/' + idFavorite
    const data = { user_id }
    const { data: msg } = await this.$http.post(url, data)
    console.log(msg)
  }
}

DataService.$inject = ['$http', 'AuthService']

export default DataService

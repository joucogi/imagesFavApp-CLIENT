class DataService {
  constructor ($http) {
    this.$http = $http
  }

  getPhotos () {
    this.$http
      .get('http://localhost:3000/search/' + this.query)
      .then(response => response.data.results)
      .then(photos => {
        this.photos = photos
      })
  }
}

DataService.$inject = ['$http']

export default DataService

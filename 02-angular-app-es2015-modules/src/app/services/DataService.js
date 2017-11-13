class DataService {
  constructor ($http) {
    this.$http = $http
  }

  getPhotos () {
    this.$http
      .get('/data/photos.json')
      .then(response => response.data.results)
      .then(photos => {
        this.photos = photos
      })
  }
}

DataService.$inject = ['$http']

export default DataService

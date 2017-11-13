class MainCtrl {
  constructor ($http) {
    this.$http = $http
    this.getPhotos()
  }

  getPhotos () {
    this.$http
      .get('./data/photos.json')
      .then(response => response.data.results)
      .then(photos => {
        this.photos = photos
      })
  }
}

MainCtrl.$inject = ['$http']

export default MainCtrl

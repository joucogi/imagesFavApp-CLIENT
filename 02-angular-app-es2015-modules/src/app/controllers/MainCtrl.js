class MainCtrl {
  constructor (DataService) {
    this.data = DataService
  }
}

MainCtrl.$inject = ['DataService']

export default MainCtrl

import angular from 'angular'
import angularGrid from 'angulargrid'

import './css/styles.css'

import MainCtrl from './controllers/MainCtrl'
import DataService from './services/DataService'

const MODULE_NAME = 'ImagesFavApp'

angular
  .module(MODULE_NAME, [angularGrid])
  .service('DataService', DataService)
  .controller('MainCtrl', MainCtrl)
  .run(DataService => {
    DataService.getPhotos()
  })

export default MODULE_NAME

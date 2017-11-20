import angular from 'angular'
import angularGrid from 'angulargrid'

import './css/styles.css'

import MainCtrl from './controllers/MainCtrl'

import DataService from './services/DataService'
import AuthService from './services/AuthService'

const MODULE_NAME = 'ImagesFavApp'

angular
  .module(MODULE_NAME, [angularGrid])
  .service('AuthService', AuthService)
  .service('DataService', DataService)
  .controller('MainCtrl', MainCtrl)

export default MODULE_NAME

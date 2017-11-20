import angular from 'angular'
import angularGrid from 'angulargrid'

import './css/styles.css'

import MainCtrl from './controllers/MainCtrl'

import DataService from './services/DataService'
import AuthService from './services/AuthService'

import NavbarComponent from './components/Navbar'
import GridComponent from './components/Grid'
import HomeComponent from './components/Home'

const MODULE_NAME = 'ImagesFavApp'

angular
  .module(MODULE_NAME, [
    NavbarComponent,
    GridComponent,
    HomeComponent,
    angularGrid
  ])
  .service('AuthService', AuthService)
  .service('DataService', DataService)
  .controller('MainCtrl', MainCtrl)

export default MODULE_NAME

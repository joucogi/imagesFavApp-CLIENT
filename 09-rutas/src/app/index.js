import angular from 'angular'
import angularGrid from 'angulargrid'
import ngRoute from 'angular-route'

import './css/styles.css'

import DataService from './services/DataService'
import AuthService from './services/AuthService'

import NavbarComponent from './components/Navbar'
import GridComponent from './components/Grid'
import HomeComponent from './components/Home'
import FavoritesComponent from './components/Favorites'

const MODULE_NAME = 'ImagesFavApp'

angular
  .module(MODULE_NAME, [
    ngRoute,
    angularGrid,
    NavbarComponent,
    GridComponent,
    HomeComponent,
    FavoritesComponent   
  ])
  .service('AuthService', AuthService)
  .service('DataService', DataService)
  .config( function($routeProvider) {
    $routeProvider
      .when('/', { template: '<home></home>' })
      .when('/favorites', { template: '<favorites></favorites>' })
  })
  .run( function(DataService) {
    DataService.getFavorites()
  })

export default MODULE_NAME

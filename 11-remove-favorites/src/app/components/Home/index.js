
import angular from 'angular';

import "./home.styles.css"
import HomeCtrl from './home.controller'
import HomeTpl from './home.template.html'

const MODULE_NAME = 'home.component';

let HomeComponent = {
  template: HomeTpl, 
  controller: HomeCtrl,
  controllerAs: 'home'
}

angular.module(MODULE_NAME, [])
  .controller('HomeCtrl', HomeCtrl)
  .component('home', HomeComponent)

export default MODULE_NAME
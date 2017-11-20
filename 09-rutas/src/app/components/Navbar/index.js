
import angular from 'angular';

import "./navbar.styles.css"
import NavbarCtrl from './navbar.controller'
import NavbarTpl from './navbar.template.html'

const MODULE_NAME = 'navbar.component';

let NavbarComponent = {
  template: NavbarTpl, 
  controller: NavbarCtrl,
  controllerAs: 'navbar'
}

angular.module(MODULE_NAME, [])
  .controller('NavbarCtrl', NavbarCtrl)
  .component('navbar', NavbarComponent)

export default MODULE_NAME
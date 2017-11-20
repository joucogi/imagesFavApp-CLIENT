import angular from 'angular';

import "./favorites.styles.css"
import FavCtrl from './favorites.controller'
import FavTpl from './favorites.template.html'

const MODULE_NAME = 'favorites.component';

let FavComponent = {
  template: FavTpl, 
  controller: FavCtrl,
  controllerAs: 'fav'
}

angular.module(MODULE_NAME, [])
  .controller('FavCtrl', FavCtrl)
  .component('favorites', FavComponent)

export default MODULE_NAME
import angular from 'angular';

import "./grid.styles.css"
import GridTpl from './grid.template.html'

const MODULE_NAME = 'grid.component';

let GridComponent = {
  template: GridTpl,
  controllerAs: 'grid',
  bindings: {
    photos: '<',
    onClickLike: '='
  }
}

angular.module(MODULE_NAME, [])
  .component('grid', GridComponent)

export default MODULE_NAME
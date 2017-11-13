import angular from 'angular'
import angularGrid from 'angulargrid'

import './css/styles.css'

import MainCtrl from './controllers/MainCtrl'

const MODULE_NAME = 'ImagesFavApp'

angular.module(MODULE_NAME, [angularGrid]).controller('MainCtrl', MainCtrl)

export default MODULE_NAME

# Componentizando

## Estructura componente `navbar`

```
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
```

````
import angular from 'angular'

import './grid.styles.css'
import GridTpl from './grid.template.html'

const MODULE_NAME = 'grid.component'

let GridComponent = {
  template: GridTpl,
  controllerAs: 'grid',
  bindings: {
    photos: '<',
    onInfiniteScroll: '=',
    onClickLike: '=',
    onClickDislike: '='
  }
}

angular.module(MODULE_NAME, []).component('grid', GridComponent)

export default MODULE_NAME
````

## Recursos 

- https://carlosazaustre.es/desarrollo-por-componentes-con-angular-1-5-con-es6-es2015/
- http://blog.krawaller.se/posts/dissecting-bindings-in-angularjs/
- https://toddmotto.com/exploring-the-angular-1-5-component-method/

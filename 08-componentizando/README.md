# Componentizando: Navbar

En esta lección crearemos el componente Navbar 

![navbar](./md_img/navbar.png)

## Creando el componente `navbar`

Aplicamos esta estructura tal y como explicamos en el video

**`components/Navbar/index.js`**
```
import angular from 'angular';

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

El controlador queda así:

**`components/Navbar/navbar.controller.js`**
```
class NavbarCtrl {
  constructor (AuthService) {
    this.auth = AuthService
  }  
}

NavbarCtrl.$inject = ['AuthService']

export default NavbarCtrl
```

Despues de esto modificamos el html para que se ajuste al nuevo controlador, cargamos la dependencia en el index principal y con todo esto hecho ya estamos listos para usar el componente...

```
  <navbar></navbar>
```

------------

# Componentizando: Grid y Home

En esta lección crearemos los componentes Grid y Home

![grid](./md_img/grid.png)

## Creando el componente `grid`

Aplicamos esta estructura tal y como explicamos en el video

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
    onClickLike: '='
  }
}

angular.module(MODULE_NAME, []).component('grid', GridComponent)

export default MODULE_NAME
````

En el caso del componente `grid` no hace falta declarar controlador ya que todo lo que necesite se le va a pasar por atributos

En el html cambiamos el marcado para que haga referencia a la instancia _grid_

```
<ul class="dynamic-grid" angular-grid="grid.photos" grid-width="300" gutter-size="10" ag-id="gallery">
  <li data-ng-repeat="photo in grid.photos" class="grid">
    ...
    <a ng-click="grid.onClickLike(photo.id)" target="_blank" class="btn btn-light like">
      <span class="oi oi-heart"></span>
    </a>
  </li>
</ul>
```

## Creando el componente `home`

La estructura de este componente es muy parecida a la del componente `navbar` tal y como explicamos en el video

El controlador queda así:

**`components/Home/home.controller.js`**
```
class HomeCtrl {
  constructor (DataService) {
    this.data = DataService
  }

  handleClickLike (idFavorite) {
    this.data.addFavorite(idFavorite)
  }
}

HomeCtrl.$inject = ['DataService']

export default HomeCtrl
```

En el html cambiamos las referencias del controlador para que apunten a `home` .
Fijaros como en el html utilizamos ya el componente `grid` pasandole los correspondientes datos 

**`components/Home/home.template.html`**
```
<main class="container">
  <form ng-submit="home.data.getPhotos()">
    ...
        <input ng-model="home.data.query" value="surf" class="form-control" type="text" placeholder="Search for...">
    ...
  </form>

  <grid 
    photos="home.data.photos"
    on-click-like="home.handleClickLike"
  ></grid>

  ...
</main>

```

## Utilizando los componentes creados

Cargamos los componentes como dependencias de nuestra app y ya estamos en disposición de utilizar el componente `home` en nuestro index.html (que a su vez utilizará el componente `grid`)

```
  <home></home>
```

## Recursos 

- https://carlosazaustre.es/desarrollo-por-componentes-con-angular-1-5-con-es6-es2015/
- http://blog.krawaller.se/posts/dissecting-bindings-in-angularjs/
- https://toddmotto.com/exploring-the-angular-1-5-component-method/

# Obtener Favoritos (Cliente)

En esta lección vamos a crear el componente `favorites` que mostrará las fotos favoritas del usuario logueado

[![favoritos cliente](./md_img/favoritos-cliente.png)](https://pro.codely.tv/library/crea-una-app-mean-profesional-con-angularjs-y-webpack)

_Esta lección corresponde al curso [Crea una app MEAN profesional con AngularJS y Webpack](https://pro.codely.tv/library/crea-una-app-mean-profesional-con-angularjs-y-webpack) disponible a través de [CodelyTV](https://pro.codely.tv/)_

## Creando el componente `favorites`

Creamos el componente favorites de manera muy parecida a como creamos los otros componentes

**`components/Favorites/index`**
```
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
```

**`components/Favorites/favorites.template.html`**

```
<main class="container">
  <h1>Favorites</h1>
  <grid 
    photos="fav.data.favorites"
  ></grid>

</main>
```


## Obteniendo los favoritos desde `DataService`

En el servicio creamos un método nuevo llamado `getFavorites` que va a pillar el `user_id` del `AuthService` y lo va a añadir en la cabecera de la petición a `[GET] /favorites`

**`services/DataService`**
```
...
 getFavorites () {
    const user_id = this.AuthService.user.sub
    var config = {
      headers:  { user_id }
    }

    this.$http
      .get(API_URL + '/favorites', config)
      .then(response => response.data)
      .then(favorites => {
        this.favorites = favorites
      })
  }
...
```

Este metodo `getFavorites` lo llamaremos nada más arrancar la app angular con lo que se cargaran de entrada los favoritos del usuario en _data.favorites_

**`app/index`**
```
.run( function(DataService) {
    DataService.getFavorites()
  })
```


---------

# Añadir rutas

En esta lección vamos a crear las rutas `/` y `/favorites` en el cliente que nos mostraran la home y los favoritos del usuario respectivamente

![favoritos cliente](./md_img/favoritos-cliente.png)

## Instalamos `angular-route` y configuramos las rutas con `$routeProvider`

Instalamos `angular-route` (haciendo `npm i -S angular-route`) y lo añadimos como dependencia en nuestro modulo.

En el `config` de nuestro modulo principal definimos las rutas. Cómo ya lo tenemos todo componentizado, nuestras rutas se definen tan fácil como esto...

```
import ngRoute from 'angular-route'

...

angular
  .module(MODULE_NAME, [
    ngRoute,
    ...
  ])
  .config( function ($routeProvider) {
    $routeProvider
      .when('/', { template: '<app></app>' })
      .when('/favorites', { template: '<favorites></favorites>' })

  })
```

Para que `angular-route` cargue el contenido adecuado segun la ruta ponemos en el html...
```
<ng-view></ng-view>
```
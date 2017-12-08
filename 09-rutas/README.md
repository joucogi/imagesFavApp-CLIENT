# Obtener Favoritos (Cliente)

En esta lección vamos a crear el componente `favorites` que mostrará las fotos favoritas del usuario logueado

![favoritos cliente](./md_img/favoritos-cliente.png)

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

## Instalamos y configuramos `angular-route`

```
npm i -S angular-route
```

```
.config( function ($routeProvider) {
  $routeProvider
    .when('/', { template: '<app></app>' })
    .when('/favorites', { template: '<favorites></favorites>' })

})

```
# Eliminando Favoritos

En esta lección vamos a añadir la funcionalidad de eliminar favoritos:

- ​añadiendo el endpoint `[DELETE] /favorite/:idFavorite​` en el servidor
- añadiendo el botón _eliminar favorito_ y su funcionalidad a través de los componentes `grid` y `fav` que ya tenemos creados

[![eliminar favoritos](./md-img/remove-favorites.png)](https://pro.codely.tv/library/crea-una-app-mean-profesional-con-angularjs-y-webpack)

_Esta lección corresponde al curso [Crea una app MEAN profesional con AngularJS y Webpack](https://pro.codely.tv/library/crea-una-app-mean-profesional-con-angularjs-y-webpack) disponible a través de [CodelyTV](https://pro.codely.tv/)_

## Añadiendo `removeFavorite` en el servicio `DataService` 

Añadimos el método `removeFavorite` en el servicio `DataService` que tomará el id del usuario logueado de `AuthService` y hará la petición a `[DELETE] /favorite/:idFavorite` pasando el `user_id` en la cabecera de esta petición

Cuando recibamos respuesta satisfactoria, recargamos los favoritos con `getFavorites()`

```
removeFavorite (idFavorite) {
    const user_id = this.AuthService.user.sub
    var config = {
      headers:  { user_id }
    }
    this.$http
      .delete(API_URL + '/favorite/' + idFavorite, config)
      .then(response => response.data.msg)
      .then(msg => {
        console.log(msg)
        this.getFavorites()
      })
  }
```

## Añadiendo el boton "eliminar favorito" en el componente `grid`

Preparamos el componente `grid` para que pueda recibir también un método `onClickDislike`

```
let GridComponent = {
  template: GridTpl,
  controllerAs: 'grid',
  bindings: {
    photos: '<',
    onClickLike: '=',
    onClickDislike: '='
  }
}
```

y añadimos al template el marcado para que muestre el botón eliminar si recibe este método `onClickDislike`

```
<a ng-if='grid.onClickDislike' ng-click="grid.onClickDislike(photo.id)" target="_blank" class="btn btn-light like">
  <span class="oi oi-delete"></span>
</a>
```

## Pasando `handleDislike` a `grid` desde `fav`

Añadimos al controlador de `fav` el metodo `handleDislike`

```
class FavoritesCtrl {
  constructor (DataService) {
    this.data = DataService
    this.handleClickDislike = this.handleClickDislike.bind(this)
  }
  handleClickDislike (idFavorite) {
    this.data.removeFavorite(idFavorite)
  }
}

FavoritesCtrl.$inject = ['DataService']

export default FavoritesCtrl
```

Y llamamos al componente `grid` pasándole este método

```
<grid 
    photos="fav.data.favorites"
    on-click-dislike="fav.handleClickDislike"
  ></grid>
```
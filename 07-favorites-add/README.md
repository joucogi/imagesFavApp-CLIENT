# Añadir Favoritos (Flujo completo MEAN)

En esta lección vamos a añadir la lógica en nuestra app angular para que añada los favoritos al usuario logueado. Para ello emularemos un usuario logueado a través de un servicio nuevo que llamaremos `AuthService`

[![mean flow](./md_img/mean.png)](https://pro.codely.tv/library/crea-una-app-mean-profesional-con-angularjs-y-webpack)

_Esta lección corresponde al curso [Crea una app MEAN profesional con AngularJS y Webpack](https://pro.codely.tv/library/crea-una-app-mean-profesional-con-angularjs-y-webpack) disponible a través de [CodelyTV](https://pro.codely.tv/)_


## Añadimos la lógica del usuario logeado

Sustituimos el marcado del navbar por esto (que incluye un menú y el marcado para indiciar el usuario logueado)...

**`navbar`**
```
 <!-- @begin COMPONENT: navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="http://images-fav.surge.sh/">ImageFavApp</a>
        <ul class="my-2 my-md-0" style="color:white; list-style: none; cursor: pointer;">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="dropdown08" data-toggle="dropdown">
                <img class="rounded-circle avatar" width="30" alt="" >
                Logged as juanma
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdown08">
                <a href="#" class="dropdown-item">Favorites</a>
              </div>
            </li>
        </ul>
    </div>
  </nav>
  <!-- @end COMPONENT: navbar -->
```

Añadimos el archivo `data/user.json` con los datos del "usuario logueado"...

**`user.json`**
```
{
  "sub": "twitter|69764534",
  "nickname": "juanma",
  "name": "juanma",
  "picture": "https://pbs.twimg.com/profile_images/2586724996/gxtipq5gpc22aqy1x4g2_normal.jpeg",
  "updated_at": "2017-11-14T09:07:41.028Z"
}
```

Creamos el servicio que nos dejará disponible en nuestra app angular los datos del usuario logueado...

**`services/AuthService.js`**
```
const userData = require('../data/user.json')

class AuthService {
  constructor () {
    this.user = userData
  }
}

export default AuthService
```

## Añadiendo favoritos

Preparamos nuestro `DataService` para que reciba `AuthService` como dependencia y creamos el método `addFavorites` que se encargará de hacer la llamada via POST a nuestra API

**`services/DataService.js`**
```
...
addFavorite (idFavorite) {
  const user_id = this.AuthService.user.sub
  this.$http
    .post('http://localhost:3000/favorite/' + idFavorite, { user_id })
    .then(response => response.data.msg)
    .then(console.log)
}
...
```

Creamos el evento correspondiente en el controlador y añadimos el evento al botón "añadir favorito"...

**`controllers/MainCtrl.js`**
```
...
handleLike (e, idFavorite) {
  e.preventDefault()
  this.data.addFavorite(idFavorite)
}
...
```

**`public/index.html`**
```
...
<a ng-click="main.handleLike($event, photo.id)" target="_blank" class="btn btn-light like">
  <span class="oi oi-heart"></span>
</a>
...
```


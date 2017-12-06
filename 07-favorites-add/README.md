# Añadir Favoritos

## Añadimos la lógica del usuario logeado

** `navbar` **
```
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
    <!-- <li class="nav-item">
      <a class="nav-link" href="#">Login</a>
    </li> -->
  </ul>
```

** `user.json` **
```
{
  "sub": "twitter|69764534",
  "nickname": "juanma",
  "name": "juanma",
  "picture": "https://pbs.twimg.com/profile_images/2586724996/gxtipq5gpc22aqy1x4g2_normal.jpeg",
  "updated_at": "2017-11-14T09:07:41.028Z"
}
```

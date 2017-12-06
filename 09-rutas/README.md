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
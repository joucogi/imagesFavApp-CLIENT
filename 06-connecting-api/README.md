# Conectando nuestro app angular con nuestra API

En esta lección prepararemos nuestro servidor para que acepte peticiones de cualquier dominio y modificaremos nuestra app angular para utilize el endpoint `search/:query` que tenemos creado en el servidor y que devuelve las imagenes buscadas utilizando la API de unsplash y cacheando los resultados

![cors](./md_img/cors.png)

## Preparando el servidor con `cors`

Para que nuestro servidor acepte peticiones desde dominios diferentes, hay que configurarlo con [`cors`](https://enable-cors.org/)

Para ello instalamos el módulo con `npm i -S cors` y añadimos el middleware así...

**`index.js`**
```
const cors = require('cors')
...
app.use(cors())
```

## Modificando el cliente para que reciba datos de nuestro servidor API

Modificamos nuestro `getPhotos` para que pida datos a nuestra API utilizando la propiedad `query` de lka instancia

```
getPhotos () {
    this.$http
      .get('http://localhost:3000/search/' + this.query)
      .then(response => response.data.results)
      .then(photos => {
        this.photos = photos
      })
  }
```

En nuestro HTML preparamos el formulario para que lanze este método en el submit y enganchamos el `ng-model` del input con la propiedad query de la instancia que será utilizada en getPhotos

```
 <form ng-submit="main.data.getPhotos()">
 ...
 <input ng-model="main.data.query" ...>
```

## Recursos

- https://developer.mozilla.org/es/docs/Web/Guide/AJAX/Primeros_Pasos
- https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS


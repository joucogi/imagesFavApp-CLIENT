# AngularJS con Webpack y módulos ES2015

En esta lección vamos a convertir el prototipo de la app que nos viene dado en HTML raso, a una aplicación modular gestionada por webpack. Para ello instalaremos las dependencias y crearemos los archivos adecuados, para cargarlos a traves de nuestro `index.js`

[![angular con webpack](./md_img/angular_con_webpack.png)](https://pro.codely.tv/library/crea-una-app-mean-profesional-con-angularjs-y-webpack)

_Esta lección corresponde al curso [Crea una app MEAN profesional con AngularJS y Webpack](https://pro.codely.tv/library/crea-una-app-mean-profesional-con-angularjs-y-webpack) disponible a través de [CodelyTV](https://pro.codely.tv/)_


## Probando nuestro prototipo

Podeis descargar el prototipo desde [aqui](https://cdn.filestackcontent.com/crpTZO5JTMygf2fZU723) (lo teneis también en los archivos adjuntos de la lección)

Para poder probar rapidamente el prototipo HTMl podemos utilizar el comando `http-server` disponible despues de instalar este módulo globalmente → `npm i -g http-server`

## Pasando nuestra app AngularJS del prototipo HTML a Webpack y módulos ES2015

Para empezar a "modularizar" nuestra app AngularJS instalamos las primeras dependencias con `npm i -S angular angulargrid`

En nuestro `index.js` cargamos estas dependencias, los estilos y configuramos nuestra app angular con el servicio y controlador que cargaremos también desde archivos aparte

**`index.js`**
```
import angular from 'angular'
import angularGrid from 'angulargrid'

import './css/styles.css'

import MainCtrl from './controllers/MainCtrl'
import DataService from './services/DataService'

const MODULE_NAME = 'ImagesFavApp'

angular
  .module(MODULE_NAME, [angularGrid])
  .service('DataService', DataService)
  .controller('MainCtrl', MainCtrl)
  .run(DataService => {
    DataService.getPhotos()
  })

export default MODULE_NAME
```

Nuestro controlador queda asi

**`MainCtrl.js`**
```
class MainCtrl {
  constructor (DataService) {
    this.data = DataService
  }
}

MainCtrl.$inject = ['DataService']

export default MainCtrl
```

Nuestro servicio queda asi

**`DataService.js`**
```
class DataService {
  constructor ($http) {
    this.$http = $http
  }

  getPhotos () {
    this.$http
      .get('/data/photos.json')
      .then(response => response.data.results)
      .then(photos => {
        this.photos = photos
      })
  }
}

DataService.$inject = ['$http']

export default DataService
```

## Resources

- https://github.com/s-yadav/angulargrid
- https://toddmotto.com/rewriting-angular-styleguide-angular-2
- https://www.timroes.de/2015/07/29/using-ecmascript-6-es6-with-angularjs-1-x/

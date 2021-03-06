# Webpack

## Webpack: Configuración Básica

En esta lección comenzaremos desde cero nuestro cliente, creando nuestro `package.json`, instalando nuestas primeras dependencias y configurando webpack para poder importar módulos JS ES2015 y lanzar nuestro servidor local que se recargará automaticamente cuando grabemos.

[![Webpack Configuración Básica](./md_img/Webpack1.png)](https://pro.codely.tv/library/crea-una-app-mean-profesional-con-angularjs-y-webpack)  

_Esta lección corresponde al curso [Crea una app MEAN profesional con AngularJS y Webpack](https://pro.codely.tv/library/crea-una-app-mean-profesional-con-angularjs-y-webpack) disponible a través de [CodelyTV](https://pro.codely.tv/)_

### Ideas Claras

- Para crear nuestro `package.json` vacio hacemos `npm init -y`
- Para instalar webpack y añadirlo como dependencia al `package.json` hacemos `npm i -S webpack`

### `package.json` básico

Utilizaremos este `package.json` básico para empezar a trabajar  

```
{
  "name": "imagesFavApp",
  "version": "1.0.0",
  "description": "## Packages Webpack",
  "main": "index.js",
  "scripts": {
    "build": "rimraf dist && webpack --progress",
    "server": "webpack-dev-server --inline --progress"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "html-webpack-plugin": "^2.30.1",
    "rimraf": "^2.6.2",
    "webpack": "^3.8.1",
    "webpack-dev-server": "^2.9.4"
  }
}
```

Las dependencias instaladas son:

- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) → Nos permite añadir automaticamente el _bundle_ creado con _webpack_ a un `.html` (lo utilizamos en el `webpack.config.js`)
- [`rimraf`](https://github.com/isaacs/rimraf) → Para eliminar archivos desde node (lo utilizamos en los _scripts_ del `package.json`)
- [`webpack`](https://github.com/webpack/webpack) → El _bundler_ de módulos que utilizaremos. Nos permite manejar todas nuestras dependencias desde JS y se encarga de generar un `bundle.js` final con todo (lo utilizamos en los _scripts_ del `package.json`)
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) → Sirve una app webpack y actualiza el navegador cuando detecta cambios en los archivos (lo utilizamos en los _scripts_ del `package.json`)


### `webpack.config.js` básico

Utilizaremos este `webpack.config.js` básico para empezar a trabajar  

```
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/public/index.html" })],
  devServer: {
    contentBase: "./src/public"
  }
};
```

Las propiedades configuradas son:
- [`entry`](https://webpack.js.org/concepts/#entry) → El punto de entrada de nuestra app desde el cual se empezaran a "rastrear" los módulos
- [`output`](https://webpack.js.org/concepts/#output) → La carpeta y el nombre del archivo donde se generará nuestra app
- [`plugins`](https://webpack.js.org/concepts/#plugins) → Los plugins de webpack que aplicamos al generar nuestro _bundle_
- [`devServer`](https://webpack.js.org/configuration/dev-server/#devserver) → La ruta desde la cual arrancará nuestro servidor local (y donde estatá nuestro `index.html`)

### `webpack.config.js` preparado para carga de módulos JS ES2015

Instalamos los modulos que necesitamos con `npm i -S babel-core babel-loader`

Añadimos la propiedad [`module`](https://webpack.js.org/configuration/module/) para definir las [`rules`](https://webpack.js.org/configuration/module/#module-rules) con las que configuraremos diferentes [_loaders_](https://webpack.js.org/loaders/) para diferentes tipos de assets

De entrada sólo preparamos webpack para cargar JS ES2015 con [`babel-loader`](https://github.com/babel/babel-loader)

```
module: {
  rules: [
    {
      test: /\.js$/,
      use: "babel-loader",
      exclude: /node_modules/
    }
  ]
}
```

------

## Webpack: CSS con Webpack y StandardJS con prettier en Visual Code

En esta lección añadiremos más loaders (css y html) y configuraremos webpack para que genere un `styles.css` aparte para nuestros css cargados mediante webpack

Además configuraremos nuestro proyecto y el editor [Visual Code](https://code.visualstudio.com/) (que te recomiendo) para que nos chequee y nos aplique automáticamente un standard de formato de código javascript muy popular llamando [StandardJS](https://standardjs.com/)

![CSS con Webpack y StandardJS con prettier en Visual Code](./md_img/Webpack2.png)

### Añadiendo Loaders para cargar CSS/HTML desde JS

Instalamos los modulos que necesitamos con `npm i -S css-loader raw-loader style-loader extract-text-webpack-plugin`

Añadimos las nuevas `rules` con su respectiva configuración de `loaders` y nuevos plugins. 

**`webpack.config.js`**

```
module: {
  rules: [
    {
      test: /\.js$/,
      use: "babel-loader",
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    },
    {
      test: /\.html$/,
      use: "raw-loader"
    }
  ]
},
plugins: [
  new HtmlWebpackPlugin({ template: "./src/public/index.html" }),
  new ExtractTextPlugin("styles.css")
],
```


Los loaders añadidos son:
- [`style-loader`](https://github.com/webpack-contrib/style-loader) y [`css-loader`](https://github.com/webpack-contrib/css-loader) → Para poder cargar _css_ desde _javascript_
- [`raw-loader`](https://github.com/webpack-contrib/raw-loader) → Para cargar archivos de texto (en nuestro caso lo utilizamos para cargar el contenido de `.html` externos)

El plugin añadido es:
- [`extract-text-webpack-plugin`](https://github.com/webpack-contrib/extract-text-webpack-plugin) → Nos permite extraer parte del _bundle_ en un archivo aparte (lo utilizaremos para separar los css en un `styles.css` aparte)


### Activando ultimas características de Javascript con Babel

[Babel](https://babeljs.io/) es la herramienta que utilizamos para _transpilar_ (traducir un código a otro código) código ES2015 a ES5. Cómo hay muchas features del lenguaje propuestas que aún no forman parte del standard, se utilizan los llamados [_presets_ y _plugins_](https://babeljs.io/docs/plugins/) para [indicar a nuestro babel](https://www.fullstackreact.com/articles/what-are-babel-plugins-and-presets/) qué tipo de características de JS queremos utilizar en nuestro proyecto.

En nuestro caso le vamos a indicar que queremos soporte completo a ES2015 (ES6) mediante el preset [`es2015`](https://babeljs.io/docs/plugins/preset-es2015/) y  algunas caracteristicas propuestas que estan en fase "borrador" disponibles a través del preset [`stage-2`](https://babeljs.io/docs/plugins/preset-stage-2/)

Asi que instalamos nuestos modulos con `npm i -S babel-preset-es2015 babel-preset-stage-2`

Y creamos un archivos `.babelrc` con el que le indicamos a babel qué caracteristicas de Javascript queremos utilizar en nuestro proyecto

**`.babelrc`**

```
{
  "presets": [ "es2015", "stage-2" ]
}
```

### Configurando `eslint` & `prettier` con Visual Code para aplicación automática de `javascript standard`

[ESLint](https://eslint.org/) es un "chequeador" de estilos que podemos aplicar a nuestro workflow de manera que podamos comprobar automaticamente si nuestro código sigue una determinada guia de estilos

Las normas (normalmente predefinidas ya en modulos NPM) que queremos que cumpla nuestro código las podemos definir en un `.eslintrc` que utilizará eslint para chequear nuestro código

En nuestro caso vamos a indicarle a eslint que tenga en cuenta las configuraciones de babel y que además chequee que nuestro código sigue el estilo [standardJS](https://standardjs.com/) 

Para aplicar este check automaticamente instalamos un formateador de código llamado [prettier](https://prettier.io/) a través del cual podremos aplicar automaticamente estos estilos desde nuestro editor

Asi que instalamos nuestras dependencias... 

```
  npm i -S babel-eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard prettier-eslint
```

Creamos y configuramos el `.eslintrc`

```
{
  "parser": "babel-eslint",
  "extends": [
    "standard"
  ]
}
````

Y añadimos la configuración correspondiente en Visual Code desde `User Settings Visual Code`

```
{
  ...
  "prettier.eslintIntegration": true
  ...
}
```
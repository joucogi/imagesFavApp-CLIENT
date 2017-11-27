# 12- Deployment

** config.js **

```
{
  "API_URL": {
    "production": "https://server-proxy-api-unsplash-hyyqdbqqtv.now.sh",
    "development": "http://localhost:3000"
  }
}
```

** webpack.config.js ** 

```
const config = require('./config.json')
const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

....

new webpack.DefinePlugin({
  API_URL: JSON.stringify(config.API_URL[environment])
})
```


** package.json ** 

"build": "rimraf dist && NODE_ENV=production webpack --progress",


--------

https://webpack.js.org/plugins/uglifyjs-webpack-plugin/

Manging

El concepto de manging se refiere a cambiar el nombre de las variables por un nombre más corto con la finalidad de reducir un poco más el tamaño del archivo. 

new UglifyJsPlugin({ uglifyOptions: 
  { mangle: false }
})

# Create Angular App w/ Webpack

## Settings Webpack

- https://webpack.js.org/concepts/

### Basic Setitings (minimal)

**`package.json`**

````
{
  "name": "01-create-angular-app-with-webpack",
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
````

**`webpack.config.js`**

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

### Adding Loaders for ES2015/CSS/HTML loading from JS


```
```

    "babel-core": "^6.2.1",
    "babel-loader": "^6.2.0",
    "babel-preset-es2015": "^6.1.18",


    "css-loader": "0.26.1",
    "raw-loader": "^0.5.1",
    "file-loader": "^0.9.0",
    "style-loader": "^0.13.0",
    "webpack": "2.2.0",
    "webpack-dev-server": "2.2.0",
    "extract-text-webpack-plugin": "2.0.0-beta.5",
    "html-webpack-plugin": "^2.7.1",
    "rimraf": "^2.5.1",

## Packages `eslint` w/ Visual Code

`npm i -S babel-core babel-loader css-loader raw-loader style-loader extract-text-webpack-plugin`

```
 module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: [{ loader: "css-loader" }]
        })
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      }
    ]
  },
```


    "babel-eslint": "^8.0.2",
    "eslint-config-standard": "^10.2.1",
    "eslint-plugin-import": "^2.8.0",
    "eslint-plugin-node": "^5.2.1",
    "eslint-plugin-promise": "^3.6.0",
    "eslint-plugin-standard": "^3.0.1",
    "prettier-eslint": "^8.2.1"
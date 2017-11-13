# Create Angular App w/ Webpack

## 01. Settings Webpack

https://webpack.js.org/concepts/

### Basic Setitings (minimal)

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

### Adding Loaders for ES2015/CSS/HTML loading from JS


`npm i -S babel-core babel-loader css-loader raw-loader style-loader extract-text-webpack-plugin`

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

## 02. Extra Settings

### Activating Babel latest features

`npm i -S babel-preset-es2015 babel-preset-stage-2`

**`.babelrc`**

```
{
  "presets": [ "es2015", "stage-2" ]
}
```

### Packages `eslint` & `prettier` w/ Visual Code → `javascript standard`


```
  npm i -S babel-eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard prettier-eslint
```

**`.eslintrc`**

```
{
  "parser": "babel-eslint",
  "extends": [
    "standard"
  ]
}
````

**`User Settings Visual Code`**
```
{
  ...
  "prettier.eslintIntegration": true
  ...
}
```
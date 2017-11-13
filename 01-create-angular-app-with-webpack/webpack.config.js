const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/public/index.html" })],
  devServer: {
    contentBase: "./src/public"
  }
};

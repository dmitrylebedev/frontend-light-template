// @see https://webpack.js.org/guides/
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

//TODO: Добавить JS source-map

// это правило для javascript
const javascript = {
  test: /\.(js)$/,
  exclude: /node_modules/,
  use: [{
    loader: "babel-loader",
    query: {
      presets: ['es2015']
    }
  }]
};

// основной конфиг вебпака
const config = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.min.js"
  },
  module: {
    rules: [ javascript ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};

module.exports = config;

'use strict';

const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  resolve: {
    modules: [ 'node_modules' ],
    extensions: [ '.js' ],
    alias: {
      src: path.join(__dirname, '..', 'src'),
      config: path.join(__dirname, '..', 'src', 'config'),
      modules: path.join(__dirname, '..', 'src', 'modules'),
      schema: path.join(__dirname, '..', 'src', 'schema')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};



'use strict';

const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['./src/index.js'],
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  resolve: {
    modules: [ 'node_modules', 'bower_components' ],
    extensions: [ '.purs', '.js'],
    alias: {
      src: path.join(__dirname, '..', 'src'),
      config: path.join(__dirname, '..', 'src', 'config'),
      modules: path.join(__dirname, '..', 'src', 'modules'),
      schema: path.join(__dirname, '..', 'src', 'schema')
    }
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [path.join(__dirname, 'src', 'index.js')]
       // exclude: /node_modules/
      },
      {
        test: /\.graphql$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      { from: 'package.json' }
    ])
  ],
  output: { path: path.join(__dirname, '../build'), filename: 'index.js', libraryTarget: 'umd' }
};

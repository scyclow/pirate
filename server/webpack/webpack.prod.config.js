'use strict';

const webpack = require('webpack');
const _ = require('lodash');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

config.entry = ['./src/index.js']
config.watch = false
config.externals = [nodeExternals()]
config.output = { path: path.join(__dirname, '../build'), filename: 'index.js', libraryTarget: 'umd' }
config.plugins = [
  new webpack.NamedModulesPlugin(),
  new CopyWebpackPlugin([
    { from: 'package.json' }
  ]),
  new webpack.DefinePlugin({
    'process.env': Object.assign({}, _.mapValues(process.env, JSON.stringify))
  })
]

module.exports = config

'use strict';

const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

const config = require('./webpack.shared.config')

config.entry = ['webpack/hot/poll?1000', './dev/server']
config.watch = true
config.externals = [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })]
config.output = { path: path.join(__dirname, '../dev/build'), filename: 'index.js' }
config.plugins = [
  new StartServerPlugin({
    name: 'index.js',
    nodeArgs: ['--inspect']
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': Object.assign({ BUILD_TARGET: JSON.stringify('server') }, process.env.NODE_ENV)
  })
]

module.exports = config

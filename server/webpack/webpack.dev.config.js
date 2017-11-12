'use strict';

const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['webpack/hot/poll?1000', './devServer'],
  watch: true,
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
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
  ],
  output: { path: path.join(__dirname, '../devBuild'), filename: 'index.js' }
};



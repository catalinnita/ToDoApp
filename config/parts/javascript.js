const glob = require("glob");
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {getIfUtils} = require('webpack-config-utils');

module.exports = function(env) {
  const {ifProduction} = getIfUtils(env);

  return {
    entry: {
      app: glob.sync(env.paths.appJS + '/*.jsx')
    },
    output: {
      filename: 'js/[name].js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: [
            'babel-loader',
            'eslint-loader',
          ],
          exclude: [
            /(node_modules)/,
            /\.json$/,
          ]
        },
      ]
    },
    optimization: {
      minimizer: ifProduction([
        new UglifyJsPlugin()
      ])
    },
  };
};

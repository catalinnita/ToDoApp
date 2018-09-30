const merge = require('webpack-merge');
const parts = require('./config/webpack.parts');

module.exports = function(env) {
  env = env || {};
  env.paths = {
    appJS: './src/js',
    appSCSS: './src/scss',
  };

  const config = merge([
    //parts.styles(env),
    parts.javascript(env),
  ]);

  return config;
};
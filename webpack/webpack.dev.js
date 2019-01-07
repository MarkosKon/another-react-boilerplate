const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

console.log('We in development!');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html'}),
  ]
});

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const path = require('path');

const paths = ['/', '/about/', '/contact/'];

console.log('We in static production!');
module.exports = {
  entry: './src/static.jsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static.js',
    // chunkFilename: '[name].[contenthash].js',
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
    libraryTarget: 'umd',
  },
  mode: 'production',
  devtool: 'source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  plugins: [
    new StaticSiteGeneratorPlugin({ paths: paths, entry: 'static' }),
    new DuplicatePackageCheckerPlugin({ verbose: true }),
  ],
}
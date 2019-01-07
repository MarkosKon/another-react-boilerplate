const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack'); // to access built-in plugins
const dotenv = require('dotenv');
const path = require('path');

// call dotenv and it will return an Object with a parsed key
const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[contenthash].js',
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
    libraryTarget: 'umd',
  },
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
    new CleanWebpackPlugin(['../dist'], { allowExternal: true }),
    new webpack.DefinePlugin(envKeys),
    new CopyWebpackPlugin([{ from: 'public' }]),
  ],
};

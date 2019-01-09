const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: './src/server.jsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
    // globalObject: `(typeof self !== 'undefined' ? self : this)`,
    // libraryTarget: 'umd',
  },
  mode: 'production',
  devtool: 'source-map',
  target: 'node',
  externals: [nodeExternals()],
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
  plugins: [new DuplicatePackageCheckerPlugin({ verbose: true })],
};

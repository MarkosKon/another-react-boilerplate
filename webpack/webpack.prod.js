const merge = require('webpack-merge');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const { ReactLoadablePlugin  } = require('react-loadable/webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');

const path = require('path');
const paths = ['/', '/about/', '/contact/'];

console.log('We in production!');

const clientConfig = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    // new StaticSiteGeneratorPlugin({ paths: paths }),
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../analyze/report.html',
      openAnalyzer: false,
    }),
    new DuplicatePackageCheckerPlugin({ verbose: true }),
    new WorkboxPlugin.GenerateSW({
      exclude: [
        /\.jpg$/,
        /\.png$/,
        /\.svg$/,
        /\.webp$/,
        /\.json$/,
        /_redirects/,
        /browserconfig.xml/,
        /sitemap.txt/,
      ],
    }),
  ],
});

const serverConfig = {
  entry: './src/server.jsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
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
  plugins: [
    new DuplicatePackageCheckerPlugin({ verbose: true }),
  ]
}

module.exports = [clientConfig, serverConfig]
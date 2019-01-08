const merge = require('webpack-merge');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const { ReactLoadablePlugin  } = require('react-loadable/webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common.js');

const paths = ['/', '/about/', '/contact/'];

console.log('We in production!');
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  target: 'node',
  plugins: [
    new StaticSiteGeneratorPlugin({ paths: paths }),
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

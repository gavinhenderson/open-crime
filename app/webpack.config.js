const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLess = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ttf$|\.eot$|\.svg$/,
        use: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
      },
      {
        test: /\.module\.less$/,
        use: extractLess.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            },
            'resolve-url-loader',
            'less-loader'
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: ['css-loader', 'resolve-url-loader', 'less-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [extractLess]
};

module.exports = config;

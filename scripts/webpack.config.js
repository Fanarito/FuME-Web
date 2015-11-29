var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loaders: ['babel'],
        exclude: [/node_modules/]
      },
      {
        test: /\.vue$/,
        loaders: ['vue']
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.css/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  vue: {
    loaders: {
      css: 'style!css!postcss'
    }
  },
  postcss: function () {
    return [
      require('postcss-nested')()
    ]
  },
  plugins: [
  ],
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ["transform-es2015-arrow-functions"]
  }
}

const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    checkout: './src/checkout.js',
    shopfront: './src/shopfront.js'
  },
  output: {
    path: __dirname + "/dist",
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
    // uglify js
    new UglifyJsPlugin({
      sourceMap: true
    }),
    // env plugin
    new webpack.DefinePlugin({
      'proccess.env': { NODE_ENV: JSON.stringify(nodeEnv)}
    })
  ]
}

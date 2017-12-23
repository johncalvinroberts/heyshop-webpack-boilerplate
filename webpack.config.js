const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const nodeEnv = process.env.NODE_ENV || 'production'


const config = {
  devtool: 'source-map',
  entry: {
    checkout: './src/checkout.js',
    shopfront: './src/shopfront.js'
  },
  output: {
    path: __dirname + "/dist",
    filename: '[name].js',
    publicPath: 'dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    // env plugin
    new webpack.DefinePlugin({
      'proccess.env': { NODE_ENV: JSON.stringify(nodeEnv)}
    })
  ],
  devServer:{
    contentBase: path.resolve(__dirname, './dist'),
    open: true
  },
  devtool: 'eval-source-map'
}

module.exports = config

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
}

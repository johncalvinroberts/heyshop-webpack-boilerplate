const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const nodeEnv = process.env.NODE_ENV || 'production'


const config = {
  devtool: 'source-map',
  entry: {
    checkout: './src/checkout.js',
    shopfront: './src/shopfront.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
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
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'proccess.env': { NODE_ENV: JSON.stringify(nodeEnv)}
    }),
    // HMR plugins
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    contentBase: path.join(__dirname, 'assets'),
    publicPath: 'http://localhost:400/dist/', //bundles go here
    // hot: true,
    port: 4000
  },
  devtool: 'eval-source-map'
}

module.exports = config

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
}

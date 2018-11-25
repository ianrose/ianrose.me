const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = function (config) {
  return {
    context: path.resolve(__dirname, `${config.src}/scripts`),
    entry: {
      main: './index-main.js',
      post: './index-post.js'
    },
    devtool: config.devBuild ? 'eval-source-map' : false,
    output: {
      path: path.resolve(__dirname, `${config.dest}/scripts`),
      filename: '[name]-bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
          ]
        }
      ]
    },
    plugins: [
      new UglifyJsPlugin({
        sourceMap: true
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  }
}

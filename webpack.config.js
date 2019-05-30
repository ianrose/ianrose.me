const path = require('path');
const webpack = require('webpack')
const glob = require("glob")
const entry = require('webpack-entry-plus')

const entryFiles = [
  {
    entryFiles: ['./src/scripts/index.js'],
    outputName: 'index.js'
  },
  {
    entryFiles: glob.sync('./src/scripts/projects/**/index.js'),
    outputName(item) {
      return item.replace('./src/', '../')
    }
  }
]

module.exports = {
  entry: entry(entryFiles),
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}

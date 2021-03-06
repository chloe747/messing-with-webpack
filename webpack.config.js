var path = require('path');
var SRC = path.join(__dirname, 'src/');
var NODE_MODULES = path.join(__dirname, 'node_modules/');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
  entry:  {
    javascript: "./src/",
    html: "./index.html",
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass'
        )
      }, {
        test: /\.html$/,
        loader: 'file',
        query: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("app.css")
  ],
  resolve: {
    root: [SRC, NODE_MODULES] //will search these paths to find filenames for require
  },
  sassLoader: {
    includePaths: [SRC, NODE_MODULES]
  },
  postcss: function () {
    return [autoprefixer];
  }
};

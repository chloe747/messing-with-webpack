// var ExtractTextPlugin = require('extract-text-webpack-plugin');
//
// module.exports = {
//   entry: './src',
//   output: {
//     path: __dirname + '/dist',
//     filename: 'app.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.s?css$/,
//         loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
//       }
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin('style.css')
//   ],
//   resolve: {
//     extensions: ['', '.js', '.sass'],
//     root: [__dirname + '/src']
//   }
// };
var path = require('path');
var SRC = path.join(__dirname, 'src/');
var NODE_MODULES = path.join(__dirname, 'node_modules/');

var config = {
  entry: './src',             //will look for index.js, unless I specify a name
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  resolve: {
    root: [SRC, NODE_MODULES]
  }
};
module.exports = config;

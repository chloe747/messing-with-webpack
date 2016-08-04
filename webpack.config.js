var path = require('path');
var SRC = path.join(__dirname, 'src/');
var NODE_MODULES = path.join(__dirname, 'node_modules/');

var config = {
  entry: './src',             //will look for index.js, unless I specify a name
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel']
      }
    ]
  },
  resolve: {
    root: [SRC, NODE_MODULES] //will search these paths to find filenames for require
  }
};
module.exports = config;

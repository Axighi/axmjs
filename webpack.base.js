const path = require('path');
const webpack = require('webpack');

module.exports = function () {
  return {
    entry: {
      'main': './src/index.js'
    },
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'index.js',
      library: "axmjs", // string,
      libraryTarget: "umd", // universal module definition
      sourceMapFilename: 'index.map'
    },
    resolve: {
      extensions: ['.js', '.json'],
      modules: [path.join(__dirname, 'src'), 'node_modules']
    },
    module: {
      rules: [{
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
      }, {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader']
      }, {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      }, {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      }],
    },
  };
}
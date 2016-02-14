var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: path.resolve(__dirname, "client"),
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, "build/assets"),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      loader: 'eslint-loader',
      exclude: [/node_modules/]
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: [/(node_modules)/],
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.(png|jpg|woff|woff2|ttf)$/,
      loader: 'url-loader?limit=1024'
    }]
  }
};

var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: path.resolve(__dirname, "client"),
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, "build/app"),
    publicPath: '/app/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: "./client",
    stats: { colors: true }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
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
       test: require.resolve("jquery"),
       loader: "expose?$!expose?jQuery"
    }, {
      test: /\.(png|jpg|woff|woff2|ttf)$/,
      loader: 'url-loader?limit=1024'
    }]
  }
};

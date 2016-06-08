const Webpack = require('webpack'),
      Path = require('path');
// Configration for development
exports.development = {
  context: Path.resolve(__dirname, 'client'),
  entry: {
    index: ['webpack-dev-server/client?http://localhost:5000/', 'webpack/hot/dev-server', './index.js']
  },
  output: {
    path: Path.resolve(__dirname, 'build/app'),
    publicPath: '/app/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
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
       test: require.resolve('jquery'),
       loader: 'expose?$!expose?jQuery'
    }, {
      test: /\.(png|jpg|woff|woff2|ttf)$/,
      loader: 'url-loader?limit=1024'
    }]
  }
}
// Configration for distribution
exports.distribution = {
  context: Path.resolve(__dirname, 'client'),
  entry: {
    index: ['./index.js']
  },
  output: {
    path: Path.resolve(__dirname, 'build/app'),
    publicPath: '/app/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
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
       test: require.resolve('jquery'),
       loader: 'expose?$!expose?jQuery'
    }, {
      test: /\.(png|jpg|woff|woff2|ttf)$/,
      loader: 'url-loader?limit=1024'
    }]
  }
}

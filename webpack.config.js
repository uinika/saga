const Webpack = require('webpack'),
      Path = require('path');
// Configration for development
exports.Development = {
  context: Path.resolve(__dirname, 'client'),
  entry: {
    index: ['webpack-dev-server/client?http://localhost:5000/', 'webpack/hot/dev-server', './index.js']
  },
  output: {
    path: Path.resolve(__dirname, 'build/bundle'),
    publicPath: './bundle/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: [/(node_modules)/],
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0', 'stage-1', 'stage-2', 'stage-3'],
        plugins: ['antd']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.(png|jpg|woff|woff2|ttf)$/,
      loader: 'url-loader?limit=10240'
    }]
  }
}
// Configration for production
exports.Production = {
  context: Path.resolve(__dirname, 'client'),
  entry: {
    index: ['./index.js']
  },
  output: {
    path: Path.resolve(__dirname, 'build/bundle'),
    publicPath: './bundle/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new Webpack.optimize.UglifyJsPlugin({
      mangle: {
          except: ['$super', '$', 'exports', 'require']
      }
    }),
    new Webpack.DefinePlugin({
      'process.env': {
         NODE_ENV: JSON.stringify('production')
       }
    })
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: [/(node_modules)/],
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0', 'stage-1', 'stage-2', 'stage-3'],
        plugins: ['antd']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.(png|jpg|woff|woff2|ttf)$/,
      loader: 'url-loader?limit=1024'
    }]
  }
}

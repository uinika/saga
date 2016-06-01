const gulp = require("gulp");
const Webpack = require("webpack");
var gutil = require("gulp-util");
const WebpackDevServer = require("webpack-dev-server");
const WebpackConfig = require("./webpack.config.js");

gulp.task("default", ["webpack-dev-server"]);

gulp.task("webpack-dev-server", function(callback) {
  
  if( WebpackConfig && typeof WebpackConfig === 'object' ){
    new WebpackDevServer(Webpack(WebpackConfig), {
      publicPath: '/app/',
      contentBase: "./client",
      port: 5050,
      hot: true,
      inline: true,
      stats: { colors: true }
    }).listen(5050);
  }

});

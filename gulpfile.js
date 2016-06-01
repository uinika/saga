const gulp = require("gulp");
const Webpack = require("webpack");
var gutil = require("gulp-util");
const WebpackDevServer = require("webpack-dev-server");
const WebpackConfig = require("./webpack.config.js");

gulp.task("default", ["client", "server"]);

gulp.task("client", function(callback) {
  if( WebpackConfig && typeof WebpackConfig === 'object' ){
    new WebpackDevServer(Webpack(WebpackConfig), {
      publicPath: '/app/',
      contentBase: "./client",
      hot: true,
      inline: true,
      stats: { colors: true }
    }).listen(5050);
  }
});

gulp.task("server", function() {

});

gulp.task("build", function() {

});

gulp.task("clean", function() {

});

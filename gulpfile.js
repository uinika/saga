const Gulp = require('gulp'),
      Webpack = require('webpack'),
      WebpackDevServer = require('webpack-dev-server'),
      WebpackConfig = require('./webpack.config.js'),
      Delete = require('del');
// gulp
Gulp.task('default', ['client']);
// gulp client
Gulp.task('client', function(callback) {
  let compiler = Webpack(WebpackConfig.development);
  let server = new WebpackDevServer(compiler, {
    hot: true,
    publicPath: '/app/',
    contentBase: './client',
    stats: {colors: true}
  }).listen(5050);
});
// gulp server
Gulp.task('server', function() {
  console.log(test);
});
// gulp build
Gulp.task('build', function() {
  Gulp.src(['./client/index.html'])
      .pipe(Gulp.dest('./build'));
  var compiler = Webpack(WebpackConfig.distribution);
  compiler.run(function(err, stats) {
    console.error(err);
    console.info(stats);
  });
});
// gulp clean
Gulp.task('clean', function() {
  Delete(['./build/**/*']);
});

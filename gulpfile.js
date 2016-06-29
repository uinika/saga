const Gulp = require('gulp'),
      Webpack = require('webpack'),
      WebpackDevServer = require('webpack-dev-server'),
      WebpackConfig = require('./webpack.config.js'),
      Nodemon = require('gulp-nodemon'),
      Delete = require('del');
// gulp
Gulp.task('default', ['client', 'server']);
// gulp client
Gulp.task('client', function(callback) {
  let compiler = Webpack(WebpackConfig.development);
  let server = new WebpackDevServer(compiler, {
    hot: true,
    publicPath: '/app/',
    contentBase: './client',
    stats: {colors: true}
  }).listen(5000);
});
// gulp server
Gulp.task('server', function() {
  Nodemon({
    script: './server/app.js',
    execMap: {js: 'node --harmony'},
    env: {'NODE_ENV': 'development'}
  })
});
// gulp build
Gulp.task('build', function() {
  Gulp.src(['./client/index.html', './client/styles'])
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

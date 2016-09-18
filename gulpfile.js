const Gulp = require('gulp'),
      Webpack = require('webpack'),
      WebpackDevServer = require('webpack-dev-server'),
      WebpackConfig = require('./webpack.config.js'),
      Nodemon = require('gulp-nodemon'),
      Color = require('colors/safe'),
      Delete = require('del');
// gulp
Gulp.task('default', ['artifact', 'mock']);
// gulp client
Gulp.task('artifact', function(callback) {
  let compiler = Webpack(WebpackConfig.Development);
  let server = new WebpackDevServer(compiler, {
    hot: true,
    publicPath: '/bundle/',
    contentBase: './artifact',
    stats: {colors: true}
  }).listen(5000);
});
// gulp server
Gulp.task('mock', function() {
  Nodemon({
    script: './mock/app.js',
    execMap: {js: 'node --harmony'},
    env: {'NODE_ENV': 'development'}
  })
});
// gulp build
Gulp.task('build', function() {
  Gulp.src(['./artifact/index.html'])
      .pipe(Gulp.dest('./release'));
  Gulp.src(['./artifact/favicon.ico'])
      .pipe(Gulp.dest('./release'));
  let compiler = Webpack(WebpackConfig.Production);
  compiler.run(function(err, stats) {
    console.error(Color.red.bold.underline(err));
    console.info(Color.blue.underline(stats));
  });
});
// gulp clean
Gulp.task('clean', function() {
  Delete(['./release/**/*']);
});

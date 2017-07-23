const gulp = require("gulp");
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackStream = require('webpack-stream');

gulp.task('scripts', function() {
  return gulp.src('src/js/index.js')
    .pipe(plumber({errorHandler: errorHandler(`Error in \'scripts\' task`)}))
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('build/js'));
});

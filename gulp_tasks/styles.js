const gulp = require('gulp');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');
const postcss    = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');

const plugins = [
  require('postcss-import'),
  require('postcss-cssnext'),
  require('postcss-custom-media')
];

gulp.task('styles', () => (
  gulp.src('src/css/index.css')
    .pipe(plumber({errorHandler: errorHandler(`Error in \'styles\' task`)}))
    .pipe( sourcemaps.init() )
    .pipe( postcss(plugins) )
    .pipe(cssnano({
      discardComments: {removeAll: true}
    }))
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('build/css/') )
));

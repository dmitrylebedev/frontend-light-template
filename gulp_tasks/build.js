const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', () => (
  runSequence(
    'scripts',
    'styles',
    'copy',
    'img-optimize',
    'svg-icons'
  )
));

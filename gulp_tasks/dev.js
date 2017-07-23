const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('dev', () => (
  runSequence(
    'lint',
    'scripts',
    'styles',
    'copy',
    'serve',
    'watch'
  )
));

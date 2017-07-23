const gulp = require('gulp');

const paths = {
  styles: ['src/css/**/*'],
  resources: ['src/resources/**/*'],
  scripts: ['src/js/**/*']
};

gulp.task('watch', () => {
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.resources, ['copy']);
  gulp.watch(paths.scripts, ['lint', 'scripts']);
});

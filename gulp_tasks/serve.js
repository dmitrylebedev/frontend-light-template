const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('serve', function () {
  
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  
  gulp.watch("*.html").on("change", reload);
  gulp.watch("build/**/*").on("change", reload);
});

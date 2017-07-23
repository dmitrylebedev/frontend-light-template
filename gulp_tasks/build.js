const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', () => (
  runSequence(
    'scripts', // собирает скрипты
    'styles', // собирает стили
    'copy', // делает копию из папки со шрифтами, изображениями, другими файлами
    'img-optimize', // оптимизирует изображения
    'svg-icons' // собирает свг-cпрайт
  )
));

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
  return gulp.src('assets/theme.scss').pipe(sass()).pipe(autoprefixer()).pipe(cleanCSS()).pipe(gulp.dest('assets/'));
});

gulp.task('watch', function () {
  gulp.watch('assets/**/*.scss', gulp.series('css'));
});

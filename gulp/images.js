
const config    = require('./config.js');
const gulp      = require('gulp');
const plugins   = require('gulp-load-plugins')();


/**
 * Images
 */

gulp.task('images', ['favicon'], () => {
  return gulp.src(config.images.toolkit.src)
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(config.images.toolkit.dest));
});

gulp.task('favicon', () => {
  return gulp.src('src/favicon.ico')
  .pipe(gulp.dest(config.dest));
});


const config        = require('./config.js');
const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins')();


/**
 * Linting
 */

gulp.task('html:lint', () => {
  gulp.src("./dist/**/*.html")
    .pipe(plugins.htmlhint('.htmlhintrc'))
    .pipe(plugins.htmlhint.reporter("htmlhint-stylish"))
    .pipe(plugins.htmlhint.failReporter({ suppress: true }));
});


const config        = require('./config.js');
const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins')();
const webpack       = require('webpack');
const webpackConfig = require('../webpack.config')(config);


/**
 * Scripts
 */

gulp.task('scripts', (done) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      plugins.util.log(plugins.util.colors.red(err()));
    }
    const result = stats.toJson();
    if (result.errors.length) {
      result.errors.forEach((error) => {
        plugins.util.log(plugins.util.colors.red(error));
      });
    }
    done();
  });
});


/**
 * Vendor Libraries
 */

gulp.task('scripts:vendor', () => {
  return gulp.src(config.scripts.toolkit.vendor)
    .pipe(plugins.concat('vendor.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(config.scripts.toolkit.dest))
});


/**
 * Linting
 */

gulp.task('scripts:lint--components', () => {
  gulp.src(config.scripts.toolkit.components)
  .pipe(plugins.eslint())
  .pipe(plugins.eslint.format())
  .pipe(plugins.eslint.failAfterError());
});

gulp.task('scripts:lint--src', () => {
  gulp.src(config.scripts.toolkit.src)
  .pipe(plugins.eslint({
    "rules":{
      "no-unused-vars": 0
    }
  }))
  .pipe(plugins.eslint.format())
  .pipe(plugins.eslint.failAfterError());
});

gulp.task('scripts:lint', ['scripts:lint--components', 'scripts:lint--src']);

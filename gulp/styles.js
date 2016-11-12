
const browserSync     = require('browser-sync');
const config          = require('./config.js');
const gulp            = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins         = require('gulp-load-plugins')({
                          rename: {
                            'gulp-scss-lint': 'scsslint',
                            'gulp-scss-lint-stylish': 'scsslintstylish'
                          }
                        });
const reload          = browserSync.reload;


/**
 * Styles
 */

gulp.task('styles:fabricator', () => {
  gulp.src(config.styles.fabricator.src)
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.sass().on('error', plugins.sass.logError))
  .pipe(plugins.autoprefixer({ browsers: ['last 2 versions', 'IE 11'] }))
  .pipe(plugins.if(!config.dev, plugins.csso()))
  .pipe(plugins.rename('f.css'))
  .pipe(plugins.sourcemaps.write())
  .pipe(gulp.dest(config.styles.fabricator.dest))
  .pipe(plugins.if(config.dev, reload({ stream: true })));
});

gulp.task('styles:toolkit', () => {
  gulp.src(config.styles.toolkit.src)
  .pipe(plugins.if(config.dev, plugins.sourcemaps.init()))
  .pipe(plugins.sass({
    includePaths: ['./node_modules/foundation-sites/scss', './node_modules/normalize-scss/sass', './node_modules/node-reset-scss/scss', './node_modules/bootstrap-sass/assets/stylesheets'],
  }).on('error', plugins.sass.logError))
  .pipe(plugins.autoprefixer({ browsers: ['last 2 versions', 'IE 11'] }))
  .pipe(plugins.if(!config.dev, plugins.csso()))
  .pipe(plugins.if(config.dev, plugins.sourcemaps.write()))
  .pipe(gulp.dest(config.styles.toolkit.dest))
  .pipe(plugins.if(config.dev, reload({ stream: true })));
});


/**
 * Linting
 */

gulp.task('styles:lint', () => {
  gulp.src(config.styles.toolkit.watch)
  .pipe(plugins.scsslint({
    'config': '.scss-lint.yml',
    'maxBuffer': 307200,
    'customReport': plugins.scsslintstylish
  }))
  .pipe(plugins.scsslint.failReporter());
});


gulp.task('styles', ['styles:fabricator', 'styles:toolkit']);

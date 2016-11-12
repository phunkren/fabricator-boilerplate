
const browserSync     = require('browser-sync');
const config          = require('./config.js');
const deploy          = require('../deploy.json');
const ftp             = require('vinyl-ftp');
const gulp            = require('gulp');
const plugins         = require('gulp-load-plugins')();
const reload          = browserSync.reload;
const runSeq          = require('run-sequence');


/**
 * Localhost Server
 */

gulp.task('serve', () => {

  browserSync({
    server: {
      baseDir: config.dest,
    },
    notify: false,
    logPrefix: 'FABRICATOR',
  });

  gulp.task('assembler:watch', ['assembler'], browserSync.reload);
  gulp.watch(config.templates.watch, ['assembler:watch']);

  gulp.task('styles:watch', ['styles']);
  gulp.watch([config.styles.fabricator.watch, config.styles.toolkit.watch], ['styles:watch']);

  gulp.task('scripts:watch', ['scripts'], browserSync.reload);
  gulp.watch([config.scripts.fabricator.watch, config.scripts.toolkit.watch], ['scripts:watch']);

  gulp.task('images:watch', ['images'], browserSync.reload);
  gulp.watch(config.images.toolkit.watch, ['images:watch']);

});


/**
 * FTP Deploy (Codereach Staging Server)
 */

gulp.task('ftp:staging', () => {

  const conn = ftp.create( {
    host:     deploy.staging.host,
    user:     deploy.staging.user,
    password: deploy.staging.pass,
    parallel: 10,
    debug:    true,
    log:      plugins.util.log
  });

  const globs = [
    'dist/**',
  ];

  return gulp.src(globs, { base: './dist/', buffer: false })
    .pipe(conn.newer('/web/content'))
    .pipe(conn.dest('/web/content'));
});

gulp.task('deploy:staging', () => {
  runSeq('clean', ['styles','scripts:vendor', 'scripts', 'images','assembler'], 'ftp:staging');
});

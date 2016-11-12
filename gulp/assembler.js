
const assembler   = require('fabricator-assemble');
const config      = require('./config.js');
const gulp        = require('gulp');


/**
 * Assembler
 */

gulp.task('assembler', (done) => {
  assembler({
    logErrors: config.dev,
    dest: config.dest,
  });
  done();
});

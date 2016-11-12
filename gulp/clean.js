
const config  = require('./config.js');
const del     = require('del');
const gulp    = require('gulp');


/**
 * Clean
 */

// clean
gulp.task('clean', del.bind(null, [config.dest]));


const config      = require('./gulp/config.js');
const gulp        = require('gulp');
const guppy       = require('git-guppy')(gulp);
const requireDir  = require('require-dir');
const runSequence = require('run-sequence');
const tasks       = requireDir('./gulp');


/**
 * Default Task
 */

gulp.task('default', ['clean'], () => {

  // define build tasks
  const tasks = [
    'styles',
    'scripts:vendor',
    'scripts',
    'images',
    'assembler',
  ];

  // run build
  runSequence(tasks, () => {
    if (config.dev) {
      gulp.start('serve');
    }
  });
});

// Linting tasks
gulp.task('lint', ['styles:lint', 'scripts:lint', 'html:lint']);

// Test code on commit. Will only commit if the linting tasks pass.
gulp.task('pre-commit', ['lint']);

const gulp = require('gulp');
const webpack = require('webpack-stream');

const sources = {
  html: __dirname + '/build/index.html',
  js: __dirname + '/app.js',
  test: __dirname + '/front_end_testing/angular_test.js'
};

gulp.task('bundle:dev', () => {
  return gulp.src(sources.js)
    .pipe(webpack({output: {filename: 'bundle.js'}}))
    .pipe(gulp.dest('./build'))
});

gulp.task('copy', () => {
  return gulp.src(sources.html)
    .pipe(gulp.dest('./build'))
});

gulp.task('bundle:test', () => {
  return gulp.src(sources.test)
    .pipe(webpack({output: {filename: 'test_bundle.js'}}))
    .pipe(gulp.dest('./front_end_testing/'));
});

gulp.task('default', ['bundle:dev', 'copy']);

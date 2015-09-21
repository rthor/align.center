var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../config');
var errorHandler = require('../utils/error-handler');
var gutil = require('gulp-util');
var wip = gutil.env && gutil.env.wip;

gulp.task('templates', function() {
  return gulp.src(config.source + '/templates/**/*.jade')
    .pipe(jade({
      pretty: config.minify,
      locals: {wip: wip}
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest(config.target));
});

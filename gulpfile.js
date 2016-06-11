'use strict';

var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var rename = require("gulp-rename");
var htmlmin = require('gulp-htmlmin');


gulp.task('vulcanize', function() {
  return gulp.src('components/components.raw.html')
    .pipe(vulcanize({
      stripComments: true,
      inlineScripts: true,
      inlineCss: true,
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyJS: true,
    }))
    .pipe(rename('components.html'))
    .pipe(gulp.dest('components'))
});

gulp.task('default', ['vulcanize']);

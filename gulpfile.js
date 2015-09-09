'use strict';

var gulp = require('gulp')
	, sass = require('gulp-sass')
	
gulp.task('default', ['sass'])

gulp.task('sass', function () {
	gulp.src('./src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('sass:watch', function () {
	gulp.watch('./src/sass/**/*.scss', ['sass'])
})

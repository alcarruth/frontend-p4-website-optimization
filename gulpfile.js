
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var mustache = require('mustache');
var gm = require('gulp-gm');
var compress = require('gulp-yuicompressor');


gulp.task('scripts', function() {
	 gulp.src('src/pizza_app/js/*.js')
		  .pipe(uglify())
		  .pipe(gulp.dest('dist/pizza_app/min_js/'))
});

gulp.task('styles', function() {
	 console.log('styles');
});

gulp.task('images', function() {
	 console.log('images');
});

gulp.task('templates', function() {
	 console.log('templates');
});

gulp.task('default', ['scripts', 'images', 'styles', 'templates']);




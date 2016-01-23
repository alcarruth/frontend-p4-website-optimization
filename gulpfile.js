
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var mustache = require('mustache');
var gm = require('gulp-gm');
var compress = require('gulp-yuicompressor');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');

gulp.task('scripts', function() {
	 gulp.src('src/pizza_app/js/*.js')
		  .pipe(uglify())
		  .pipe(gulp.dest('dist/pizza_app/min_js/'))
});

gulp.task('styles', function() {
	 gulp.src('src/pizza_app/css/*.css')
		  .pipe(compress({
				type: 'css'
		  }))
		  .pipe(gulp.dest('dist/pizza_app/min_css'))
});

gulp.task('images', function() {
    return gulp.src('src/pizza_app/images/*')
        .pipe(imagemin({
            progressive: true,
				optimizationLevel: 1,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('dist/pizza_app/min_images'));
});

gulp.task('templates', function() {
	 console.log('templates');
});

gulp.task('default', ['scripts', 'styles', 'images', 'templates']);




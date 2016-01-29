
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var mustache = require('mustache');
var gm = require('gulp-gm');
var compress = require('gulp-yuicompressor');
//var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');


gulp.task('pizza_app_scripts', function() {
	 gulp.src('pizza_app/src/js/*.js')
		  .pipe(uglify())
		  .pipe(gulp.dest('pizza_app/dist/js_min/'))
});

gulp.task('pizza_app_styles', function() {
	 gulp.src('pizza_app/src/css/*.css')
		  .pipe(compress({
				type: 'css'
		  }))
		  .pipe(gulp.dest('pizza_app/dist/css_min'))
});

gulp.task('pizza_app_images', function() {
    return gulp.src('pizza_app/src/images/*')
        .pipe(imagemin({
            progressive: true,
				optimizationLevel: 1,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('pizza_app/dist/images_min/'));
});

gulp.task('pizza_app_templates', function() {
	 gulp.src('pizza_app/src/html/index.html')
		  .pipe(gulp.dest('pizza_app/dist/'))
});

gulp.task('pizza_app', [
    'pizza_app_scripts',
    'pizza_app_styles',
    'pizza_app_images',
    'pizza_app_templates'
]);

gulp.task('mobile_portfolio_scripts', function() {
	 gulp.src('mobile_portfolio/src/js/*.js')
		  .pipe(uglify())
		  .pipe(gulp.dest('mobile_portfolio/dist/js_min/'))
});

gulp.task('mobile_portfolio_styles', function() {
	 gulp.src('mobile_portfolio/src/css/*.css')
		  .pipe(compress({
				type: 'css'
		  }))
		  .pipe(gulp.dest('mobile_portfolio/dist/css_min'))
});

gulp.task('mobile_portfolio_images', function() {
    return gulp.src('mobile_portfolio/src/images/*')
        .pipe(imagemin({
            progressive: true,
				optimizationLevel: 1,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('mobile_portfolio/dist/images_min/'));
});

gulp.task('mobile_portfolio_templates', function() {
});

gulp.task('mobile_portfolio', [
    'mobile_portfolio_scripts',
    'mobile_portfolio_styles',
    'mobile_portfolio_images',
    'mobile_portfolio_templates'
]);

gulp.task('default', [
    'mobile_portfolio',
    'pizza_app'
]);





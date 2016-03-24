#!/bin/env gulp

// gulpfile.js for Pizza App

var fs = require('fs');
var gulp = require('gulp');
var compress = require('gulp-yuicompressor');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var mustache = require('gulp-mustache');
var del = require('del');
var concat = require('gulp-concat');
var gm = require('gulp-gm');
var rename = require('gulp-rename');

gulp.task('clean', function() {
    return del.sync('dist/*');
});

// JavaScript tasks

gulp.task('scripts', ['clean'], function() {
	 return gulp.src('src/js/*.js')
            .pipe(concat('main.js'))
		      .pipe(gulp.dest('dist/js/'));
});

gulp.task('scripts_min', ['clean'], function() {
	 return gulp.src('src/js/*.js')
            .pipe(concat('main.js'))
		      .pipe(uglify())
		      .pipe(gulp.dest('dist/js/'));
});

// CSS tasks

gulp.task('styles', ['clean'], function() {
	 return gulp.src('src/css/*.css')
		      .pipe(gulp.dest('dist/css/'));
});

gulp.task('styles_min', ['clean'], function() {
	 return gulp.src('src/css/*.css')
		      .pipe(compress({
				    type: 'css'
		      }))
		      .pipe(gulp.dest('dist/css/'));
});

// image tasks

gulp.task('images', ['clean'], function() {

    gulp.src('src/images/pizza.png')
            .pipe(gm(function(gmfile){
                return gmfile.resize(180,233).quality('20%')
            }))
            .pipe(rename('menu_pizza.png'))
            .pipe(gulp.dest('dist/images/'));

    gulp.src('src/images/pizza.png')
            .pipe(gm(function(gmfile){
                return gmfile.resize(77,100).quality('20%')
            }))
            .pipe(rename('sliding_pizza.png'))
            .pipe(gulp.dest('dist/images/'));

    gulp.src('src/images/pizzeria.jpg')
            .pipe(gm(function(gmfile){
                return gmfile
                    .resize(360, 270)
                    .strip()
                    //.gaussian(0.05)
                    .interlace('Plane')
                    .quality('50%');
            }))
            .pipe(gulp.dest('dist/images/'));

//http://stackoverflow.com/questions/7261855/recommendation-for-compressing-jpg-files-with-imagemagick
//convert -strip -interlace Plane -gaussian-blur 0.05 -quality 85% source.jpg result.jpg

    gulp.src('../pizza_app/src/images/pizzeria.jpg')
            .pipe(gm(function(gmfile){
                return gmfile
                        .resize(100)
                        .strip()
                        .interlace('Plane')
                        .quality('80%');
            }))
            .pipe(rename('pizzeria_sm.jpg'))
            .pipe(gulp.dest('dist/images/'));

    return true;
});

// HTML tasks

gulp.task('templates', ['styles', 'scripts'], function() {
    var pizza_template = fs.readFileSync("src/html/pizza_template.html", 'utf-8');
	 gulp.src('src/html/index.html')
            .pipe(mustache({
                style_css: '<link rel="stylesheet" href="css/style.css">',
                pizza_template: pizza_template,
                mustache_js: '<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.2.1/mustache.min.js"></script>',
                main_js: '<script src="js/main.js"></script>'
            }))
		      .pipe(gulp.dest('dist/'));
});

gulp.task('templates_min', ['styles_min', 'scripts_min'], function() {
    var pizza_template = fs.readFileSync("src/html/pizza_template.html", 'utf-8');
	 gulp.src('src/html/index.html')
            .pipe(mustache({
                style_css: '<style>'+ fs.readFileSync('dist/css/style.css') +'</style>',
                pizza_template: pizza_template,
                mustache_js: '<script async src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.2.1/mustache.min.js"></script>',
                main_js: '<script async src="js/main.js"></script>'
            }))
		      .pipe(gulp.dest('dist/'));
});

gulp.task('dist', [
    //'clean',
    'images',
    'scripts_min',
    'styles_min',
    'templates_min'
]);


gulp.task('develop', [
    'clean',
    'images',
    'scripts',
    'styles',
    'templates'
]);

gulp.task('default', [
    'develop'
]);


#!/bin/env gulp

// gulpfile.js for Mobile Portfolio

var fs = require('fs');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var mustache = require('gulp-mustache');
var gm = require('gulp-gm');
var compress = require('gulp-yuicompressor');
var del = require('del');
var imagemin = require('gulp-imagemin')
var htmlmin = require('gulp-htmlmin');
var cleancss = require('gulp-cleancss');

gulp.task('clean', function() {
    return del.sync('dist/*')
});

gulp.task('scripts', ['clean'], function() {
	 return gulp.src('src/js/*.js')
		      .pipe(uglify())
		      .pipe(gulp.dest('dist/js/'));
});

gulp.task('styles', ['clean'], function() {
	 return gulp.src('src/css/*.css')
		      .pipe(cleancss())
		      .pipe(gulp.dest('dist/css/'));
});

gulp.task('images', ['clean'], function() {
    return gulp.src('src/img/*')
            .pipe(gm(function(gmfile){
                return gmfile
                        .resize(100)
                        .strip()
                        .interlace('Plane')
//                        .gaussian(0.05)
                        .quality('80%');
            }))
            .pipe(gulp.dest('dist/img/'));
});

gulp.task('templates', ['styles', 'scripts'], function() {

	 gulp.src('src/html/index.html')
            .pipe(mustache({
                open_sans_css: '<style>'+ fs.readFileSync('dist/css/open-sans.css') +'</style>',
                style_css: '<style>'+ fs.readFileSync('dist/css/style.css') +'</style>',
//                print_css: '<style>'+ fs.readFileSync('dist/css/print.css') +'</style>',
                analitics_profile_js: '<script>' + fs.readFileSync('dist/js/analytics_profile.js') + '</script>',
                analytics_js: '<script async src="//www.google-analytics.com/analytics.js"></script>',
                perfmatters_js: '<script>' + fs.readFileSync('dist/js/perfmatters.js') + '</script>',
                profilepic: '<img class="header" src="img/profilepic.jpg" alt="img/profilepic.jpg">'
            }))
		      .pipe(gulp.dest('dist/'));

	 gulp.src(['src/html/*', '!src/html/index.html'])
		      .pipe(gulp.dest('dist/projects'));
});

gulp.task('default', [
    'clean',
    'scripts',
    'styles',
    'images',
    'templates'
]);




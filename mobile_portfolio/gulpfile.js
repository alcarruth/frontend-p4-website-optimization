#!/bin/env gulp

// gulpfile.js for Mobile Portfolio

var fs = require('fs');
var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var cleancss = require('gulp-cleancss');
var gm = require('gulp-gm');
var mustache = require('gulp-mustache');

gulp.task('clean', function() {
    return del.sync('dist/*')
});

gulp.task('minify_scripts', ['clean'], function() {
	return gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('minify_stylesheets', ['clean'], function() {
	return gulp.src('src/css/*.css')
		.pipe(cleancss())
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('images_min', ['clean'], function() {
    return gulp.src('src/img/profilepic.jpg')
        .pipe(gm(function(gmfile){
            return gmfile
                .resize(70,70)
                .strip()
                //.gaussian('0.05')
                .interlace('Plane')
                .quality('80%');
        }))
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('copy_images', ['clean'], function() {
    return gulp.src(['src/img/*', '!src/img/profilepic.jpg'])
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('render_index_html', ['minify_stylesheets', 'minify_scripts'], function() {
    
    var hash = {
        // inlined stylesheets
        open_sans_css: '<style>'+ fs.readFileSync('dist/css/open-sans.css') +'</style>',
        style_css: '<style>'+ fs.readFileSync('dist/css/style.css') +'</style>',
        print_css: '<style>'+ fs.readFileSync('dist/css/print.css') +'</style>',
        
        // inlined scripts
        analitics_profile_js: '<script>' + fs.readFileSync('dist/js/analytics_profile.js') + '</script>',
        perfmatters_js: '<script>' + fs.readFileSync('dist/js/perfmatters.js') + '</script>',

        // asynchronous script load
        analytics_js: '<script async src="//www.google-analytics.com/analytics.js"></script>',

        // relative paths to images 
        profilepic: '<img class="header" src="img/profilepic.jpg" alt="img/profilepic.jpg">',
    };

	return gulp.src('src/html/index.html')
        .pipe(mustache(hash))
		.pipe(gulp.dest('dist/'));
});

gulp.task('render_other_html', ['minify_stylesheets', 'minify_scripts'], function() {

    var hash = {

        // inlined stylesheets
        open_sans_css: '<style>'+ fs.readFileSync('dist/css/open-sans.css') +'</style>',
        style_css: '<style>'+ fs.readFileSync('dist/css/style.css') +'</style>',
        print_css: '<style>'+ fs.readFileSync('dist/css/print.css') +'</style>',

        // inlined scripts
        analitics_profile_js: '<script>' + fs.readFileSync('dist/js/analytics_profile.js') + '</script>',
        perfmatters_js: '<script>' + fs.readFileSync('dist/js/perfmatters.js') + '</script>',

        // asynchronous script load
        analytics_js: '<script async src="//www.google-analytics.com/analytics.js"></script>',

        // relative paths to images 
        profilepic: '<img class="header" src="../img/profilepic.jpg" alt="profilepic.jpg">',
		mobilewebdev_jpg: '<img src="../img/mobilewebdev.jpg" alt="mobilewebdev.jpg">',
        cam_be_like_jpg: '<img src="../img/cam_be_like.jpg" alt="cam_be_like.jpg">',
    };

	return gulp.src(['src/html/*', '!src/html/index.html'])
        .pipe(mustache(hash))
		.pipe(gulp.dest('dist/projects'));
});

gulp.task('default', [
    'clean',
    'minify_scripts',
    'minify_stylesheets',
    'copy_images',
    'images_min',
    'render_index_html',
    'render_other_html',
]);




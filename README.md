## Udacity FEND Project 4 Website Performance Optimization

### Pre-requisites

This project has been developed in a Linux environment and requires
the following programs to build from scratch:

 - bash
 - node.js
 - yui-compressor
 - imageMagick
 - graphicsmagick
 - gulp

Assuming that you have bash and node already, the others are easily 
installed.

```
$ sudo apt-get install yui-compressor
$ sudo apt-get install imageMagick
$ sudo apt-get install graphicsmagick
$ sudo npm install -g gulp
```

Now you can download, build
and view the website as follows:

```
$ git clone https://github.com/alcarruth/frontend-p4-website-optimization.git
$ cd frontend-p4-website-optimization
$ npm install
$ ./build.sh
```
### Project Overview

The project has been split into two:

 - Pizza App
 - Mobile Portfolio

Each of these has its own subdirectory containing `src`, `dist`, and `gulpfile.js`.

### Optimizations

#### Mobile Portfolio

Stylesheets:
 - webfonts - Open_Sans was downloaded and inlined
 - style.css - minified with gulp-cleancss and inlined
 - print.css - minified with gulp-cleancss and inlined

Scripts:
 - google_analytics_js: `async` property added
 - perfmatters_js:  minified and inlined
 - google_analitics_profile_js: minified and inlined

images:
 - profilepic: compressed
 - mobilewebdev_jpg: compressed
 - cam_be_like_jpg: compressed

#### Pizza App


Stylesheets:
 - webfonts - Open_Sans was downloaded and inlined
 - style.css - minified with gulp-cleancss and inlined
 - print.css - minified with gulp-cleancss and inlined

Scripts:
 - google_analytics_js: `async` property added
 - perfmatters_js:  minified and inlined
 - google_analitics_profile_js: minified and inlined

images:
 - profilepic: compressed
 - mobilewebdev_jpg: compressed
 - cam_be_like_jpg: compressed




#### PageSpeed Insights

#### Resize Pizzas

#### Load Time

#### Update Positions

### Refactoring

 - `timer.js`
 - `animation_loop.js`
 - `pizza_app.js`
 - `pizza_designer.js`
 - `pizza_menu.js`
 - `sliding_pizzas.js`
 - `sliding_pizzas_multi_layer.js`

### Status

### License


#!/bin/bash

FEND_P4_ROOT="../.."
APP="pizza_app"
SRC="$FEND_P4_ROOT/src/$APP/"
DST="$FEND_P4_ROOT/build/$APP/"

JS="js"
CSS="css"
IMG="images"

echo "cleaning"
./clean.sh

# make directories if they don't exist
mkdir ${DST}/${CSS} 2> /dev/null
mkdir ${DST}/${JS} 2> /dev/null
mkdir ${DST}/${IMG} 2> /dev/null

echo "copying JavaScript files"
cp $SRC/${JS}/mustache.min.js ${DST}/${JS}
cp $SRC/${JS}/timer.js ${DST}/${JS}
cp $SRC/${JS}/pizza_designer.js ${DST}/${JS}
cp $SRC/${JS}/pizza_menu.js ${DST}/${JS}
cp $SRC/${JS}/sliding_pizzas.js ${DST}/${JS}
cp $SRC/${JS}/pizza_app.js ${DST}/${JS}
chmod 664 ${DST}/${JS}/*

echo "building main.js"
cat ${DST}/${JS}/timer.js ${DST}/${JS}/pizza_designer.js ${DST}/${JS}/pizza_menu.js \
	 ${DST}/${JS}/sliding_pizzas.js ${DST}/${JS}/pizza_app.js > ${DST}/${JS}/main.js

echo "compressing main.js to main-min.js"
yui-compressor ${DST}/${JS}/main.js > ${DST}/${JS}/main-min.js

echo "copying CSS files"
cp $SRC/${CSS}/style.css ${DST}/${CSS}
chmod 664 ${DST}/${CSS}/*

echo "compressing style.css to style-min.css"
yui-compressor ${DST}/${CSS}/style.css > ${DST}/${CSS}/style-min.css;

echo "copying image files"
cp $SRC/${IMG}/pizza.png ${DST}/${IMG}
cp $SRC/${IMG}/pizza-blk-bg.jpg ${DST}/${IMG}
cp $SRC/${IMG}/pizzeria.jpg ${DST}/${IMG}
chmod 664 ${DST}/${IMG}/*

echo "compressing pizzeria.jpg"
convert ${DST}/${IMG}/pizzeria.jpg -resize 20% -quality 50% ${DST}/${IMG}/pizzeria_md.jpg
convert ${DST}/${IMG}/pizzeria.jpg -resize 20% -quality 20% ${DST}/${IMG}/pizzeria_sm.jpg

echo "building index.html"
./pizza_app.coffee




#!/bin/bash

. ./paths.sh

echo "cleaning"
./clean.sh

# make directories if they don't exist
mkdir \
	 ${DST}/${CSS} \
	 ${DST}/${JS} \
	 ${DST}/${IMG} \
	 2> /dev/null

echo "copying JavaScript files"
cp \
	 $SRC/${JS}/mustache.min.js \
	 ${SRC}/${JS}/animation_loop.js \
	 $SRC/${JS}/timer.js \
	 $SRC/${JS}/pizza_designer.js \
	 $SRC/${JS}/pizza_menu.js \
	 $SRC/${JS}/sliding_pizzas.js \
	 $SRC/${JS}/pizza_app.js \
	 ${DST}/${JS}

echo "building main.js"
cat \
	 ${DST}/${JS}/animation_loop.js \
	 ${DST}/${JS}/timer.js \
	 ${DST}/${JS}/pizza_designer.js \
	 ${DST}/${JS}/pizza_menu.js \
	 ${DST}/${JS}/sliding_pizzas.js \
	 ${DST}/${JS}/pizza_app.js \
	 > ${DST}/${JS}/main.js

chmod 664 ${DST}/${JS}/*

echo "compressing main.js to main-min.js"
yui-compressor ${DST}/${JS}/main.js > ${DST}/${JS}/main-min.js

echo "copying CSS files"
cp $SRC/${CSS}/style.css ${DST}/${CSS}
chmod 664 ${DST}/${CSS}/*

echo "compressing style.css to style-min.css"
yui-compressor ${DST}/${CSS}/style.css > ${DST}/${CSS}/style-min.css;

echo "copying image files"
cp $SRC/${IMG}/pizza.png ${DST}/${IMG}
cp $SRC/${IMG}/pizza-blk-bg-sm.jpg ${DST}/${IMG}
cp $SRC/${IMG}/pizzeria.jpg ${DST}/${IMG}
chmod 664 ${DST}/${IMG}/*

echo "compressing pizzeria.jpg"
convert ${DST}/${IMG}/pizzeria.jpg -resize 20% -quality 50% ${DST}/${IMG}/pizzeria_md.jpg
convert ${DST}/${IMG}/pizzeria.jpg -resize 20% -quality 20% ${DST}/${IMG}/pizzeria_sm.jpg

echo "building index.html"
./pizza_app.coffee




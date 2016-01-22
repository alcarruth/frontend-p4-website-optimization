#!/bin/bash

. ./paths.sh

echo "cleaning"
./clean.sh

# make directories if they don't exist
mkdir ${DST}/${CSS} 2> /dev/null
mkdir ${DST}/${JS} 2> /dev/null
mkdir ${DST}/${IMG} 2> /dev/null
mkdir ${DST}/${PROJECTS} 2> /dev/null

echo "copying JavaScript files"
cp ${SRC}/${JS}/perfmatters.js ${DST}/${JS}
cp ${SRC}/${JS}/analytics.js ${DST}/${JS}
cp ${SRC}/${JS}/analytics_profile.js ${DST}/${JS}
chmod 664 ${DST}/${JS}/*

echo "compressing JavaScript files"
yui-compressor ${DST}/${JS}/perfmatters.js > ${DST}/${JS}/perfmatters-min.js
yui-compressor ${DST}/${JS}/analytics.js > ${DST}/${JS}/analytics-min.js
yui-compressor ${DST}/${JS}/analytics_profile.js > ${DST}/${JS}/analytics_profile-min.js

echo "copying CSS files"
cp ${SRC}/${CSS}/open-sans.css ${DST}/${CSS}
cp ${SRC}/${CSS}/style.css ${DST}/${CSS}
cp ${SRC}/${CSS}/print.css ${DST}/${CSS}
chmod 664 ${DST}/${CSS}/*

echo "compressing CSS files"
yui-compressor ${DST}/${CSS}/open-sans.css > ${DST}/${CSS}/open-sans-min.css;
yui-compressor ${DST}/${CSS}/style.css > ${DST}/${CSS}/style-min.css;
yui-compressor ${DST}/${CSS}/print.css > ${DST}/${CSS}/print-min.css;

echo copying image files
cp ${SRC}/${IMG}/2048.png ${DST}/${IMG}
cp ${SRC}/${IMG}/cam_be_like.jpg ${DST}/${IMG}
cp ${SRC}/${IMG}/mobilewebdev.jpg ${DST}/${IMG}
cp ${SRC}/${IMG}/profilepic.jpg ${DST}/${IMG}
chmod 664 ${DST}/${IMG}/*

echo compressing image files
convert ${DST}/${IMG}/2048.png ${DST}/${IMG}/2048.jpg;
convert ${DST}/${IMG}/2048.jpg -quality 50% ${DST}/${IMG}/2048-q50.jpg;
convert ${DST}/${IMG}/cam_be_like.jpg -quality 50% ${DST}/${IMG}/cam_be_like-q50.jpg;
convert ${DST}/${IMG}/mobilewebdev.jpg -quality 50% ${DST}/${IMG}/mobilewebdev-q50.jpg;
convert ${DST}/${IMG}/profilepic.jpg -quality 50% ${DST}/${IMG}/profilepic-q50.jpg;

echo "building html files"
./mobile_portfolio.coffee


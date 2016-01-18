#!/bin/bash

JS="js"
CSS="css"
IMG="img"

yui-compressor $JS/perfmatters.js > $JS/perfmatters-min.js
yui-compressor $CSS/open-sans.css > $CSS/open-sans-min.css;
yui-compressor $CSS/style.css > $CSS/style-min.css;
yui-compressor $CSS/print.css > $CSS/print-min.css;

convert $IMG/2048.png $IMG/2048.jpg;
convert $IMG/2048.jpg -quality 50% $IMG/2048-q50.jpg;
convert $IMG/cam_be_like.jpg -quality 50% $IMG/cam_be_like-q50.jpg;
convert $IMG/mobilewebdev.jpg -quality 50% $IMG/mobilewebdev-q50.jpg;
convert $IMG/profilepic.jpg -quality 50% $IMG/profilepic-q50.jpg;



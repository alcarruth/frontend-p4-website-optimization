#!/bin/bash

JS="js"
CSS="css"
IMG="images"

echo "removing JS files"
rm $JS/* 2> /dev/null

echo "removing CSS files"
rm $CSS/* 2> /dev/null

echo "removing image files"
rm $IMG/* 2> /dev/null

echo "removing index.html"
rm index.html 2> /dev/null




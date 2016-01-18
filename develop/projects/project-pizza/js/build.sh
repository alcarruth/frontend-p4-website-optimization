#!/bin/bash

# output files:
#   pizza.js
#   pizza-min.js
#   mustache.min.js 

# input files:
#   mustache.min.js 
#   timer.js
#   pizza_designer.js
#   pizza_menu.js
#   sliding_pizzas.js
#   pizza_app.js

cat timer.js pizza_designer.js pizza_menu.js sliding_pizzas.js pizza_app.js > pizza.js;
yui-compressor pizza.js > pizza-min.js;

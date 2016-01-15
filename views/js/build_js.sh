
cat pizza_designer/pizza_designer.js \
    pizza_menu/pizza_menu.js \
	 sliding_pizzas/sliding_pizzas.js\
    > pizza.js

yui-compressor pizza.js > pizza-min.js

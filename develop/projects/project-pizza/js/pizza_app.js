//------------------------------------------------------------------------------------------------------
// main.js

function Pizza_App() {

	 // adjust these to suit
	 var pizza_menu_size = 72;
	 var sliding_pizza_rows = 10;
	 var sliding_pizza_cols = 8;

	 // leave these alone :-)
	 var pizza_designer = Pizza_Designer();
	 var timer_wrap = Timer().wrap;
	 var pizza_menu = Pizza_Menu( pizza_designer, pizza_menu_size, timer_wrap);
	 var sliding_pizzas = Sliding_Pizzas_Background(sliding_pizza_rows, sliding_pizza_cols, timer_wrap);

	 function init() {
		  pizza_menu.init();
		  sliding_pizzas.init();
	 }

	 return {
		  pizza_menu: pizza_menu,
		  sliding_pizzas: sliding_pizzas,
		  init: init
	 };
}

window.onload = function() {
	 window.pizza_app = Pizza_App();
	 window.pizza_app.init();
}
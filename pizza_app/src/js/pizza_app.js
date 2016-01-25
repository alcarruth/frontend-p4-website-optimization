//------------------------------------------------------------------------------------------------------
// main.js

function PizzaApp() {

	 // adjust these to suit
<<<<<<< HEAD
	 var pizzaMenuSize = 100;
	 var slidingPizzaRows = 6;
	 var slidingPizzaCols = 8;
=======
	 var pizza_menu_size = 100;
	 var sliding_pizza_rows = 7;
	 var sliding_pizza_cols = 8;
>>>>>>> cf5a96807d33439ab61662cf474fb806ab3b6905

	 // leave these alone :-)
	 var pizzaDesigner = PizzaDesigner();
	 var pizzaMenu = PizzaMenu( pizzaDesigner, pizzaMenuSize);
	 var slidingPizzas = SlidingPizzasBackground(slidingPizzaRows, slidingPizzaCols);

	 function init() {
		  pizzaMenu.init();
		  slidingPizzas.init();
	 }

	 return {
		  pizzaMenu: pizzaMenu,
		  slidingPizzas: slidingPizzas,
		  init: init
	 };
}

window.onload = function() {
	 window.pizzaApp = PizzaApp();
	 window.pizzaApp.init();
}

//------------------------------------------------------------------------------------------------------
// main.js

function PizzaApp() {

	 // adjust these to suit

	 var pizzaMenuSize = 100;
	 var slidingPizzaRows = 6;
	 var slidingPizzaCols = 8;

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

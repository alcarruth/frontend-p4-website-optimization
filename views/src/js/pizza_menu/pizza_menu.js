
var pizzas;
var pizza_size = document.querySelector("#pizza-size");
var pizza_menu = document.getElementById("pizza-menu");
var pizza_menu_template = document.getElementById('pizza-menu-template').innerHTML;

function timer_wrap(unique_id, func) {

    return function() {
		  
		  var mark_start = "mark_start_" + unique_id;
		  var mark_end = "mark_end_" + unique_id;
		  var measure = "measure_" + unique_id;
		  var times;

        window.performance.mark(mark_start);
        
        func(); // the function call to be timed

        window.performance.mark(mark_end);
        window.performance.measure(measure, mark_start, mark_end);
		  times = window.performance.getEntriesByName(measure);

		  return times;
   }
}

function resize_pizzas(size) { 

	 var times = timer_wrap("resize", function() {

		  var size_text = { 1: "Small", 2: "Medium", 3: "Large" }[size];
		  var tile_size = { 1: '25%', 2: '33%', 3: '50%' }[size];

		  pizza_size.innerHTML = size_text;

		  for (var i=0; i<pizzas.length; i++) {
				pizzas[i].element.style.width = tile_size;
		  }
	 })();

    console.log("Time to resize pizzas: " + times[0].duration + "ms");
};

function generate_menu(num_pizzas) {

	 var times = timer_wrap('generate', function() {

		  pizzas = []; //global

		  //var pizza_menu = document.getElementById("pizza-menu");
		  //var pizza_menu_template = document.getElementById('pizza-menu-template').innerHTML;

		  var i;

		  for (i=0; i < num_pizzas; i++) {
				pizza = window.random_pizza('pizza_' + i);
				pizzas.push(pizza);
		  }
		  pizza_menu.innerHTML = Mustache.render(pizza_menu_template, {pizzas: pizzas});

		  for (i in pizzas) {
				pizza = pizzas[i];
				pizza.element = document.getElementById(pizza.id);
		  }

	 })();

	 console.log("Time to generate pizzas on load: " + times[0].duration + "ms");
}


var pizza_menu;

window.onload = function() {
	 pizza_menu = generate_menu(72);
};

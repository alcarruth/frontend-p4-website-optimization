

// Pizza_Menu: pseudo class constructor
//
//  - returns a plain javascript object (aka 'dict', 'hash')
//
//  - assumes the existence of the following externals:
//    - function Timer()
//    - function Pizza_Designer()

function Pizza_Menu( pizza_designer, pizza_menu_size) {

	 // array pizzas holds the pizzas returned by the calls
	 // to pizza_designer in generate_pizzas() below
	 var pizzas = [];

	 // the following properties are initialized in 
	 // method init() below.
	 var pizza_size;
	 var size_slider;
	 var pizza_menu;
	 var pizza_menu_template;

    //---------------------------------------------------------------------------------

	 function resize_pizzas(size) { 
		  var text = { 1: "Small", 2: "Medium", 3: "Large" }[size];
		  var width = { 1: '25%', 2: '33%', 3: '50%' }[size];
		  pizza_size.innerHTML = text;
		  for (var i=0; i<pizzas.length; i++) {
				pizzas[i].element.style.width = width;
		  }
    }

    function log_resize(times) {
		  console.log("Time to resize pizzas: " + times[0].duration + "ms")
    }

    var timed_resize_pizzas =  timer_wrap("resize", resize_pizzas, log_resize);

    //---------------------------------------------------------------------------------

	 function generate_pizzas() {
		  var pizza;
		  for (var i=0; i < pizza_menu_size; i++) {
				pizza = pizza_designer('pizza_' + i);
				pizzas.push(pizza);
		  }
		  pizza_menu.innerHTML = Mustache.render(pizza_menu_template, {pizzas: pizzas});
		  for (i in pizzas) {
				pizza = pizzas[i];
				pizza.element = document.getElementById(pizza.id);
		  }
	 }

    function log_generate(times) {
		  console.log("Time to generate pizzas on load: " + times[0].duration + "ms");
    }
        
    var timed_generate_pizzas = timer_wrap('generate', generate_pizzas, log_generate);

    //---------------------------------------------------------------------------------

	 function init() {
		  pizza_size = document.querySelector("#pizza-size");
		  size_slider = document.querySelector("#size-slider");
		  //size_slider.resize_pizzas = resize_pizzas;
	     //size_slider.resize_pizzas = timed_resize_pizzas;
		  size_slider.onchange = function(){
				timed_resize_pizzas(this.value);
		  }
		  pizza_menu = document.getElementById("pizza-menu");
		  pizza_menu_template = document.getElementById('pizza-menu-template').innerHTML;
        //generate_pizzas();
        timed_generate_pizzas();
    }

	 return {
		  init: init,
		  pizzas: pizzas,
    }
}

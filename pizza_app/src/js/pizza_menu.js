

// PizzaMenu: pseudo class constructor
//
//  - returns a plain javascript object (aka 'dict', 'hash')
//
//  - assumes the existence of the following externals:
//    - function Timer()
//    - function PizzaDesigner()

function PizzaMenu( pizzaDesigner, pizzaMenuSize) {

	 // array pizzas holds the pizzas returned by the calls
	 // to pizzaDesigner in generatePizzas() below
	 var pizzas = [];

	 // the following properties are initialized in 
	 // method init() below.
	 var pizzaSize;
	 var sizeSlider;
	 var pizzaMenu;
	 var pizzaMenuTemplate;

    //---------------------------------------------------------------------------------

	 function resizePizzas(size) { 
		  var text = { 1: "Small", 2: "Medium", 3: "Large" }[size];
		  var width = { 1: '25%', 2: '33%', 3: '50%' }[size];
		  pizzaSize.innerHTML = text;
		  for (var i=0; i<pizzas.length; i++) {
				pizzas[i].element.style.width = width;
		  }
    }

    function logResize(times) {
		  console.log("Time to resize pizzas: " + times[times.length-1].duration + "ms")
    }

    var timedResizePizzas =  timerWrap("resize", resizePizzas, logResize);

    //---------------------------------------------------------------------------------

	 function generatePizzas() {
		  var pizza;
		  for (var i=0; i < pizzaMenuSize; i++) {
				pizza = pizzaDesigner('pizza_' + i);
				pizzas.push(pizza);
		  }
		  pizzaMenu.innerHTML = Mustache.render(pizzaMenuTemplate, {pizzas: pizzas});
		  for (i in pizzas) {
				pizza = pizzas[i];
				pizza.element = document.getElementById(pizza.id);
		  }
	 }

    function logGenerate(times) {
		  console.log("Time to generate pizzas on load: " + times[0].duration + "ms");
    }
        
    var timedGeneratePizzas = timerWrap('generate', generatePizzas, logGenerate);

    //---------------------------------------------------------------------------------

	 function init() {
		  pizzaSize = document.querySelector("#pizza-size");
		  sizeSlider = document.querySelector("#size-slider");
		  //sizeSlider.resizePizzas = resizePizzas;
	     //sizeSlider.resizePizzas = timedResizePizzas;
		  sizeSlider.onchange = function(){
				timedResizePizzas(this.value);
		  }
		  pizzaMenu = document.getElementById("pizza-menu");
		  pizzaMenuTemplate = document.getElementById('pizza-menu-template').innerHTML;
        //generatePizzas();
        timedGeneratePizzas();
    }

	 return {
		  init: init,
		  pizzas: pizzas,
    }
}

// -----------------------------------------------------------------------------------
// pizzaElement constructor
//   args:
//     - id: unique pizza id
//     - img_url: pizza image url
//     - name: the name of the pizza
//     - ingredients: list of ingredients
// 
//var PizzaElement = function(id, img_url, name, ingredients) {

var PizzaElement = function(pizza) {
    var imageElement;
    var imageContainer;    // pizza image container (necessary ?)
    var description;       // contains pizza name and list of ingredients
    var pizzaElement;      // contains pizza image and description

    // description container, bottom up

    name = document.createElement("h4");
    name.innerHTML = randomName();

    ingredients = document.createElement("ul");
    ingredients.innerHTML = pizza.ingredients; 

    description = document.createElement("div");
    description.classList.add("col-md-6");
    description.appendChild(pizza.name);
    description.appendChild(pizza.ingredients);

    // image container, bottom up

    imageElement = document.createElement("img");
    imageElement.src = pizza.img_url;
    imageElement.classList.add("img-responsive");

    imageContainer = document.createElement("div");
    imageContainer.classList.add("col-md-6");
    imageContainer.appendChild(imageElement);

    // pizza element 
    pizzaElement  = document.createElement("div");
    pizzaElement.id = id;
    pizzaElement.classList.add("randomPizzaContainer");
    pizzaElement.style.width = "33.33%";
    pizzaElement.style.height = "325px";
    pizzaElement.appendChild(imageContainer);
    pizzaElement.appendChild(description);

    return pizzaElement;
};

//---------------------------------------------------------------------------------------------------------
// Pizza Menu View class

function determineDx (elem, size) {
    var oldwidth = elem.offsetWidth;
    var windowwidth = document.querySelector("#randomPizzas").offsetWidth;
    var oldsize = oldwidth / windowwidth;
    var newsize = 1.0 / (5 - size)
    return (newsize - oldsize) * windowwidth;
}

function resizePizzas(size) { 
    window.performance.mark("mark_start_resize");   // User Timing API function

    var elt = document.querySelector("#pizzaSize")
    var sizes = { 1: "Small", 2: "Medium", 3: "Large" }
    elt.innerHTML = sizes[size];

    var pizzas = document.querySelectorAll(".randomPizzaContainer")
    var pizza = pizzas[0];



    var dx = determineDx(pizza, size);
    var newwidth = (pizza.offsetWidth + dx) + 'px';
    for (var i=0; i<pizzas.length; i++) {
        pizzas[i].style.width = newwidth;



        // use style.transform('scale(

    }

    window.performance.mark("mark_end_resize");
    window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
    var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
    console.log("Time to resize pizzas: " + timeToResize[0].duration + "ms");
};

//---------------------------------------------------------------------------------------------------

window.performance.mark("mark_start_generating"); // collect timing data

// This for-loop actually creates and appends all of the pizzas when the page loads


var pizzasDiv = document.getElementById("randomPizzas");
var pizzas = [];

for (var i=0; i < 200; i++) {

    pizza = {
        id: "pizza" + i
        img: "images/pizza.png";
        name: random_name();
        ingredients: random_ingredients();
    }
    pizzas.push(pizza);
    pizzasDiv.appendChild(PizzaElement(pizza));
}

window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation",
 "mark_start_generating",
 "mark_end_generating");
var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");

//---------------------------------------------------------------------------------------------------

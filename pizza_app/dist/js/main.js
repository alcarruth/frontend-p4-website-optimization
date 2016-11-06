//------------------------------------------------------------------------------
// Function animationLoop() is pretty interesting I think.
//
// There is an inherent mismatch between the window which emits a 'scroll'
// event, and the requestAnimationFrame() loop (tail-recursive function)
// which should continue as long as a 'scrolling' __condition__ is true.
//
// That is to say, we have two distinct notions here: 'events' and 
// 'condition'.  This code here recognizes that and maps 'scroll'
// events to the 'scrolling' condition.
// 
// Function foo() is called inside the animation loop.
// Argument dt is used to timeout the condition.
//
// The number of events and number of times the looper is run are logged.
//
// Also, note that the code here does not mention 'scroll' or 'scrolling'.
// It seems to me that this relation between events and conditions is
// more general than scrolling and so might be applied elsewhere.
//
// It also might be more general than animating, but here I have it
// relying on requestAnimationFrame().  I'm not sure where else it
// might make sense.
//
function animationLoop(foo, dt) {

    var eventCount = 0;
    var condition = false;
    var conditionCount = 0;
    var looperRunning = false;
    var timeout = null;

    function looper() {

        // BUG Fixed.
        //
        // It's possible that, while we were gone, 'condition' was 
        // falsified by a timeout and then set again by a new event.  
        //
        // If this has happened we'll end up with more than one looper
        // active, and then we'll get more than one requestAnimationFrame() 
        // in the same frame.
        // 
        // So I've introduced another boolean 'looperRunning' which is 
        // set when looper() is started by eventListener() and cleared
        // when looper() exits.
        // 
        // Now, when an event is received, eventListener() checks this 
        // new flag and does not start another looper() if one is currently
        // running.

        if (condition) {
            foo();
            requestAnimationFrame(looper);
        }
        else {
            looperRunning = false;
        }
    }

    function timeoutHandler() {
        console.log('eventCount: ' + eventCount);
        condition = false;
    }

    function eventListener() {

        eventCount++;
        clearTimeout(timeout);
        timeout = setTimeout(timeoutHandler, dt);

        if (!condition) {
            condition = true;
            conditionCount++;
            console.log('conditionCount: ' + conditionCount);

            // see BUG Fixed. above
            if (!looperRunning) {
                looperRunning = true;
                requestAnimationFrame(looper);
            }
        }
    }

    return eventListener;
}



//-------------------------------------------------------------------------------------------
// class PizzaApp
//

function PizzaApp() {

	// adjust these to suit
	var pizzaMenuSize = 100;
	var slidingPizzaRows = 5;
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
};

//--------------------------------------------------------------------------------------
// PizzaDesigner() returns a function wrapped in a closure with its 
// supporting definitions.  Calling the returned function
// generates a "semantic pizza".
//
// What? Never had a semantic pizza?  Never even _heard_ of it?  Well
// you're in for a treat!  You've heard of gluten free, lactose free,
// vegan, paleo ...  Well semantic pizzas are DOM free.  
//
// And they're not only delicious, they are good for you.  That's right,
// no hard to digest elements, tags, selectors and such to clog the ol'
// pipeline, just pure delicious JavaScript strings, arrays, and
// objects, suitable for use either client side or server side.  So,
// dine in, or take'n'bake, it' up to you!
//

function PizzaDesigner() {

	// pizza ingredients

	var meats = [
		"Pepperoni", "Sausage", "Fennel Sausage", "Spicy Sausage", 
		"Chicken", "BBQ Chicken", "Chorizo", "Chicken Andouille",
		"Salami", "Tofu", "Bacon", "Canadian Bacon", "Proscuitto",
		"Italian Sausage", "Ground Beef", "Anchovies", "Turkey", 
		"Ham", "Venison", "Lamb", "Duck", "Soylent Green", "Carne Asada",
		"Soppressata Picante", "Coppa", "Pancetta", "Bresola", "Lox",
		"Guanciale", "Chili", "Beef Jerky", "Pastrami", "Kielbasa", 
		"Scallops", "Filet Mignon"
    ];

	var nonMeats = [
		"White Onions", "Red Onions", "Sauteed Onions", 
		"Green Peppers", "Red Peppers", "Banana Peppers",
		"Ghost Peppers", "Habanero Peppers", "Jalapeno Peppers",
		"Stuffed Peppers", "Spinach", "Tomatoes", "Pineapple",
		"Pear Slices", "Apple Slices", "Mushrooms", "Arugula",
		"Basil", "Fennel", "Rosemary", "Cilantro", "Avocado", 
		"Guacamole", "Salsa", "Swiss Chard", "Kale", 
		"Sun Dried Tomatoes", "Walnuts", "Artichoke", "Asparagus",
		"Caramelized Onions", "Mango", "Garlic", "Olives",
		"Cauliflower", "Polenta", "Fried Egg", "Zucchini", "Hummus"
    ];

	var cheeses = [ 
		"American Cheese", "Swiss Cheese", "Goat Cheese",
		"Mozzarella Cheese", "Parmesean Cheese", "Velveeta Cheese",
		"Gouda Cheese", "Muenster Cheese", "Applewood Cheese", 
		"Asiago Cheese", "Bleu Cheese", "Boursin Cheese",
		"Brie Cheese", "Cheddar Cheese", "Chevre Cheese",
		"Havarti Cheese", "Jack Cheese", "Pepper Jack Cheese",
		"Gruyere Cheese", "Limberger Cheese", "Manchego Cheese",
		"Marscapone Cheese", "Pecorino Cheese", "Provolone Cheese",
		"Queso Cheese", "Roquefort Cheese", "Romano Cheese",
		"Ricotta Cheese", "Smoked Gouda"
    ];
    
	var sauces = [
		"Red Sauce", "Marinara", "BBQ Sauce", "No Sauce", "Hot Sauce"
    ];
    
	var crusts = [
		"White Crust", "Whole Wheat Crust", "Flatbread Crust", "Stuffed Crust"
    ];

	// object containing lists of adjectives by category

	var adjectives = {

		dark: [
			"Dark", "Morbid", "Scary", "Spooky", "Gothic", "Deviant",
			"Creepy", "Sadistic", "Black", "Dangerous", "Dejected",
			"Haunted", "Morose", "Tragic", "Shattered", "Broken", 
			"Sad", "Melancholy", "Somber", "Dark", "Gloomy",
			"Homicidal", "Murderous", "Shady", "Misty", "Dusky",
			"Ghostly", "Shadowy", "Demented", "Cursed", "Insane",
			"Possessed", "Grotesque", "Obsessed"],

		colors: [
			"Blue", "Green", "Purple", "Grey", "Scarlet",
			"Neongreen", "Neonblue", "Neonpink", "Hotpink", "Pink",
			"Black", "Red", "Maroon", "Silver", "Golden", "Yellow",
			"Orange", "Mustard", "Plum", "Violet", "Cerulean",
			"Brown", "Lavender", "Violet", "Chestnut", "Rosy",
			"Copper", "Crimson", "Teal", "Indigo", "Navy", "Azure",
			"Periwinkle", "Brassy", "Verdigris", "Veridian", "Tan",
			"Raspberry", "Beige", "Sandy", "Electricblue", "White",
			"Champagne", "Magenta", "Coral", "Cyan"],

		whimsy: [
			"Whimsical", "Silly", "Drunken", "Goofy", "Funny",
			"Weird", "Strange", "Odd", "Playful", "Clever",
			"Boastful", "Breakdancing", "Peculiar", "Hilarious",
			"Conceited", "Happy", "Comical", "Curious", "Sleepy",
			"Quaint", "Quirky", "Fancy", "Wayward", "Fickle",
			"Yawning", "Smiling", "Cockeyed", "Dizzy", "Dancing",
			"Absurd", "Laughing", "Hairy", "Perplexed", "Baffled",
			"Cockamamie", "Vulgar", "Hoodwinked", "Brainwashed"],

		shiny: [
			"Sapphire", "Opal", "Silver", "Gold", "Platinum", "Ruby",
			"Emerald", "Diamond", "Amethyst", "Turquoise", "Topaz",
			"Amber", "Garnet", "Starlit", "Moonlit", "Bronze",
			"Metal", "Jade", "Brass", "Brassy", "Obsidian", "Onyx",
			"Pearl", "Copper", "Sunlit", "Metallic"],

		noisy: [
			"Untuned", "Loud", "Soft", "Shrieking", "Melodious",
			"Musical", "Symphonic", "Dancing", "Lyrical", "Harmonic",
			"Operatic", "Orchestral", "Noisy", "Dissonant",
			"Rhythmic", "Hissing", "Singing", "Crooning", "Shouting",
			"Screaming", "Wailing", "Crying", "Howling", "Yelling",
			"Hollering", "Caterwauling", "Bawling", "Bellowing",
			"Squealing", "Beeping", "Knocking", "Tapping", "Rapping",
			"Humming", "Scatting", "Whispered", "Whispering",
			"Rasping", "Buzzing", "Whirring", "Whistling",
			"Whistled", "Roaring", ],

		apocalyptic: [
			"Nuclear", "Apocalyptic", "Desolate", "Atomic",
			"Zombie", "Collapsed", "Grim", "Fallen",
			"Collapsed", "Cannibalistic", "Radioactive",
			"Toxic", "Poisonous", "Venomous", "Disastrous",
			"Grimy", "Dirty", "Undead", "Bloodshot", "Rusty",
			"Glowing", "Decaying", "Rotten", "Deadly",
			"Plagued", "Decimated", "Rotting", "Putrid",
			"Decayed", "Deserted", "Acidic"],

		insulting: [
			"Stupid", "Idiotic", "Fat", "Ugly", "Hideous",
			"Grotesque", "Dumb", "Dull", "Lazy", "Sluggish",
			"Brainless", "Slow", "Gullible", "Obtuse", "Dense",
			"Dim", "Dazed", "Ridiculous", "Witless", "Daft",
			"Crazy", "Vapid", "Inane", "Mundane", "Hollow",
			"Vacuous", "Boring", "Insipid", "Tedious",
			"Monotonous", "Weird", "Bizarre", "Backward",
			"Moronic", "Ignorant", "Scatterbrained", "Forgetful",
			"Careless", "Lethargic", "Insolent", "Indolent",
			"Loitering", "Gross", "Disgusting", "Bland",
			"Horrid", "Unseemly", "Revolting", "Homely",
			"Deformed", "Disfigured", "Offensive", "Cowardly",
			"Weak", "Villainous", "Fearful", "Monstrous",
			"Unattractive", "Unpleasant", "Nasty", "Beastly",
			"Snide", "Horrible", "Syncophantic", "Unhelpful",
			"Bootlicking"],

		praise: [
			"Beautiful", "Intelligent", "Smart", "Genius",
			"Ingenious", "Gorgeous", "Pretty", "Witty", "Angelic",
			"Handsome", "Graceful", "Talented", "Exquisite",
			"Enchanting", "Fascinating", "Interesting", "Divine",
			"Alluring", "Ravishing", "Wonderful", "Magnificient",
			"Marvelous", "Dazzling", "Cute", "Charming",
			"Attractive", "Nifty", "Delightful", "Superior",
			"Amiable", "Gentle", "Heroic", "Courageous", "Valiant",
			"Brave", "Noble", "Daring", "Fearless", "Gallant",
			"Adventurous", "Cool", "Enthusiastic", "Fierce",
			"Awesome", "Radical", "Tubular", "Fearsome", "Majestic",
			"Grand", "Stunning"],

		scientific: [
			"Scientific", "Technical", "Digital", "Programming",
			"Calculating", "Formulating", "Cyberpunk",
			"Mechanical", "Technological", "Innovative",
			"Brainy", "Chemical", "Quantum", "Astro", "Space",
			"Theoretical", "Atomic", "Electronic", "Gaseous",
			"Investigative", "Solar", "Extinct", "Galactic"],

	};  // end of adjectives


	// object containing lists of nouns by category

	var nouns = {

		animals: [
			"Flamingo", "Hedgehog", "Owl", "Elephant", "Pussycat",
			"Alligator", "Dachsund", "Poodle", "Beagle",
			"Crocodile", "Kangaroo", "Wallaby", "Woodpecker",
			"Eagle", "Falcon", "Canary", "Parrot", "Parakeet",
			"Hamster", "Gerbil", "Squirrel", "Rat", "Dove",
			"Toucan", "Raccoon", "Vulture", "Peacock", "Goldfish",
			"Rook", "Koala", "Skunk", "Goat", "Rooster", "Fox",
			"Porcupine", "Llama", "Grasshopper", "Gorilla",
			"Monkey", "Seahorse", "Wombat", "Wolf", "Giraffe",
			"Badger", "Lion", "Mouse", "Beetle", "Cricket",
			"Nightingale", "Hawk", "Trout", "Squid", "Octopus",
			"Sloth", "Snail", "Locust", "Baboon", "Lemur",
			"Meerkat", "Oyster", "Frog", "Toad", "Jellyfish",
			"Butterfly", "Caterpillar", "Tiger", "Hyena", "Zebra",
			"Snail", "Pig", "Weasel", "Donkey", "Penguin", "Crane",
			"Buzzard", "Vulture", "Rhino", "Hippopotamus",
			"Dolphin", "Sparrow", "Beaver", "Moose", "Minnow",
			"Otter", "Bat", "Mongoose", "Swan", "Firefly",
			"Platypus"],

		professions: [
			"Doctor", "Lawyer", "Ninja", "Writer", "Samurai",
			"Surgeon", "Clerk", "Artist", "Actor", "Engineer",
			"Mechanic", "Comedian", "Fireman", "Nurse",
			"Rockstar", "Musician", "Carpenter", "Plumber",
			"Cashier", "Electrician", "Waiter", "President",
			"Governor", "Senator", "Scientist", "Programmer",
			"Singer", "Dancer", "Director", "Mayor",
			"Merchant", "Detective", "Investigator",
			"Navigator", "Pilot", "Priest", "Cowboy",
			"Stagehand", "Soldier", "Ambassador", "Pirate",
			"Miner", "Police"],

		fantasy: [
			"Centaur", "Wizard", "Gnome", "Orc", "Troll", "Sword",
			"Fairy", "Pegasus", "Halfling", "Elf", "Changeling",
			"Ghost", "Knight", "Squire", "Magician", "Witch",
			"Warlock", "Unicorn", "Dragon", "Wyvern", "Princess",
			"Prince", "King", "Queen", "Jester", "Tower", "Castle",
			"Kraken", "Seamonster", "Mermaid", "Psychic", "Seer",
			"Oracle"],

		music: [
			"Violin", "Flute", "Bagpipe", "Guitar", "Symphony",
			"Orchestra", "Piano", "Trombone", "Tuba", "Opera",
			"Drums", "Harpsichord", "Harp", "Harmonica", "Accordion",
			"Tenor", "Soprano", "Baritone", "Cello", "Viola",
			"Piccolo", "Ukelele", "Woodwind", "Saxophone", "Bugle",
			"Trumpet", "Sousaphone", "Cornet", "Stradivarius",
			"Marimbas", "Bells", "Timpani", "Bongos", "Clarinet",
			"Recorder", "Oboe", "Conductor", "Singer"],

		horror: [
			"Murderer", "Chainsaw", "Knife", "Sword", "Murder",
			"Devil", "Killer", "Psycho", "Ghost", "Monster",
			"Godzilla", "Werewolf", "Vampire", "Demon", "Graveyard",
			"Zombie", "Mummy", "Curse", "Death", "Grave", "Tomb",
			"Beast", "Nightmare", "Frankenstein", "Specter",
			"Poltergeist", "Wraith", "Corpse", "Scream", "Massacre",
			"Cannibal", "Skull", "Bones", "Undertaker", "Zombie",
			"Creature", "Mask", "Psychopath", "Fiend", "Satanist",
			"Moon", "Fullmoon"],

		gross: [
			"Slime", "Bug", "Roach", "Fluid", "Pus", "Booger",
			"Spit", "Boil", "Blister", "Orifice", "Secretion",
			"Mucus", "Phlegm", "Centipede", "Beetle", "Fart", "Snot",
			"Crevice", "Flatulence", "Juice", "Mold", "Mildew",
			"Germs", "Discharge", "Toilet", "Udder", "Odor",
			"Substance", "Fluid", "Moisture", "Garbage", "Trash",
			"Bug"],

		everyday: [
			"Mirror", "Knife", "Fork", "Spork", "Spoon",
			"Tupperware", "Minivan", "Suburb", "Lamp", "Desk",
			"Stereo", "Television", "TV", "Book", "Car", "Truck",
			"Soda", "Door", "Video", "Game", "Computer",
			"Calender", "Tree", "Plant", "Flower", "Chimney",
			"Attic", "Kitchen", "Garden", "School", "Wallet",
			"Bottle"],

		jewelry: [
			"Earrings", "Ring", "Necklace", "Pendant", "Choker",
			"Brooch", "Bracelet", "Cameo", "Charm", "Bauble",
			"Trinket", "Jewelry", "Anklet", "Bangle", "Locket",
			"Finery", "Crown", "Tiara", "Blingbling", "Chain",
			"Rosary", "Jewel", "Gemstone", "Beads", "Armband",
			"Pin", "Costume", "Ornament", "Treasure"],

		places: [
			"Swamp", "Graveyard", "Cemetery", "Park", "Building",
			"House", "River", "Ocean", "Sea", "Field", "Forest",
			"Woods", "Neighborhood", "City", "Town", "Suburb",
			"Country", "Meadow", "Cliffs", "Lake", "Stream",
			"Creek", "School", "College", "University", "Library",
			"Bakery", "Shop", "Store", "Theater", "Garden",
			"Canyon", "Highway", "Restaurant", "Cafe", "Diner",
			"Street", "Road", "Freeway", "Alley"],

		scifi: [
			"Robot", "Alien", "Raygun", "Spaceship", "Ufo", "Rocket",
			"Phaser", "Astronaut", "Spaceman", "Planet", "Star",
			"Galaxy", "Computer", "Future", "Timemachine",
			"Wormhole", "Timetraveler", "Scientist", "Invention",
			"Martian", "Pluto", "Jupiter", "Saturn", "Mars",
			"Quasar", "Blackhole", "Warpdrive", "Laser", "Orbit",
			"Gears", "Molecule", "Electron", "Neutrino", "Proton",
			"Experiment", "Photon", "Apparatus", "Universe",
			"Gravity", "Darkmatter", "Constellation", "Circuit",
			"Asteroid"],

	};  // End Of Nouns

	//--------------------------------------------------------
	// Returns a list of the objects values.
	//
	function flatten(obj) {
		var xs = [];
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            xs = xs.concat(obj[keys[i]]);
		}
		return xs;
	}

    nouns = flatten(nouns);
    adjectives = flatten(adjectives);

	//--------------------------------------------------------
	// random selection from list
	//
	function chooseOne(list) {
		var i = Math.floor( Math.random() * list.length);
		return list[i];
	}

	//--------------------------------------------------------
	// Randomly select multiple items from list.
	// Arg nums is a list of the allowable number of items
	// to choose.  See how it's used in randomIngredients()
	//
	function chooseSome(list, nums) {
		var chosen = [];
        var numChoices = chooseOne(nums);
		for (var i = 0; i < numChoices; i++) {
			chosen.push(chooseOne(list));
		}
		return chosen;
	}

	//--------------------------------------------------------
    // Randomly generate a list of ingredients
    //
	function randomIngredients() {
		var ingredients = {
			meats: chooseSome(meats, [0,1,2,3]),
			nonMeats: chooseSome(nonMeats, [0,1,2]),
			cheeses: chooseSome(cheeses, [0,1,2]),
			sauce: chooseOne(sauces),
			crust: chooseOne(crusts),
		};
		return ingredients;
	}

	//--------------------------------------------------------
    // Randomly generate a name for the pizza
    //
	function randomPizzaName() {
		var noun = chooseOne(nouns);
		var adjective = chooseOne(adjectives);
		return 'The ' + adjective + ' ' + noun;
	}

    // Pre-defined pizzas
    var specialPizzas = [
        {
	        id: "pizza_0",
	        name: "The Udacity Special",
	        ingredients: {
		        meats: [ "Turkey", "Tofu" ],
		        nonMeats: [ "Cauliflower", "Sun Dried Tomatoes" ],
		        cheeses: ["Velveeta Cheese" ],
		        sauce: "Red Sauce",
		        crust: "Whole Wheat Crust"
            },
	        imgURL: 'images/menu_pizza.png'
        },
        {
	        id: "pizza_1",
	        name: "The Cameron Special",
	        ingredients: { 
                meats: [ "Chicken" ],
                nonMeats: [ "Hot Sauce" ] ,
                cheeses: [],
                sauce: "No Sauce",
                crust: "White Crust"
            },
	        imgURL: 'images/menu_pizza.png'
        }
    ];

	//--------------------------------------------------------
    // Randomly generate a "semantic" pizza
    //
	function randomPizza(id) {
		return {
			id: id,
			name: randomPizzaName(),
			ingredients: randomIngredients(),
			imgURL: 'images/menu_pizza.png'
		};
	}

	return {
        randomPizza: randomPizza,
        specialPizzas: specialPizzas
    };

} // end PizzaDesigner.





//--------------------------------------------------------------------------------------
// PizzaMenu: class constructor
//
//  PizzaMenu requires:
//  - function Timer() (from timer.js)
//  - function PizzaDesigner() (from pizza_designer.js)

function PizzaMenu( pizzaDesigner, pizzaMenuSize) {

	// array pizzas holds the pizzas returned by the calls
	// to pizzaDesigner in generatePizzas() below
	var pizzas = [];

	// the following properties are initialized in 
	// method init() below.
	var pizzaSize;
	var sizeSlider;
	var pizzaMenu;

    // pizzaMenuTemplate is a mustache template included in index.html.
    // It is initialized and used in generatePizzas() below.
	var pizzaMenuTemplate;

    //---------------------------------------------------------------------------------

    // Just the pure slider logic here.
    // The select statements have been replaced with obj literals.
    // The timing code has been extracted and generalized in timer.js
    // And the logging code has been put in a separate function (below)
    //
	function resizePizzas() { 
        var size = sizeSlider.value;
		var text = { 1: "Small", 2: "Medium", 3: "Large" }[size];
		var width = { 1: '25%', 2: '33%', 3: '50%' }[size];
		pizzaSize.innerHTML = text;
		for (var i=0; i<pizzas.length; i++) {
			pizzas[i].element.style.width = width;
		}
    }

    // function logResize() is passed to timer during init()
    function logResize(times) {
		console.log("Time to resize pizzas: " + times[times.length-1].duration + "ms");
    }

    //---------------------------------------------------------------------------------

    // generatePizzas() is called from init() when the page is loaded.
    // The timing code has been extracted and generalized in timer.js
    // And the logging code has been put in a separate function (below)
    //
	function generatePizzas() {
		var pizza;
        var i;

        pizzas = pizzaDesigner.specialPizzas;

        // create the "semantic" pizzas (see pizza_designer.js)
        // i starts at end of the list so far.
		for (i = pizzas.length; i < pizzaMenuSize; i++) {
			pizza = pizzaDesigner.randomPizza('pizza_' + i);
			pizzas.push(pizza);
		}
        // get the template from the document and render the html views for
        // the pizzas on the menu.
		pizzaMenuTemplate = document.getElementById('pizza-menu-template').innerHTML;
		pizzaMenu.innerHTML = Mustache.render(pizzaMenuTemplate, {pizzas: pizzas});
		for (i = 0; i < pizzas.length; i++) {
			pizza = pizzas[i];
			pizza.element = document.getElementById(pizza.id);
		}
	}

    // function logGenerate() is passed to timer during init()
    function logGenerate(times) {
		console.log("Time to generate pizzas on load: " + times[0].duration + "ms");
    }

    //---------------------------------------------------------------------------------

	function init() {

        // hook into the html
		pizzaSize = document.querySelector("#pizza-size");
		sizeSlider = document.querySelector("#size-slider");
		pizzaMenu = document.getElementById("pizza-menu");

        // hook resizePizzas() to the slider
        sizeSlider.onchange = timerWrap("resize", resizePizzas, logResize);

        // run generatePizzas()
        timerWrap('generate', generatePizzas, logGenerate)();
    }

	return {
		init: init,
		pizzas: pizzas,
    };

} // end PizzaMenu: class constructor




//----------------------------------------------------------------------------------------
// SlidingPizza() constructs a sliding pizza object.
//
function SlidingPizza(bg, imgSrc, row, col, sx, sy) {

    var className = 'sliding-pizza';
    var x = col * sx;
    var y = row * sy;
    var img = document.createElement('img');

    img.className = className;
    img.src = imgSrc;
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    bg.appendChild(img);

    function updatePosition(dx, dy) {
        img.style.transform = 'translateX(' + dx + 'px)';
    }

    // I believe only updatePosition() is used externally
    // (by updatePositions()).
    return {
        bg: bg,
        img: img,
        row: row,
        col: col,
        updatePosition: updatePosition
    };

} // end SlidingPizza.


//----------------------------------------------------------------------------------------
// SlidingPizzasBackground() constructs the crazy background.
//
function SlidingPizzasBackground(rows, cols) {

    var bg;           // background element
    var pizzas = [];  // array of sliding pizzas
    var sx = 256;     // spacing
    var sy = 256;
    var frame = 0;    // frame count
	
    //-----------------------------------------------------------------------
	// method generateSlidingPizzas() 
    //
    function generateSlidingPizzas() {

        // In an attempt to speed things up, I made the sliding
        // pizza images opaque with a black blackground.  I thought
        // these might be easier to composte. 
        // TODO: measure it.  It might not make much difference and
        // making the pizza images opaque means that they have to 
        // match the page's background color.

        var imgSrc = "images/sliding_pizza.png";
        var pizza;
        bg = document.getElementById('sliding-pizzas');

        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                pizza = SlidingPizza(bg, imgSrc, row, col, sx, sy);
                pizzas.push(pizza);
            }
        }
        updatePositions();
    }

    //-----------------------------------------------------------------------
	// method updatePositions()
    //
    var updatePositions = function() {

        // Here I've pulled the trigonometry out of the inner loop 
        // since there are only 5 phases.  We compute the phase once
        // and then run the inner loop for each pizza having that phase.
        //
        // TODO: Try putting each phase on a separate layer and moving
        // them by translateX'ing the layer as a whole.
        //
        // TODO: Make the number of phases a parameter to the constructor.
        // I bet any number that is relatively prime to the 
        // number of columns would have the crazy look to it.

		var i, j, phase;
		var top = document.body.scrollTop;
		frame++;
        
		for (i = 0; i < 5; i++) {
			phase = Math.sin((top / 1250) + i);
			for (j = i; j < pizzas.length; j += 5) {
				pizzas[j].updatePosition(100 * phase, 0);
			}
		}
    };

    //-----------------------------------------------------------------------
    // logUpdateTimes(): log the average time it took for the past
    // sampleSize updates.  I broke it out as a separate function
    // which can be passed to generalized timerWrap() function.
    //
    // Also, with my new animation looper, some additional things
    // (loops and events) are logged.  logUpdateTimes() produced
    // so much output that the animation log got lost in the shuffle.
    // So I changed the sample size to reduce the amount logged.
    //
	function logUpdateTimes(times) {
		var sampleSize = 100;
		var sum = 0;
		var msg = "Average time to generate last " + sampleSize + " frames: ";

        if (times.length % sampleSize === 0) {
		    for (var i = times.length-sampleSize; i < times.length; i++) {
				sum = sum + times[i].duration;
		    }
		    console.log(msg + sum / sampleSize + "ms");
        }
	}

    //-----------------------------------------------------------------------
	// method init()
    //
	function init() {
        // wrap updatePositions() with the timer (see timer.js)
		updatePositions = timerWrap('update', updatePositions, logUpdateTimes);
        window.addEventListener('scroll', animationLoop(updatePositions, 500));
		generateSlidingPizzas();	
	}

    // How many of these are used externally?  Only init() I think.
    // The others may be handy for browsing in DevTools.
    return {
        cols: cols,
        rows: rows,
        sx: sx,
        sy: sy,
        pizzas: pizzas,
        bg: bg,
		updatePositions: updatePositions,
		generateSlidingPizzas: generateSlidingPizzas,
        init: init
    };

} // end SlidingPizzas.



//------------------------------------------------------------------------------
// Function timerWrap() generalizes the timing code from the original project.
//
// It is used in this project to wrap three functions:
// - resizePizzas()
// - generatePizzas()
// - updatePositions()
//
// arguments:
// - uniqueID a string used to construct the 'mark' and 'measure' strings
// - func: the function to be wrapped.
// - cb: a callback to be applied to the times array,
//       always a logging function in this project.
//
function timerWrap(uniqueID, func, cb) {

	return function() {
		
		var markStart = "markStart_" + uniqueID;
		var markEnd = "markEnd_" + uniqueID;
		var measure = "measure_" + uniqueID;
		var times;
        
		window.performance.mark(markStart);
		
		func.apply(this, arguments); // the function call to be timed
        
		window.performance.mark(markEnd);
		window.performance.measure(measure, markStart, markEnd);
		times = window.performance.getEntriesByName(measure);
        
		return cb(times);
	};
}




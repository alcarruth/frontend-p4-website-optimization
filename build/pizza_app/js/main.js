
function Timer() {

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

	 return {
		  wrap: timer_wrap
	 }
}


Pizza_Designer = function() {

	 // pizza ingredients

	 var ingredients = {

		  meats: [
				"Pepperoni", "Sausage", "Fennel Sausage", "Spicy Sausage", 
				"Chicken", "BBQ Chicken", "Chorizo", "Chicken Andouille",
				"Salami", "Tofu", "Bacon", "Canadian Bacon", "Proscuitto",
				"Italian Sausage", "Ground Beef", "Anchovies", "Turkey", 
				"Ham", "Venison", "Lamb", "Duck", "Soylent Green", "Carne Asada",
				"Soppressata Picante", "Coppa", "Pancetta", "Bresola", "Lox",
				"Guanciale", "Chili", "Beef Jerky", "Pastrami", "Kielbasa", 
				"Scallops", "Filet Mignon" ],

		  non_meats: [
				"White Onions", "Red Onions", "Sauteed Onions", 
				"Green Peppers", "Red Peppers", "Banana Peppers",
				"Ghost Peppers", "Habanero Peppers", "Jalapeno Peppers",
				"Stuffed Peppers", "Spinach", "Tomatoes", "Pineapple",
				"Pear Slices", "Apple Slices", "Mushrooms", "Arugula",
				"Basil", "Fennel", "Rosemary", "Cilantro", "Avocado", 
				"Guacamole", "Salsa", "Swiss Chard", "Kale", 
				"Sun Dried Tomatoes", "Walnuts", "Artichoke", "Asparagus",
				"Caramelized Onions", "Mango", "Garlic", "Olives",
				"Cauliflower", "Polenta", "Fried Egg", "Zucchini", "Hummus" ],

		  cheeses: [ 
				"American Cheese", "Swiss Cheese", "Goat Cheese",
				"Mozzarella Cheese", "Parmesean Cheese", "Velveeta Cheese",
				"Gouda Cheese", "Muenster Cheese", "Applewood Cheese", 
				"Asiago Cheese", "Bleu Cheese", "Boursin Cheese",
				"Brie Cheese", "Cheddar Cheese", "Chevre Cheese",
				"Havarti Cheese", "Jack Cheese", "Pepper Jack Cheese",
				"Gruyere Cheese", "Limberger Cheese", "Manchego Cheese",
				"Marscapone Cheese", "Pecorino Cheese", "Provolone Cheese",
				"Queso Cheese", "Roquefort Cheese", "Romano Cheese",
				"Ricotta Cheese", "Smoked Gouda" ],

		  sauces: [
				"Red Sauce", "Marinara", "BBQ Sauce", "No Sauce", "Hot Sauce" ],

		  crusts: [
				"White Crust", "Whole Wheat Crust", "Flatbread Crust", "Stuffed Crust" ],
	 }

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

	 }  // end of adjectives


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

	 }  // End Of Nouns


	 //--------------------------------------------------------
	 // Concatenates An Object'S Values
	 // And Throws Away The Keys
	 //
	 function flatten(obj) {
		  var xs = [];
		  var key;
		  for (key in obj) {
				xs = xs.concat(obj[key]);
		  }
		  return xs;
	 }

	 //--------------------------------------------------------
	 // random selection from list
	 //
	 function choose_one(list) {
		  var i = Math.floor( Math.random() * list.length);
		  return list[i];
	 }

	 //--------------------------------------------------------
	 // random selection of multiple items from list
	 // (with replacement)
	 //
	 // arg nums is a list of the allowable number of items
	 // to choose.
	 //
	 function choose_some(list, nums) {
		  var chosen = [];
		  for (var i=0; i<choose_one(nums); i++) {
				chosen.push(choose_one(list));
		  }
		  return chosen;
	 }

	 //--------------------------------------------------------
	 // Capitalize word
	 // this is no longer used here because I pre-capitalized 
	 // the lists.
	 //
	 function capitalize(word) {
		  var initial = word.charAt(0).toUpperCase();
		  var rest = word.slice(1).toLowerCase();
		  return initial + rest;
	 }

	 var meats = ingredients.meats;
	 var non_meats = ingredients.non_meats;
	 var cheeses = ingredients.cheeses;
	 var sauces = ingredients.sauces;
	 var crusts = ingredients.crusts;
	 var adjectives = flatten(adjectives);
	 var nouns = flatten(nouns);

	 function random_ingredients() {
		  var ingredients = {
				meats: choose_some(meats, [0,1,2,3]),
				non_meats: choose_some(non_meats, [0,1,2]),
				cheeses: choose_some(cheeses, [0,1,2]),
				sauce: choose_one(sauces),
				crust: choose_one(crusts),
		  };
		  return ingredients;
	 }

	 function random_pizza_name() {
		  var noun = choose_one(nouns);
		  var adjective = choose_one(adjectives);
		  return 'The ' + adjective + ' ' + noun;
	 }

	 /*
		Semantic Pizza
		---------------
		What? Never had a semantic pizza?  Never even _heard_ of it?  Well
		you're in for a treat!  You've heard of gluten free, lactose free,
		vegan, paleo ...  Well semantic pizzas are DOM free.  

		And they're not only delicious, they are good for you.  That's right,
		no hard to digest elements, tags, selectors and such to clog the ol'
		pipeline, just pure delicious JavaScript strings, arrays, and
		objects, suitable for use either client side or server side.  So,
		dine in, or take'n'bake, it' up to you!
	 */

	 function random_pizza(id) {
		  return {
				id: id,
				name: random_pizza_name(),
				ingredients: random_ingredients(),
				img_url: 'images/pizza.png'
		  };
	 }

	 return random_pizza;
}


// Pizza_Menu: pseudo class constructor
//
//  - returns a plain javascript object (aka 'dict', 'hash')
//
//  - assumes the existence of the following externals:
//    - function Timer()
//    - function Pizza_Designer()

function Pizza_Menu( pizza_designer, pizza_menu_size, timer_wrap) {

	 // array pizzas holds the pizzas returned by the calls
	 // to pizza_designer in generate_pizzas() below
	 var pizzas = [];

	 // the following properties are initialized in 
	 // method init() below.
	 var pizza_size;
	 var size_slider;
	 var pizza_menu;
	 var pizza_menu_template;

	 // timed method to resize the pizza images on the menu
	 function resize_pizzas(size) { 

		  var times = timer_wrap("resize", function() {
				var text = { 1: "Small", 2: "Medium", 3: "Large" }[size];
				var width = { 1: '25%', 2: '33%', 3: '50%' }[size];
				pizza_size.innerHTML = text;
				for (var i=0; i<pizzas.length; i++) {
					 pizzas[i].element.style.width = width;
				}
		  })();
		  console.log("Time to resize pizzas: " + times[0].duration + "ms");
	 };

	 // timed method to generate the pizza menu items
	 function generate_pizzas() {

		  var times = timer_wrap('generate', function() {
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

		  })();
		  console.log("Time to generate pizzas on load: " + times[0].duration + "ms");
	 }

	 function init() {
		  pizza_size = document.querySelector("#pizza-size");
		  size_slider = document.querySelector("#size-slider");
		  size_slider.resize_pizzas = resize_pizzas;
		  size_slider.onchange = function(){
				resize_pizzas(this.value);
		  }
		  pizza_menu = document.getElementById("pizza-menu");
		  pizza_menu_template = document.getElementById('pizza-menu-template').innerHTML;
		  generate_pizzas();
	 }

	 return {
		  init: init,
		  pizzas: pizzas,
		  resize_pizzas: resize_pizzas
	 };
}
//------------------------------------------------------------------------------------------------------
// sliding_pizzas.js

// constructor for a sliding pizza object
function Sliding_Pizza(bg, img_src, row, col, height, width, sx, sy) {

    var className = 'sliding-pizza';
    var x = col * sx;
    var y = row * sy;
    var img = document.createElement('img');
    var dx, dy;

    img.className = className;
    img.src = img_src;
    img.style.height = height;
    img.style.width = width;
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    bg.appendChild(img);

    function update_position(dx, dy) {
        img.style.transform = 'translateX(' + dx + 'px)';
    }

    return {
        bg: bg,
        img: img,
        row: row,
        col: col,
        x: x,
        y: y,
        sx: sx,
        sy: sy,
        dx: 0,
        dy: 0,
        update_position: update_position
    }
}

// constructor
function Sliding_Pizzas_Background(rows, cols, timer_wrap) {

    var bg;           // background element
    var pizzas = [];  // array of sliding pizzas
    var sx = 256;     // spacing
    var sy = 256;
    var frame = 0;    // frame count
	 
	 // method
    function generate_sliding_pizzas() {

        var img_src = "images/pizza.png";
        var height = "100px";
        var width = "73.333px";

		  bg = document.querySelector("#sliding-pizzas")

        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                pizza = Sliding_Pizza(bg, img_src, row, col, height, width, sx, sy);
                pizzas.push(pizza);
            }
        }
        scrolling = true;
        update_positions();
    }

	 // Thank you MDN!
	 // https://developer.mozilla.org/en-US/docs/Web/Events/scroll
	 //
	 (function() {
		  var throttle = function(type, name, obj) {
				obj = obj || window;
				var running = false;
				var func = function() {
					 if (running) { return; }
					 running = true;
					 requestAnimationFrame(function() {
						  obj.dispatchEvent(new CustomEvent(name));
						  running = false;
					 });
				};
				obj.addEventListener(type, func);
		  };
		  
		  // init - you can init any event 
		  throttle ("scroll", "optimizedScroll");
	 })();

	 function log_update_times(times) {
		  var sum = 0;
		  for (var i = times.length-10; i < times.length; i++) {
				sum = sum + times[i].duration;
		  }
		  console.log("Average time to generate last 10 frames: " + sum / 10 + "ms");
	 }

    // 'scrolling' is a boolean flag
    //   - set by event listener
    //   - tested and cleared by update_positions()
	 var scrolling = false;

    // 'updating' is a boolean flag
    //   - set and cleared by update_positions()
    //   - tested by scroll event listener
	 var updating = false;

	 // method update_positions()
    function update_positions() {

        // remember, we're in a loop
        // the scrolling flag may have been set again by the 
        // scroll event listener, and if so we update positions

        if (scrolling) {

            // clear the flag, indicating that we are handling the
            // scroll event that got us here.  If another scroll
            // event occurs while we're updating, we'll know about it
            // next time around.

            scrolling = false;

            // setting this flag tells the event listener that we
            // are already working on it, so no need to request another
            // animation frame, we'll take care of that here, right
            // after we update positions and log.

            updating = true;

		      // As if things weren' convoluted enough already, 
            // we wrap the updating code with a timer.
            // The timer_wrap function is just a generalized
            // abstraction of the _highly_touted_ window.performance
            // code used here previously and a couple other spots.
            // (see frame.js)

		      var times = timer_wrap("frame", function() {

                // now we actually do the updating. 
                // time's a wastin' and the early bird gets
                // the worm so rise and shine and git'r'done.

				    var i, j, phase;
				    var top = document.body.scrollTop;
				    frame++;

                // I opted for a nested loop approach here.  I didn't
                // want to do the trigonometry in the inner loop, but
                // it's value depends on the loop var.  But since it
                // i%5 there were only 5 of them, so we do them in the
                // outer loop and do the corresponding updates in the
                // inner loop. Note that the inner loop var j starts
                // at i and is incremented by 5 each time thru.

				    for (i = 0; i < 5; i++) {
					     phase = Math.sin((top / 1250) + i);
					     for (j = i; j < pizzas.length; j += 5) {
						      pizzas[j].update_position(100 * phase, 0);
					     }
				    }
            // all these parens and curly braces are starting to get
            // to me :-) emacs helps me keep them straight. We have
            // here the end of the anoymous function definition, the
            // closing of the time_wrap( param list, and the
            // invocation of the timer wrapped update function.

            })();

            // Let the boss know how're we doin'.
		      if (frame % 10 === 0) {
				    log_update_times(times);
		      }

            // Since another scroll event might have come in while we
            // were working, we go 'round again.  We'll check the
            // scrolling flag at the top.

            requestAnimationFrame(update_positions);
        }
        else {

            // We're no longer scrolling so exit the tail-recursive
            // loop.  Clearing the updating flag let's the event
            // handler know that next time it gets a scroll event it
            // needs to fire us up again.

            updating = false;
        }
	 }

	 // method init()
	 function init() {

        // There is an intricate tango going on between this event
        // listener and the update_positions() function.  The
        // optimizedScroll event is a throttled version of 'scroll'.
        // It's not clear to me whether we're better off with it
        // or just 'scroll' considering that we're managing our
        // own animation frame requests.  

		  window.addEventListener('optimizedScroll', function() {

            // The 'scrolling' flag indicates to update_functions()
            // that a scroll event has occurred.

            scrolling = true;

            // If update_positions() is already working, don't bother
            // it, but if it is not then fire it up.

            if (!updating) {
                requestAnimationFrame(update_positions);
            }
		  });

		  generate_sliding_pizzas();	
	 }

   return {
        cols: cols,
        rows: rows,
        sx: sx,
        sy: sy,
        pizzas: pizzas,
        bg: bg,
		  update_positions: update_positions,
		  generate_sliding_pizzas: generate_sliding_pizzas,
        init: init
    }
}


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


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

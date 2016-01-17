
//****************************************************************************************
// Pizza class with a randomized constructor
//

var pizzaIngredients = {};

pizzaIngredients.meats = [
    "Pepperoni",
    "Sausage",
    "Fennel Sausage", 
    "Spicy Sausage",
    "Chicken", 
    "BBQ Chicken",
    "Chorizo",
    "Chicken Andouille",
    "Salami",
    "Tofu",
    "Bacon",
    "Canadian Bacon",
    "Proscuitto",
    "Italian Sausage",
    "Ground Beef",
    "Anchovies",
    "Turkey",
    "Ham",
    "Venison",
    "Lamb",
    "Duck",
    "Soylent Green",
    "Carne Asada",
    "Soppressata Picante",
    "Coppa",
    "Pancetta",
    "Bresola",
    "Lox",
    "Guanciale",
    "Chili",
    "Beef Jerky",
    "Pastrami",
    "Kielbasa",
    "Scallops",
    "Filet Mignon"

];

pizzaIngredients.nonMeats = [
    "White Onions",
    "Red Onions",
    "Sauteed Onions",
    "Green Peppers",
    "Red Peppers",
    "Banana Peppers",
    "Ghost Peppers",
    "Habanero Peppers",
    "Jalapeno Peppers",
    "Stuffed Peppers",
    "Spinach",
    "Tomatoes",
    "Pineapple",
    "Pear Slices",
    "Apple Slices",
    "Mushrooms",
    "Arugula",
    "Basil",
    "Fennel",
    "Rosemary",
    "Cilantro",
    "Avocado",
    "Guacamole",
    "Salsa",
    "Swiss Chard",
    "Kale",
    "Sun Dried Tomatoes",
    "Walnuts",
    "Artichoke",
    "Asparagus",
    "Caramelized Onions",
    "Mango",
    "Garlic",
    "Olives",
    "Cauliflower",
    "Polenta",
    "Fried Egg",
    "Zucchini",
    "Hummus"
];
pizzaIngredients.cheeses = [
    "American Cheese",
    "Swiss Cheese",
    "Goat Cheese",
    "Mozzarella Cheese",
    "Parmesean Cheese",
    "Velveeta Cheese",
    "Gouda Cheese",
    "Muenster Cheese",
    "Applewood Cheese",
    "Asiago Cheese",
    "Bleu Cheese",
    "Boursin Cheese",
    "Brie Cheese",
    "Cheddar Cheese",
    "Chevre Cheese",
    "Havarti Cheese",
    "Jack Cheese",
    "Pepper Jack Cheese",
    "Gruyere Cheese",
    "Limberger Cheese",
    "Manchego Cheese",
    "Marscapone Cheese",
    "Pecorino Cheese",
    "Provolone Cheese",
    "Queso Cheese",
    "Roquefort Cheese",
    "Romano Cheese",
    "Ricotta Cheese",
    "Smoked Gouda"
];
pizzaIngredients.sauces = [
    "Red Sauce",
    "Marinara",
    "BBQ Sauce",
    "No Sauce",
    "Hot Sauce"
];
pizzaIngredients.crusts = [
    "White Crust",
    "Whole Wheat Crust",
    "Flatbread Crust",
    "Stuffed Crust"
];

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// Pulls adjective out of array using random number sent from generator
function getAdj(x){
    switch(x) {
    case "dark": 
        var dark = [
            "dark",
            "morbid",
            "scary",
            "spooky",
            "gothic",
            "deviant",
            "creepy",
            "sadistic",
            "black",
            "dangerous",
            "dejected",
            "haunted",
            "morose",
            "tragic",
            "shattered",
            "broken",
            "sad",
            "melancholy",
            "somber",
            "dark",
            "gloomy",
            "homicidal",
            "murderous",
            "shady",
            "misty",
            "dusky",
            "ghostly",
            "shadowy",
            "demented",
            "cursed",
            "insane",
            "possessed",
            "grotesque",
            "obsessed"];
        return dark;

    case "color": 
        var colors = [
            "blue",
            "green",
            "purple",
            "grey",
            "scarlet",
            "NeonGreen",
            "NeonBlue",
            "NeonPink",
            "HotPink",
            "pink",
            "black",
            "red",
            "maroon",
            "silver",
            "golden",
            "yellow",
            "orange",
            "mustard",
            "plum",
            "violet",
            "cerulean",
            "brown",
            "lavender",
            "violet",
            "chestnut",
            "rosy",
            "copper",
            "crimson",
            "teal",
            "indigo",
            "navy",
            "azure",
            "periwinkle",
            "brassy",
            "verdigris",
            "veridian",
            "tan",
            "raspberry",
            "beige",
            "sandy",
            "ElectricBlue",
            "white",
            "champagne",
            "magenta",
            "coral",
            "cyan"];
        return colors;

    case "whimsical": 
        var whimsy = [
            "whimsical",
            "silly",
            "drunken",
            "goofy",
            "funny",
            "weird",
            "strange",
            "odd",
            "playful",
            "clever",
            "boastful",
            "breakdancing",
            "peculiar",
            "hilarious",
            "conceited",
            "happy",
            "comical",
            "curious",
            "sleepy",
            "quaint",
            "quirky",
            "fancy",
            "wayward",
            "fickle",
            "yawning",
            "smiling",
            "cockeyed",
            "dizzy",
            "dancing",
            "absurd",
            "laughing",
            "hairy",
            "perplexed",
            "baffled",
            "cockamamie",
            "vulgar",
            "hoodwinked",
            "brainwashed"];
        return whimsy;

    case "shiny":
        var shiny = [
            "sapphire",
            "opal",
            "silver",
            "gold",
            "platinum",
            "ruby",
            "emerald",
            "diamond",
            "amethyst",
            "turquoise",
            "topaz",
            "amber",
            "garnet",
            "starlit",
            "moonlit",
            "bronze",
            "metal",
            "jade",
            "brass",
            "brassy",
            "obsidian",
            "onyx",
            "pearl",
            "copper",
            "sunlit",
            "metallic"];
        return shiny;

    case "noisy":
        var noisy = [
            "untuned",
            "loud",
            "soft",
            "shrieking",
            "melodious",
            "musical",
            "symphonic",
            "dancing",
            "lyrical",
            "harmonic",
            "operatic",
            "orchestral",
            "noisy",
            "dissonant",
            "rhythmic",
            "hissing",
            "singing",
            "crooning",
            "shouting",
            "screaming",
            "wailing",
            "crying",
            "howling",
            "yelling",
            "hollering",
            "caterwauling",
            "bawling",
            "bellowing",
            "squealing",
            "beeping",
            "knocking",
            "tapping",
            "rapping",
            "humming",
            "scatting",
            "whispered",
            "whispering",
            "rasping",
            "buzzing",
            "whirring",
            "whistling",
            "whistled",
            "roaring",
        ];
        return noisy;

    case "apocalyptic":
        var apocalyptic = [
            "nuclear",
            "apocalyptic",
            "desolate",
            "atomic",
            "zombie",
            "collapsed",
            "grim",
            "fallen",
            "collapsed",
            "cannibalistic",
            "radioactive",
            "toxic",
            "poisonous",
            "venomous",
            "disastrous",
            "grimy",
            "dirty",
            "undead",
            "bloodshot",
            "rusty",
            "glowing",
            "decaying",
            "rotten",
            "deadly",
            "plagued",
            "decimated",
            "rotting",
            "putrid",
            "decayed",
            "deserted",
            "acidic"];
        return apocalyptic;

    case "insulting":
        var insulting = [
            "stupid",
            "idiotic",
            "fat",
            "ugly",
            "hideous",
            "grotesque",
            "dumb",
            "dull",
            "lazy",
            "sluggish",
            "brainless",
            "slow",
            "gullible",
            "obtuse",
            "dense",
            "dim",
            "dazed",
            "ridiculous",
            "witless",
            "daft",
            "crazy",
            "vapid",
            "inane",
            "mundane",
            "hollow",
            "vacuous",
            "boring",
            "insipid",
            "tedious",
            "monotonous",
            "weird",
            "bizarre",
            "backward",
            "moronic",
            "ignorant",
            "scatterbrained",
            "forgetful",
            "careless",
            "lethargic",
            "insolent",
            "indolent",
            "loitering",
            "gross",
            "disgusting",
            "bland",
            "horrid",
            "unseemly",
            "revolting",
            "homely",
            "deformed",
            "disfigured",
            "offensive",
            "cowardly",
            "weak",
            "villainous",
            "fearful",
            "monstrous",
            "unattractive",
            "unpleasant",
            "nasty",
            "beastly",
            "snide",
            "horrible",
            "syncophantic",
            "unhelpful",
            "bootlicking"];
        return insulting;

    case "praise":
        var praise = [
            "beautiful",
            "intelligent",
            "smart",
            "genius",
            "ingenious",
            "gorgeous",
            "pretty",
            "witty",
            "angelic",
            "handsome",
            "graceful",
            "talented",
            "exquisite",
            "enchanting",
            "fascinating",
            "interesting",
            "divine",
            "alluring",
            "ravishing",
            "wonderful",
            "magnificient",
            "marvelous",
            "dazzling",
            "cute",
            "charming",
            "attractive",
            "nifty",
            "delightful",
            "superior",
            "amiable",
            "gentle",
            "heroic",
            "courageous",
            "valiant",
            "brave",
            "noble",
            "daring",
            "fearless",
            "gallant",
            "adventurous",
            "cool",
            "enthusiastic",
            "fierce",
            "awesome",
            "radical",
            "tubular",
            "fearsome",
            "majestic",
            "grand",
            "stunning"];
        return praise;

    case "scientific":
        var scientific = [
            "scientific",
            "technical",
            "digital",
            "programming",
            "calculating",
            "formulating",
            "cyberpunk",
            "mechanical",
            "technological",
            "innovative",
            "brainy",
            "chemical",
            "quantum",
            "astro",
            "space",
            "theoretical",
            "atomic",
            "electronic",
            "gaseous",
            "investigative",
            "solar",
            "extinct",
            "galactic"];
        return scientific;

    default:
        var scientific_default = [
            "scientific",
            "technical",
            "digital",
            "programming",
            "calculating",
            "formulating",
            "cyberpunk",
            "mechanical",
            "technological",
            "innovative",
            "brainy",
            "chemical",
            "quantum",
            "astro",
            "space",
            "theoretical",
            "atomic",
            "electronic",
            "gaseous",
            "investigative",
            "solar",
            "extinct",
            "galactic"];
        return scientific_default;
    }
}

// Pulls noun out of array using random number sent from generator
function getNoun(y) {
    switch(y) {

    case "animals": 
        var animals = [
            "flamingo",
            "hedgehog",
            "owl",
            "elephant",
            "pussycat",
            "alligator",
            "dachsund",
            "poodle",
            "beagle",
            "crocodile",
            "kangaroo",
            "wallaby",
            "woodpecker",
            "eagle",
            "falcon",
            "canary",
            "parrot",
            "parakeet",
            "hamster",
            "gerbil",
            "squirrel",
            "rat",
            "dove",
            "toucan",
            "raccoon",
            "vulture",
            "peacock",
            "goldfish",
            "rook",
            "koala",
            "skunk",
            "goat",
            "rooster",
            "fox",
            "porcupine",
            "llama",
            "grasshopper",
            "gorilla",
            "monkey",
            "seahorse",
            "wombat",
            "wolf",
            "giraffe",
            "badger",
            "lion",
            "mouse",
            "beetle",
            "cricket",
            "nightingale",
            "hawk",
            "trout",
            "squid",
            "octopus",
            "sloth",
            "snail",
            "locust",
            "baboon",
            "lemur",
            "meerkat",
            "oyster",
            "frog",
            "toad",
            "jellyfish",
            "butterfly",
            "caterpillar",
            "tiger",
            "hyena",
            "zebra",
            "snail",
            "pig",
            "weasel",
            "donkey",
            "penguin",
            "crane",
            "buzzard",
            "vulture",
            "rhino",
            "hippopotamus",
            "dolphin",
            "sparrow",
            "beaver",
            "moose",
            "minnow",
            "otter",
            "bat",
            "mongoose",
            "swan",
            "firefly",
            "platypus"];
        return animals;

    case "profession": 
        var professions = [
            "doctor",
            "lawyer",
            "ninja",
            "writer",
            "samurai",
            "surgeon",
            "clerk",
            "artist",
            "actor",
            "engineer",
            "mechanic",
            "comedian",
            "fireman",
            "nurse",
            "RockStar",
            "musician",
            "carpenter",
            "plumber",
            "cashier",
            "electrician",
            "waiter",
            "president",
            "governor",
            "senator",
            "scientist",
            "programmer",
            "singer",
            "dancer",
            "director",
            "mayor",
            "merchant",
            "detective",
            "investigator",
            "navigator",
            "pilot",
            "priest",
            "cowboy",
            "stagehand",
            "soldier",
            "ambassador",
            "pirate",
            "miner",
            "police"];
        return professions; 

    case "fantasy": 
        var fantasy = [
            "centaur",
            "wizard",
            "gnome",
            "orc",
            "troll",
            "sword",
            "fairy",
            "pegasus",
            "halfling",
            "elf",
            "changeling",
            "ghost",
            "knight",
            "squire",
            "magician",
            "witch",
            "warlock",
            "unicorn",
            "dragon",
            "wyvern",
            "princess",
            "prince",
            "king",
            "queen",
            "jester",
            "tower",
            "castle",
            "kraken",
            "seamonster",
            "mermaid",
            "psychic",
            "seer",
            "oracle"];
        return fantasy;

    case "music":
        var music = [
            "violin",
            "flute",
            "bagpipe",
            "guitar",
            "symphony",
            "orchestra",
            "piano",
            "trombone",
            "tuba",
            "opera",
            "drums",
            "harpsichord",
            "harp",
            "harmonica",
            "accordion",
            "tenor",
            "soprano",
            "baritone",
            "cello",
            "viola",
            "piccolo",
            "ukelele",
            "woodwind",
            "saxophone",
            "bugle",
            "trumpet",
            "sousaphone",
            "cornet",
            "stradivarius",
            "marimbas",
            "bells",
            "timpani",
            "bongos",
            "clarinet",
            "recorder",
            "oboe",
            "conductor",
            "singer"];
        return music;

    case "horror":
        var horror = [
            "murderer",
            "chainsaw",
            "knife",
            "sword",
            "murder",
            "devil",
            "killer",
            "psycho",
            "ghost",
            "monster",
            "godzilla",
            "werewolf",
            "vampire",
            "demon",
            "graveyard",
            "zombie",
            "mummy",
            "curse",
            "death",
            "grave",
            "tomb",
            "beast",
            "nightmare",
            "frankenstein",
            "specter",
            "poltergeist",
            "wraith",
            "corpse",
            "scream",
            "massacre",
            "cannibal",
            "skull",
            "bones",
            "undertaker",
            "zombie",
            "creature",
            "mask",
            "psychopath",
            "fiend",
            "satanist",
            "moon",
            "fullMoon"];
        return horror;

    case "gross":
        var gross = [
            "slime",
            "bug",
            "roach",
            "fluid",
            "pus",
            "booger",
            "spit",
            "boil",
            "blister",
            "orifice",
            "secretion",
            "mucus",
            "phlegm",
            "centipede",
            "beetle",
            "fart",
            "snot",
            "crevice",
            "flatulence",
            "juice",
            "mold",
            "mildew",
            "germs",
            "discharge",
            "toilet",
            "udder",
            "odor",
            "substance",
            "fluid",
            "moisture",
            "garbage",
            "trash",
            "bug"];
        return gross;

    case "everyday":
        var everyday = [
            "mirror",
            "knife",
            "fork",
            "spork",
            "spoon",
            "tupperware",
            "minivan",
            "suburb",
            "lamp",
            "desk",
            "stereo",
            "television",
            "TV",
            "book",
            "car",
            "truck",
            "soda",
            "door",
            "video",
            "game",
            "computer",
            "calender",
            "tree",
            "plant",
            "flower",
            "chimney",
            "attic",
            "kitchen",
            "garden",
            "school",
            "wallet",
            "bottle"];
        return everyday;

    case "jewelry":
        var jewelry = [
            "earrings",
            "ring",
            "necklace",
            "pendant",
            "choker",
            "brooch",
            "bracelet",
            "cameo",
            "charm",
            "bauble",
            "trinket",
            "jewelry",
            "anklet",
            "bangle",
            "locket",
            "finery",
            "crown",
            "tiara",
            "blingBling",
            "chain",
            "rosary",
            "jewel",
            "gemstone",
            "beads",
            "armband",
            "pin",
            "costume",
            "ornament",
            "treasure"];
        return jewelry;

    case "places":
        var places = [
            "swamp",
            "graveyard",
            "cemetery",
            "park",
            "building",
            "house",
            "river",
            "ocean",
            "sea",
            "field",
            "forest",
            "woods",
            "neighborhood",
            "city",
            "town",
            "suburb",
            "country",
            "meadow",
            "cliffs",
            "lake",
            "stream",
            "creek",
            "school",
            "college",
            "university",
            "library",
            "bakery",
            "shop",
            "store",
            "theater",
            "garden",
            "canyon",
            "highway",
            "restaurant",
            "cafe",
            "diner",
            "street",
            "road",
            "freeway",
            "alley"];
        return places;

    case "scifi":
        var scifi = [
            "robot",
            "alien",
            "raygun",
            "spaceship",
            "UFO",
            "rocket",
            "phaser",
            "astronaut",
            "spaceman",
            "planet",
            "star",
            "galaxy",
            "computer",
            "future",
            "timeMachine",
            "wormHole",
            "timeTraveler",
            "scientist",
            "invention",
            "martian",
            "pluto",
            "jupiter",
            "saturn",
            "mars",
            "quasar",
            "blackHole",
            "warpDrive",
            "laser",
            "orbit",
            "gears",
            "molecule",
            "electron",
            "neutrino",
            "proton",
            "experiment",
            "photon",
            "apparatus",
            "universe",
            "gravity",
            "darkMatter",
            "constellation",
            "circuit",
            "asteroid"];
        return scifi;

    default:
        var scifi_default = [
            "robot",
            "alien",
            "raygun",
            "spaceship",
            "UFO",
            "rocket",
            "phaser",
            "astronaut",
            "spaceman",
            "planet",
            "star",
            "galaxy",
            "computer",
            "future",
            "timeMachine",
            "wormHole",
            "timeTraveler",
            "scientist",
            "invention",
            "martian",
            "pluto",
            "jupiter",
            "saturn",
            "mars",
            "quasar",
            "blackHole",
            "warpDrive",
            "laser",
            "orbit",
            "gears",
            "molecule",
            "electron",
            "neutrino",
            "proton",
            "experiment",
            "photon",
            "apparatus",
            "universe",
            "gravity",
            "darkMatter",
            "constellation",
            "circuit",
            "asteroid"];
        return scifi_default;
    } 
}

// types of adjectives for pizza titles
var adjectives = [
    "dark",
    "color",
    "whimsical",
    "shiny",
    "noise",
    "apocalyptic",
    "insulting",
    "praise",
    "scientific"];

// types of nouns for pizza titles
var nouns = [
    "animals",
    "everyday",
    "fantasy",
    "gross",
    "horror",
    "jewelry",
    "places",
    "scifi"];


// Generates random numbers for getAdj and getNoun functions and returns a new pizza name
function generator(adj, noun) {
    var adjectives = getAdj(adj);
    var nouns = getNoun(noun);
    var randomAdjective = parseInt(Math.random() * adjectives.length);
    var randomNoun = parseInt(Math.random() * nouns.length);
    var name = "The " + adjectives[randomAdjective].capitalize() + " " + nouns[randomNoun].capitalize();
    return name;
}

// Chooses random adjective and random noun
function random_name() {
    var randomNumberAdj = parseInt(Math.random() * adjectives.length);
    var randomNumberNoun = parseInt(Math.random() * nouns.length);
    return generator(adjectives[randomNumberAdj], nouns[randomNumberNoun]);
}

// These functions return a string of a random ingredient from each respective category of ingredients.
var random_meat = function() {
    var randomMeat = pizzaIngredients.meats[Math.floor((Math.random() * pizzaIngredients.meats.length))];
    return randomMeat;
};

var random_non_meat = function() {
    var i = Math.floor((Math.random() * pizzaIngredients.nonMeats.length));
    return pizzaIngredients.nonMeats[i];
};

var random_cheese = function() {
    var i = Math.floor((Math.random() * pizzaIngredients.cheeses.length));
    return  pizzaIngredients.cheeses[i];
};

var random_sauce = function() {
    var i = Math.floor((Math.random() * pizzaIngredients.sauces.length));
    return pizzaIngredients.sauces[i];
};

var random_crust = function() {
    var i = Math.floor((Math.random() * pizzaIngredients.crusts.length));
    return pizzaIngredients.crusts[i];
};


// ---------------------------------------------------------------------------
// Returns an array of random pizza ingredients
//
var random_ingredients = function() {
    var ingredients = [];
    var i, n;  // loop vars

    var max_meats = 4;
    var max_non_meats = 3;
    var max_cheeses = 2

    n = Math.floor((Math.random() * max_meats));
    for (i=0; i<n; i++) {
        ingredients.push(random_meat());
    }

    n = Math.floor((Math.random() * max_non_meats));
    for (i=0; i<n; i++) {
        ingredients.push(random_non_meat());
    }

    n = Math.floor((Math.random() * max_cheeses));
    for (i=0; i<n; i++) {
        ingredients.push(random_cheese());
    }

    ingredients.push(random_sauce()):
    ingredients.push(random_crust());

    return ingredients;
};

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

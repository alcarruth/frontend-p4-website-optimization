

// pizza ingredients

ingredients = {

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
        "dark", "morbid", "scary", "spooky", "gothic", "deviant",
        "creepy", "sadistic", "black", "dangerous", "dejected",
        "haunted", "morose", "tragic", "shattered", "broken", 
        "sad", "melancholy", "somber", "dark", "gloomy",
        "homicidal", "murderous", "shady", "misty", "dusky",
        "ghostly", "shadowy", "demented", "cursed", "insane",
        "possessed", "grotesque", "obsessed"],

    colors: [
        "blue", "green", "purple", "grey", "scarlet",
        "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink",
        "black", "red", "maroon", "silver", "golden", "yellow",
        "orange", "mustard", "plum", "violet", "cerulean",
        "brown", "lavender", "violet", "chestnut", "rosy",
        "copper", "crimson", "teal", "indigo", "navy", "azure",
        "periwinkle", "brassy", "verdigris", "veridian", "tan",
        "raspberry", "beige", "sandy", "ElectricBlue", "white",
        "champagne", "magenta", "coral", "cyan"],

    whimsy: [
        "whimsical", "silly", "drunken", "goofy", "funny",
        "weird", "strange", "odd", "playful", "clever",
        "boastful", "breakdancing", "peculiar", "hilarious",
        "conceited", "happy", "comical", "curious", "sleepy",
        "quaint", "quirky", "fancy", "wayward", "fickle",
        "yawning", "smiling", "cockeyed", "dizzy", "dancing",
        "absurd", "laughing", "hairy", "perplexed", "baffled",
        "cockamamie", "vulgar", "hoodwinked", "brainwashed"],

    shiny: [
        "sapphire", "opal", "silver", "gold", "platinum", "ruby",
        "emerald", "diamond", "amethyst", "turquoise", "topaz",
        "amber", "garnet", "starlit", "moonlit", "bronze",
        "metal", "jade", "brass", "brassy", "obsidian", "onyx",
        "pearl", "copper", "sunlit", "metallic"],

    noisy: [
        "untuned", "loud", "soft", "shrieking", "melodious",
        "musical", "symphonic", "dancing", "lyrical", "harmonic",
        "operatic", "orchestral", "noisy", "dissonant",
        "rhythmic", "hissing", "singing", "crooning", "shouting",
        "screaming", "wailing", "crying", "howling", "yelling",
        "hollering", "caterwauling", "bawling", "bellowing",
        "squealing", "beeping", "knocking", "tapping", "rapping",
        "humming", "scatting", "whispered", "whispering",
        "rasping", "buzzing", "whirring", "whistling",
        "whistled", "roaring", ],

    apocalyptic: [
        "nuclear", "apocalyptic", "desolate", "atomic",
        "zombie", "collapsed", "grim", "fallen",
        "collapsed", "cannibalistic", "radioactive",
        "toxic", "poisonous", "venomous", "disastrous",
        "grimy", "dirty", "undead", "bloodshot", "rusty",
        "glowing", "decaying", "rotten", "deadly",
        "plagued", "decimated", "rotting", "putrid",
        "decayed", "deserted", "acidic"],

    insulting: [
        "stupid", "idiotic", "fat", "ugly", "hideous",
        "grotesque", "dumb", "dull", "lazy", "sluggish",
        "brainless", "slow", "gullible", "obtuse", "dense",
        "dim", "dazed", "ridiculous", "witless", "daft",
        "crazy", "vapid", "inane", "mundane", "hollow",
        "vacuous", "boring", "insipid", "tedious",
        "monotonous", "weird", "bizarre", "backward",
        "moronic", "ignorant", "scatterbrained", "forgetful",
        "careless", "lethargic", "insolent", "indolent",
        "loitering", "gross", "disgusting", "bland",
        "horrid", "unseemly", "revolting", "homely",
        "deformed", "disfigured", "offensive", "cowardly",
        "weak", "villainous", "fearful", "monstrous",
        "unattractive", "unpleasant", "nasty", "beastly",
        "snide", "horrible", "syncophantic", "unhelpful",
        "bootlicking"],

    praise: [
        "beautiful", "intelligent", "smart", "genius",
        "ingenious", "gorgeous", "pretty", "witty", "angelic",
        "handsome", "graceful", "talented", "exquisite",
        "enchanting", "fascinating", "interesting", "divine",
        "alluring", "ravishing", "wonderful", "magnificient",
        "marvelous", "dazzling", "cute", "charming",
        "attractive", "nifty", "delightful", "superior",
        "amiable", "gentle", "heroic", "courageous", "valiant",
        "brave", "noble", "daring", "fearless", "gallant",
        "adventurous", "cool", "enthusiastic", "fierce",
        "awesome", "radical", "tubular", "fearsome", "majestic",
        "grand", "stunning"],

    scientific: [
        "scientific", "technical", "digital", "programming",
        "calculating", "formulating", "cyberpunk",
        "mechanical", "technological", "innovative",
        "brainy", "chemical", "quantum", "astro", "space",
        "theoretical", "atomic", "electronic", "gaseous",
        "investigative", "solar", "extinct", "galactic"],

}  // end of adjectives


// object containing lists of nouns by category

var nouns = {

    animals: [
        "flamingo", "hedgehog", "owl", "elephant", "pussycat",
        "alligator", "dachsund", "poodle", "beagle",
        "crocodile", "kangaroo", "wallaby", "woodpecker",
        "eagle", "falcon", "canary", "parrot", "parakeet",
        "hamster", "gerbil", "squirrel", "rat", "dove",
        "toucan", "raccoon", "vulture", "peacock", "goldfish",
        "rook", "koala", "skunk", "goat", "rooster", "fox",
        "porcupine", "llama", "grasshopper", "gorilla",
        "monkey", "seahorse", "wombat", "wolf", "giraffe",
        "badger", "lion", "mouse", "beetle", "cricket",
        "nightingale", "hawk", "trout", "squid", "octopus",
        "sloth", "snail", "locust", "baboon", "lemur",
        "meerkat", "oyster", "frog", "toad", "jellyfish",
        "butterfly", "caterpillar", "tiger", "hyena", "zebra",
        "snail", "pig", "weasel", "donkey", "penguin", "crane",
        "buzzard", "vulture", "rhino", "hippopotamus",
        "dolphin", "sparrow", "beaver", "moose", "minnow",
        "otter", "bat", "mongoose", "swan", "firefly",
        "platypus"],

    professions: [
        "doctor", "lawyer", "ninja", "writer", "samurai",
        "surgeon", "clerk", "artist", "actor", "engineer",
        "mechanic", "comedian", "fireman", "nurse",
        "RockStar", "musician", "carpenter", "plumber",
        "cashier", "electrician", "waiter", "president",
        "governor", "senator", "scientist", "programmer",
        "singer", "dancer", "director", "mayor",
        "merchant", "detective", "investigator",
        "navigator", "pilot", "priest", "cowboy",
        "stagehand", "soldier", "ambassador", "pirate",
        "miner", "police"],

    fantasy: [
        "centaur", "wizard", "gnome", "orc", "troll", "sword",
        "fairy", "pegasus", "halfling", "elf", "changeling",
        "ghost", "knight", "squire", "magician", "witch",
        "warlock", "unicorn", "dragon", "wyvern", "princess",
        "prince", "king", "queen", "jester", "tower", "castle",
        "kraken", "seamonster", "mermaid", "psychic", "seer",
        "oracle"],

    music: [
        "violin", "flute", "bagpipe", "guitar", "symphony",
        "orchestra", "piano", "trombone", "tuba", "opera",
        "drums", "harpsichord", "harp", "harmonica", "accordion",
        "tenor", "soprano", "baritone", "cello", "viola",
        "piccolo", "ukelele", "woodwind", "saxophone", "bugle",
        "trumpet", "sousaphone", "cornet", "stradivarius",
        "marimbas", "bells", "timpani", "bongos", "clarinet",
        "recorder", "oboe", "conductor", "singer"],

    horror: [
        "murderer", "chainsaw", "knife", "sword", "murder",
        "devil", "killer", "psycho", "ghost", "monster",
        "godzilla", "werewolf", "vampire", "demon", "graveyard",
        "zombie", "mummy", "curse", "death", "grave", "tomb",
        "beast", "nightmare", "frankenstein", "specter",
        "poltergeist", "wraith", "corpse", "scream", "massacre",
        "cannibal", "skull", "bones", "undertaker", "zombie",
        "creature", "mask", "psychopath", "fiend", "satanist",
        "moon", "fullMoon"],

    gross: [
        "slime", "bug", "roach", "fluid", "pus", "booger",
        "spit", "boil", "blister", "orifice", "secretion",
        "mucus", "phlegm", "centipede", "beetle", "fart", "snot",
        "crevice", "flatulence", "juice", "mold", "mildew",
        "germs", "discharge", "toilet", "udder", "odor",
        "substance", "fluid", "moisture", "garbage", "trash",
        "bug"],

    everyday: [
        "mirror", "knife", "fork", "spork", "spoon",
        "tupperware", "minivan", "suburb", "lamp", "desk",
        "stereo", "television", "TV", "book", "car", "truck",
        "soda", "door", "video", "game", "computer",
        "calender", "tree", "plant", "flower", "chimney",
        "attic", "kitchen", "garden", "school", "wallet",
        "bottle"],

    jewelry: [
        "earrings", "ring", "necklace", "pendant", "choker",
        "brooch", "bracelet", "cameo", "charm", "bauble",
        "trinket", "jewelry", "anklet", "bangle", "locket",
        "finery", "crown", "tiara", "blingBling", "chain",
        "rosary", "jewel", "gemstone", "beads", "armband",
        "pin", "costume", "ornament", "treasure"],

    places: [
        "swamp", "graveyard", "cemetery", "park", "building",
        "house", "river", "ocean", "sea", "field", "forest",
        "woods", "neighborhood", "city", "town", "suburb",
        "country", "meadow", "cliffs", "lake", "stream",
        "creek", "school", "college", "university", "library",
        "bakery", "shop", "store", "theater", "garden",
        "canyon", "highway", "restaurant", "cafe", "diner",
        "street", "road", "freeway", "alley"],

    scifi: [
        "robot", "alien", "raygun", "spaceship", "UFO", "rocket",
        "phaser", "astronaut", "spaceman", "planet", "star",
        "galaxy", "computer", "future", "timeMachine",
        "wormHole", "timeTraveler", "scientist", "invention",
        "martian", "pluto", "jupiter", "saturn", "mars",
        "quasar", "blackHole", "warpDrive", "laser", "orbit",
        "gears", "molecule", "electron", "neutrino", "proton",
        "experiment", "photon", "apparatus", "universe",
        "gravity", "darkMatter", "constellation", "circuit",
        "asteroid"],

}  // end of nouns


exports.ingredients = ingredients;
exports.nouns = nouns;
exports.adjectives = adjectives;


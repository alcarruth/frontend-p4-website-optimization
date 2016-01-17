
var lists = require('./lists.js');
var utility = require('./utility.js');

var flatten = utility.flatten;
var capitalize = utility.capitalize;
var choose_one = utility.choose_one;
var choose_some = utility.choose_some;

var meats = lists.ingredients.meats;
var non_meats = lists.ingredients.non_meats;
var cheeses = lists.ingredients.cheeses;
var sauces = lists.ingredients.sauces;
var crusts = lists.ingredients.crusts;
var adjectives = flatten(lists.adjectives);
var nouns = flatten(lists.nouns);

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
    var noun = capitalize(choose_one(nouns));
    var adjective = capitalize(choose_one(adjectives));
    return 'The ' + adjective + ' ' + noun;
}

function random_pizza() {
    return {
        name: random_pizza_name(),
        ingredients: random_ingredients()
    };
}

exports.random_pizza = random_pizza;


//--------------------------------------------------------
// concatenates an object's values
// and throws away the keys
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
function choose_some(list, nums) {
    var chosen = [];
    for (i=0; i<choose_one(nums); i++) {
        chosen.push(choose_one(list));
    }
    return chosen;
}

//--------------------------------------------------------
// Capitalize word
function capitalize(word) {
    var initial = word.charAt(0).toUpperCase();
    var rest = word.slice(1).toLowerCase();
    return initial + rest;
}

exports.flatten = flatten;
exports.choose_one = choose_one;
exports.choose_some = choose_some;
exports.capitalize = capitalize;


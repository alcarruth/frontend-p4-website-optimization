
// split('_'), map capitalize[1..], join('')



functions = [
    'Pizza_App',
    'Pizza_Menu',
    'Sliding_Pizza',
    'Sliding_Pizzas_Background',
    'animation_loop',
    'capitalize',
    'choose_one',
    'choose_some',
    'event_listener',
    'flatten',
    'generate_pizzas',
    'generate_sliding_pizzas',
    'init',
    'log_generate',
    'log_resize',
    'log_update_times',
    'looper',
    'random_ingredients',
    'random_pizza',
    'random_pizza_name',
    'resize_pizzas',
    'timeout_handler',
    'timer_wrap',
    'update_position',
    'update_positions'
]

variables = [
    'adjective',
    'adjectives',
    'bg',
    'cheeses',
    'chosen',
    'className',
    'condition',
    'crusts',
    'dx',
    'dy',
    'event_count',
    'frame',
    'height',
    'i',
    'img',
    'img_src',
    'ingredients',
    'initial',
    'j',
    'key',
    'looper_starts',
    'mark_end',
    'measure',
    'meats',
    'msg',
    'non_meats',
    'noun',
    'nouns',
    'phase',
    'pizza',
    'pizza_designer',
    'pizza_menu',
    'pizza_menu_size',
    'pizza_menu_template',
    'pizza_size',
    'pizzas',
    'rest',
    'sample_size',
    'sauces',
    'size_slider',
    'sliding_pizza_cols',
    'sliding_pizza_rows',
    'sliding_pizzas',
    'sum',
    'sx',
    'sy',
    'text',
    'timed_generate_pizzas',
    'timeout',
    'times',
    'top',
    'width',
    'width',
    'x',
    'xs',
    'y'
]


function upper_case_initial(s) {
	 return s.slice(0,1).toUpperCase() + s.slice(1);
}

function camel_case(s) {
	 s = s.split('_');
	 s = s[0].concat(s.slice(1).map(upper_case_initial).join(''));
	 return s;
}

var d = {};
var identifiers = variables.concat(functions);

for (var i=0; i < identifiers.length; i++) { 
	 s = identifiers[i];
	 cc = camel_case(s);
	 if (s !== cc) {
		  d[camel_case(s)] = s;
	 }
}

console.log(d);

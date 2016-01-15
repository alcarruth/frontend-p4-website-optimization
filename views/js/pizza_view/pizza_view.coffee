
fs = require('fs')
mustache = require('mustache')

pizza_tile_template = fs.readFileSync('templates/pizza_tile.html','utf-8')
pizzas = JSON.parse(fs.readFileSync('json/pizzas.json', 'utf-8'))

html = mustache.render(pizza_tile_template, {pizzas: pizzas})


console.log(html)


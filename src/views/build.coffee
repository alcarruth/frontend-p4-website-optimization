
fs = require('fs')


build_html =->
   
   style_files = [
      "css/style.css"
   ]

   script_files = [
      "js/mustache.min.js",
      "js/pizza.js"
   ]

   index_template_file = "templates/index_template.html"

   style_section = ->
      template = '<link rel="stylesheet" href="{{.}}">'
      (template.replace('{{.}}', file) for file in style_files).join('\n')

   script_section =->
      template = '<script src="{{.}}">'
      (template.replace('{{.}}', file) for file in script_files).join('\n')

   index_html = fs.readFileSync(index_template_file, 'utf-8')
   index_html = index_html.replace('{{styles}}', style_section())
   index_html = index_html.replace('{{scripts}}', script_section())

   return index_html

build_js =->

   js_files = [
      "js/pizza_menu.js",
      "js/pizza_designer.js",
      "js/sliding_pizzas.js"
   ]

   js_source = (fs.readFileSync(file) for file in js_files).join('\n')

   return js_source

pizza_js = build_js()
index_html = build_html()

fs.writeFileSync(pizza_js, "pizza.js")
fs.writeFileSync(index_html, "index.html")
      

   


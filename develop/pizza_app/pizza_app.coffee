#!/usr/bin/env coffee

fs = require('fs')

build_root = '../../'
build_src = build_root + 'src/pizza_app/'
build_dst = build_root + 'develop/pizza_app/'

runtime_root = ''

class Include_CSS

    ref_template = '<link rel="stylesheet" href="{{css_url}}">'
    inline_template = '<style>\n{{css}}\n</style>'
    
    constructor: (@base, @min='-min', @dir='css/', @suffix='.css') ->
        @inline=false
        @minified=false

    render: (options) =>
        path = ''
        path += @dir
        path += @base
        path += @min if options.minified
        path += @suffix
        if options.inline
            path = build_src + path
            template = inline_template
            css_str = fs.readFileSync(path, 'utf-8')
            template = template.replace('{{css}}', css_str)
        else
            path = runtime_root + path
            template = ref_template
            template = template.replace('{{css_url}}', path)
        return template


class Include_JS

    ref_template = '<script {{flags}} src="{{js_url}}"></script>'
    inline_template = '<script>\n{{js}}\n</script></script>'
    
    constructor: (@base, @min='-min', @dir='js/', @suffix='.js') ->
        @inline=false
        @minified=false
        @async=false

    render: (options) =>
        path = ''
        path += @dir
        path += @base
        path += @min if options.minified
        path += @suffix
        if options.inline
            path = build_src + path
            template = inline_template
            inline_str = fs.readFileSync(path, 'utf-8')
            template = template.replace('{{js}}', inline_str)
        else
            flag_str = ' '
            flag_str += 'async ' if options.async
            path = runtime_root + path
            template = ref_template
            template = template.replace('{{flags}}', flag_str)
            template = template.replace('{{js_url}}', path)
        return template


class Include_URL

    ref_template = '<a href="{{html}}">'
    inline_template = '\n{{html}}\n'

    constructor: (@base, @min='-min', @dir='html/', @suffix='.html') ->
        @inline = false
        @minified = false

    render: (options) =>
        path = ''
        path += @dir
        path += @base
        path += @min if options.minified
        path += @suffix
        if options.inline
            path = build_src + path
            flag_str = ''
            flag_str += 'async ' if async
            template = inline_template
            inline_str = fs.readFileSync(path, 'utf-8')
            template = template.replace('{{js}}', inline_str)
        else
            path = runtime_root + path
            template = ref_template
            template = template.replace('{{flags}}', flag_str)
            template = template.replace('{{js_url}}', path)
        return template

class Include_IMG

    ref_template = '<img src="{{href}}" alt="{{alt}}">'
    inline_template = ''

    constructor: (@base, @min='-min', @dir='images/', @suffix='.jpg') ->
        @inline = false
        @minified = false

    render: (options) =>
        path = ''
        path += @dir
        path += @base
        path += @min if options.minified
        path += @suffix
        if options.inline
            path = build_src + path
            console.log('not implemented yet')
        else
            alt = path if not options.alt
            path = runtime_root + path
            template = ref_template
            template = template.replace('{{href}}', path)
            template = template.replace('{{alt}}', alt)
        return template

class HTML_Template

    constructor: (@base, @root='', @min='-min', @dir='html/', @suffix='.html') ->
        @minified = false
        @subs = {}

    load_src: (minified=false) =>
        path = ''
        path += build_src
        path += @dir
        path += @base
        path += @min if minified
        path += @suffix
        return fs.readFileSync(path, 'utf-8')

    render: (subs) =>
        template = @load_src()
        for pat, str of subs
            template = template.replace('{{'+pat+'}}', str)
        return template


class Page

    constructor: (@includes, @options, template_base) ->
        @template = new HTML_Template(template_base)
        
    build_subs: =>
        subs = {}
        for key, val of @includes
            subs[key] = val.render(@options[key])
        return subs

    render: =>
        subs = @build_subs()
        @template.render(subs)
    
includes =
    style_css: new Include_CSS('style')
    pizza_png: new Include_IMG('pizza')
    pizzeria_jpg: new Include_IMG('pizzeria', min='_md')
    mustache_js: new Include_JS('mustache', min='.min')
    timer_js: new Include_JS('timer')
    pizza_designer_js: new Include_JS('pizza_designer')
    pizza_menu_js: new Include_JS('pizza_menu')
    sliding_pizzas_js: new Include_JS('sliding_pizzas')
    pizza_app_js: new Include_JS('pizza_app')

options =
    style_css: { minified: false }
    pizza_png: { minified: false }
    pizzeria_jpg: { minified: true }
    mustache_js: { minified: true }
    timer_js: { minified: false }
    pizza_designer_js: { minified: false }
    pizza_menu_js: { minified: false }
    sliding_pizzas_js: { minified: false }
    pizza_app_js: { minified: false }


pages = 
    index: new Page(includes, options, 'index')

build = ->        
    fs.writeFileSync('index.html', pages.index.render())

exports.pages = pages
exports.build = build


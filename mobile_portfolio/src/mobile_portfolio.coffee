#!/usr/bin/env coffee

fs = require('fs')

# frontend-p4-website-optimization root directory
mobile_portfolio_root = '../'
build_src = mobile_portfolio_root + 'src/'
build_dst = mobile_portfolio_root + 'dist/'

runtime_root = ''

# TODO: merge this file with pizza_app.coffee and
# abstract the common functionality.  There's a lot
# of repetitive stuff here.
# 
# I know, I know. There's grunt, gulp and all that.
# When I saw all the stuff going on in node_modules,
# I decided I really didn't know what was going on and
# maybe I'd roll my own :-) I just felt like once you sort
# through all the dependencies, there's really not all
# that much going on.
#
# But sorting out the dependencies is not that easy, but
# I think there's a simple elegant solution hiding in
# here somewhere.
# 

class Include_CSS

    ref_template = '<link rel="stylesheet" href="{{css_url}}">'
    inline_template = '<style>\n{{css}}\n</style>'
    
    constructor: (@base, @min='-min', @dir='css/', @suffix='.css') ->
        @inline=false
        @minified=false

    render: (options) =>
        path = ''
        path += build_dst
        path += @dir
        path += @base
        path += @min if options.minified
        path += @suffix
        if options.inline
            template = inline_template
            css_str = fs.readFileSync(path, 'utf-8')
            template = template.replace('{{css}}', css_str)
        else
            path = options.root + path if options.root
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
        path += build_dst
        path += @dir
        path += @base
        path += @min if options.minified
        path += @suffix
        if options.inline
            template = inline_template
            inline_str = fs.readFileSync(path, 'utf-8')
            template = template.replace('{{js}}', inline_str)
        else
            flag_str = ' '
            flag_str += 'async ' if options.async
            path = options.root + path if options.root
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
        path += build_dst
        path += @dir
        path += @base
        path += @min if options.minified
        path += @suffix
        if options.inline
            flag_str = ''
            flag_str += 'async ' if async
            template = inline_template
            inline_str = fs.readFileSync(path, 'utf-8')
            template = template.replace('{{js}}', inline_str)
        else
            path = options.root + path if options.root
            template = ref_template
            template = template.replace('{{flags}}', flag_str)
            template = template.replace('{{js_url}}', path)
        return template

class Include_IMG

    ref_template = '<img src="{{href}}" alt="{{alt}}">'
    inline_template = ''

    constructor: (@base, @min='-min', @dir='img/', @suffix='.jpg') ->
        @inline = false
        @minified = false

    render: (options) =>
        path = ''
        path += build_dst
        path += @dir
        path += @base
        path += @min if options.minified
        path += @suffix
        if options.inline
            console.log('not implemented yet')
        else
            alt = path if not options.alt
            path = options.root + path if options.root
            template = ref_template
            template = template.replace('{{href}}', path)
            template = template.replace('{{alt}}', alt)
        return template

class HTML_Template

    constructor: (@base, @root='', @min='-min', @dir='html/', @suffix='.html') ->
        @minified = false
        @subs = {}

    load_src: (minified=false) =>
        path = build_src + @dir
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
    open_sans_css: new Include_CSS('open-sans')
    style_css:  new Include_CSS('style')
    print_css: new Include_CSS('print')
    google_analitics_profile_js:  new Include_JS('analytics_profile')
    google_analytics_js: new Include_JS('analytics')
    perfmatters_js: new Include_JS('perfmatters')
    profilepic: new Include_IMG('profilepic', min='-q50')
    mobilewebdev_jpg: new Include_IMG('mobilewebdev', min='-q50')
    cam_be_like_jpg: new Include_IMG('cam_be_like', min='-q50')

top_dir_options =
    open_sans_css: { minified: true, inline: true }
    style_css: { minified: true, inline: true }
    print_css: { minified: true, inline: true }
    google_analitics_profile_js:  { minified: true, inline: true }
    google_analytics_js:  { async: true }
    perfmatters_js:  { minified: true, inline: true }
    profilepic:  { minified: true  }
    mobilewebdev_jpg:  { minified: true }
    cam_be_like_jpg:  { minified: true }


subdir_options =
    open_sans_css: { minified: true, inline: true }
    style_css: { minified: true, inline: true }
    print_css: { minified: true, inline: true }
    google_analitics_profile_js:  { minified: true, inline: true }
    google_analytics_js:  { async: true, root: '../' }
    perfmatters_js:  { minified: true, inline: true }
    profilepic:  { minified: true, root: '../' }
    mobilewebdev_jpg:  { minified: true, root: '../' }
    cam_be_like_jpg:  { minified: true, root: '../' }


pages = 
    index: new Page(includes, top_dir_options, 'index')
    project_2048: new Page(includes, subdir_options, 'project-2048')
    project_mobile: new Page(includes, subdir_options, 'project-mobile')
    project_webperf: new Page(includes, subdir_options, 'project-webperf')


build = ->

   console.log("building index.html") 
   fs.writeFileSync(build_dst + 'index.html', pages.index.render())

   console.log("building projects/project-2048.html") 
   fs.writeFileSync(build_dst + 'projects/project-2048.html', pages.project_2048.render())

   console.log("building projects/project-mobile.html") 
   fs.writeFileSync(build_dst + 'projects/project-mobile.html', pages.project_mobile.render())

   console.log("building projects/project-webperf.html") 
   fs.writeFileSync(build_dst + 'projects/project-webperf.html', pages.project_webperf.render())

exports.pages = pages
exports.build = build

build()

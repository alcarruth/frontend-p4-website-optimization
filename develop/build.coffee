#!/usr/bin/env coffee

fs = require('fs')

project_src = '../src/'
project_dst = './'

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

class Include_Img

    ref_template = '<img src="{{href}}" alt="{{alt}}">'
    inline_template = ''

    constructor: (@base, @min='-min', @dir='img/', @suffix='.jpg') ->
        @inline = false
        @minified = false

    render: (options) =>
        path = @dir
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
        path = project_src + @dir
        path += @base
        path += @min if minified
        path += @suffix
        return fs.readFileSync(path, 'utf-8')

    render: (subs) =>
        template = @load_src()
        for pat, str of subs
            template = template.replace('{{'+pat+'}}', str)
        return template

class Project

    constructor: ->
        
    includes: 
        open_sans_css: new Include_CSS('open-sans')
        style_css:  new Include_CSS('style')
        print_css: new Include_CSS('print')
        google_analitics_profile_js:  new Include_JS('analytics_profile')
        google_analytics_js: new Include_JS('analytics')
        perfmatters_js: new Include_JS('perfmatters')
        profilepic: new Include_Img('profilepic', min='-q50')
        mobilewebdev_jpg: new Include_Img('mobilewebdev', min='-q50')
        cam_be_like_jpg: new Include_Img('cam_be_like', min='-q50')

    pages:
        index_html: new HTML_Template('index')
        project_2048_html: new HTML_Template('project-2048')
        project_mobile_html: new HTML_Template('project-mobile')
        project_webperf_html: new HTML_Template('project-webperf')

    build_subs: (options) =>
        console.log options
        subs = {}
        for key, val of @includes
            subs[key] = val.render(options[key])
        return subs

    build: =>

        subs = @build_subs
            open_sans_css: { minified: true, inline: true }
            style_css: { minified: true, inline: true }
            print_css: { minified: true, inline: true }
            google_analitics_profile_js:  { minified: true, inline: true }
            google_analytics_js:  { }
            perfmatters_js:  { minified: true, inline: true }
            profilepic:  { minified: true  }
            mobilewebdev_jpg:  { minified: true }
            cam_be_like_jpg:  { minified: true }

        fs.writeFileSync('index.html', @pages.index_html.render(subs))

        subs = @build_subs
            open_sans_css: { minified: true, inline: true }
            style_css: { minified: true, inline: true }
            print_css: { minified: true, inline: true }
            google_analitics_profile_js:  { minified: true, inline: true }
            google_analytics_js:  { root: '../' }
            perfmatters_js:  { minified: true, inline: true }
            profilepic:  { minified: true, root: '../' }
            mobilewebdev_jpg:  { minified: true, root: '../' }
            cam_be_like_jpg:  { minified: true, root: '../' }
            
        fs.writeFileSync('projects/project-2048.html', @pages.project_2048_html.render(subs))
        fs.writeFileSync('projects/project-mobile.html', @pages.project_mobile_html.render(subs))
        fs.writeFileSync('projects/project-webperf.html', @pages.project_webperf_html.render(subs))


exports.project = new Project()


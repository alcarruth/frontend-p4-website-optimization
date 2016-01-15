

#-----------------------------------------------------------------------------------------------------------
#
# 
class Sliding_Pizza

    constructor: (@bg, @row, @col) ->

        @use_translate = true
        @className = 'mover'
        
        @src = "images/pizza.png"
        @height = "100px"
        @width = "73.333px"

        # spacing = 256
        @sx = 256
        @sy = 256

        # initial upper left corner
        @x = @col * @sx
        @y = @row * @sy

        # translation offets
        @dx = 0
        @dy = 0

        # create and install element
        @img = document.createElement('img')
        @img.className = @className
        @img.src = @src
        @img.style.height = @height
        @img.style.width = @width
        @img.style.left = @x + 'px'
        @img.style.top = @y + 'px'
        @bg.appendChild(@img)

    updatePosition: (dx, dy) =>
        @dx = dx
        @dy = dy
        @img.style.transform = 'translate(' + dx + 'px,' + dy + 'px)'


#-----------------------------------------------------------------------------------------------------------
# 
class Sliding_Pizza_Background()

    constructor: ->
        # background element
        @bg = document.querySelector("#movingPizzas1")

        # array of sliding pizzas
        @pizzas = []
        @cols = 8
        @rows = 25
    
        # frame count
        @frame = 0

    generate_sliding_pizzas: =>
        for row in [0..rows] 
            for col in [0..cols]
                pizza = new Sliding_Pizza(@bg, row, col)
                @pizzas.push(pizza)
        @update_positions()


    update_positions: =>

        top = document.body.scrollTop
        @frame++
        
        for i in [0..@pizzas.length]
            phase = Math.sin( (top / 1250) + (i % 5) )
            @pizzas[i].update_position( 100 * phase, 0 )

    init: =>

        # run update_ositions on scroll
        window.addEventListener('scroll', () ->
            requestAnimationFrame( timer_wrap( update_positions)))

        # Generates the sliding pizzas when the page loads.
        document.addEventListener('DOMContentLoaded', generate_sliding_pizzas)

#-----------------------------------------------------------------------------------------------------------

logAverageFrame = (times) ->
        numberOfEntries = times.length
        sum = 0
        i = numberOfEntries - 1
        while i > numberOfEntries - 11
            sum = sum + times[i].duration
            i = i-1
        console.log("Average time to generate last 10 frames: " + sum / 10 + "ms")

timer_wrap = (func) ->
    window.performance.mark("mark_start_frame")
    func()
    window.performance.mark("mark_end_frame")
    window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame")
    if (frame % 10 === 0) 
        timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration")
        logAverageFrame(timesToUpdatePosition)


sliding_pizza_background = Sliding_Pizza_Background();
sliding_pizza_background.init();

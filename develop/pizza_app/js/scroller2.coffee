

# In the previous discussion, the pieces hung together rather loosely.
# Now I'll try to fix this by putting them together in a class definition.

class Scrolling_Handler

    constructor: ()->
        @scrolling = false
        @scroll_received = false

    animate: (foo) =>
        bar = =>
        if (@scrolling)
            foo()
            requestAnimationFrame(bar)
        return bar
   
    scrolling_handler: =>
        return @animate(update)

    scroll_listener: =>
        @scroll_received = true
      
        if (!@scrolling) 
            @scrolling = true
            requestAnimationFrame(@scrolling_handler)
            @scroll_received = false

        setTimeout( 100, =>
            if (!@scroll_received) 
                @scrolling = false

scroll_listener = new Scroller().listener
window.addEventListener('scroll', scroll_listener)
   
   
   
   

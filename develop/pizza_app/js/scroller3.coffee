

# In the previous discussion, the pieces hung together rather loosely.
# Now I'll try to fix this by putting them together in a class definition.

class Condition_Handler

    constructor: (@event, @foo, @dt)->
        @condition = false
        @event_received = false
        window.addEventListener(@event, @event_listener)

    condition_handler: =>
        bar = =>
            if (@condition)
                @foo()
                requestAnimationFrame(bar)
        return bar

    condition_handler2: =>
        while @condition 
            requestAnimationFrame(foo)
        
    event_listener: =>
        @event_received = true
      
        if (!@condition) 
            @condition = true
            requestAnimationFrame(@condition_handler)
            @event_received = false

        setTimeout(@dt, =>
            if (!@event_received) 
                @condition = false
                )

scrolling_handler = new Condition_Handler(
    'scroll', 'update_positions', 100)
    


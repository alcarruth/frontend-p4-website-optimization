

# In the previous discussion, the pieces hung together rather loosely.
# Now I'll try to fix this by putting them together in a class definition.

class Condition_Handler

    constructor: (@foo, @dt)->
        @condition = false
        @event_received = false
        @event_count = 0
        @looper_starts = 0
        @loop_count = 0
        @timeout = null
        
    looper: =>
        if (@condition)
            @foo()
            requestAnimationFrame(@looper)

    timeout_handler: =>
        if (!@event_received)
            console.log('event_count: ' + @event_count)
            @condition = false

    event_listener: =>
        @event_count++
        @event_received = true
        clearTimeout(@timeout)
        @timeout = setTimeout(@timeout_handler, @dt)
        @event_received = false
        
        if (!@condition)
            @condition = true
            console.log('looper_starts: ' + ++@looper_starts)
            requestAnimationFrame(@looper)


window.Condition_Handler = Condition_Handler


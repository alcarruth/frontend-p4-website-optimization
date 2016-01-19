
# Don't execute this! I wrote this in a coffeescript
# file just for the syntax highlighting.

if (false)

   # We start with simple layout triggering update 
   #
   update = () ->
      # do a bunch of stuff
      # triggering layout 
   
   # now, a looping 'tail-recursive' update
   #
   animated_update = () ->
   	 update()
   	 requestAnimationFrame(looping_update)
   
   # and generalize this to an abstract version that takes a non
   # looping foo() and returns a looper like above
   #
   animate = (foo) ->
      bar = ->
         foo()
         requestAnimationFrame(bar)
      return bar
   
   
   # so now we could just have
   #
   animated_update = animate(update)
   
   # and the event listener as so:
   
   scroll_listener = ->
      requestAnimationFrame(animated_update)
   
   window.addEventListener('scroll', scroll_listener)
   
   # But now looping_update() will not terminate.  Because it is
   # tail-recursive, it runs like a while loop and does not exhaust
   # the stack, but it's a wasteful CPU hog.
    
   # To correct this, we need some way for the scroll_listener to
   # indicate to the scroll_handler that we are no longer
   # scrolling. This raises two questions: how to know that we are no
   # longer scrolling and how to communicate that knowledge.
   
   # All the listener can really know is that it has not received a
   # scroll event in a while (say 100 ms?)  So we'll use a timeout to
   # check for the lack of an event in the meantime.
   #
   # And we'll use a boolean flag 'scrolling' to mean that we have
   # received a 'scroll' event in the previous (say 100 ?-)
   # milliseconds.
   
   #   scrolling ~= time_since_last_scroll < 5ms
   
   # The '~=' above means "sorta like" and this is sort of like an
   # invariant.  Part of the job of the listener is to monitor this
   # invariant and restore it if it gets out of whack.
   
   # So an animated function will now test for scrolling before
   # continuing and if we are not scrolling it exits.
   # 
   animate = (f00) ->
      bar() 
      if (scrolling) 
         foo()
         requestAnimationFrame(bar)
      return bar
   
   # Initialize the two boolean flags.
   # 
   scrolling = false
   scroll_received = true
   
   # Note that this is scroll<em>ing</em>_handler.  Think of it as a
   # condition handler as opposed to an event handler.
   # 
   scrolling_handler = animate(update)
   
   # if the listener does not receive another scroll event in the next
   # 100ms, it sets scrolling to false so when the scrolling handler
   # comes around again, it will terminate.
   
   scroll_listener = ()->
      scroll_received = true
      
      if (!scrolling) 
         scrolling = true
         requestAnimationFrame(scrolling_handler)
         scroll_received = false
   	 
      setTimeout( 100, ()->
         if (!scroll_received) 
            scrolling = false
   
   window.addEventListener('scroll', scroll_listener)
   
   # In the discussion above, the pieces hang together rather loosely.
   # I'll try to fix this by putting them together in a class definition.
   
   # And while I'm at it, we might be able generalize it a bit.  After
   # all, it's not just about a scrolling pizzas background, or
   # necessarily about scrolling and layout and painting at all, at least
   # not in the abstract.
   
   # The more I think about it it seems to me that there is something
   # fundamental going on here about the relationship between an event
   # handler and an associated condition handler.
   
   
   
   
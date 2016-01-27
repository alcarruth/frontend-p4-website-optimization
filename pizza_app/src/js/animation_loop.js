//------------------------------------------------------------------------------
// Function animationLoop() is pretty interesting I think.
//
// There is an inherent mismatch between the window which emits a 'scroll'
// event, and the requestAnimationFrame() loop (tail-recursive function)
// which should continue as long as a 'scrolling' __condition__ is true.
//
// That is to say, we have two distinct notions here: 'events' and 
// 'condition'.  This code here recognizes that and maps 'scroll'
// events to the 'scrolling' condition.
// 
// Function foo() is called inside the animation loop.
// Argument dt is used to timeout the condition.
//
// The number of events and number of times the looper is run are logged.
//
// Also, note that the code here does not mention 'scroll' or 'scrolling'.
// It seems to me that this relation between events and conditions is
// more general than scrolling and so might be applied elsewhere.
//
// It also might be more general than animating, but here I have it
// relying on requestAnimationFrame().  I'm not sure where else it
// might make sense.
//
function animationLoop(foo, dt) {

    var eventCount = 0;
    var condition = false;
    var conditionCount = 0;
    var looperRunning = false;
    var timeout = null;

    function looper() {

        // BUG Fixed.
        //
        // It's possible that, while we were gone, 'condition' was 
        // falsified by a timeout and then set again by a new event.  
        //
        // If this has happened we'll end up with more than one looper
        // active, and then we'll get more than one requestAnimationFrame() 
        // in the same frame.
        // 
        // So I've introduced another boolean 'looperRunning' which is 
        // set when looper() is started by eventListener() and cleared
        // when looper() exits.
        // 
        // Now, when an event is received, eventListener() checks this 
        // new flag and does not start another looper() if one is currently
        // running.

        if (condition) {
            foo();
            requestAnimationFrame(looper);
        }
        else {
            looperRunning = false;
        }
    }

    function timeoutHandler() {
        console.log('eventCount: ' + eventCount);
        condition = false;
    }

    function eventListener() {

        eventCount++;
        clearTimeout(timeout);
        timeout = setTimeout(timeoutHandler, dt);

        if (!condition) {
            condition = true;
            conditionCount++;
            console.log('conditionCount: ' + conditionCount);

            // see BUG Fixed. above
            if (!looperRunning) {
                looperRunning = true;
                requestAnimationFrame(looper);
            }
        }
    }

    return eventListener;
}



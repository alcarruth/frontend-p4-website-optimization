

function condition_handler(foo, dt) {

    var condition = false;
    var event_received = false;
    var event_count = 0;
    var looper_starts = 0;
    var timeout = null;

    function looper() {
        if (condition) {
            foo();
            requestAnimationFrame(looper);
        }
    };

    function timeout_handler() {
        if (event_received) {
            console.log('event_count: ' + event_count);
            condition = false;
        }
    };
    
    function event_listener() {
        event_count++;
        event_received = true;
        clearTimeout(timeout);
        timeout = setTimeout(timeout_handler, dt);
        event_received = false;
        if (!condition) {
            condition = true;
            console.log('looper_starts: ' + ++looper_starts);
            requestAnimationFrame(looper);
        }
    };

    return {
        condition: condition,
        event_received: event_received,
        event_count: event_count,
        looper_starts: looper_starts,
        timeout: timeout,
        looper: looper,
        timeout_handler: timeout_handler,
        event_listener: event_listener        
    }
}

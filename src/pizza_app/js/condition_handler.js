
function requestAnimationLoop(foo, dt) {

    var condition = false;
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
        console.log('event_count: ' + event_count);
        condition = false;
	 };

	 function event_listener() {
		  event_count++;
		  clearTimeout(timeout);
		  timeout = setTimeout(timeout_handler, dt);
		  if (!condition) {
				condition = true;
				console.log('looper_starts: ' + ++looper_starts);
				requestAnimationFrame(looper);
		  }
	 };

	 return event_listener;
}

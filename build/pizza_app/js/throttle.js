

// start with simple update function
//
function update() {
	 // do a bunch of stuff
}

// now, a looping 'tail-recursive' update
//
function looping_update() {
	 update();
	 requestAnimationFrame(looping_update);
}

// and generalize this to an abstract version
// that takes a non looping function foo()
// and returns a looper like above
//
function animate(foo) {
	 function bar() {
		  foo();
		  requestAnimationFrame(bar);
	 }
	 return bar;
}

// so now we could just have

looping_update = animate(update);

// and the event listener as so:

window.addEventListener('scroll', function() {
	 requestAnimationFrame(looping_update);
});


// But now looping_update() will not terminate.
// Because it is tail-recursive, it runs like a
// while loop and does not exhaust the stack, but
// it's still not what we want.
// So we try using a flag "scrolling" so the listener
// can indicate to to the looper
// whether or not it is still receiving 'scroll' events.

var scrolling = false;
var scroll_received = true;

function animate(f00) {
	 function bar() {
		  if (loop_on) {
				foo();
				requestAnimationFrame(bar);
		  }
	 }
	 return bar;
}
var scrolling_handler = animate(update);

// if the listener does not receive another scroll event
// in the next 100ms, it sets scrolling to false so
// when the scrolling handler comes around again, it
// will terminate.

function scroll_listener() {
	 scroll_received = true;
	 if (!scrolling) {
		  scrolling = true;
		  requestAnimationFrame(scrolling_handler);
		  scroll_received = false;
	 }
	 setTimeout( 100, function() {
		  if (!scroll_received) {
				scrolling = false;
		  }
	 });
});

window.addEventListener('scroll', scroll_listener);





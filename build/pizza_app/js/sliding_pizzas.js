//------------------------------------------------------------------------------------------------------
// sliding_pizzas.js

// constructor for a sliding pizza object
function Sliding_Pizza(bg, img_src, row, col, height, width, sx, sy) {

    var className = 'sliding-pizza';
    var x = col * sx;
    var y = row * sy;
    var img = document.createElement('img');
    var dx, dy;

    img.className = className;
    img.src = img_src;
    img.style.height = height;
    img.style.width = width;
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    bg.appendChild(img);

    function update_position(dx, dy) {
        img.style.transform = 'translateX(' + dx + 'px)';
    }

    return {
        bg: bg,
        img: img,
        row: row,
        col: col,
        x: x,
        y: y,
        sx: sx,
        sy: sy,
        dx: 0,
        dy: 0,
        update_position: update_position
    }
}

// constructor
function Sliding_Pizzas_Background(rows, cols, timer_wrap) {

    var bg;           // background element
    var pizzas = [];  // array of sliding pizzas
    var sx = 256;     // spacing
    var sy = 256;
    var frame = 0;    // frame count
	 
	 // method
    function generate_sliding_pizzas() {

        var img_src = "images/pizza.png";
        var height = "100px";
        var width = "73.333px";

		  bg = document.querySelector("#sliding-pizzas")

        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                pizza = Sliding_Pizza(bg, img_src, row, col, height, width, sx, sy);
                pizzas.push(pizza);
            }
        }
        scrolling = true;
        update_positions();
    }

	 // Thank you MDN!
	 // https://developer.mozilla.org/en-US/docs/Web/Events/scroll
	 //
	 (function() {
		  var throttle = function(type, name, obj) {
				obj = obj || window;
				var running = false;
				var func = function() {
					 if (running) { return; }
					 running = true;
					 requestAnimationFrame(function() {
						  obj.dispatchEvent(new CustomEvent(name));
						  running = false;
					 });
				};
				obj.addEventListener(type, func);
		  };
		  
		  // init - you can init any event 
		  throttle ("scroll", "optimizedScroll");
	 })();

	 function log_update_times(times) {
		  var sum = 0;
		  for (var i = times.length-10; i < times.length; i++) {
				sum = sum + times[i].duration;
		  }
		  console.log("Average time to generate last 10 frames: " + sum / 10 + "ms");
	 }

    // 'scrolling' is a boolean flag
    //   - set by event listener
    //   - tested and cleared by update_positions()
	 var scrolling = false;

    // 'updating' is a boolean flag
    //   - set and cleared by update_positions()
    //   - tested by scroll event listener
	 var updating = false;

	 // method update_positions()
    function update_positions() {

        // remember, we're in a loop
        // the scrolling flag may have been set again by the 
        // scroll event listener, and if so we update positions

        if (scrolling) {

            // clear the flag, indicating that we are handling the
            // scroll event that got us here.  If another scroll
            // event occurs while we're updating, we'll know about it
            // next time around.

            scrolling = false;

            // setting this flag tells the event listener that we
            // are already working on it, so no need to request another
            // animation frame, we'll take care of that here, right
            // after we update positions and log.

            updating = true;

		      // As if things weren' convoluted enough already, 
            // we wrap the updating code with a timer.
            // The timer_wrap function is just a generalized
            // abstraction of the _highly_touted_ window.performance
            // code used here previously and a couple other spots.
            // (see frame.js)

		      var times = timer_wrap("frame", function() {

                // now we actually do the updating. 
                // time's a wastin' and the early bird gets
                // the worm so rise and shine and git'r'done.

				    var i, j, phase;
				    var top = document.body.scrollTop;
				    frame++;

                // I opted for a nested loop approach here.  I didn't
                // want to do the trigonometry in the inner loop, but
                // it's value depends on the loop var.  But since it
                // i%5 there were only 5 of them, so we do them in the
                // outer loop and do the corresponding updates in the
                // inner loop. Note that the inner loop var j starts
                // at i and is incremented by 5 each time thru.

				    for (i = 0; i < 5; i++) {
					     phase = Math.sin((top / 1250) + i);
					     for (j = i; j < pizzas.length; j += 5) {
						      pizzas[j].update_position(100 * phase, 0);
					     }
				    }
            // all these parens and curly braces are starting to get
            // to me :-) emacs helps me keep them straight. We have
            // here the end of the anoymous function definition, the
            // closing of the time_wrap( param list, and the
            // invocation of the timer wrapped update function.

            })();

            // Let the boss know how're we doin'.
		      if (frame % 10 === 0) {
				    log_update_times(times);
		      }

            // Since another scroll event might have come in while we
            // were working, we go 'round again.  We'll check the
            // scrolling flag at the top.

            requestAnimationFrame(update_positions);
        }
        else {

            // We're no longer scrolling so exit the tail-recursive
            // loop.  Clearing the updating flag let's the event
            // handler know that next time it gets a scroll event it
            // needs to fire us up again.

            updating = false;
        }
	 }

	 // method init()
	 function init() {

        // There is an intricate tango going on between this event
        // listener and the update_positions() function.  The
        // optimizedScroll event is a throttled version of 'scroll'.
        // It's not clear to me whether we're better off with it
        // or just 'scroll' considering that we're managing our
        // own animation frame requests.  

		  window.addEventListener('optimizedScroll', function() {

            // The 'scrolling' flag indicates to update_functions()
            // that a scroll event has occurred.

            scrolling = true;

            // If update_positions() is already working, don't bother
            // it, but if it is not then fire it up.

            if (!updating) {
                requestAnimationFrame(update_positions);
            }
		  });

		  generate_sliding_pizzas();	
	 }

   return {
        cols: cols,
        rows: rows,
        sx: sx,
        sy: sy,
        pizzas: pizzas,
        bg: bg,
		  update_positions: update_positions,
		  generate_sliding_pizzas: generate_sliding_pizzas,
        init: init
    }
}



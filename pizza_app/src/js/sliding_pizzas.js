
//----------------------------------------------------------------------------------------
// SlidingPizza() constructs a sliding pizza object.
//
function SlidingPizza(bg, imgSrc, row, col, sx, sy) {

    var className = 'sliding-pizza';
    var x = col * sx;
    var y = row * sy;
    var img = document.createElement('img');

    img.className = className;
    img.src = imgSrc;
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    bg.appendChild(img);

    function updatePosition(dx, dy) {
        img.style.transform = 'translateX(' + dx + 'px)';
    }

    // I believe only updatePosition() is used externally
    // (by updatePositions()).
    return {
        bg: bg,
        img: img,
        row: row,
        col: col,
        updatePosition: updatePosition
    };

} // end SlidingPizza.


//----------------------------------------------------------------------------------------
// SlidingPizzasBackground() constructs the crazy background.
//
function SlidingPizzasBackground(rows, cols) {

    var bg;           // background element
    var pizzas = [];  // array of sliding pizzas
    var sx = 256;     // spacing
    var sy = 256;
    var frame = 0;    // frame count
	
    //-----------------------------------------------------------------------
	// method generateSlidingPizzas() 
    //
    function generateSlidingPizzas() {

        // In an attempt to speed things up, I made the sliding
        // pizza images opaque with a black blackground.  I thought
        // these might be easier to composte. 
        // TODO: measure it.  It might not make much difference and
        // making the pizza images opaque means that they have to 
        // match the page's background color.

        var imgSrc = "images/sliding_pizza.png";

        var pizza;
		bg = document.querySelector("#sliding-pizzas");

        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                pizza = SlidingPizza(bg, imgSrc, row, col, sx, sy);
                pizzas.push(pizza);
            }
        }
        updatePositions();
    }

    //-----------------------------------------------------------------------
	// method updatePositions()
    //
    var updatePositions = function() {

        // Here I've pulled the trigonometry out of the inner loop 
        // since there are only 5 phases.  We compute the phase once
        // and then run the inner loop for each pizza having that phase.
        //
        // TODO: Try putting each phase on a separate layer and moving
        // them by translateX'ing the layer as a whole.
        //
        // TODO: Make the number of phases a parameter to the constructor.
        // I bet any number that is relatively prime to the 
        // number of columns would have the crazy look to it.

		var i, j, phase;
		var top = document.body.scrollTop;
		frame++;
        
		for (i = 0; i < 5; i++) {
			phase = Math.sin((top / 1250) + i);
			for (j = i; j < pizzas.length; j += 5) {
				pizzas[j].updatePosition(100 * phase, 0);
			}
		}
    };

    //-----------------------------------------------------------------------
    // logUpdateTimes(): log the average time it took for the past
    // sampleSize updates.  I broke it out as a separate function
    // which can be passed to generalized timerWrap() function.
    //
    // Also, with my new animation looper, some additional things
    // (loops and events) are logged.  logUpdateTimes() produced
    // so much output that the animation log got lost in the shuffle.
    // So I changed the sample size to reduce the amount logged.
    //
	function logUpdateTimes(times) {
		var sampleSize = 100;
		var sum = 0;
		var msg = "Average time to generate last " + sampleSize + " frames: ";

        if (times.length % sampleSize === 0) {
		    for (var i = times.length-sampleSize; i < times.length; i++) {
				sum = sum + times[i].duration;
		    }
		    console.log(msg + sum / sampleSize + "ms");
        }
	}

    //-----------------------------------------------------------------------
	// method init()
    //
	function init() {
        // wrap updatePositions() with the timer (see timer.js)
		updatePositions = timerWrap('update', updatePositions, logUpdateTimes);
        window.addEventListener('scroll', animationLoop(updatePositions, 500));
		generateSlidingPizzas();	
	}

    // How many of these are used externally?  Only init() I think.
    // The others may be handy for browsing in DevTools.
    return {
        cols: cols,
        rows: rows,
        sx: sx,
        sy: sy,
        pizzas: pizzas,
        bg: bg,
		updatePositions: updatePositions,
		generateSlidingPizzas: generateSlidingPizzas,
        init: init
    };

} // end SlidingPizzas.



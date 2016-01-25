//------------------------------------------------------------------------------------------------------
// sliding_pizzas.js

// constructor for a sliding pizza object
function SlidingPizza(bg, imgSrc, row, col, sx, sy) {

    var className = 'sliding-pizza';
    var x = col * sx;
    var y = row * sy;
    var img = document.createElement('img');
    var dx, dy;

    img.className = className;
    img.src = imgSrc;
    //img.style.height = height;
    //img.style.width = width;
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    bg.appendChild(img);

    function updatePosition(dx, dy) {
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
        updatePosition: updatePosition
    }
}

// constructor
function SlidingPizzasBackground(rows, cols) {

    var bg;           // background element
    var pizzas = [];  // array of sliding pizzas
    var sx = 256;     // spacing
    var sy = 256;
    var frame = 0;    // frame count
	 
	 // method
    function generateSlidingPizzas() {

        var imgSrc = "images/pizza-blk-bg-sm.jpg";
        //var height = "100px";
        //var width = "73.333px";

		  bg = document.querySelector("#sliding-pizzas")

        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                pizza = SlidingPizza(bg, imgSrc, row, col, sx, sy);
                pizzas.push(pizza);
            }
        }
        updatePositions();
    }

	 // method updatePositions()
    function updatePositions() {

		  var i, j, phase;
		  var top = document.body.scrollTop;
		  frame++;
        
		  for (i = 0; i < 5; i++) {
				phase = Math.sin((top / 1250) + i);
				for (j = i; j < pizzas.length; j += 5) {
					 pizzas[j].updatePosition(100 * phase, 0);
				}
		  }
    }

	 function logUpdateTimes(times) {
		  var sampleSize = 100;
		  var sum = 0;
		  var msg = "Average time to generate last " + sampleSize + " frames: "
        if (times.length % sampleSize == 0) {
		      for (var i = times.length-sampleSize; i < times.length; i++) {
				    sum = sum + times[i].duration;
		      }
		      console.log(msg + sum / sampleSize + "ms");
        };
	 }

	 // method init()
	 function init() {
		  if (false) {
				updatePositions = timerWrap('update', updatePositions, logUpdateTimes);
		  }
        window.addEventListener('scroll', animationLoop(updatePositions, 300));

		  generateSlidingPizzas();	
	 }

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
    }
}



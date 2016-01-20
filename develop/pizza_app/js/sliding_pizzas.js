//------------------------------------------------------------------------------------------------------
// sliding_pizzas.js

// constructor for a sliding pizza object
function Sliding_Pizza(bg, img_src, row, col, sx, sy) {

    var className = 'sliding-pizza';
    var x = col * sx;
    var y = row * sy;
    var img = document.createElement('img');
    var dx, dy;

    img.className = className;
    img.src = img_src;
    //img.style.height = height;
    //img.style.width = width;
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
function Sliding_Pizzas_Background(rows, cols) {

    var bg;           // background element
    var pizzas = [];  // array of sliding pizzas
    var sx = 256;     // spacing
    var sy = 256;
    var frame = 0;    // frame count
	 
	 // method
    function generate_sliding_pizzas() {

        var img_src = "images/pizza-blk-bg-sm.jpg";
        //var height = "100px";
        //var width = "73.333px";

		  bg = document.querySelector("#sliding-pizzas")

        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                pizza = Sliding_Pizza(bg, img_src, row, col, sx, sy);
                pizzas.push(pizza);
            }
        }
        update_positions();
    }

	 // method update_positions()
    function update_positions() {

		  var i, j, phase;
		  var top = document.body.scrollTop;
		  frame++;
        
		  for (i = 0; i < 5; i++) {
				phase = Math.sin((top / 1250) + i);
				for (j = i; j < pizzas.length; j += 5) {
					 pizzas[j].update_position(100 * phase, 0);
				}
		  }
    }

	 function log_update_times(times) {
		  var sum = 0;
        if (times.length % 100 == 0) {
		      for (var i = times.length-100; i < times.length; i++) {
				    sum = sum + times[i].duration;
		      }
		      console.log("Average time to generate last 100 frames: " + sum / 100 + "ms");
        };
	 }

	 // method init()
	 function init() {
        var timed_update = timer_wrap('update', update_positions, log_update_times)
        scroller = condition_handler(timed_update, 3000);
        window.addEventListener('scroll', scroller.event_listener);

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



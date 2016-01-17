//------------------------------------------------------------------------------------------------------
// sliding_pizzas.js

// constructor for a sliding pizza object
function Sliding_Pizza(bg, img_src, row, col, height, width, sx, sy) {

    var x = col * sx;
    var y = row * sy;
    var className = 'sliding-pizza';
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
		  pizza_image_nodes = 
				Array.prototype.slice.apply(
					 document.querySelectorAll('img.sliding-pizza'));

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

	 var scrolling = false;
	 var updating = false;
	 // timed method
    function update_positions() {

		  if (scrolling) {
				scrolling = false;
				updating = true;

				// we wrap the updating code with a timeer
				var times = timer_wrap("frame", function() {
					 var i, j, phase;
					 var top = document.body.scrollTop;
					 frame++;
					 for (i = 0; i < 5; i++) {
						  phase = Math.sin((top / 1250) + i);
						  for (j = i; j < pizzas.length; i += 5) {
								pizzas[j].update_position(100 * phase, 0);
					 }
				})();
				if (frame % 10 === 0) {
					 log_update_times(times);
				}
		  }
		  updating = false;
		  requestAnimationFrame(update_positions);
	 }

	 // method init()
	 function init() {
		  //window.addEventListener('optimizedScroll', function() {
		  window.addEventListener('scroll', function() {
				scrolling = true;
				});

		  requestAnimationFrame(update_positions);
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



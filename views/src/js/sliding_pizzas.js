

//---------------------------------------------------------------------------------

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

//---------------------------------------------------------------------------------

function Sliding_Pizza_Background(rows, cols) {

    // background element
    var bg;

    // array of sliding pizzas
    var pizzas = [];

    // spacing = 256;
    var sx = 256;
    var sy = 256;

    // frame count
    var frame = 0;

    function generate_sliding_pizzas() {

        var img; 
        var src = "images/pizza.png";
        var height = "100px";
        var width = "73.333px";

		  bg = document.querySelector("#sliding-pizzas")

        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                pizza = Sliding_Pizza(bg, src, row, col, height, width, sx, sy);
                pizzas.push(pizza);
            }
        }
        update_positions();
    }

    function update_positions(time_stamp) {

		  var sum = 0;
		  var i;

		  // console.log('time_stamp: ' + time_stamp);

		  var times = timer_wrap("frame", function() {
				var phase;
				var top = document.body.scrollTop;
				
				frame++;
				for (var i=0; i<5; i++) {
					 phase = Math.sin((top / 1250) + i);
					 for (var j=i; j<pizzas.length; j+=5) {
						  pizzas[j].update_position(100 * phase, 0);
					 }
				}
		  })();

        if (frame % 10 === 0) {
				for (i = times.length-10; i < times.length; i++) {
					 sum = sum + times[i].duration;
				}
				console.log("Average time to generate last 10 frames: " + sum / 10 + "ms");
		  }
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
		  
		  /* init - you can init any event */
		  throttle ("scroll", "optimizedScroll");
	 })();

    function init() {

        // runs update_positions on scroll
        window.addEventListener('optimizedScroll', function() {
            requestAnimationFrame( update_positions);
        });

        // Generates the sliding pizzas when the page loads.
        document.addEventListener('DOMContentLoaded', generate_sliding_pizzas);
    }

    return {
        cols: cols,
        rows: rows,
        sx: sx,
        sy: sy,
        pizzas: pizzas,
        bg: bg,
        init: init
    }
};

var sliding_pizzas;
sliding_pizzas = Sliding_Pizza_Background(10, 8);
sliding_pizzas.init();

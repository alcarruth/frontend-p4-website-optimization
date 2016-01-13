

//---------------------------------------------------------------------------------

function Sliding_Pizza(bg, img_src, row, col, height, width, sx, sy) {

    var x = col * sx;
    var y = row * sy;
    var className = 'mover';
    var img = document.createElement('img');
    var dx, dy;

    img.className = className;
    img.src = img_src;
    img.style.height = height;
    img.style.width = width;
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    bg.appendChild(img);

    function updatePosition(dx, dy) {

        // new way
        img.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';

        //img.style.left = dx + 'px';
        //img.style.top = dy + 'px';
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

//---------------------------------------------------------------------------------

function Sliding_Pizza_Background(rows, cols) {

    // background element
    var bg = document.querySelector("#movingPizzas1")

    // array of sliding pizzas
    var pizzas = [];
    var cols;
    var rows;

    // spacing = 256;
    var sx = 256;
    var sy = 256;

    // frame count
    var frame = 0;

    var busy = false;

    function generate_sliding_pizzas() {

        var img; 
        var src = "images/pizza.png";
        var height = "100px";
        var width = "73.333px";

        for (row = 0; row < rows; row++) {
            for (col = 0; col < cols; col++) {
                pizza = Sliding_Pizza(bg, src, row, col, height, width, sx, sy);
                pizzas.push(pizza);
            }
        }
        timer_wrap(updatePositions)();
    }

    function timer_wrap(func) {

        return function() {

            // array of timings of calls to func() 
            var times;
            var i, sum;

            window.performance.mark("mark_start_frame");

            // the function call to be timed
            func();

            window.performance.mark("mark_end_frame");
            window.performance.measure(
                "measure_frame_duration", "mark_start_frame", "mark_end_frame");

            if (frame % 10 === 0) {
                sum = 0;
                times = window.performance.getEntriesByName("measure_frame_duration");
                for (i = times.length-10; i < times.length; i++) {
                    sum = sum + times[i].duration;
                }
                console.log("Average time to generate last 10 frames: " + sum / 10 + "ms");
            }
        }
    }

    function updatePositions() {
        var phase;
        var top = document.body.scrollTop;

        if (busy) {
            return;
        }
        busy = true;

        frame++;
        for (i=0; i< pizzas.length; i++) {
            phase = Math.sin((top / 1250) + (i % 5));
            pizzas[i].updatePosition(100 * phase, 0);
        }
        busy = false;
    }

    function init() {

        // runs updatePositions on scroll
        window.addEventListener('scroll', function() {
            requestAnimationFrame( timer_wrap(updatePositions));
            //requestAnimationFrame( updatePositions);
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

sliding_pizza_background = Sliding_Pizza_Background(10,8);
sliding_pizza_background.init();

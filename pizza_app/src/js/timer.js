//------------------------------------------------------------------------------
// Function timerWrap() generalizes the timing code from the original project.
//
// It is used in this project to wrap three functions:
// - resizePizzas()
// - generatePizzas()
// - updatePositions()
//
// arguments:
// - uniqueID a string used to construct the 'mark' and 'measure' strings
// - func: the function to be wrapped.
// - cb: a callback to be applied to the times array,
//       always a logging function in this project.
//
function timerWrap(uniqueID, func, cb) {

	return function() {
		
		var markStart = "markStart_" + uniqueID;
		var markEnd = "markEnd_" + uniqueID;
		var measure = "measure_" + uniqueID;
		var times;
        
		window.performance.mark(markStart);
		
		func.apply(this, arguments); // the function call to be timed
        
		window.performance.mark(markEnd);
		window.performance.measure(measure, markStart, markEnd);
		times = window.performance.getEntriesByName(measure);
        
		return cb(times);
	};
}




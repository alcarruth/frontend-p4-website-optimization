
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
	 }
}


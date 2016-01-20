
function timer_wrap(unique_id, func, cb) {

	 return function() {
				
		  var mark_start = "mark_start_" + unique_id;
		  var mark_end = "mark_end_" + unique_id;
		  var measure = "measure_" + unique_id;
		  var times;
        
		  window.performance.mark(mark_start);
		  
		  func(); // the function call to be timed
        
		  window.performance.mark(mark_end);
		  window.performance.measure(measure, mark_start, mark_end);
		  times = window.performance.getEntriesByName(measure);
        
		  return cb(times);
	 }
}


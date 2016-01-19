
class Timer

    constructor: ->
        @perf = window.performance
            
	wrap: (id, func) =>
        return () ->
            @perf.mark('start'+id)
            func()
            @perf.mark('stop'+id);
			@perf.measure('measure'+id, 'start'+id, 'stop'+id)
            return @perf.getEntriesByName('measure'+id)

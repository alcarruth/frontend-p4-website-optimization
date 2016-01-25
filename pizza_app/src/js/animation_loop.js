
function animationLoop(foo, dt) {

  var condition = false;
  var eventCount = 0;
  var looperStarts = 0;
  var timeout = null;

  function looper() {
    if (condition) {
      foo();
      requestAnimationFrame(looper);
    }
  };

  function timeoutHandler() {
    console.log('eventCount: ' + eventCount);
    condition = false;
  };

  function eventListener() {
    eventCount++;
    clearTimeout(timeout);
    timeout = setTimeout(timeoutHandler, dt);
    if (!condition) {
      condition = true;
      console.log('looperStarts: ' + ++looperStarts);
      requestAnimationFrame(looper);
    }
  };

  return eventListener;
}

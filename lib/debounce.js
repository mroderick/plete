export default debounce;

// https://github.com/angus-c/just/blob/master/packages/function-debounce/index.js
function debounce(fn, wait, callFirst) {
  var timeout;
  // eslint-disable-next-line consistent-return
  return function() {
    if (!wait) {
      // eslint-disable-next-line this/no-this
      return fn.apply(this, arguments);
    }
    // eslint-disable-next-line this/no-this
    var context = this;
    var args = arguments;
    var callNow = callFirst && !timeout;
    clearTimeout(timeout);
    // eslint-disable-next-line consistent-return
    timeout = setTimeout(function() {
      timeout = null;
      if (!callNow) {
        return fn.apply(context, args);
      }
    }, wait);

    if (callNow) {
      // eslint-disable-next-line this/no-this
      return fn.apply(this, arguments);
    }
  };
}

'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var DEBOUNCE_INTERVAL = 500; // ms

  var isEscPressed = function (evt) {
    return evt.keyCode === ESC_KEYCODE;
  };

  var debounce = function (func) {
    var lastTimeout = null;

    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        func.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };

  var createRandomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  window.utils = {
    debounce: debounce,
    createRandomNum: createRandomNum,
    isEscPressed: isEscPressed
  };
})();

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typewriter = require("./typewriter");

Object.keys(_typewriter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typewriter[key];
    }
  });
});
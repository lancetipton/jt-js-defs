"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.label = void 0;

var _elementR = require("elementR");

var label = function label(name, value) {
  return value && _elementR.elements.label({
    className: "item-label item-".concat(value.toLowerCase(), "-label"),
    "for": name
  }, value);
};

exports.label = label;
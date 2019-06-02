"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.label = void 0;

var _elementR = require("elementR");

const label = (name, value) => value && _elementR.elements.label({
  className: `item-label item-${value.toLowerCase()}-label`,
  "for": name
}, value);

exports.label = label;
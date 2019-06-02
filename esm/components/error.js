"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMessage = void 0;

var _elementR = require("elementR");

var div = _elementR.elements.div,
    span = _elementR.elements.span;

var errorMessage = function errorMessage(error) {
  return error && div({
    className: 'item-error-message'
  }, span({
    className: 'item-error-text'
  }, error)) || null;
};

exports.errorMessage = errorMessage;
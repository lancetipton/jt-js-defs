"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.display = void 0;

var _elementR = require("elementR");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getValue = function getValue(val, text) {
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return text ? "".concat(prefix).concat(text) : val || val === 0 || val === '' ? "".concat(prefix).concat((val + '').toString()) : '';
};

var display = function display(props, type) {
  var keyVal = type === 'key' ? getValue(props.key, props.keyText, props.keyPrefix) : '';
  var elValue = type === 'value' ? getValue(props.value, props.valueText, props.valPrefix) : '';
  return _defineProperty({
    keyVal: keyVal,
    elValue: elValue,
    editCls: '',
    El: _elementR.elements.div
  }, "".concat(type, "Attrs"), {
    "class": "item-".concat(type, " item-data")
  });
};

exports.display = display;
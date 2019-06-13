"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsutils = require("jsutils");

var _schema = require("./schema");

var _values = require("./values");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let useValues = (0, _jsutils.deepFreeze)(_objectSpread({}, _values.Values));

const updateDefValues = update => useValues = (0, _jsutils.deepFreeze)(_objectSpread({}, useValues, update));

let useSchema = (0, _jsutils.deepFreeze)(_objectSpread({}, _schema.Schema));

const updateDefSchema = update => useSchema = (0, _jsutils.deepFreeze)(_objectSpread({}, useSchema, update));

const Constants = {
  updateDefSchema,
  updateDefValues
};
Object.defineProperty(Constants, 'Values', {
  get: () => {
    return useValues;
  },
  enumerable: true
});
Object.defineProperty(Constants, 'Schema', {
  get: () => {
    return useSchema;
  },
  enumerable: true
});
var _default = Constants;
exports.default = _default;
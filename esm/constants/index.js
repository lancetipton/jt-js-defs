"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsutils = require("jsutils");

var _schema = require("./schema");

var _values = require("./values");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useValues = (0, _jsutils.deepFreeze)(_objectSpread({}, _values.Values));

var updateDefValues = function updateDefValues(update) {
  return useValues = (0, _jsutils.deepFreeze)(_objectSpread({}, useValues, update));
};

var useSchema = (0, _jsutils.deepFreeze)(_objectSpread({}, _schema.Schema));

var updateDefSchema = function updateDefSchema(update) {
  return useSchema = (0, _jsutils.deepFreeze)(_objectSpread({}, useSchema, update));
};

var Constants = {
  updateDefSchema: updateDefSchema,
  updateDefValues: updateDefValues
};
Object.defineProperty(Constants, 'Values', {
  get: function get() {
    return useValues;
  },
  enumerable: true
});
Object.defineProperty(Constants, 'Schema', {
  get: function get() {
    return useSchema;
  },
  enumerable: true
});
var _default = Constants;
exports.default = _default;
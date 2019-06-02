"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _number = _interopRequireDefault(require("../number"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class FloatType extends _number.default {
  constructor(config) {
    super(_objectSpread({}, config, {
      cleave: _objectSpread({
        numeral: true,
        stripLeadingZeroes: false,
        numeralThousandsGroupStyle: 'none',
        numeralDecimalScale: 8
      }, (config || {}).cleave)
    }));
  }

}

_defineProperty(FloatType, "priority", 2);

_defineProperty(FloatType, "defaultValue", 0.0);

_defineProperty(FloatType, "eval", value => typeof value === 'number' && Number(value) === value && value % 1 !== 0);

var _default = FloatType;
exports.default = _default;
"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _string = _interopRequireDefault(require("../string"));

var _jsutils = require("jsutils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ColorType extends _string.default {
  constructor(config) {
    super(_objectSpread({}, config, {
      cleave: _objectSpread({
        prefix: '#',
        uppercase: true
      }, config && config.cleave || {})
    }));

    _defineProperty(this, "config", {
      valueAttrs: {
        min: 7
      },
      useCleave: true
    });
  }

}

_defineProperty(ColorType, "priority", 2);

_defineProperty(ColorType, "defaultValue", '#FFFFFF');

_defineProperty(ColorType, "error", args => {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  return `Invalid color. Color value should be in hex format (#FFFFFF)`;
});

_defineProperty(ColorType, "eval", value => {
  if (!value || !(0, _jsutils.isStr)(value)) return false;
  return Boolean(/^#(?:(?:[A-F0-9]{2}){3,4}|[A-F0-9]{3})$/i.test(value));
});

var _default = ColorType;
exports.default = _default;
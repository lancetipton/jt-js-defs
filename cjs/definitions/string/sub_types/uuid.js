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

class UuidType extends _string.default {
  constructor(config) {
    super(_objectSpread({}, config, {
      cleave: _objectSpread({
        numeral: false,
        delimiter: '-',
        lowercase: true,
        blocks: [8, 4, 3, 3, 12],
        uppercase: false,
        stripLeadingZeroes: false
      }, config && config.cleave || {})
    }));

    _defineProperty(this, "config", {
      useCleave: true
    });
  }

}

_defineProperty(UuidType, "priority", 2);

_defineProperty(UuidType, "defaultValue", '');

_defineProperty(UuidType, "allowEmptyValue", '');

_defineProperty(UuidType, "error", args => {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  return `Invalid UUID format. Please enter a valid UUID (00000000-0000-000-000-000000000000)`;
});

_defineProperty(UuidType, "eval", value => {
  if (!value || !(0, _jsutils.isStr)(value)) return false;
  const regex = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
  return regex.test(value);
});

var _default = UuidType;
exports.default = _default;
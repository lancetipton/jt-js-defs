"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _string = _interopRequireDefault(require("../string"));

var _jsUtils = require("jsUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PhoneType extends _string.default {
  constructor(config) {
    super(_objectSpread({}, config, {
      cleave: _objectSpread({
        phone: true,
        delimiter: '-',
        phoneRegionCode: 'US'
      }, config && config.cleave || {})
    }));

    _defineProperty(this, "config", {
      useCleave: true
    });
  }

}

_defineProperty(PhoneType, "priority", 2);

_defineProperty(PhoneType, "defaultValue", '');

_defineProperty(PhoneType, "allowEmptyValue", '');

_defineProperty(PhoneType, "eval", value => {
  if (!(0, _jsUtils.isStr)(value)) return false;
  const regex = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  return Boolean(regex.test(value.replace(/\D/g, '')));
});

_defineProperty(PhoneType, "error", args => {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  return `Invalid phone number. Phone format should match 123-123-1234`;
});

var _default = PhoneType;
exports.default = _default;
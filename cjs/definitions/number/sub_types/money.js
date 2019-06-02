"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.index-of");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _number = _interopRequireDefault(require("../number"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MoneyType extends _number.default {
  constructor(config) {
    console.log(`---------- needs error handler ----------`);
    super(_objectSpread({}, config, {
      cleave: _objectSpread({
        numeral: true,
        delimiter: ',',
        stripLeadingZeroes: true,
        numeralDecimalScale: 2,
        prefix: '$',
        noImmediatePrefix: true
      }, (config || {}).cleave)
    }));

    _defineProperty(this, "config", {
      isNumber: true,
      useCleave: true
    });
  }

}

_defineProperty(MoneyType, "priority", 2);

_defineProperty(MoneyType, "defaultValue", '$0');

_defineProperty(MoneyType, "eval", value => {
  return typeof value === 'string' && value.indexOf('$') !== -1;
});

var _default = MoneyType;
exports.default = _default;
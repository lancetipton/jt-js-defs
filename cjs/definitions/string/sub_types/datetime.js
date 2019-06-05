"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.string.split");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _string = _interopRequireDefault(require("../string"));

var _jsUtils = require("jsUtils");

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let DATETIME_INPUT_SUPPORT;

class DateTimeType extends _string.default {
  constructor(config) {
    super(_objectSpread({}, config, {
      cleave: _objectSpread({
        numeral: true,
        numeralThousandsGroupStyle: 'none',
        blocks: [4, 2, 2, 2, 2],
        delimiters: ['-', '-', ', ', ':']
      }, config && config.cleave || {})
    }));

    _defineProperty(this, "config", {
      useCleave: false,
      valueAttrs: {}
    });

    _defineProperty(this, "getDisplayValue", value => {
      return value;
    });

    if (!DATETIME_INPUT_SUPPORT && DATETIME_INPUT_SUPPORT !== false) DATETIME_INPUT_SUPPORT = (0, _utils.checkInputSupport)('datetime-local');
    this.config.useCleave = !DATETIME_INPUT_SUPPORT;
    this.config.valueAttrs.type = DATETIME_INPUT_SUPPORT && 'datetime-local' || 'text';
    if (!DATETIME_INPUT_SUPPORT) this.config.valueAttrs.placeholder = 'YYYY-MM-DD, HH:MM';
  }

}

_defineProperty(DateTimeType, "priority", 2);

_defineProperty(DateTimeType, "defaultValue", '');

_defineProperty(DateTimeType, "allowEmptyValue", '');

_defineProperty(DateTimeType, "error", args => {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  const date = new Date();
  const format = `${date.hours}:${date.minutes}}`;
  return `Invalid time. Time format should match ${format} (Hour:Minutes)`;
});

_defineProperty(DateTimeType, "eval", value => {
  if (!(0, _jsUtils.isStr)(value)) return false;
  const dateSplit = value.split(':');
  if (dateSplit.length !== 2) return false;
  return dateSplit.reduce((valid, date) => {
    if (!valid) return valid;
    return isNaN(parseInt(date)) ? false : valid && date.length === 2;
  }, true);
});

var _default = DateTimeType;
exports.default = _default;
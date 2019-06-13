"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.string.split");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _string = _interopRequireDefault(require("../string"));

var _jsutils = require("jsutils");

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let TIME_INPUT_SUPPORT;

class TimeType extends _string.default {
  constructor(config) {
    super(_objectSpread({}, config, {
      cleave: _objectSpread({
        delimiter: ':',
        time: true,
        timePattern: ['h', 'm']
      }, config && config.cleave || {})
    }));

    _defineProperty(this, "config", {
      useCleave: false,
      valueAttrs: {}
    });

    _defineProperty(this, "getDisplayValue", value => {
      return parseInt(value.split(':')[0]) < 12 ? `${value} AM` : `${value} PM`;
    });

    if (!TIME_INPUT_SUPPORT && TIME_INPUT_SUPPORT !== false) TIME_INPUT_SUPPORT = (0, _utils.checkInputSupport)('time');
    this.config.useCleave = !TIME_INPUT_SUPPORT;
    this.config.valueAttrs.type = TIME_INPUT_SUPPORT && 'time' || 'text';
    if (!TIME_INPUT_SUPPORT) this.config.valueAttrs.placeholder = 'HH:MM';
  }

}

_defineProperty(TimeType, "priority", 2);

_defineProperty(TimeType, "defaultValue", '');

_defineProperty(TimeType, "allowEmptyValue", '');

_defineProperty(TimeType, "error", args => {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  const date = new Date();
  const format = `${date.hours}:${date.minutes}}`;
  return `Invalid time. Time format should match ${format} (Hour:Minutes)`;
});

_defineProperty(TimeType, "eval", value => {
  if (!(0, _jsutils.isStr)(value)) return false;
  const dateSplit = value.split(':');
  if (dateSplit.length !== 2) return false;
  return dateSplit.reduce((valid, date) => {
    if (!valid) return valid;
    return isNaN(parseInt(date)) ? false : valid && date.length === 2;
  }, true);
});

var _default = TimeType;
exports.default = _default;
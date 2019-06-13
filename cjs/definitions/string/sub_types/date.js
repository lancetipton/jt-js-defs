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

let DATE_INPUT_SUPPORT;

class DateType extends _string.default {
  constructor(config) {
    super(_objectSpread({}, config, {
      cleave: _objectSpread({
        date: true,
        delimiter: '-',
        datePattern: ['Y', 'm', 'd']
      }, config && config.cleave || {})
    }));

    _defineProperty(this, "config", {
      useCleave: false,
      valueAttrs: {}
    });

    _defineProperty(this, "getDisplayValue", value => {
      const valSplit = value.split('-').reverse();
      const temp = valSplit[0];
      valSplit[0] = valSplit[1];
      valSplit[1] = temp;
      return valSplit.join('-');
    });

    if (!DATE_INPUT_SUPPORT && DATE_INPUT_SUPPORT !== false) DATE_INPUT_SUPPORT = (0, _utils.checkInputSupport)('date');
    this.config.useCleave = !DATE_INPUT_SUPPORT;
    this.config.valueAttrs.type = DATE_INPUT_SUPPORT && 'date' || 'text';
    if (!DATE_INPUT_SUPPORT) this.config.valueAttrs.placeholder = 'YYYY-MM-DD';
  }

}

_defineProperty(DateType, "priority", 2);

_defineProperty(DateType, "defaultValue", '');

_defineProperty(DateType, "allowEmptyValue", '');

_defineProperty(DateType, "error", args => {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  const date = new Date();
  const today = date.getDate();
  const fullDay = today.length === 2 && today || `0${today}`;
  const month = date.getMonth() + 1;
  const fullMonth = month.length === 2 && month || `0${month}`;
  const format = `${fullDay}-${fullMonth}-${date.getFullYear()}`;
  return `Invalid date. Date format should match ${format} (Day-Month-Year)`;
});

_defineProperty(DateType, "eval", value => {
  if (!(0, _jsutils.isStr)(value)) return false;
  const dateSplit = value.split('-');
  if (dateSplit.length !== 3) return false;
  return dateSplit.reduce((valid, date) => {
    if (!valid) return valid;
    return isNaN(parseInt(date)) ? false : valid && (date.length === 2 || date.length === 4);
  }, true);
});

var _default = DateType;
exports.default = _default;
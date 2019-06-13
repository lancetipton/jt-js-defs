"use strict";

require("core-js/modules/es.array.index-of");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _string = _interopRequireDefault(require("../string"));

var _jsutils = require("jsutils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class EmailType extends _string.default {
  constructor(config) {
    super(config);
  }

}

_defineProperty(EmailType, "priority", 2);

_defineProperty(EmailType, "defaultValue", '');

_defineProperty(EmailType, "allowEmptyValue", '');

_defineProperty(EmailType, "error", args => {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  return `Invalid Email. Please enter a valid email address!`;
});

_defineProperty(EmailType, "eval", value => {
  if (!value || !(0, _jsutils.isStr)(value) || value.indexOf('@') === -1 || value.indexOf('.') === -1) return false;
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return Boolean(regex.test(value));
});

var _default = EmailType;
exports.default = _default;
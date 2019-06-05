"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _string = _interopRequireDefault(require("../string"));

var _jsUtils = require("jsUtils");

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TIME_INPUT_SUPPORT;

var TimeType =
/*#__PURE__*/
function (_StringType) {
  _inherits(TimeType, _StringType);

  function TimeType(config) {
    var _this;

    _classCallCheck(this, TimeType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeType).call(this, _objectSpread({}, config, {
      cleave: _objectSpread({
        delimiter: ':',
        time: true,
        timePattern: ['h', 'm']
      }, config && config.cleave || {})
    })));

    _defineProperty(_assertThisInitialized(_this), "config", {
      useCleave: false,
      valueAttrs: {}
    });

    _defineProperty(_assertThisInitialized(_this), "getDisplayValue", function (value) {
      return parseInt(value.split(':')[0]) < 12 ? "".concat(value, " AM") : "".concat(value, " PM");
    });

    if (!TIME_INPUT_SUPPORT && TIME_INPUT_SUPPORT !== false) TIME_INPUT_SUPPORT = (0, _utils.checkInputSupport)('time');
    _this.config.useCleave = !TIME_INPUT_SUPPORT;
    _this.config.valueAttrs.type = TIME_INPUT_SUPPORT && 'time' || 'text';
    if (!TIME_INPUT_SUPPORT) _this.config.valueAttrs.placeholder = 'HH:MM';
    return _this;
  }

  return TimeType;
}(_string.default);

_defineProperty(TimeType, "priority", 2);

_defineProperty(TimeType, "defaultValue", '');

_defineProperty(TimeType, "allowEmptyValue", '');

_defineProperty(TimeType, "error", function (args) {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  var date = new Date();
  var format = "".concat(date.hours, ":").concat(date.minutes, "}");
  return "Invalid time. Time format should match ".concat(format, " (Hour:Minutes)");
});

_defineProperty(TimeType, "eval", function (value) {
  if (!(0, _jsUtils.isStr)(value)) return false;
  var dateSplit = value.split(':');
  if (dateSplit.length !== 2) return false;
  return dateSplit.reduce(function (valid, date) {
    if (!valid) return valid;
    return isNaN(parseInt(date)) ? false : valid && date.length === 2;
  }, true);
});

var _default = TimeType;
exports.default = _default;
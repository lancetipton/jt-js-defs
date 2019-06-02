"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _number = _interopRequireDefault(require("../number"));

var _components = require("../../../components");

var _utils = require("../../../utils");

var _constants = _interopRequireDefault(require("../../../constants"));

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

var Values = _constants.default.Values;

var PercentType =
/*#__PURE__*/
function (_NumberType) {
  _inherits(PercentType, _NumberType);

  function PercentType(config) {
    var _this;

    _classCallCheck(this, PercentType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PercentType).call(this, config));

    _defineProperty(_assertThisInitialized(_this), "config", {
      isNumber: true
    });

    _defineProperty(_assertThisInitialized(_this), "suffix", '%');

    _defineProperty(_assertThisInitialized(_this), "updateSelection", function (e, Editor) {
      var input = e.target || e.currentTarget;
      var key = input && input.getAttribute(_constants.default.Values.DATA_SCHEMA_KEY);
      if (!key || !input || !input.value) return;
      key !== 'value' ? input.select() : input.setSelectionRange(0, input.value.length - 1);
    });

    _defineProperty(_assertThisInitialized(_this), "render", function (props) {
      var _props$schema = props.schema,
          id = _props$schema.id,
          key = _props$schema.key,
          value = _props$schema.value,
          mode = _props$schema.mode,
          matchType = _props$schema.matchType,
          keyType = _props$schema.keyType,
          parent = _props$schema.parent,
          error = _props$schema.error;
      var useVal = (0, _utils.updateSuffix)(value, _this.suffix);
      return (0, _components.Item)(_objectSpread({
        id: id,
        key: key,
        mode: mode,
        error: error,
        type: matchType,
        showLabel: true,
        value: useVal,
        showPaste: props.settings.Editor.hasTemp(),
        keyEdit: !parent || !Array.isArray(parent.value),
        keyType: keyType || 'text'
      }, _this.getActions(mode, {
        onFocus: _this.updateSelection,
        onClick: _this.updateSelection,
        onKeyUp: _utils.suffixSelection.bind(_assertThisInitialized(_this))
      }), {
        config: _this.config
      }));
    });

    return _this;
  }

  return PercentType;
}(_number.default);

_defineProperty(PercentType, "priority", 2);

_defineProperty(PercentType, "defaultValue", '0%');

_defineProperty(PercentType, "eval", function (value) {
  return typeof value === 'string' && value.indexOf('%') !== -1;
});

var _default = PercentType;
exports.default = _default;
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

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("../base"));

var _components = require("../../components");

var _constants = _interopRequireDefault(require("../../constants"));

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

var EmptyType =
/*#__PURE__*/
function (_BaseType) {
  _inherits(EmptyType, _BaseType);

  function EmptyType(config) {
    var _this;

    _classCallCheck(this, EmptyType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EmptyType).call(this, _objectSpread({}, config)));

    _defineProperty(_assertThisInitialized(_this), "onCancel", function (e, Editor) {
      var update = {
        remove: true
      };

      var id = _this.shouldDoDefault(e, update, Editor, _this.userEvents.onCancel);

      id && Editor.remove(id);
    });

    _defineProperty(_assertThisInitialized(_this), "onTypeChange", function (e, Editor) {
      var input = e.target || e.currentTarget;
      var value = input.value;
      var key = input.getAttribute(_constants.default.Values.DATA_SCHEMA_KEY);
      if (value === undefined || key === undefined || _this.original[key] && _this.original[key] === value) return;
      value && _this.config.expandOnChange !== false && _this.setWidth(input);
      var update = {
        matchType: value
      };
      if (_this.updated.key && _this.updated.key !== _this.original.key) update.key = _this.updated.key;
      _this.userEvents.onChange(e, update, _this.original.id, Editor) !== false && _this.original.id && Editor.update(_this.original.id, update);
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
          error = _props$schema.error,
          Types = props.settings.Editor.Types;
      return (0, _components.Item)(_objectSpread({
        id: id,
        value: '',
        Types: Types,
        error: error,
        key: Array.isArray(parent.value) ? key : '',
        type: _constants.default.Schema.EMPTY,
        showLabel: true,
        keyType: keyType || 'text',
        keyEdit: !parent || !Array.isArray(parent.value),
        mode: _constants.default.Schema.MODES.EDIT
      }, _this.getActions(_constants.default.Schema.MODES.EDIT, {
        onTypeChange: _this.onTypeChange
      }), {
        config: _this.config
      }));
    });

    return _this;
  }

  return EmptyType;
}(_base.default);

_defineProperty(EmptyType, "priority", 1);

_defineProperty(EmptyType, "eval", function (value) {
  return value === undefined;
});

_defineProperty(EmptyType, "defaultValue", function (newType, schema, settings) {
  return undefined;
});

var _default = EmptyType;
exports.default = _default;
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.number.constructor");

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

var _cleave = _interopRequireDefault(require("cleave.js"));

var _jsutils = require("jsutils");

var _constants = _interopRequireDefault(require("../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getCleaveEl = function getCleaveEl(Editor, id) {
  var schema = Editor.schema(id);
  return schema && schema.domNode && schema.domNode.getElementsByClassName(_constants.default.Values.CLEAVE_CLS)[0];
};

var CleaveType =
/*#__PURE__*/
function (_BaseType) {
  _inherits(CleaveType, _BaseType);

  function CleaveType(config) {
    var _this;

    _classCallCheck(this, CleaveType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CleaveType).call(this, config));

    _defineProperty(_assertThisInitialized(_this), "onCleaveChange", function (e, Editor) {
      // Sometimes this method gets called before the cleave is initialized
      // So if no cleave, but return 
      if (!_this.cleave) return; // If there is no cleave element, then just return
      // this method should never have been called

      if (!_this.cleave.element) return console.warn("Called onCleaveChange but no cleave element exists", _assertThisInitialized(_this));
      var update = {
        value: e.target.rawValue,
        key: _this.cleave.element.getAttribute(_constants.default.Values.DATA_SCHEMA_KEY),
        original: _this.original.value // Check if the input should be a number

      };

      if (_this.cleave.element.classList.contains(_constants.default.Values.NUMBER_CLS)) {
        var numVal = Number(update.value); // If it's a valid number use that instead

        !isNaN(numVal) && (update.value = numVal);
      } // Ensure we have a valid key and value, and there was an update


      if (update.value === undefined || update.key === undefined || _this.original[update.key] && _this.original[update.key] === update.value) return;
      _this.config.expandOnChange !== false && _this.setWidth(getCleaveEl(Editor, _this.original.id));
      return _this.original.value !== update.value && _this.userEvents.onChange(e, update, _this.original.id, Editor) !== false && (_this.updated.value = update.value);
    });

    _defineProperty(_assertThisInitialized(_this), "checkCleave", function (schema, domNode) {
      if (domNode.classList && domNode.classList.contains(_constants.default.Values.CLEAVE_CLS)) {
        // Set the onValueChanged cb here, so we get access to the injected Editor
        _this.cleaveOpts.onValueChanged = _this.onCleaveChange; // If a cleave instance already exists, clear it out

        _this.cleave && _this.clearCleave(); // Create a new cleave instance, with the current domNode

        _this.cleave = new _cleave.default(domNode, _this.cleaveOpts); // Set the initial cleave value

        _this.cleave.setRawValue(schema.value);

        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "buildEvents", function (schema, domNode) {
      return domNode && Array.from(domNode.getElementsByTagName('input')).map(function (input) {
        // Checks if it has the cleave class
        // Catches changes for the key input
        !_this.cleave && _this.checkCleave(schema, input) ? input.oninput = undefined : input.oninput = _this.onChange;
        _this.config.expandOnChange !== false && _this.setWidth(input);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearCleave", function () {
      var rmOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!_this.cleave) return;

      _this.cleave.destroy();

      _this.cleave = undefined;
      rmOpts && (0, _jsutils.clearObj)(_this.cleaveOpts);
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (props, Editor) {
      var schema = props.schema; // If not in edit mode, clear out cleave

      if (schema.mode !== _constants.default.Schema.MODES.EDIT) _this.clearCleave(false); // If in edit mode, and no cleave, add the cleave to the domNode
      else if (!_this.cleave) _this.buildEvents(schema, schema.domNode); // Else update the cleave to the current raw value
        else _this.cleave.setRawValue(schema.value);

      var parent = schema.parent,
          instance = schema.instance,
          domNode = schema.domNode,
          original = _objectWithoutProperties(schema, ["parent", "instance", "domNode"]); // Update original with current schema


      _this.original = original; // Clear out the updated, because we just updated

      _this.updated && (0, _jsutils.clearObj)(_this.updated);
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function (Editor) {
      // Set to undefined, because when the instance gets remove, we don't want it 
      // to remove the value; it's a ref to the actual value in the tree
      _this.original.value = undefined;

      _this.clearCleave();
    });

    _this.cleaveOpts = _objectSpread({
      onValueChanged: _this.onCleaveChange
    }, config.cleave);
    return _this;
  }

  return CleaveType;
}(_base.default);

var _default = CleaveType;
exports.default = _default;
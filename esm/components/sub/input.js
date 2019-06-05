"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.entries");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.input = exports.inputWrapper = void 0;

var _constants = _interopRequireDefault(require("../../constants"));

var _elementR = require("elementR");

var _label = require("./label");

var _jsUtils = require("jsUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Values = _constants.default.Values;

var getValue = function getValue(val, text) {
  return text ? text : val || val === 0 || val === '' ? (val + '').toString() : '';
};
/**
 * Gets the attributes for the input element, based on the passed in type
 * @param  { object } props - data passed in from TypeClass instance
 * @param  { string } type - which property the input is being built for ( key || value )
 * 
 * @return { dom node }
 */


var getAttrs = function getAttrs(props, type, keyVal, elVal) {
  var _objectSpread2, _objectSpread3;

  var configClasses = type === 'key' ? (0, _jsUtils.get)(props, 'config.keyAttrs.classes') : (0, _jsUtils.get)(props, 'config.valueAttrs.classes');
  var classes = "item-data ".concat(_constants.default.Values.EDIT_CLS).concat(configClasses && ' ' + configClasses || '');
  type !== 'key' && props.config.useCleave && (classes += " ".concat(_constants.default.Values.CLEAVE_CLS));
  props.config.isNumber && (classes += " ".concat(_constants.default.Values.NUMBER_CLS));
  var attrs = type === 'key' ? _objectSpread((_objectSpread2 = {
    "class": classes,
    type: props.keyType || 'text',
    value: keyVal
  }, _defineProperty(_objectSpread2, _constants.default.Values.DATA_SCHEMA_KEY, type), _defineProperty(_objectSpread2, "name", "key-".concat(props.key)), _defineProperty(_objectSpread2, "disabled", props.disabled), _defineProperty(_objectSpread2, "onClick", props.onClick || !props.onFocus && "this.select()"), _objectSpread2), props.config && props.config.keyAttrs || {}) : _objectSpread((_objectSpread3 = {
    "class": classes,
    type: props.valueType || 'text'
  }, _defineProperty(_objectSpread3, _constants.default.Values.DATA_SCHEMA_KEY, type), _defineProperty(_objectSpread3, "name", "value-".concat(props.key)), _defineProperty(_objectSpread3, "value", elVal), _defineProperty(_objectSpread3, "disabled", props.disabled), _defineProperty(_objectSpread3, "onClick", props.onClick || !props.onFocus && "this.select()"), _objectSpread3), props.config && props.config.valueAttrs || {}); // Add dom event handlers

  Object.entries(props).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return !attrs[key] && _constants.default.Values.DOM_EVENTS.indexOf(key) !== -1 && (0, _jsUtils.isFunc)(value) && (attrs[key] = value);
  });
  return attrs;
};
/**
 * Wraps an input element to help with styling and placement ( i.e. position: relative )
 * @param  { object } props - attributes for the wrapper and type of data being wrapped
 * @param  { any } children - sub elements of the wrapper
 * 
 * @return { dom node }
 */


var inputWrapper = function inputWrapper(props, children) {
  var type = props.type,
      showLabel = props.showLabel,
      classes = props.classes,
      attrs = _objectWithoutProperties(props, ["type", "showLabel", "classes"]);

  classes = classes && "".concat(classes, " item-data-wrapper") || 'item-data-wrapper';
  if (type) classes += " item-".concat(type, "-wrapper");
  return _elementR.elements.div(_objectSpread({}, attrs, {
    className: classes
  }), showLabel && (0, _label.label)(type, (0, _jsUtils.capitalize)(type)), children);
};
/**
 * Builds an input object based on passed in params
 * @param  { object } props - data passed in from TypeClass instance
 * @param  { object } props.showLabel - should show input label
 * @param  { object } props.value - value of the element
 * @param  { object } props.valueType - value input type if editing
 * @param  { object } props.key - key being edited
 * @param  { object } props.keyType - key input type if editing
 * @param  { string } type - which property the input is being built for ( key || value )
 * 
 * @return { object } - object with properties used to create an input domNode
 */


exports.inputWrapper = inputWrapper;

var input = function input(props, type) {
  var keyVal = type === 'key' && getValue(props.key, props.keyText);
  var elValue = type === 'value' && getValue(props.value, props.valueText);
  return _defineProperty({
    keyVal: keyVal,
    elValue: elValue,
    El: _elementR.elements.input,
    isEdit: true,
    showLabel: props.showLabel,
    editCls: _constants.default.Values.EDIT_CLS
  }, "".concat(type, "Attrs"), getAttrs(props, type, keyVal, elValue));
};

exports.input = input;
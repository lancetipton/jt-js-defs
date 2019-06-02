"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.entries");

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Values = _constants.default.Values;

const getValue = (val, text) => {
  return text ? text : val || val === 0 || val === '' ? (val + '').toString() : '';
};
/**
 * Gets the attributes for the input element, based on the passed in type
 * @param  { object } props - data passed in from TypeClass instance
 * @param  { string } type - which property the input is being built for ( key || value )
 * 
 * @return { dom node }
 */


const getAttrs = (props, type, keyVal, elVal) => {
  const configClasses = type === 'key' ? (0, _jsUtils.get)(props, 'config.keyAttrs.classes') : (0, _jsUtils.get)(props, 'config.valueAttrs.classes');
  let classes = `item-data ${_constants.default.Values.EDIT_CLS}${configClasses && ' ' + configClasses || ''}`;
  type !== 'key' && props.config.useCleave && (classes += ` ${_constants.default.Values.CLEAVE_CLS}`);
  props.config.isNumber && (classes += ` ${_constants.default.Values.NUMBER_CLS}`);
  const attrs = type === 'key' ? _objectSpread({}, props.config && props.config.keyAttrs || {}, {
    "class": classes,
    type: props.keyType || 'text',
    value: keyVal,
    [_constants.default.Values.DATA_SCHEMA_KEY]: type,
    name: `key-${props.key}`,
    disabled: props.disabled,
    onClick: props.onClick || !props.onFocus && `this.select()`
  }) : _objectSpread({}, props.config && props.config.valueAttrs || {}, {
    "class": classes,
    type: props.valueType || 'text',
    [_constants.default.Values.DATA_SCHEMA_KEY]: type,
    name: `value-${props.key}`,
    value: elVal,
    disabled: props.disabled,
    onClick: props.onClick || !props.onFocus && `this.select()` // Add dom event handlers

  });
  Object.entries(props).map(([key, value]) => !attrs[key] && _constants.default.Values.DOM_EVENTS.indexOf(key) !== -1 && (0, _jsUtils.isFunc)(value) && (attrs[key] = value));
  return attrs;
};
/**
 * Wraps an input element to help with styling and placement ( i.e. position: relative )
 * @param  { object } props - attributes for the wrapper and type of data being wrapped
 * @param  { any } children - sub elements of the wrapper
 * 
 * @return { dom node }
 */


const inputWrapper = (props, children) => {
  let type = props.type,
      showLabel = props.showLabel,
      classes = props.classes,
      attrs = _objectWithoutProperties(props, ["type", "showLabel", "classes"]);

  classes = classes && `${classes} item-data-wrapper` || 'item-data-wrapper';
  if (type) classes += ` item-${type}-wrapper`;
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

const input = (props, type) => {
  const keyVal = type === 'key' && getValue(props.key, props.keyText);
  const elValue = type === 'value' && getValue(props.value, props.valueText);
  return {
    keyVal,
    elValue,
    El: _elementR.elements.input,
    isEdit: true,
    showLabel: props.showLabel,
    editCls: _constants.default.Values.EDIT_CLS,
    [`${type}Attrs`]: getAttrs(props, type, keyVal, elValue)
  };
};

exports.input = input;
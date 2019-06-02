"use strict";

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

var _buttons = require("./buttons");

var _elementR = require("elementR");

var _jsUtils = require("jsUtils");

var _constants = _interopRequireDefault(require("../constants"));

var subComps = _interopRequireWildcard(require("./sub"));

var _error = require("./error");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var div = _elementR.elements.div;
/**
 * Build the input options based on props.mode and type
 * @param  { object } props - Data return from the sub component input type
 * @param  { string } type - One of key or value
 * @return { object } built options 
 */

var buildOptions = function buildOptions(props, type) {
  var isEdit = props.mode === _constants.default.Schema.MODES.EDIT;
  var typeEl = props["".concat(type, "El")];
  return !isEdit ? subComps.display(props, type) : typeEl && subComps[typeEl] ? subComps[typeEl](props, type) : subComps.input(props, type);
};
/**
 * Build the key input, key editing should always be a string
 * @param  { object } props - data return from the sub component input type
 * @return { dom node }
 */


var buildItemKey = function buildItemKey(_ref, props) {
  var showLabel = _ref.showLabel,
      El = _ref.El,
      keyAttrs = _ref.keyAttrs,
      keyVal = _ref.keyVal;
  if (props && props.keyEdit === false) keyAttrs.disabled = true;
  var keyEl = El(keyAttrs, keyVal);
  return !showLabel ? keyEl : div({
    className: 'item-data-wrapper item-key-wrapper'
  }, subComps.label(keyAttrs.name, 'Key'), keyEl);
};
/**
 * Build the value input
 * Checks for children method || use elValue, used for Select || Input dom nodes
 * @param  { object } props - data return from the sub component input type
 * @return { dom node }
 */


var buildItemValue = function buildItemValue(itemProps, props) {
  var showLabel = itemProps.showLabel,
      El = itemProps.El,
      valueAttrs = itemProps.valueAttrs,
      elValue = itemProps.elValue,
      children = itemProps.children;
  if (props && props.type === _constants.default.Schema.EMPTY) valueAttrs.disabled = true;
  var valEl = El(valueAttrs, (0, _jsUtils.isFunc)(children) && children(itemProps) || elValue);
  return !showLabel ? valEl : div({
    className: 'item-data-wrapper item-value-wrapper'
  }, subComps.label(valueAttrs.name, 'Value'), valEl);
};
/**
 * Builds item based on passed in props
 * Build item children including key / value inputs, and action based on props.mode
 * @param  { object } props - passing in from the Types render method
 * @return { dom node }
 */


var Item = function Item() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var classes = "item ".concat(props.mode === _constants.default.Schema.MODES.EDIT && _constants.default.Values.EDIT_CLS || '');
  if (props.type === _constants.default.Schema.EMPTY) classes += " item-empty";
  if (props.error) classes += " item-error";
  return div({
    className: classes
  }, buildItemKey(buildOptions(props, 'key'), props), buildItemValue(buildOptions(props, 'value'), props), div({
    className: "item-btns item-data"
  }, (0, _buttons.Buttons)(props)), (0, _error.errorMessage)(props.error));
};

exports.Item = Item;
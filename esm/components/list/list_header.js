"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListHeader = void 0;

var _buttons = require("../buttons");

var _elementR = require("elementR");

var _jsUtils = require("jsUtils");

var _constants = _interopRequireDefault(require("../../constants"));

var subComps = _interopRequireWildcard(require("../sub"));

var _error = require("../error");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var div = _elementR.elements.div;

var buildKeyEl = function buildKeyEl(_ref) {
  var showLabel = _ref.showLabel,
      El = _ref.El,
      keyAttrs = _ref.keyAttrs,
      keyVal = _ref.keyVal;
  var keyEl = El(keyAttrs, keyVal);
  return !showLabel ? keyEl : div({
    className: 'item-data-wrapper item-key-wrapper'
  }, subComps.label(keyAttrs.name, 'Key'), keyEl);
};

var buildHeaderKey = function buildHeaderKey(props) {
  var key = props.key,
      keyType = props.keyType,
      keyText = props.keyText,
      config = props.config;
  var text = "".concat(keyText || key, " ");
  return props.mode !== _constants.default.Schema.MODES.EDIT ? div({
    className: 'item-key item-data'
  }, text) : buildKeyEl(subComps.input({
    key: key,
    config: config,
    value: key,
    keyType: keyType || 'text',
    showLabel: true
  }, 'key'));
};

var buildHeaderValue = function buildHeaderValue(props) {
  var mode = props.mode,
      type = props.type,
      config = props.config;
  var typeName = (0, _jsUtils.capitalize)(type);
  if (mode !== _constants.default.Schema.MODES.EDIT) return div({
    className: 'item-value item-data'
  }, typeName);
  var inputData = subComps.input({
    config: config,
    value: typeName,
    valueType: 'text',
    showLabel: true,
    disabled: true
  }, 'value');
  return div({
    className: 'item-data-wrapper item-value-wrapper'
  }, subComps.label("value-".concat(type), 'Type'), inputData.El(inputData.valueAttrs, inputData.elValue));
};

var ListHeader = function ListHeader(props) {
  var id = props.id,
      isOpen = props.isOpen,
      isRoot = props.isRoot,
      error = props.error;
  var iconCls = isOpen && "open" || "";
  var rootCls = isRoot ? "root" : "";
  var classes = "".concat(iconCls, " ").concat(rootCls, " header item ").concat(props.mode === _constants.default.Schema.MODES.EDIT && _constants.default.Values.EDIT_CLS || '').concat(error && ' item-error' || '');

  var wrapperProps = _defineProperty({
    className: classes
  }, _constants.default.Values.DATA_TREE_ID, id);

  if (props.onToggle) {
    wrapperProps.className += ' item-has-toggle';
    wrapperProps.onClick = props.onToggle;
  }

  if (isRoot) wrapperProps.id = _constants.default.Values.JT_ROOT_HEADER_ID;
  return div(wrapperProps, (0, _buttons.Icon)(null, null, {
    icon: _defineProperty({
      className: "icon toggle-icon fas fa-angle-right ".concat(iconCls),
      title: "Toggle open / closed",
      onClick: props.onToggle
    }, _constants.default.Values.DATA_TREE_ID, id)
  }), buildHeaderKey(props), !rootCls ? buildHeaderValue(props) : null, div({
    className: "item-btns item-data"
  }, (0, _buttons.Buttons)(props)), (0, _error.errorMessage)(error));
};

exports.ListHeader = ListHeader;
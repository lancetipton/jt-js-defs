"use strict";

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

const div = _elementR.elements.div;

const buildKeyEl = ({
  showLabel,
  El,
  keyAttrs,
  keyVal
}) => {
  const keyEl = El(keyAttrs, keyVal);
  return !showLabel ? keyEl : div({
    className: 'item-data-wrapper item-key-wrapper'
  }, subComps.label(keyAttrs.name, 'Key'), keyEl);
};

const buildHeaderKey = props => {
  const key = props.key,
        keyType = props.keyType,
        keyText = props.keyText,
        config = props.config;
  const text = `${keyText || key} `;
  return props.mode !== _constants.default.Schema.MODES.EDIT ? div({
    className: 'item-key item-data'
  }, text) : buildKeyEl(subComps.input({
    key,
    config,
    value: key,
    keyType: keyType || 'text',
    showLabel: true
  }, 'key'));
};

const buildHeaderValue = props => {
  const mode = props.mode,
        type = props.type,
        config = props.config;
  const typeName = (0, _jsUtils.capitalize)(type);
  if (mode !== _constants.default.Schema.MODES.EDIT) return div({
    className: 'item-value item-data'
  }, typeName);
  const inputData = subComps.input({
    config,
    value: typeName,
    valueType: 'text',
    showLabel: true,
    disabled: true
  }, 'value');
  return div({
    className: 'item-data-wrapper item-value-wrapper'
  }, subComps.label(`value-${type}`, 'Type'), inputData.El(inputData.valueAttrs, inputData.elValue));
};

const ListHeader = props => {
  const id = props.id,
        isOpen = props.isOpen,
        isRoot = props.isRoot,
        error = props.error;
  const iconCls = isOpen && `open` || ``;
  const rootCls = isRoot ? `root` : ``;
  const classes = `${iconCls} ${rootCls} header item ${props.mode === _constants.default.Schema.MODES.EDIT && _constants.default.Values.EDIT_CLS || ''}${error && ' item-error' || ''}`;
  const wrapperProps = {
    className: classes,
    [_constants.default.Values.DATA_TREE_ID]: id
  };

  if (props.onToggle) {
    wrapperProps.className += ' item-has-toggle';
    wrapperProps.onClick = props.onToggle;
  }

  if (isRoot) wrapperProps.id = _constants.default.Values.JT_ROOT_HEADER_ID;
  return div(wrapperProps, (0, _buttons.Icon)(null, null, {
    icon: {
      className: `icon toggle-icon fas fa-angle-right ${iconCls}`,
      title: `Toggle open / closed`,
      onClick: props.onToggle,
      [_constants.default.Values.DATA_TREE_ID]: id
    }
  }), buildHeaderKey(props), !rootCls ? buildHeaderValue(props) : null, div({
    className: `item-btns item-data`
  }, (0, _buttons.Buttons)(props)), (0, _error.errorMessage)(error));
};

exports.ListHeader = ListHeader;
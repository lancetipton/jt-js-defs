"use strict";

require("core-js/modules/es.array.map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.select = exports.selectWrapper = void 0;

var _elementR = require("elementR");

var _constants = _interopRequireDefault(require("../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

const Values = _constants.default.Values;

const getOptProps = (value, elValue) => ({
  value,
  className: 'item-option',
  selected: elValue === value
});

const getChildren = props => props.options && props.options.map(option => typeof option === 'string' ? _elementR.elements.option(getOptProps(option, props.elValue), option) : _elementR.elements.option(getOptProps(option.value, props.elValue), option.text || option.value));

const selectWrapper = (props, children) => _elementR.elements.div({
  className: 'select-wrapper'
}, _elementR.elements.select(props, children), _elementR.elements.i({
  className: 'fas fa-sort select-icon'
}));

exports.selectWrapper = selectWrapper;

const select = (props, type) => ({
  El: selectWrapper,
  isEdit: true,
  showLabel: props.showLabel,
  keyVal: '',
  editCls: _constants.default.Values.EDIT_CLS,
  elValue: props.value && props.value.toString() || '',
  [`${type}Attrs`]: {
    "class": `item-${type} item-data ${_constants.default.Values.EDIT_CLS}`,
    [_constants.default.Values.DATA_SCHEMA_KEY]: type,
    name: `${type}-${props.key}`,
    value: props[type]
  },
  children: getChildren,
  options: Array.isArray(props.options) && props.options || []
});

exports.select = select;
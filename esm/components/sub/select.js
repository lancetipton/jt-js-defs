"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.select = exports.selectWrapper = void 0;

var _elementR = require("elementR");

var _constants = _interopRequireDefault(require("../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Values = _constants.default.Values;

var getOptProps = function getOptProps(value, elValue) {
  return {
    value: value,
    className: 'item-option',
    selected: elValue === value
  };
};

var getChildren = function getChildren(props) {
  return props.options && props.options.map(function (option) {
    return typeof option === 'string' ? _elementR.elements.option(getOptProps(option, props.elValue), option) : _elementR.elements.option(getOptProps(option.value, props.elValue), option.text || option.value);
  });
};

var selectWrapper = function selectWrapper(props, children) {
  return _elementR.elements.div({
    className: 'select-wrapper'
  }, _elementR.elements.select(props, children), _elementR.elements.i({
    className: 'fas fa-sort select-icon'
  }));
};

exports.selectWrapper = selectWrapper;

var select = function select(props, type) {
  var _$concat, _ref;

  return _ref = {
    El: selectWrapper,
    isEdit: true,
    showLabel: props.showLabel,
    keyVal: '',
    editCls: _constants.default.Values.EDIT_CLS,
    elValue: props.value && props.value.toString() || ''
  }, _defineProperty(_ref, "".concat(type, "Attrs"), (_$concat = {
    "class": "item-".concat(type, " item-data ").concat(_constants.default.Values.EDIT_CLS)
  }, _defineProperty(_$concat, _constants.default.Values.DATA_SCHEMA_KEY, type), _defineProperty(_$concat, "name", "".concat(type, "-").concat(props.key)), _defineProperty(_$concat, "value", props[type]), _$concat)), _defineProperty(_ref, "children", getChildren), _defineProperty(_ref, "options", Array.isArray(props.options) && props.options || []), _ref;
};

exports.select = select;
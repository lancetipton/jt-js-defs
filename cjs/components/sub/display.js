"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.display = void 0;

var _elementR = require("elementR");

const getValue = (val, text, prefix = '') => {
  return text ? `${prefix}${text}` : val || val === 0 || val === '' ? `${prefix}${(val + '').toString()}` : '';
};

const display = (props, type) => {
  const keyVal = type === 'key' ? getValue(props.key, props.keyText, props.keyPrefix) : '';
  const elValue = type === 'value' ? getValue(props.value, props.valueText, props.valPrefix) : '';
  return {
    keyVal,
    elValue,
    editCls: '',
    El: _elementR.elements.div,
    [`${type}Attrs`]: {
      "class": `item-${type} item-data`
    }
  };
};

exports.display = display;
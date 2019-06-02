"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _elementR = require("elementR");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const span = _elementR.elements.span,
      a = _elementR.elements.a;

const Icon = (icon, text, extraProps = {}) => {
  const lowerText = text && text.toLowerCase();
  const wrapClasses = extraProps.wrapper && extraProps.wrapper.className ? `icon-wrapper wrap-icon-${lowerText} ${extraProps.wrapper.className}` : `icon-wrapper wrap-icon-${lowerText}`;
  const props = {
    wrapper: _objectSpread({}, extraProps.wrapper, {
      className: wrapClasses
    }),
    icon: _objectSpread({
      className: `icon icon-${lowerText} fa fa-${icon}`,
      href: 'javascript:void(0);',
      title: text || icon
    }, extraProps.icon),
    text: _objectSpread({
      className: `icon-text`
    }, extraProps.text)
  };
  const children = text ? [a(props.icon, span(props.text, text))] : [a(props.icon)];
  return span(props.wrapper, children);
};

exports.Icon = Icon;
"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.Row = void 0;

var _elementR = require("elementR");

var _list_header = require("./list_header");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const div = _elementR.elements.div,
      ul = _elementR.elements.ul,
      li = _elementR.elements.li,
      i = _elementR.elements.i;

const Row = (rowProps, child) => li(_objectSpread({}, rowProps, {
  className: `row${rowProps.className && ' ' + rowProps.className || ''}`
}), child);

exports.Row = Row;

const checkExtraClass = (org, classes) => typeof classes === 'string' ? `${org} ${classes}` : Array.isArray(classes) ? `${org} ${classes.join(` `)}` : org;

const addEmpty = (rows, props) => {
  props.isOpen && props.children && !props.children.length && rows.push(Row({
    className: 'list-empty'
  }, div({
    className: 'list-empty-text'
  }, i({
    className: 'fas fa-ban fa-rotate-90 list-empty-icon'
  }), 'Empty')));
};
/**
 * Build list of items based on passed in children
 * Checks for children method || use elValue, used for Select || Input dom nodes
 * @param  { object } props - data passed in from TypeClass instance
 * @return { dom node }
 */


const List = props => {
  let children = props.children,
      classes = props.classes,
      styles = props.styles,
      headerProps = _objectWithoutProperties(props, ["children", "classes", "styles"]);

  styles = styles || {};
  const rows = children && children.map(child => Row({}, child)) || [];
  rows.unshift(Row({
    className: 'list-header'
  }, (0, _list_header.ListHeader)(headerProps)));
  addEmpty(rows, props);
  return div({
    className: checkExtraClass('list-wrapper', classes),
    style: styles.wrapper
  }, ul({
    className: checkExtraClass('list', classes),
    style: styles.list
  }, rows));
};

exports.List = List;
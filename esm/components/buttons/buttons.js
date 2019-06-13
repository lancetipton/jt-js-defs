"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.entries");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Buttons = void 0;

var _elementR = require("elementR");

var _icon2 = require("./icon");

var _jsutils = require("jsutils");

var _constants = _interopRequireDefault(require("../../constants"));

var _sub = require("../sub");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var div = _elementR.elements.div,
    span = _elementR.elements.span,
    option = _elementR.elements.option;
var btnTypes = {
  onEdit: {
    icon: 'pen',
    key: 'Edit'
  },
  onCopy: {
    icon: 'copy',
    key: 'Copy'
  },
  onCut: {
    icon: 'cut',
    key: 'Cut'
  },
  onPaste: {
    icon: 'paste',
    key: 'Paste'
  },
  onAdd: {
    icon: 'plus-square',
    key: 'Add'
  },
  onDelete: {
    icon: 'trash-alt',
    key: 'Delete'
  },
  onSave: {
    icon: 'check-square',
    key: 'Save'
  },
  onCancel: {
    icon: 'window-close',
    key: 'Cancel'
  }
};

var typeLabel = function typeLabel(type) {
  return div({
    className: "type-label"
  }, span({
    className: "type-text ".concat(type, "-text")
  }, "( ".concat((0, _jsutils.capitalize)(type), " )")));
};

var showTypeValue = function showTypeValue(props, type) {
  var _selectWrapper;

  if (type !== _constants.default.Schema.EMPTY || !props.Types) return typeLabel(type);
  var options = Object.keys(props.Types.get(null, {
    filter: [_constants.default.Schema.EMPTY]
  })).map(function (value) {
    return option({
      value: value,
      selected: props.matchType === value
    }, (0, _jsutils.capitalize)(value));
  });
  options.unshift(option({
    selected: !props.matchType
  }, 'Select Type...'));
  return (0, _sub.inputWrapper)({
    type: type,
    showLabel: true
  }, (0, _sub.selectWrapper)((_selectWrapper = {
    "class": "item-matchType item-data ".concat(_constants.default.Values.EDIT_CLS)
  }, _defineProperty(_selectWrapper, _constants.default.Values.DATA_SCHEMA_KEY, 'matchType'), _defineProperty(_selectWrapper, "name", "type-matchType"), _defineProperty(_selectWrapper, "value", props.matchType), _defineProperty(_selectWrapper, "onChange", props.onTypeChange), _selectWrapper), options));
};

var buildIcon = function buildIcon(action, type, id) {
  var _icon;

  var wrapperProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var btn = btnTypes[type] || {};
  return action ? (0, _icon2.Icon)(btn.icon, btn.key, {
    icon: (_icon = {}, _defineProperty(_icon, _constants.default.Values.DATA_TREE_ID, id), _defineProperty(_icon, "onclick", action), _icon),
    wrapper: wrapperProps
  }, type) : '';
};

var buildBtns = function buildBtns(id, props) {
  return Object.keys(btnTypes).reduce(function (actions, key) {
    var attrs = {};

    if (key === 'onPaste' && !props.isRoot) {
      attrs = props.showPaste ? {
        className: "".concat(_constants.default.Values.SHOW_PASTE_CLS, " ").concat(_constants.default.Values.PASTE_ACTION_CLS)
      } : {
        className: "".concat(_constants.default.Values.PASTE_ACTION_CLS)
      };
    }

    if (props.isRoot) {
      key === 'onAdd' ? actions.push(buildIcon(props[key], key, id, attrs)) : null;
      return actions;
    }

    props[key] && actions.push(buildIcon(props[key], key, id, attrs));
    return actions;
  }, []);
};

var Buttons = function Buttons(props) {
  if (!props.id) return [];
  var buttons = Object.entries(props).reduce(function (buttons, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    key.indexOf('on') === 0 && typeof value === 'function' && (buttons[key] = value);
    return buttons;
  }, {});
  var id = props.id,
      type = props.type;
  buttons.showPaste = props.showPaste;
  buttons.isRoot = props.isRoot;
  return div({
    className: "btns-wrapper"
  }, [showTypeValue(props, type), div({
    className: "btns-list"
  }, _toConsumableArray(buildBtns(id, buttons)))]);
};

exports.Buttons = Buttons;
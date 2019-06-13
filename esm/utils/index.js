"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.entries");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkInputSupport = exports.updateValWithSuffix = exports.suffixSelection = exports.updateSuffix = exports.togglePastAction = exports.updateValue = exports.shouldDoDefault = exports.callEditor = exports.addAllowedConfigOpts = exports.addCustomEvents = exports.updateParentConstruct = exports.updateParentHeights = void 0;

var _jsutils = require("jsutils");

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Loop through the schema, from the bottom up
 * Updates the Heights of the parents to ensure all content can be seen
 * @param  { object } schema - schema at the location in the tree.schema to start the loop
 * @param  { number } updateHeight - hight that should be added to the schemas maxHeight
 * @return { void }
 */
var updateParentHeights = function updateParentHeights(schema, updateHeight) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var domNode = schema && schema.domNode;
  if (!domNode || !updateHeight) return;
  var newHeight = domNode.scrollHeight + updateHeight;
  domNode.style.maxHeight = "".concat(newHeight + offset, "px");
  schema.parent && updateParentHeights(schema.parent, newHeight);
};

exports.updateParentHeights = updateParentHeights;

var updateParentConstruct = function updateParentConstruct(config, parent) {
  Object.entries(_constants.default.Values.PARENT_OVERWRITE).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        type = _ref2[1];

    if (_typeof(config[key]) === type && parent[key] !== config[key]) parent[key] = config[key];
  });
};

exports.updateParentConstruct = updateParentConstruct;

var addCustomEvents = function addCustomEvents(config, userEvents) {
  return Object.keys(_constants.default.Values.CUSTOM_EVENTS).map(function (key) {
    return userEvents[key] = (0, _jsutils.isFunc)(config[key]) && config[key] || _constants.default.Values.CUSTOM_EVENTS[key];
  });
};

exports.addCustomEvents = addCustomEvents;

var addAllowedConfigOpts = function addAllowedConfigOpts(config, baseConfig) {
  return _objectSpread({}, baseConfig, _constants.default.Values.TYPES_CONFIG_OPTS.reduce(function (typeConf, opt) {
    return opt in config && (typeConf[opt] = config[opt]) || typeConf;
  }, {}));
};

exports.addAllowedConfigOpts = addAllowedConfigOpts;

var callEditor = function callEditor(e, update, usrEvent, type, Editor) {
  e && e.stopPropagation();
  var id = shouldDoDefault(e, update, Editor, usrEvent);
  id && Editor[type] && Editor[type](id, update);
};

exports.callEditor = callEditor;

var shouldDoDefault = function shouldDoDefault(e, update, Editor, userEvent) {
  var id = e.currentTarget.getAttribute(_constants.default.Values.DATA_TREE_ID);
  return id && userEvent && userEvent(e, update, id, Editor) === false || id;
};

exports.shouldDoDefault = shouldDoDefault;

var updateValue = function updateValue(update, input) {
  var value = input.value; // Check input type, and if it has the CLEAVE_CLS
  // Which means is should be a number

  if (input.nodeName === 'INPUT' && input.classList.contains(_constants.default.Values.NUMBER_CLS)) {
    // Check if the input should be a number
    var numVal = Number(value); // If it's a valid number use that instead

    !isNaN(numVal) && (update.value = numVal);
  } // Check if the original is a boolean, if the value is a string boolean version
  else if (typeof update.original === 'boolean' && (value === 'false' || value === 'true')) update.value = value === 'true'; // Just set the value to update if none of the above
    else update.value = value;
};

exports.updateValue = updateValue;

var togglePastAction = function togglePastAction(type) {
  return Array.from(document.querySelectorAll(".".concat(_constants.default.Values.PASTE_ACTION_CLS))).map(function (node) {
    node && node.classList && node.classList[type](_constants.default.Values.SHOW_PASTE_CLS);
  });
};

exports.togglePastAction = togglePastAction;

var updateSuffix = function updateSuffix(value, suffix, remove) {
  if (!value && value !== 0) return;
  value = !(0, _jsutils.isStr)(value) && "".concat(value) || value;
  var cleanVal = value.replace(/\D/g, '');
  cleanVal = cleanVal.length && value[0] === '-' ? "-".concat(cleanVal) : cleanVal;
  return remove ? cleanVal : cleanVal && cleanVal.length && "".concat(cleanVal).concat(suffix) || '';
};

exports.updateSuffix = updateSuffix;

var suffixSelection = function suffixSelection(e, Editor) {
  var input = e.target || e.currentTarget;
  var key = input && input.getAttribute(_constants.default.Values.DATA_SCHEMA_KEY);
  if (!key || key !== 'value' || !input || !input.value) return;
  var selection = window.getSelection();
  var selected = selection && selection.toString();
  return !selected ? input.selectionEnd === input.value.length && input.setSelectionRange(input.selectionEnd - 1, input.selectionEnd - 1) : selected[selected.length - 1] === this.suffix && input.setSelectionRange(input.selectionStart, input.selectionEnd - 1);
};

exports.suffixSelection = suffixSelection;

var updateValWithSuffix = function updateValWithSuffix(update, input, suffix) {
  var value = updateSuffix(input.value, suffix, true);
  if (!value) return input.value = ''; // Check if the input should be a number

  var numVal = (value || value === 0) && Number(value); // If it's a valid number use that instead

  if (!isNaN(numVal)) {
    update.value = updateSuffix(numVal, suffix);
    update.value !== input.value && (input.value = update.value);
  } else input.value = '';
};

exports.updateValWithSuffix = updateValWithSuffix;

var checkInputSupport = function checkInputSupport(inputType) {
  var input = document.createElement('input');
  input.setAttribute('type', inputType);
  var notAnInputValue = 'not-a-input-value';
  input.setAttribute('value', notAnInputValue);
  return input.value !== notAnInputValue;
};

exports.checkInputSupport = checkInputSupport;
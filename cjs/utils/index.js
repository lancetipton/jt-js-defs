"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.entries");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkInputSupport = exports.updateValWithSuffix = exports.suffixSelection = exports.updateSuffix = exports.togglePastAction = exports.updateValue = exports.shouldDoDefault = exports.callEditor = exports.addAllowedConfigOpts = exports.addCustomEvents = exports.updateParentConstruct = exports.updateParentHeights = void 0;

var _jsutils = require("jsutils");

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Loop through the schema, from the bottom up
 * Updates the Heights of the parents to ensure all content can be seen
 * @param  { object } schema - schema at the location in the tree.schema to start the loop
 * @param  { number } updateHeight - hight that should be added to the schemas maxHeight
 * @return { void }
 */
const updateParentHeights = (schema, updateHeight, offset = 0) => {
  const domNode = schema && schema.domNode;
  if (!domNode || !updateHeight) return;
  const newHeight = domNode.scrollHeight + updateHeight;
  domNode.style.maxHeight = `${newHeight + offset}px`;
  schema.parent && updateParentHeights(schema.parent, newHeight);
};

exports.updateParentHeights = updateParentHeights;

const updateParentConstruct = (config, parent) => {
  Object.entries(_constants.default.Values.PARENT_OVERWRITE).map(([key, type]) => {
    if (typeof config[key] === type && parent[key] !== config[key]) parent[key] = config[key];
  });
};

exports.updateParentConstruct = updateParentConstruct;

const addCustomEvents = (config, userEvents) => Object.keys(_constants.default.Values.CUSTOM_EVENTS).map(key => userEvents[key] = (0, _jsutils.isFunc)(config[key]) && config[key] || _constants.default.Values.CUSTOM_EVENTS[key]);

exports.addCustomEvents = addCustomEvents;

const addAllowedConfigOpts = (config, baseConfig) => _objectSpread({}, baseConfig, _constants.default.Values.TYPES_CONFIG_OPTS.reduce((typeConf, opt) => opt in config && (typeConf[opt] = config[opt]) || typeConf, {}));

exports.addAllowedConfigOpts = addAllowedConfigOpts;

const callEditor = (e, update, usrEvent, type, Editor) => {
  e && e.stopPropagation();
  const id = shouldDoDefault(e, update, Editor, usrEvent);
  id && Editor[type] && Editor[type](id, update);
};

exports.callEditor = callEditor;

const shouldDoDefault = (e, update, Editor, userEvent) => {
  const id = e.currentTarget.getAttribute(_constants.default.Values.DATA_TREE_ID);
  return id && userEvent && userEvent(e, update, id, Editor) === false || id;
};

exports.shouldDoDefault = shouldDoDefault;

const updateValue = (update, input) => {
  const value = input.value; // Check input type, and if it has the CLEAVE_CLS
  // Which means is should be a number

  if (input.nodeName === 'INPUT' && input.classList.contains(_constants.default.Values.NUMBER_CLS)) {
    // Check if the input should be a number
    const numVal = Number(value); // If it's a valid number use that instead

    !isNaN(numVal) && (update.value = numVal);
  } // Check if the original is a boolean, if the value is a string boolean version
  else if (typeof update.original === 'boolean' && (value === 'false' || value === 'true')) update.value = value === 'true'; // Just set the value to update if none of the above
    else update.value = value;
};

exports.updateValue = updateValue;

const togglePastAction = type => Array.from(document.querySelectorAll(`.${_constants.default.Values.PASTE_ACTION_CLS}`)).map(node => {
  node && node.classList && node.classList[type](_constants.default.Values.SHOW_PASTE_CLS);
});

exports.togglePastAction = togglePastAction;

const updateSuffix = (value, suffix, remove) => {
  if (!value && value !== 0) return;
  value = !(0, _jsutils.isStr)(value) && `${value}` || value;
  let cleanVal = value.replace(/\D/g, '');
  cleanVal = cleanVal.length && value[0] === '-' ? `-${cleanVal}` : cleanVal;
  return remove ? cleanVal : cleanVal && cleanVal.length && `${cleanVal}${suffix}` || '';
};

exports.updateSuffix = updateSuffix;

const suffixSelection = function suffixSelection(e, Editor) {
  const input = e.target || e.currentTarget;
  const key = input && input.getAttribute(_constants.default.Values.DATA_SCHEMA_KEY);
  if (!key || key !== 'value' || !input || !input.value) return;
  const selection = window.getSelection();
  const selected = selection && selection.toString();
  return !selected ? input.selectionEnd === input.value.length && input.setSelectionRange(input.selectionEnd - 1, input.selectionEnd - 1) : selected[selected.length - 1] === this.suffix && input.setSelectionRange(input.selectionStart, input.selectionEnd - 1);
};

exports.suffixSelection = suffixSelection;

const updateValWithSuffix = (update, input, suffix) => {
  const value = updateSuffix(input.value, suffix, true);
  if (!value) return input.value = ''; // Check if the input should be a number

  const numVal = (value || value === 0) && Number(value); // If it's a valid number use that instead

  if (!isNaN(numVal)) {
    update.value = updateSuffix(numVal, suffix);
    update.value !== input.value && (input.value = update.value);
  } else input.value = '';
};

exports.updateValWithSuffix = updateValWithSuffix;

const checkInputSupport = inputType => {
  const input = document.createElement('input');
  input.setAttribute('type', inputType);
  const notAnInputValue = 'not-a-input-value';
  input.setAttribute('value', notAnInputValue);
  return input.value !== notAnInputValue;
};

exports.checkInputSupport = checkInputSupport;
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

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
exports.getTheme = exports.updateTheme = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DEF_CONFIG = {
  base: 5,
  spread: 2,
  range: 10,
  units: 'px',
  raw: false,
  negative: false
};
var DEF_THEME;
var DEF_COLORS = {
  blue: '#03A9F4',
  lime: '#0FCED1',
  green: '#4CAF50',
  red: '#FA0719',
  orange: '#FA7807',
  white: '#FFFFFF',
  white1: '#FCFCFE',
  gray: '#F5F5FA',
  gray1: '#D6D6DB',
  gray2: '#99999C',
  gray3: '#3D3D3E',
  gray4: '#1F1F1F'
};

var buildUseConf = function buildUseConf(update) {
  return Object.entries(DEF_CONFIG).reduce(function (config, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    var updateVal = update[key];

    if (!updateVal && updateVal !== false) {
      config[key] = DEF_CONFIG[key];
      return config;
    }

    config[key] = _typeof(updateVal) === _typeof(value) ? updateVal : updateVal !== false && DEF_CONFIG[key];
    return config;
  }, {});
};

var buildRangeProps = function buildRangeProps(type, config) {
  var postfix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var units = config.units,
      raw = config.raw,
      range = config.range,
      spread = config.spread,
      base = config.base,
      negative = config.negative;
  return _toConsumableArray(Array(range)).reduce(function (buildObj, _, ind) {
    var cur = Math.round((base + spread * ind) * 10) / 10;
    var name = "".concat(type).concat(cur).replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g, '');
    units && (buildObj[name] = "".concat(cur).concat(units).concat(postfix));
    negative && (buildObj["".concat(name, "Neg")] = "-".concat(cur).concat(units).concat(postfix));
    raw && (buildObj["".concat(name, "Raw")] = cur);
    return buildObj;
  }, {});
};

var buildRange = function buildRange(update) {
  var type = update && update.type;
  if (!type || typeof type !== 'string') return {};
  var useConf = buildUseConf(update);
  var postfix = update.postfix || '';
  var built = buildRangeProps(type, useConf, postfix);
  var baseName = "".concat(type).concat(useConf.base).replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g, '');
  useConf.units && (built[baseName] = "".concat(useConf.base).concat(useConf.units).concat(postfix));
  useConf.negative && (built["".concat(baseName, "Neg")] = "-".concat(useConf.base).concat(useConf.units).concat(postfix));
  useConf.raw && (built["".concat(baseName, "Raw")] = useConf.base);
  return built;
};

var DEF_SIZE = buildRange({
  type: 'size',
  spread: 1,
  range: 40
});
var DEV_SPEED = buildRange({
  type: 'speed',
  units: 's',
  spread: 0.25,
  raw: false,
  base: 0.5,
  range: 5
});

var updateTheme = function updateTheme(_ref3) {
  var theme = _ref3.theme,
      config = _ref3.config,
      colors = _ref3.colors,
      size = _ref3.size,
      speed = _ref3.speed;
  if (colors) DEF_COLORS = _objectSpread({}, DEF_COLORS, colors);
  if (config) DEF_CONFIG = _objectSpread({}, DEF_CONFIG, config);
  if (size) DEF_SIZE = size.type ? buildRange(size) : _objectSpread({}, DEF_SIZE, size);
  if (speed) DEV_SPEED = speed.type ? buildRange(speed) : _objectSpread({}, DEF_SIZE, speed);
  if (theme) DEF_THEME = _objectSpread({}, DEF_THEME, theme);
  return getTheme();
};

exports.updateTheme = updateTheme;

var getTheme = function getTheme() {
  return _objectSpread({
    size20Neg: "-20px",
    // Fonts
    fontPrimary: "\"Raleway\", sans-serif",
    fontSecondary: "\"Cabin\", sans-serif",
    fontThird: "\"Roboto\", sans-serif",
    fontLite: '300',
    fontNormal: 'normal',
    fontBold: 'bold',
    // Toggle Icon
    toggleHoverColor: DEF_COLORS.blue,
    toggleOpenColor: DEF_COLORS.lime,
    toggleEditColor: DEF_COLORS.green,
    toggleErrorColor: DEF_COLORS.red,
    // Item background color
    itemEditBackColor: DEF_COLORS.white,
    itemHoverBackColor: DEF_COLORS.white1,
    itemOpenBackColor: DEF_COLORS.gray,
    itemActiveBackColor: DEF_COLORS.gray,
    // Buttons states
    passiveBtnOpacity: '0',
    activeBtnOpacity: '1',
    passiveBtnColor: DEF_COLORS.gray3,
    activeEditColor: DEF_COLORS.lime,
    activeCopyColor: DEF_COLORS.blue,
    activeDragColor: DEF_COLORS.orange,
    activeAddColor: DEF_COLORS.green,
    activeSaveColor: DEF_COLORS.green,
    activeCancelColor: DEF_COLORS.red,
    activeDeleteColor: DEF_COLORS.red,
    // Types
    typeLabelColor: DEF_COLORS.gray2,
    // Inputs
    inputEditBorder: "1px solid ".concat(DEF_COLORS.gray1),
    inputFocusBorderBottom: "1px solid ".concat(DEF_COLORS.green),
    inputErrorBorder: "1px solid ".concat(DEF_COLORS.red),
    inputDisabledBackColor: DEF_COLORS.gray1,
    inputDisabledColor: DEF_COLORS.gray2,
    inputDisabledOpacity: 0.5,
    inputDisabledCursor: 'not-allowed',
    // Item
    itemBorder: "2px solid transparent",
    itemHoverBorder: "2px solid ".concat(DEF_COLORS.blue),
    itemEditBorder: "2px solid ".concat(DEF_COLORS.green),
    itemEmptyBorder: "2px solid ".concat(DEF_COLORS.green),
    itemErrorBorder: "2px solid ".concat(DEF_COLORS.red),
    itemErrorTextColor: DEF_COLORS.white,
    itemErrorTextBackground: DEF_COLORS.red,
    headerOpenBorder: "2px solid ".concat(DEF_COLORS.lime)
  }, DEF_COLORS, DEF_SIZE, DEV_SPEED);
};

exports.getTheme = getTheme;
"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.entries");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTheme = exports.updateTheme = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let DEF_CONFIG = {
  base: 5,
  spread: 2,
  range: 10,
  units: 'px',
  raw: false,
  negative: false
};
let DEF_THEME;
let DEF_COLORS = {
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

const buildUseConf = update => {
  return Object.entries(DEF_CONFIG).reduce((config, [key, value]) => {
    const updateVal = update[key];

    if (!updateVal && updateVal !== false) {
      config[key] = DEF_CONFIG[key];
      return config;
    }

    config[key] = typeof updateVal === typeof value ? updateVal : updateVal !== false && DEF_CONFIG[key];
    return config;
  }, {});
};

const buildRangeProps = (type, config, postfix = '') => {
  const units = config.units,
        raw = config.raw,
        range = config.range,
        spread = config.spread,
        base = config.base,
        negative = config.negative;
  return [...Array(range)].reduce((buildObj, _, ind) => {
    const cur = Math.round((base + spread * ind) * 10) / 10;
    const name = `${type}${cur}`.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g, '');
    units && (buildObj[name] = `${cur}${units}${postfix}`);
    negative && (buildObj[`${name}Neg`] = `-${cur}${units}${postfix}`);
    raw && (buildObj[`${name}Raw`] = cur);
    return buildObj;
  }, {});
};

const buildRange = update => {
  const type = update && update.type;
  if (!type || typeof type !== 'string') return {};
  const useConf = buildUseConf(update);
  const postfix = update.postfix || '';
  const built = buildRangeProps(type, useConf, postfix);
  const baseName = `${type}${useConf.base}`.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g, '');
  useConf.units && (built[baseName] = `${useConf.base}${useConf.units}${postfix}`);
  useConf.negative && (built[`${baseName}Neg`] = `-${useConf.base}${useConf.units}${postfix}`);
  useConf.raw && (built[`${baseName}Raw`] = useConf.base);
  return built;
};

let DEF_SIZE = buildRange({
  type: 'size',
  spread: 1,
  range: 40
});
let DEV_SPEED = buildRange({
  type: 'speed',
  units: 's',
  spread: 0.25,
  raw: false,
  base: 0.5,
  range: 5
});

const updateTheme = ({
  theme,
  config,
  colors,
  size,
  speed
}) => {
  if (colors) DEF_COLORS = _objectSpread({}, DEF_COLORS, colors);
  if (config) DEF_CONFIG = _objectSpread({}, DEF_CONFIG, config);
  if (size) DEF_SIZE = size.type ? buildRange(size) : _objectSpread({}, DEF_SIZE, size);
  if (speed) DEV_SPEED = speed.type ? buildRange(speed) : _objectSpread({}, DEF_SIZE, speed);
  if (theme) DEF_THEME = _objectSpread({}, DEF_THEME, theme);
  return getTheme();
};

exports.updateTheme = updateTheme;

const getTheme = () => _objectSpread({
  size20Neg: "-20px",
  // Fonts
  fontPrimary: `"Raleway", sans-serif`,
  fontSecondary: `"Cabin", sans-serif`,
  fontThird: `"Roboto", sans-serif`,
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
  inputEditBorder: `1px solid ${DEF_COLORS.gray1}`,
  inputFocusBorderBottom: `1px solid ${DEF_COLORS.green}`,
  inputErrorBorder: `1px solid ${DEF_COLORS.red}`,
  inputDisabledBackColor: DEF_COLORS.gray1,
  inputDisabledColor: DEF_COLORS.gray2,
  inputDisabledOpacity: 0.5,
  inputDisabledCursor: 'not-allowed',
  // Item
  itemBorder: `2px solid transparent`,
  itemHoverBorder: `2px solid ${DEF_COLORS.blue}`,
  itemEditBorder: `2px solid ${DEF_COLORS.green}`,
  itemEmptyBorder: `2px solid ${DEF_COLORS.green}`,
  itemErrorBorder: `2px solid ${DEF_COLORS.red}`,
  itemErrorTextColor: DEF_COLORS.white,
  itemErrorTextBackground: DEF_COLORS.red,
  headerOpenBorder: `2px solid ${DEF_COLORS.lime}`
}, DEF_COLORS, DEF_SIZE, DEV_SPEED);

exports.getTheme = getTheme;
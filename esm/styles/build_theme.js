"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.entries");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTheme = exports.buildTheme = void 0;

var _theme = require("./theme");

var _jsUtils = require("jsUtils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var base = {
  ".j-tree-editor *, .j-tree-editor *:not(.fa, .far, .fas)": {
    "margin": "0",
    "padding": "0",
    "border": "0",
    "font-size": "100%",
    "font": "inherit",
    "vertical-align": "baseline",
    "outline": "none"
  },
  ".j-tree-editor article, .j-tree-editor aside, .j-tree-editor details, .j-tree-editor figcaption, .j-tree-editor figure, .j-tree-editor footer, .j-tree-editor header, .j-tree-editor hgroup, .j-tree-editor menu, .j-tree-editor nav, .j-tree-editor section": {
    "display": "block"
  },
  ".j-tree-editor ol, .j-tree-editor ul": {
    "list-style": "none"
  },
  ".j-tree-editor blockquote, .j-tree-editor q": {
    "quotes": "none"
  },
  ".j-tree-editor blockquote:before, .j-tree-editor blockquote:after, .j-tree-editor q:before, .j-tree-editor q:after": {
    "content": "none"
  },
  ".j-tree-editor table": {
    "border-collapse": "collapse",
    "border-spacing": "0"
  },
  ".j-tree-editor": {
    "font-family": "@fontThird",
    "font-size": "@size14",
    "width": "100%"
  },
  ".j-tree-editor ul": {
    "margin": "0px",
    "padding-left": "0px",
    "list-style-type": "none",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "flex-start"
  },
  ".j-tree-editor div.list-wrapper": {
    "transition": "max-height @speed05 ease-in-out",
    "overflow": "hidden",
    "min-height": "44px"
  },
  ".j-tree-editor div.list-wrapper > ul.list": {
    "transition": "max-height @speed05 ease-in-out",
    "overflow": "hidden"
  },
  ".j-tree-editor ul.list > li.row": {
    "margin-left": "@size20",
    "width": "calc( 100% - @size20 )"
  },
  ".j-tree-editor li.row ul.list > li.row": {
    "margin-left": "@size20",
    "width": "calc( 100% - @size20 )"
  },
  ".j-tree-editor ul.list > li.row.list-empty, .j-tree-editor li.row ul.list > li.row.list-empty": {
    "width": "100%",
    "text-align": "center",
    "margin-left": "0px",
    "color": "@gray2"
  },
  ".j-tree-editor ul.list > li.row.list-empty .list-empty-text": {
    "margin": "8px 5px 8px",
    "font-size": "12px"
  },
  ".j-tree-editor ul.list > li.row.list-empty .list-empty-text .list-empty-icon": {
    "margin-right": "5px"
  },
  ".j-tree-editor ul.list > li.row > div.header": {
    "margin-left": "@size20Neg"
  },
  ".j-tree-editor ul.list > li.row > div.header.item-has-toggle": {
    "cursor": "pointer"
  },
  ".j-tree-editor li.row ul.list > li.row > div.header": {
    "margin-left": "@size20Neg",
    "transition": "all @speed05 ease-in-out"
  },
  ".j-tree-editor ul.list > li.row > div.item.open:hover, .j-tree-editor ul.list > li.row > div.header.open": {
    "background-color": "@itemOpenBackColor",
    "border-bottom": "@headerOpenBorder"
  },
  ".j-tree-editor ul.list div.header .toggle-icon": {
    "text-decoration": "none",
    "position": "relative",
    "margin-right": "@size10",
    "font-size": "@size16",
    "top": "1px",
    "transition": "all @speed05 ease-in-out",
    "color": "@gray4",
    "cursor": "pointer"
  },
  ".j-tree-editor ul.list > li.row > div.header:hover .toggle-icon": {
    "text-decoration": "none",
    "position": "relative",
    "top": "1px",
    "color": "@toggleHoverColor"
  },
  ".j-tree-editor ul.list > li.row > div.header:hover .toggle-icon.open, .j-tree-editor ul.list > li.row > div.header .toggle-icon.open": {
    "transform": "rotate(90deg)",
    "-ms-transform": "rotate(90deg)",
    "-webkit-transform": "rotate(90deg)",
    "color": "@toggleOpenColor"
  },
  ".j-tree-editor ul.list > li.row > div.item.header.item-edit:hover .toggle-icon, .j-tree-editor ul.list > li.row > div.item.header.item-edit .toggle-icon": {
    "color": "@toggleEditColor"
  },
  ".j-tree-editor ul.list > li.row > div.item.header.item-edit.item-error:hover .toggle-icon, .j-tree-editor ul.list > li.row > div.item.header.item-edit.item-error .toggle-icon, .j-tree-editor ul.list > li.row > div.header.item-error:hover .toggle-icon.open, .j-tree-editor ul.list > li.row > div.header.item-error .toggle-icon.open \n.j-tree-editor ul.list > li.row > div.header.item-error:hover .toggle-icon": {
    "color": "@toggleErrorColor"
  },
  ".j-tree-editor ul.list > li.row > div.item": {
    "display": "flex",
    "flex-wrap": "wrap",
    "justify-content": "flex-start",
    "align-items": "center",
    "padding": "10px 10px 8px",
    "margin-bottom": "4px",
    "border-bottom": "@itemBorder",
    "transition": "all @speed05 ease-in-out",
    "min-height": "24px",
    "position": "relative"
  },
  ".j-tree-editor ul.list > li.row > div.item.item-edit": {
    "flex-wrap": "nowrap",
    "margin-top": "10px"
  },
  ".j-tree-editor ul.list > li.row > div.item.item-edit.item-error.item-empty, .j-tree-editor ul.list > li.row > div.item.item-edit.item-error.item-empty:hover, .j-tree-editor ul.list > li.row > div.item.header.item-edit.item-error, .j-tree-editor ul.list > li.row > div.item.item-edit.item-error, .j-tree-editor ul.list > li.row > div.item.header.item-edit.item-error:hover, .j-tree-editor ul.list > li.row > div.item.item-edit.item-error:hover, .j-tree-editor ul.list > li.row > div.item.item-error:hover, .j-tree-editor ul.list > li.row > div.item.item-error": {
    "border-bottom": "@itemErrorBorder"
  },
  ".j-tree-editor li.row > div.item.item-error .item-error-message": {
    "width": "100%",
    "font-size": "12px",
    "color": "@itemErrorTextColor",
    "text-align": "right",
    "max-height": "0px",
    "position": "absolute",
    "top": "-8px",
    "right": "0px"
  },
  ".j-tree-editor li.row > div.item.item-error .item-error-message .item-error-text": {
    "position": "relative",
    "background-color": "@itemErrorTextBackground",
    "color": "@itemErrorTextColor",
    "padding": "3px 10px"
  },
  ".j-tree-editor ul.list > li.row > div.item.root": {},
  ".j-tree-editor ul.list > li.row > div.item.item-edit.item-empty": {
    "border-bottom": "@itemEmptyBorder"
  },
  ".j-tree-editor ul.list > li.row > div.item:hover": {
    "background-color": "@itemHoverBackColor",
    "position": "relative",
    "border-bottom": "@itemHoverBorder"
  },
  ".j-tree-editor ul.list > li.row > div.item.header.item-edit, .j-tree-editor ul.list > li.row > div.item.item-edit": {
    "border-bottom": "@itemEditBorder",
    "background-color": "@itemActiveBackColor"
  },
  ".j-tree-editor li.row > div.item > div.item-key": {
    "font-family": "@fontThird",
    "font-weight": "@fontBold",
    "min-width": "15px"
  },
  ".j-tree-editor li.row > div.item.header > div.item-data": {},
  ".j-tree-editor li.row > div.item > div.item-value": {
    "font-family": "@fontThird",
    "font-weight": "@fontNormal",
    "margin-left": "10px",
    "min-width": "50px"
  },
  ".j-tree-editor li.row > div.item-edit .select-wrapper select.item-edit": {
    "box-sizing": "border-box",
    "border-radius": "0px",
    "-moz-appearance": "none",
    "-webkit-appearance": "none",
    "appearance": "none",
    "height": "27px",
    "padding": "3px",
    "cursor": "pointer"
  },
  ".j-tree-editor li.row > div.item-edit .select-wrapper": {},
  ".j-tree-editor li.row > div.item-edit .select-wrapper > i.select-icon": {
    "position": "absolute",
    "right": "7px",
    "top": "23px",
    "font-size": "12px",
    "pointer-events": "none"
  },
  ".j-tree-editor li.row > div.item-edit .select-wrapper select.item-edit, .j-tree-editor li.row > div.item.item-edit > div > .item-edit": {
    "background-color": "@itemEditBackColor",
    "display": "inline-block",
    "min-width": "130px",
    "max-width": "100%",
    "max-height": "@size30",
    "margin-top": "@size16",
    "margin-bottom": "@size10",
    "padding": "@size5",
    "font-size": "@size12",
    "border": "@inputEditBorder"
  },
  ".j-tree-editor li.row > div.item.item-edit > div > .item-edit:focus": {
    "border-bottom": "@inputFocusBorderBottom"
  },
  ".j-tree-editor li.row > div.item.item-edit > div > .item-edit.item-error": {
    "border-bottom": "@inputErrorBorder"
  },
  ".j-tree-editor li.row > div.item .item-data-wrapper": {
    "position": "relative"
  },
  ".j-tree-editor li.row > div.item .item-data-wrapper.item-empty-wrapper": {
    "margin-right": "15px",
    "display": "inline-block",
    "float": "left"
  },
  ".j-tree-editor li.row > div.item .item-data-wrapper.item-type-wrapper": {
    "margin-top": "0px",
    "margin-right": "20px"
  },
  ".j-tree-editor li.row > div.item.item-edit label.item-label": {
    "font-weight": "@fontBold",
    "font-size": "@size10",
    "position": "absolute",
    "top": "0",
    "opacity": "1"
  },
  ".j-tree-editor li.row > div.item.item-edit > div > label.item-key-label": {},
  ".j-tree-editor li.row > div.item.item-edit > div > label.item-value-label": {},
  ".j-tree-editor li.row > div.item.item-edit > div.item-key-wrapper": {
    "margin-right": "@size20"
  },
  ".j-tree-editor li.row > div.item-edit .select-wrapper select.item-edit:disabled, .j-tree-editor li.row > div.item.item-edit > div > .item-edit:disabled": {
    "background-color": "@inputDisabledBackColor",
    "cursor": "not-allowed",
    "opacity": "@inputDisabledOpacity",
    "color": "@inputDisabledColor"
  },
  ".j-tree-editor div.item > div.item-btns": {
    "margin-left": "@size20",
    "opacity": "@passiveBtnOpacity",
    "transition": "opacity @speed05 ease",
    "flex-grow": "1"
  },
  ".j-tree-editor div.item.open > div.item-btns, .j-tree-editor div.item.item-edit > div.item-btns, .j-tree-editor div.item:hover > div.item-btns": {
    "opacity": "@activeBtnOpacity"
  },
  ".j-tree-editor div.item.item-edit > div.item-btns": {
    "min-height": "53px"
  },
  ".j-tree-editor div.item > div.item-btns > div.btns-wrapper": {
    "position": "relative",
    "min-height": "25px"
  },
  ".j-tree-editor div.item > div.item-btns > div.btns-wrapper > div.btns-list": {
    "display": "inline",
    "top": "2px",
    "position": "relative",
    "float": "right"
  },
  ".j-tree-editor div.item.item-edit > div.item-btns > div.btns-wrapper > div.btns-list": {
    "top": "17px",
    "position": "relative",
    "float": "right"
  },
  ".j-tree-editor div.item > div.item-btns > div.btns-wrapper div.type-label": {
    "font-size": "@size10",
    "color": "@typeLabelColor",
    "position": "relative",
    "top": "3px",
    "margin-right": "@size10",
    "display": "inline-block"
  },
  ".j-tree-editor div.item.item-edit > div.item-btns > div.btns-wrapper div.type-label": {
    "top": "19px"
  },
  ".j-tree-editor span.icon-wrapper": {
    "margin": "0 @size5",
    "cursor": "pointer"
  },
  ".j-tree-editor div.btns-wrapper > div.btns-list .item-paste-action": {
    "display": "none"
  },
  ".j-tree-editor div.btns-wrapper > div.btns-list .item-paste-action.show-paste-action": {
    "display": "initial"
  },
  ".j-tree-editor span.icon-wrapper .icon": {
    "text-align": "center",
    "text-decoration": "none",
    "transition": "color @speed05 ease",
    "font-size": "@size10",
    "color": "@passiveBtnColor"
  },
  ".j-tree-editor span.icon-wrapper a.icon-edit:hover": {
    "color": "@activeEditColor"
  },
  ".j-tree-editor span.icon-wrapper a.icon-copy:hover": {
    "color": "@activeCopyColor"
  },
  ".j-tree-editor span.icon-wrapper a.icon-paste:hover": {
    "color": "@activeEditColor"
  },
  ".j-tree-editor span.icon-wrapper a.icon-cut:hover": {
    "color": "@activeDragColor"
  },
  ".j-tree-editor span.icon-wrapper a.icon-drag:hover": {
    "color": "@activeDragColor"
  },
  ".j-tree-editor span.icon-wrapper a.icon-add:hover": {
    "color": "@activeAddColor"
  },
  ".j-tree-editor span.icon-wrapper.wrap-icon-cancel > a, .j-tree-editor span.icon-wrapper.wrap-icon-delete > a": {
    "border-left": "2px solid #3D3D3E",
    "padding-left": "10px"
  },
  ".j-tree-editor span.icon-wrapper a.icon-delete:hover": {
    "color": "@activeDeleteColor"
  },
  ".j-tree-editor span.icon-wrapper a.icon-save, .j-tree-editor span.icon-wrapper a.icon-cancel": {
    "padding-top": "2px",
    "padding-bottom": "2px",
    "color": "@passiveBtnColor"
  },
  ".j-tree-editor span.icon-wrapper a.icon-save:hover": {
    "color": "@activeSaveColor"
  },
  ".j-tree-editor span.icon-wrapper a.icon-cancel:hover": {
    "color": "@activeCancelColor"
  },
  ".j-tree-editor span.icon-wrapper a.icon > .icon-text": {
    "margin-top": "3px",
    "font-family": "@fontPrimary",
    "display": "block"
  }
};

var fillBlocks = function fillBlocks(block, theme) {
  return Object.entries(block).reduce(function (filledBlock, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        rule = _ref2[0],
        data = _ref2[1];

    var match = data.match(/@\S*/i); // If no match, just set and return

    if (!match) return (filledBlock[rule] = data) && filledBlock; // Remove the @ so we can find the theme value

    var fillVal = theme[match[0].replace('@', '')]; // Replace the matched value with the theme values

    fillVal && (filledBlock[rule] = data.replace(match[0], fillVal));
    return filledBlock;
  }, {});
};

var fillStyles = function fillStyles(theme, useStyles) {
  return Object.entries(useStyles).reduce(function (styles, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        selector = _ref4[0],
        block = _ref4[1];

    return (styles[selector] = fillBlocks(block, theme)) && styles;
  }, {});
};

var setTheme = function setTheme(update) {
  (0, _theme.updateTheme)(update);
  return buildTheme(update);
};

exports.updateTheme = setTheme;

var buildTheme = function buildTheme(settings) {
  var builtTheme = (0, _theme.getTheme)();
  var useTheme = settings.theme ? (0, _jsUtils.deepMerge)(builtTheme, settings.theme) : builtTheme;
  var useStyles = settings.styles ? (0, _jsUtils.deepMerge)(base, settings.styles) : base;

  var filled = _objectSpread({}, fillStyles(useTheme, useStyles));

  return filled;
};

exports.buildTheme = buildTheme;
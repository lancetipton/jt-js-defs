(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("jtree-definitions", [], factory);
	else if(typeof exports === 'object')
		exports["jtree-definitions"] = factory();
	else
		root["jtree-definitions"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"jtree-definitions": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonp_name_"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","core-js","cleave.js","elementR","jsUtils","webpack"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/buttons/buttons.js":
/*!*******************************************!*\
  !*** ./src/components/buttons/buttons.js ***!
  \*******************************************/
/*! exports provided: Buttons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buttons", function() { return Buttons; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! elementR */ "./node_modules/elementR/build/elementr.min.js");
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(elementR__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icon */ "./src/components/buttons/icon.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../sub */ "./src/components/sub/index.js");















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var div = elementR__WEBPACK_IMPORTED_MODULE_14__["elements"].div,
    span = elementR__WEBPACK_IMPORTED_MODULE_14__["elements"].span,
    option = elementR__WEBPACK_IMPORTED_MODULE_14__["elements"].option;
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
  }, "( ".concat(Object(jsUtils__WEBPACK_IMPORTED_MODULE_16__["capitalize"])(type), " )")));
};

var showTypeValue = function showTypeValue(props, type) {
  var _selectWrapper;

  if (type !== _constants__WEBPACK_IMPORTED_MODULE_17__["default"].Schema.EMPTY || !props.Types) return typeLabel(type);
  var options = Object.keys(props.Types.get(null, {
    filter: [_constants__WEBPACK_IMPORTED_MODULE_17__["default"].Schema.EMPTY]
  })).map(function (value) {
    return option({
      value: value,
      selected: props.matchType === value
    }, Object(jsUtils__WEBPACK_IMPORTED_MODULE_16__["capitalize"])(value));
  });
  options.unshift(option({
    selected: !props.matchType
  }, 'Select Type...'));
  return Object(_sub__WEBPACK_IMPORTED_MODULE_18__["inputWrapper"])({
    type: type,
    showLabel: true
  }, Object(_sub__WEBPACK_IMPORTED_MODULE_18__["selectWrapper"])((_selectWrapper = {
    "class": "item-matchType item-data ".concat(_constants__WEBPACK_IMPORTED_MODULE_17__["default"].Values.EDIT_CLS)
  }, _defineProperty(_selectWrapper, _constants__WEBPACK_IMPORTED_MODULE_17__["default"].Values.DATA_SCHEMA_KEY, 'matchType'), _defineProperty(_selectWrapper, "name", "type-matchType"), _defineProperty(_selectWrapper, "value", props.matchType), _defineProperty(_selectWrapper, "onChange", props.onTypeChange), _selectWrapper), options));
};

var buildIcon = function buildIcon(action, type, id) {
  var _icon;

  var wrapperProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var btn = btnTypes[type] || {};
  return action ? Object(_icon__WEBPACK_IMPORTED_MODULE_15__["Icon"])(btn.icon, btn.key, {
    icon: (_icon = {}, _defineProperty(_icon, _constants__WEBPACK_IMPORTED_MODULE_17__["default"].Values.DATA_TREE_ID, id), _defineProperty(_icon, "onclick", action), _icon),
    wrapper: wrapperProps
  }, type) : '';
};

var buildBtns = function buildBtns(id, props) {
  return Object.keys(btnTypes).reduce(function (actions, key) {
    var attrs = {};

    if (key === 'onPaste' && !props.isRoot) {
      attrs = props.showPaste ? {
        className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_17__["default"].Values.SHOW_PASTE_CLS, " ").concat(_constants__WEBPACK_IMPORTED_MODULE_17__["default"].Values.PASTE_ACTION_CLS)
      } : {
        className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_17__["default"].Values.PASTE_ACTION_CLS)
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

/***/ }),

/***/ "./src/components/buttons/icon.js":
/*!****************************************!*\
  !*** ./src/components/buttons/icon.js ***!
  \****************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! elementR */ "./node_modules/elementR/build/elementr.min.js");
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(elementR__WEBPACK_IMPORTED_MODULE_6__);







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var span = elementR__WEBPACK_IMPORTED_MODULE_6__["elements"].span,
    a = elementR__WEBPACK_IMPORTED_MODULE_6__["elements"].a;
var Icon = function Icon(icon, text) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var lowerText = text && text.toLowerCase();
  var wrapClasses = extraProps.wrapper && extraProps.wrapper.className ? "icon-wrapper wrap-icon-".concat(lowerText, " ").concat(extraProps.wrapper.className) : "icon-wrapper wrap-icon-".concat(lowerText);
  var props = {
    wrapper: _objectSpread({}, extraProps.wrapper, {
      className: wrapClasses
    }),
    icon: _objectSpread({
      className: "icon icon-".concat(lowerText, " fa fa-").concat(icon),
      href: 'javascript:void(0);',
      title: text || icon
    }, extraProps.icon),
    text: _objectSpread({
      className: "icon-text"
    }, extraProps.text)
  };
  var children = text ? [a(props.icon, span(props.text, text))] : [a(props.icon)];
  return span(props.wrapper, children);
};

/***/ }),

/***/ "./src/components/buttons/index.js":
/*!*****************************************!*\
  !*** ./src/components/buttons/index.js ***!
  \*****************************************/
/*! exports provided: Buttons, Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ "./src/components/buttons/buttons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Buttons", function() { return _buttons__WEBPACK_IMPORTED_MODULE_0__["Buttons"]; });

/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/components/buttons/icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_1__["Icon"]; });




/***/ }),

/***/ "./src/components/error.js":
/*!*********************************!*\
  !*** ./src/components/error.js ***!
  \*********************************/
/*! exports provided: errorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessage", function() { return errorMessage; });
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! elementR */ "./node_modules/elementR/build/elementr.min.js");
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(elementR__WEBPACK_IMPORTED_MODULE_0__);

var div = elementR__WEBPACK_IMPORTED_MODULE_0__["elements"].div,
    span = elementR__WEBPACK_IMPORTED_MODULE_0__["elements"].span;
var errorMessage = function errorMessage(error) {
  return error && div({
    className: 'item-error-message'
  }, span({
    className: 'item-error-text'
  }, error)) || null;
};

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Item, Buttons, Icon, Row, List, ListHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ "./src/components/buttons/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Buttons", function() { return _buttons__WEBPACK_IMPORTED_MODULE_0__["Buttons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _buttons__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/components/item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return _item__WEBPACK_IMPORTED_MODULE_1__["Item"]; });

/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/components/list/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _list__WEBPACK_IMPORTED_MODULE_2__["Row"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _list__WEBPACK_IMPORTED_MODULE_2__["List"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListHeader", function() { return _list__WEBPACK_IMPORTED_MODULE_2__["ListHeader"]; });





/***/ }),

/***/ "./src/components/item.js":
/*!********************************!*\
  !*** ./src/components/item.js ***!
  \********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/components/buttons/index.js");
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elementR */ "./node_modules/elementR/build/elementr.min.js");
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elementR__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub */ "./src/components/sub/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error */ "./src/components/error.js");







var div = elementR__WEBPACK_IMPORTED_MODULE_2__["elements"].div;

var buildOptions = function buildOptions(props, type) {
  var isEdit = props.mode === _constants__WEBPACK_IMPORTED_MODULE_4__["default"].Schema.MODES.EDIT;
  var typeEl = props["".concat(type, "El")];
  return !isEdit ? _sub__WEBPACK_IMPORTED_MODULE_5__["display"](props, type) : typeEl && _sub__WEBPACK_IMPORTED_MODULE_5__[typeEl] ? _sub__WEBPACK_IMPORTED_MODULE_5__[typeEl](props, type) : _sub__WEBPACK_IMPORTED_MODULE_5__["input"](props, type);
};

var buildItemKey = function buildItemKey(_ref, props) {
  var showLabel = _ref.showLabel,
      El = _ref.El,
      keyAttrs = _ref.keyAttrs,
      keyVal = _ref.keyVal;
  if (props && props.keyEdit === false) keyAttrs.disabled = true;
  var keyEl = El(keyAttrs, keyVal);
  return !showLabel ? keyEl : div({
    className: 'item-data-wrapper item-key-wrapper'
  }, _sub__WEBPACK_IMPORTED_MODULE_5__["label"](keyAttrs.name, 'Key'), keyEl);
};

var buildItemValue = function buildItemValue(itemProps, props) {
  var showLabel = itemProps.showLabel,
      El = itemProps.El,
      valueAttrs = itemProps.valueAttrs,
      elValue = itemProps.elValue,
      children = itemProps.children;
  if (props && props.type === _constants__WEBPACK_IMPORTED_MODULE_4__["default"].Schema.EMPTY) valueAttrs.disabled = true;
  var valEl = El(valueAttrs, Object(jsUtils__WEBPACK_IMPORTED_MODULE_3__["isFunc"])(children) && children(itemProps) || elValue);
  return !showLabel ? valEl : div({
    className: 'item-data-wrapper item-value-wrapper'
  }, _sub__WEBPACK_IMPORTED_MODULE_5__["label"](valueAttrs.name, 'Value'), valEl);
};

var Item = function Item() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var classes = "item ".concat(props.mode === _constants__WEBPACK_IMPORTED_MODULE_4__["default"].Schema.MODES.EDIT && _constants__WEBPACK_IMPORTED_MODULE_4__["default"].Values.EDIT_CLS || '');
  if (props.type === _constants__WEBPACK_IMPORTED_MODULE_4__["default"].Schema.EMPTY) classes += " item-empty";
  if (props.error) classes += " item-error";
  return div({
    className: classes
  }, buildItemKey(buildOptions(props, 'key'), props), buildItemValue(buildOptions(props, 'value'), props), div({
    className: "item-btns item-data"
  }, Object(_buttons__WEBPACK_IMPORTED_MODULE_1__["Buttons"])(props)), Object(_error__WEBPACK_IMPORTED_MODULE_6__["errorMessage"])(props.error));
};

/***/ }),

/***/ "./src/components/list/index.js":
/*!**************************************!*\
  !*** ./src/components/list/index.js ***!
  \**************************************/
/*! exports provided: Row, List, ListHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/components/list/list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _list__WEBPACK_IMPORTED_MODULE_0__["Row"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _list__WEBPACK_IMPORTED_MODULE_0__["List"]; });

/* harmony import */ var _list_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list_header */ "./src/components/list/list_header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListHeader", function() { return _list_header__WEBPACK_IMPORTED_MODULE_1__["ListHeader"]; });




/***/ }),

/***/ "./src/components/list/list.js":
/*!*************************************!*\
  !*** ./src/components/list/list.js ***!
  \*************************************/
/*! exports provided: Row, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! elementR */ "./node_modules/elementR/build/elementr.min.js");
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(elementR__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _list_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list_header */ "./src/components/list/list_header.js");










function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var div = elementR__WEBPACK_IMPORTED_MODULE_9__["elements"].div,
    ul = elementR__WEBPACK_IMPORTED_MODULE_9__["elements"].ul,
    li = elementR__WEBPACK_IMPORTED_MODULE_9__["elements"].li,
    i = elementR__WEBPACK_IMPORTED_MODULE_9__["elements"].i;
var Row = function Row(rowProps, child) {
  return li(_objectSpread({}, rowProps, {
    className: "row".concat(rowProps.className && ' ' + rowProps.className || '')
  }), child);
};

var checkExtraClass = function checkExtraClass(org, classes) {
  return typeof classes === 'string' ? "".concat(org, " ").concat(classes) : Array.isArray(classes) ? "".concat(org, " ").concat(classes.join(" ")) : org;
};

var addEmpty = function addEmpty(rows, props) {
  props.isOpen && props.children && !props.children.length && rows.push(Row({
    className: 'list-empty'
  }, div({
    className: 'list-empty-text'
  }, i({
    className: 'fas fa-ban fa-rotate-90 list-empty-icon'
  }), 'Empty')));
};

var List = function List(props) {
  var children = props.children,
      classes = props.classes,
      styles = props.styles,
      headerProps = _objectWithoutProperties(props, ["children", "classes", "styles"]);

  styles = styles || {};
  var rows = children && children.map(function (child) {
    return Row({}, child);
  }) || [];
  rows.unshift(Row({
    className: 'list-header'
  }, Object(_list_header__WEBPACK_IMPORTED_MODULE_10__["ListHeader"])(headerProps)));
  addEmpty(rows, props);
  return div({
    className: checkExtraClass('list-wrapper', classes),
    style: styles.wrapper
  }, ul({
    className: checkExtraClass('list', classes),
    style: styles.list
  }, rows));
};

/***/ }),

/***/ "./src/components/list/list_header.js":
/*!********************************************!*\
  !*** ./src/components/list/list_header.js ***!
  \********************************************/
/*! exports provided: ListHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHeader", function() { return ListHeader; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttons */ "./src/components/buttons/index.js");
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! elementR */ "./node_modules/elementR/build/elementr.min.js");
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(elementR__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sub */ "./src/components/sub/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../error */ "./src/components/error.js");



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var div = elementR__WEBPACK_IMPORTED_MODULE_3__["elements"].div;

var buildKeyEl = function buildKeyEl(_ref) {
  var showLabel = _ref.showLabel,
      El = _ref.El,
      keyAttrs = _ref.keyAttrs,
      keyVal = _ref.keyVal;
  var keyEl = El(keyAttrs, keyVal);
  return !showLabel ? keyEl : div({
    className: 'item-data-wrapper item-key-wrapper'
  }, _sub__WEBPACK_IMPORTED_MODULE_6__["label"](keyAttrs.name, 'Key'), keyEl);
};

var buildHeaderKey = function buildHeaderKey(props) {
  var key = props.key,
      keyType = props.keyType,
      keyText = props.keyText,
      config = props.config;
  var text = "".concat(keyText || key, " ");
  return props.mode !== _constants__WEBPACK_IMPORTED_MODULE_5__["default"].Schema.MODES.EDIT ? div({
    className: 'item-key item-data'
  }, text) : buildKeyEl(_sub__WEBPACK_IMPORTED_MODULE_6__["input"]({
    key: key,
    config: config,
    value: key,
    keyType: keyType || 'text',
    showLabel: true
  }, 'key'));
};

var buildHeaderValue = function buildHeaderValue(props) {
  var mode = props.mode,
      type = props.type,
      config = props.config;
  var typeName = Object(jsUtils__WEBPACK_IMPORTED_MODULE_4__["capitalize"])(type);
  if (mode !== _constants__WEBPACK_IMPORTED_MODULE_5__["default"].Schema.MODES.EDIT) return div({
    className: 'item-value item-data'
  }, typeName);
  var inputData = _sub__WEBPACK_IMPORTED_MODULE_6__["input"]({
    config: config,
    value: typeName,
    valueType: 'text',
    showLabel: true,
    disabled: true
  }, 'value');
  return div({
    className: 'item-data-wrapper item-value-wrapper'
  }, _sub__WEBPACK_IMPORTED_MODULE_6__["label"]("value-".concat(type), 'Type'), inputData.El(inputData.valueAttrs, inputData.elValue));
};

var ListHeader = function ListHeader(props) {
  var id = props.id,
      isOpen = props.isOpen,
      isRoot = props.isRoot,
      error = props.error;
  var iconCls = isOpen && "open" || "";
  var rootCls = isRoot ? "root" : "";
  var classes = "".concat(iconCls, " ").concat(rootCls, " header item ").concat(props.mode === _constants__WEBPACK_IMPORTED_MODULE_5__["default"].Schema.MODES.EDIT && _constants__WEBPACK_IMPORTED_MODULE_5__["default"].Values.EDIT_CLS || '').concat(error && ' item-error' || '');

  var wrapperProps = _defineProperty({
    className: classes
  }, _constants__WEBPACK_IMPORTED_MODULE_5__["default"].Values.DATA_TREE_ID, id);

  if (props.onToggle) {
    wrapperProps.className += ' item-has-toggle';
    wrapperProps.onClick = props.onToggle;
  }

  if (isRoot) wrapperProps.id = _constants__WEBPACK_IMPORTED_MODULE_5__["default"].Values.JT_ROOT_HEADER_ID;
  return div(wrapperProps, Object(_buttons__WEBPACK_IMPORTED_MODULE_2__["Icon"])(null, null, {
    icon: _defineProperty({
      className: "icon toggle-icon fas fa-angle-right ".concat(iconCls),
      title: "Toggle open / closed",
      onClick: props.onToggle
    }, _constants__WEBPACK_IMPORTED_MODULE_5__["default"].Values.DATA_TREE_ID, id)
  }), buildHeaderKey(props), !rootCls ? buildHeaderValue(props) : null, div({
    className: "item-btns item-data"
  }, Object(_buttons__WEBPACK_IMPORTED_MODULE_2__["Buttons"])(props)), Object(_error__WEBPACK_IMPORTED_MODULE_7__["errorMessage"])(error));
};

/***/ }),

/***/ "./src/components/sub/display.js":
/*!***************************************!*\
  !*** ./src/components/sub/display.js ***!
  \***************************************/
/*! exports provided: display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "display", function() { return display; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! elementR */ "./node_modules/elementR/build/elementr.min.js");
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(elementR__WEBPACK_IMPORTED_MODULE_3__);




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var getValue = function getValue(val, text) {
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return text ? "".concat(prefix).concat(text) : val || val === 0 || val === '' ? "".concat(prefix).concat((val + '').toString()) : '';
};

var display = function display(props, type) {
  var keyVal = type === 'key' ? getValue(props.key, props.keyText, props.keyPrefix) : '';
  var elValue = type === 'value' ? getValue(props.value, props.valueText, props.valPrefix) : '';
  return _defineProperty({
    keyVal: keyVal,
    elValue: elValue,
    editCls: '',
    El: elementR__WEBPACK_IMPORTED_MODULE_3__["elements"].div
  }, "".concat(type, "Attrs"), {
    "class": "item-".concat(type, " item-data")
  });
};

/***/ }),

/***/ "./src/components/sub/index.js":
/*!*************************************!*\
  !*** ./src/components/sub/index.js ***!
  \*************************************/
/*! exports provided: display, inputWrapper, input, label, selectWrapper, select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/components/sub/display.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "display", function() { return _display__WEBPACK_IMPORTED_MODULE_0__["display"]; });

/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "./src/components/sub/input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputWrapper", function() { return _input__WEBPACK_IMPORTED_MODULE_1__["inputWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "input", function() { return _input__WEBPACK_IMPORTED_MODULE_1__["input"]; });

/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label */ "./src/components/sub/label.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "label", function() { return _label__WEBPACK_IMPORTED_MODULE_2__["label"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select */ "./src/components/sub/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectWrapper", function() { return _select__WEBPACK_IMPORTED_MODULE_3__["selectWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select__WEBPACK_IMPORTED_MODULE_3__["select"]; });






/***/ }),

/***/ "./src/components/sub/input.js":
/*!*************************************!*\
  !*** ./src/components/sub/input.js ***!
  \*************************************/
/*! exports provided: inputWrapper, input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputWrapper", function() { return inputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! elementR */ "./node_modules/elementR/build/elementr.min.js");
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(elementR__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./label */ "./src/components/sub/label.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_19__);

















function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Values = _constants__WEBPACK_IMPORTED_MODULE_16__["default"].Values;

var getValue = function getValue(val, text) {
  return text ? text : val || val === 0 || val === '' ? (val + '').toString() : '';
};

var getAttrs = function getAttrs(props, type, keyVal, elVal) {
  var _objectSpread2, _objectSpread3;

  var configClasses = type === 'key' ? Object(jsUtils__WEBPACK_IMPORTED_MODULE_19__["get"])(props, 'config.keyAttrs.classes') : Object(jsUtils__WEBPACK_IMPORTED_MODULE_19__["get"])(props, 'config.valueAttrs.classes');
  var classes = "item-data ".concat(_constants__WEBPACK_IMPORTED_MODULE_16__["default"].Values.EDIT_CLS).concat(configClasses && ' ' + configClasses || '');
  type !== 'key' && props.config.useCleave && (classes += " ".concat(_constants__WEBPACK_IMPORTED_MODULE_16__["default"].Values.CLEAVE_CLS));
  props.config.isNumber && (classes += " ".concat(_constants__WEBPACK_IMPORTED_MODULE_16__["default"].Values.NUMBER_CLS));
  var attrs = type === 'key' ? _objectSpread((_objectSpread2 = {
    "class": classes,
    type: props.keyType || 'text',
    value: keyVal
  }, _defineProperty(_objectSpread2, _constants__WEBPACK_IMPORTED_MODULE_16__["default"].Values.DATA_SCHEMA_KEY, type), _defineProperty(_objectSpread2, "name", "key-".concat(props.key)), _defineProperty(_objectSpread2, "disabled", props.disabled), _defineProperty(_objectSpread2, "onClick", props.onClick || !props.onFocus && "this.select()"), _objectSpread2), props.config && props.config.keyAttrs || {}) : _objectSpread((_objectSpread3 = {
    "class": classes,
    type: props.valueType || 'text'
  }, _defineProperty(_objectSpread3, _constants__WEBPACK_IMPORTED_MODULE_16__["default"].Values.DATA_SCHEMA_KEY, type), _defineProperty(_objectSpread3, "name", "value-".concat(props.key)), _defineProperty(_objectSpread3, "value", elVal), _defineProperty(_objectSpread3, "disabled", props.disabled), _defineProperty(_objectSpread3, "onClick", props.onClick || !props.onFocus && "this.select()"), _objectSpread3), props.config && props.config.valueAttrs || {});
  Object.entries(props).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return !attrs[key] && _constants__WEBPACK_IMPORTED_MODULE_16__["default"].Values.DOM_EVENTS.indexOf(key) !== -1 && Object(jsUtils__WEBPACK_IMPORTED_MODULE_19__["isFunc"])(value) && (attrs[key] = value);
  });
  return attrs;
};

var inputWrapper = function inputWrapper(props, children) {
  var type = props.type,
      showLabel = props.showLabel,
      classes = props.classes,
      attrs = _objectWithoutProperties(props, ["type", "showLabel", "classes"]);

  classes = classes && "".concat(classes, " item-data-wrapper") || 'item-data-wrapper';
  if (type) classes += " item-".concat(type, "-wrapper");
  return elementR__WEBPACK_IMPORTED_MODULE_17__["elements"].div(_objectSpread({}, attrs, {
    className: classes
  }), showLabel && Object(_label__WEBPACK_IMPORTED_MODULE_18__["label"])(type, Object(jsUtils__WEBPACK_IMPORTED_MODULE_19__["capitalize"])(type)), children);
};
var input = function input(props, type) {
  var keyVal = type === 'key' && getValue(props.key, props.keyText);
  var elValue = type === 'value' && getValue(props.value, props.valueText);
  return _defineProperty({
    keyVal: keyVal,
    elValue: elValue,
    El: elementR__WEBPACK_IMPORTED_MODULE_17__["elements"].input,
    isEdit: true,
    showLabel: props.showLabel,
    editCls: _constants__WEBPACK_IMPORTED_MODULE_16__["default"].Values.EDIT_CLS
  }, "".concat(type, "Attrs"), getAttrs(props, type, keyVal, elValue));
};

/***/ }),

/***/ "./src/components/sub/label.js":
/*!*************************************!*\
  !*** ./src/components/sub/label.js ***!
  \*************************************/
/*! exports provided: label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "label", function() { return label; });
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! elementR */ "./node_modules/elementR/build/elementr.min.js");
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(elementR__WEBPACK_IMPORTED_MODULE_0__);

var label = function label(name, value) {
  return value && elementR__WEBPACK_IMPORTED_MODULE_0__["elements"].label({
    className: "item-label item-".concat(value.toLowerCase(), "-label"),
    "for": name
  }, value);
};

/***/ }),

/***/ "./src/components/sub/select.js":
/*!**************************************!*\
  !*** ./src/components/sub/select.js ***!
  \**************************************/
/*! exports provided: selectWrapper, select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWrapper", function() { return selectWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! elementR */ "./node_modules/elementR/build/elementr.min.js");
/* harmony import */ var elementR__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(elementR__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");





function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Values = _constants__WEBPACK_IMPORTED_MODULE_5__["default"].Values;

var getOptProps = function getOptProps(value, elValue) {
  return {
    value: value,
    className: 'item-option',
    selected: elValue === value
  };
};

var getChildren = function getChildren(props) {
  return props.options && props.options.map(function (option) {
    return typeof option === 'string' ? elementR__WEBPACK_IMPORTED_MODULE_4__["elements"].option(getOptProps(option, props.elValue), option) : elementR__WEBPACK_IMPORTED_MODULE_4__["elements"].option(getOptProps(option.value, props.elValue), option.text || option.value);
  });
};

var selectWrapper = function selectWrapper(props, children) {
  return elementR__WEBPACK_IMPORTED_MODULE_4__["elements"].div({
    className: 'select-wrapper'
  }, elementR__WEBPACK_IMPORTED_MODULE_4__["elements"].select(props, children), elementR__WEBPACK_IMPORTED_MODULE_4__["elements"].i({
    className: 'fas fa-sort select-icon'
  }));
};
var select = function select(props, type) {
  var _$concat, _ref;

  return _ref = {
    El: selectWrapper,
    isEdit: true,
    showLabel: props.showLabel,
    keyVal: '',
    editCls: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].Values.EDIT_CLS,
    elValue: props.value && props.value.toString() || ''
  }, _defineProperty(_ref, "".concat(type, "Attrs"), (_$concat = {
    "class": "item-".concat(type, " item-data ").concat(_constants__WEBPACK_IMPORTED_MODULE_5__["default"].Values.EDIT_CLS)
  }, _defineProperty(_$concat, _constants__WEBPACK_IMPORTED_MODULE_5__["default"].Values.DATA_SCHEMA_KEY, type), _defineProperty(_$concat, "name", "".concat(type, "-").concat(props.key)), _defineProperty(_$concat, "value", props[type]), _$concat)), _defineProperty(_ref, "children", getChildren), _defineProperty(_ref, "options", Array.isArray(props.options) && props.options || []), _ref;
};

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schema */ "./src/constants/schema.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./values */ "./src/constants/values.js");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var useValues = Object(jsUtils__WEBPACK_IMPORTED_MODULE_6__["deepFreeze"])(_objectSpread({}, _values__WEBPACK_IMPORTED_MODULE_8__["Values"]));

var updateDefValues = function updateDefValues(update) {
  return useValues = Object(jsUtils__WEBPACK_IMPORTED_MODULE_6__["deepFreeze"])(_objectSpread({}, useValues, update));
};

var useSchema = Object(jsUtils__WEBPACK_IMPORTED_MODULE_6__["deepFreeze"])(_objectSpread({}, _schema__WEBPACK_IMPORTED_MODULE_7__["Schema"]));

var updateDefSchema = function updateDefSchema(update) {
  return useSchema = Object(jsUtils__WEBPACK_IMPORTED_MODULE_6__["deepFreeze"])(_objectSpread({}, useSchema, update));
};

var Constants = {
  updateDefSchema: updateDefSchema,
  updateDefValues: updateDefValues
};
Object.defineProperty(Constants, 'Values', {
  get: function get() {
    return useValues;
  },
  enumerable: true
});
Object.defineProperty(Constants, 'Schema', {
  get: function get() {
    return useSchema;
  },
  enumerable: true
});
/* harmony default export */ __webpack_exports__["default"] = (Constants);

/***/ }),

/***/ "./src/constants/schema.js":
/*!*********************************!*\
  !*** ./src/constants/schema.js ***!
  \*********************************/
/*! exports provided: Schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schema", function() { return Schema; });
var Schema = {};

/***/ }),

/***/ "./src/constants/values.js":
/*!*********************************!*\
  !*** ./src/constants/values.js ***!
  \*********************************/
/*! exports provided: Values */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Values", function() { return Values; });
var Values = {};

/***/ }),

/***/ "./src/definitions/base/index.js":
/*!***************************************!*\
  !*** ./src/definitions/base/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseType; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_build_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/build_theme */ "./src/styles/build_theme.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");











function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var BaseType = function BaseType(config, _Editor) {
  var _this = this;

  _classCallCheck(this, BaseType);

  _defineProperty(this, "userEvents", {});

  _defineProperty(this, "updated", {});

  _defineProperty(this, "original", {});

  _defineProperty(this, "onChange", function (e, Editor) {
    var input = e.target || e.currentTarget;
    var key = input && input.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_11__["default"].Values.DATA_SCHEMA_KEY);
    if (!key || !input) return;
    var original = _this.original[key];
    var value = input.value;
    var update = {
      key: key,
      original: original
    };
    _this.suffix ? Object(_utils__WEBPACK_IMPORTED_MODULE_13__["updateValWithSuffix"])(update, input, _this.suffix) : Object(_utils__WEBPACK_IMPORTED_MODULE_13__["updateValue"])(update, input);
    if (original === update.value) return;
    update.value && _this.config.expandOnChange !== false && _this.setWidth(input);
    if (_this.userEvents.onChange(e, update, _this.original.id, Editor) !== false) _this.updated[update.key] = update.value;
  });

  _defineProperty(this, "onCancel", function (e, Editor) {
    e.stopPropagation();
    var update = {
      mode: undefined,
      value: _this.original.value
    };
    var id = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["shouldDoDefault"])(e, update, Editor, _this.userEvents.onCancel);
    if (!id) return;
    var schema = Editor.schema(id);
    schema && schema.pending ? Editor.remove(id) : Editor.update(id, update);
  });

  _defineProperty(this, "onSave", function (e, Editor) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_13__["callEditor"])(e, _objectSpread({}, _this.updated, {
      mode: undefined
    }), _this.userEvents.onSave, 'update', Editor);
  });

  _defineProperty(this, "onEdit", function (e, Editor) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_13__["callEditor"])(e, {
      mode: _constants__WEBPACK_IMPORTED_MODULE_11__["default"].Schema.MODES.EDIT
    }, _this.userEvents.onEdit, 'update', Editor);
  });

  _defineProperty(this, "onDelete", function (e, Editor) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_13__["callEditor"])(e, {
      mode: _constants__WEBPACK_IMPORTED_MODULE_11__["default"].Schema.MODES.REMOVE
    }, _this.userEvents.onDelete, 'remove', Editor);
  });

  _defineProperty(this, "onCopy", function (e, Editor) {
    e && e.stopPropagation();
    var id = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["shouldDoDefault"])(e, {
      mode: _constants__WEBPACK_IMPORTED_MODULE_11__["default"].Schema.MODES.REMOVE
    }, Editor, _this.userEvents.onCopy);
    if (!id) return;
    Editor.temp = id;
    Object(_utils__WEBPACK_IMPORTED_MODULE_13__["togglePastAction"])('add');
  });

  _defineProperty(this, "onCut", function (e, Editor) {
    e && e.stopPropagation();
    var update = {
      mode: _constants__WEBPACK_IMPORTED_MODULE_11__["default"].Schema.MODES.CUT
    };
    var id = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["shouldDoDefault"])(e, update, Editor, _this.userEvents.onCut);
    if (!id) return;
    Editor.temp = id;
    Object(_utils__WEBPACK_IMPORTED_MODULE_13__["togglePastAction"])('add');
    Editor.remove && Editor.update(id, update);
  });

  _defineProperty(this, "onPaste", function (e, Editor) {
    e && e.stopPropagation();
    var schema = Editor.schema(e.currentTarget.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_11__["default"].Values.DATA_TREE_ID));
    Editor.replaceAtPos(schema.id, _objectSpread({}, Editor.temp));
    Editor.temp = undefined;
    Object(_utils__WEBPACK_IMPORTED_MODULE_13__["togglePastAction"])('remove');
  });

  _defineProperty(this, "shouldDoDefault", function () {
    return _utils__WEBPACK_IMPORTED_MODULE_13__["shouldDoDefault"].apply(void 0, arguments);
  });

  _defineProperty(this, "getActions", function (mode, extra) {
    return mode !== _constants__WEBPACK_IMPORTED_MODULE_11__["default"].Schema.MODES.EDIT ? _objectSpread({
      onEdit: _this.onEdit,
      onCopy: _this.onCopy,
      onCut: _this.onCut,
      onPaste: _this.onPaste,
      onDelete: _this.onDelete
    }, extra) : _objectSpread({
      onChange: _this.onChange,
      onSave: _this.onSave,
      onCancel: _this.onCancel
    }, extra);
  });

  _defineProperty(this, "setWidth", function (input) {
    return input && input.value && (input.style.width = "".concat(input.value.length, "ch"));
  });

  _defineProperty(this, "buildEvents", function (schema, domNode) {
    return domNode && ['input', 'select', 'textarea'].map(function (tag) {
      return Array.from(domNode.getElementsByTagName(tag)).map(function (input) {
        input.oninput = _this.onChange;
        _this.config.expandOnChange !== false && _this.setWidth(input);
      });
    });
  });

  _defineProperty(this, "setOriginal", function (schema) {
    _this.buildEvents(schema, schema.domNode);

    var parent = schema.parent,
        instance = schema.instance,
        domNode = schema.domNode,
        original = _objectWithoutProperties(schema, ["parent", "instance", "domNode"]);

    _this.original = original;
  });

  _defineProperty(this, "componentDidMount", function (props, Editor) {
    _this.setOriginal(props.schema);
  });

  _defineProperty(this, "componentDidUpdate", function (props, Editor) {
    _this.setOriginal(props.schema);

    _this.updated && Object(jsUtils__WEBPACK_IMPORTED_MODULE_12__["clearObj"])(_this.updated);
  });

  _defineProperty(this, "shouldComponentUpdate", function (params) {
    return true;
  });

  _defineProperty(this, "componentWillUnmount", function (Editor) {
    _this.original.value = undefined;
  });

  _defineProperty(this, "render", function (props) {
    return '';
  });

  if (!config) return;
  Object(_utils__WEBPACK_IMPORTED_MODULE_13__["updateParentConstruct"])(config, this.constructor);
  Object(_utils__WEBPACK_IMPORTED_MODULE_13__["addCustomEvents"])(config, this.userEvents);
  this.config = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["addAllowedConfigOpts"])(config, this.config) || {};
};

_defineProperty(BaseType, "priority", 0);

_defineProperty(BaseType, "matchHelper", function () {});

_defineProperty(BaseType, "eval", function (value) {
  return true;
});

_defineProperty(BaseType, "defaultValue", function (newType, schema, settings) {
  return '';
});

_defineProperty(BaseType, "getStyles", function (settings) {
  return Object(_styles_build_theme__WEBPACK_IMPORTED_MODULE_10__["buildTheme"])(settings);
});

_defineProperty(BaseType, "error", function (_ref) {
  var message = _ref.message;
  return message || "Invalid input format";
});



/***/ }),

/***/ "./src/definitions/boolean/boolean.js":
/*!********************************************!*\
  !*** ./src/definitions/boolean/boolean.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../base */ "./src/definitions/base/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");
















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var BooleanType =
/*#__PURE__*/
function (_BaseType) {
  _inherits(BooleanType, _BaseType);

  function BooleanType(config) {
    var _this;

    _classCallCheck(this, BooleanType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BooleanType).call(this, _objectSpread({}, config)));

    _defineProperty(_assertThisInitialized(_this), "render", function (props) {
      var _props$schema = props.schema,
          id = _props$schema.id,
          key = _props$schema.key,
          value = _props$schema.value,
          mode = _props$schema.mode,
          matchType = _props$schema.matchType,
          keyType = _props$schema.keyType,
          parent = _props$schema.parent,
          error = _props$schema.error;
      var options = Array.isArray(_this.config.options) ? _this.config.options : ['true', 'false'];
      return Object(_components__WEBPACK_IMPORTED_MODULE_16__["Item"])(_objectSpread({
        id: id,
        key: key,
        value: value.toString(),
        mode: mode,
        options: options,
        error: error,
        type: matchType,
        showLabel: true,
        valueEl: 'select',
        showPaste: props.settings.Editor.hasTemp(),
        keyEdit: !parent || !Array.isArray(parent.value),
        keyType: keyType || 'text'
      }, _this.getActions(mode), {
        config: _this.config
      }));
    });

    return _this;
  }

  return BooleanType;
}(_base__WEBPACK_IMPORTED_MODULE_15__["default"]);

_defineProperty(BooleanType, "priority", 1);

_defineProperty(BooleanType, "eval", function (value) {
  return typeof value === 'boolean';
});

_defineProperty(BooleanType, "defaultValue", function () {
  return true;
});

/* harmony default export */ __webpack_exports__["default"] = (BooleanType);

/***/ }),

/***/ "./src/definitions/boolean/index.js":
/*!******************************************!*\
  !*** ./src/definitions/boolean/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boolean */ "./src/definitions/boolean/boolean.js");

/* harmony default export */ __webpack_exports__["default"] = (_boolean__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/definitions/cleave/index.js":
/*!*****************************************!*\
  !*** ./src/definitions/cleave/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../base */ "./src/definitions/base/index.js");
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! cleave.js */ "./node_modules/cleave.js/dist/cleave.js");
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(cleave_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");



















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var getCleaveEl = function getCleaveEl(Editor, id) {
  var schema = Editor.schema(id);
  return schema && schema.domNode && schema.domNode.getElementsByClassName(_constants__WEBPACK_IMPORTED_MODULE_21__["default"].Values.CLEAVE_CLS)[0];
};

var CleaveType =
/*#__PURE__*/
function (_BaseType) {
  _inherits(CleaveType, _BaseType);

  function CleaveType(config) {
    var _this;

    _classCallCheck(this, CleaveType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CleaveType).call(this, config));

    _defineProperty(_assertThisInitialized(_this), "onCleaveChange", function (e, Editor) {
      if (!_this.cleave) return;
      if (!_this.cleave.element) return console.warn("Called onCleaveChange but no cleave element exists", _assertThisInitialized(_this));
      var update = {
        value: e.target.rawValue,
        key: _this.cleave.element.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_21__["default"].Values.DATA_SCHEMA_KEY),
        original: _this.original.value
      };

      if (_this.cleave.element.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_21__["default"].Values.NUMBER_CLS)) {
        var numVal = Number(update.value);
        !isNaN(numVal) && (update.value = numVal);
      }

      if (update.value === undefined || update.key === undefined || _this.original[update.key] && _this.original[update.key] === update.value) return;
      _this.config.expandOnChange !== false && _this.setWidth(getCleaveEl(Editor, _this.original.id));
      return _this.original.value !== update.value && _this.userEvents.onChange(e, update, _this.original.id, Editor) !== false && (_this.updated.value = update.value);
    });

    _defineProperty(_assertThisInitialized(_this), "checkCleave", function (schema, domNode) {
      if (domNode.classList && domNode.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_21__["default"].Values.CLEAVE_CLS)) {
        _this.cleaveOpts.onValueChanged = _this.onCleaveChange;
        _this.cleave && _this.clearCleave();
        _this.cleave = new cleave_js__WEBPACK_IMPORTED_MODULE_19___default.a(domNode, _this.cleaveOpts);

        _this.cleave.setRawValue(schema.value);

        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "buildEvents", function (schema, domNode) {
      return domNode && Array.from(domNode.getElementsByTagName('input')).map(function (input) {
        !_this.cleave && _this.checkCleave(schema, input) ? input.oninput = undefined : input.oninput = _this.onChange;
        _this.config.expandOnChange !== false && _this.setWidth(input);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearCleave", function () {
      var rmOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!_this.cleave) return;

      _this.cleave.destroy();

      _this.cleave = undefined;
      rmOpts && Object(jsUtils__WEBPACK_IMPORTED_MODULE_20__["clearObj"])(_this.cleaveOpts);
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (props, Editor) {
      var schema = props.schema;
      if (schema.mode !== _constants__WEBPACK_IMPORTED_MODULE_21__["default"].Schema.MODES.EDIT) _this.clearCleave(false);else if (!_this.cleave) _this.buildEvents(schema, schema.domNode);else _this.cleave.setRawValue(schema.value);

      var parent = schema.parent,
          instance = schema.instance,
          domNode = schema.domNode,
          original = _objectWithoutProperties(schema, ["parent", "instance", "domNode"]);

      _this.original = original;
      _this.updated && Object(jsUtils__WEBPACK_IMPORTED_MODULE_20__["clearObj"])(_this.updated);
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function (Editor) {
      _this.original.value = undefined;

      _this.clearCleave();
    });

    _this.cleaveOpts = _objectSpread({
      onValueChanged: _this.onCleaveChange
    }, config.cleave);
    return _this;
  }

  return CleaveType;
}(_base__WEBPACK_IMPORTED_MODULE_18__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (CleaveType);

/***/ }),

/***/ "./src/definitions/collection/collection.js":
/*!**************************************************!*\
  !*** ./src/definitions/collection/collection.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../group */ "./src/definitions/group/index.js");















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var CollectionType =
/*#__PURE__*/
function (_GroupType) {
  _inherits(CollectionType, _GroupType);

  function CollectionType(config) {
    _classCallCheck(this, CollectionType);

    return _possibleConstructorReturn(this, _getPrototypeOf(CollectionType).call(this, _objectSpread({}, config)));
  }

  return CollectionType;
}(_group__WEBPACK_IMPORTED_MODULE_14__["default"]);

_defineProperty(CollectionType, "priority", 1);

_defineProperty(CollectionType, "eval", function (value) {
  return _typeof(value) === 'object' && Array.isArray(value);
});

_defineProperty(CollectionType, "defaultValue", function (newType, schema, settings) {
  return [];
});

/* harmony default export */ __webpack_exports__["default"] = (CollectionType);

/***/ }),

/***/ "./src/definitions/collection/index.js":
/*!*********************************************!*\
  !*** ./src/definitions/collection/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./src/definitions/collection/collection.js");

/* harmony default export */ __webpack_exports__["default"] = (_collection__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/definitions/empty/empty.js":
/*!****************************************!*\
  !*** ./src/definitions/empty/empty.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../base */ "./src/definitions/base/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var EmptyType =
/*#__PURE__*/
function (_BaseType) {
  _inherits(EmptyType, _BaseType);

  function EmptyType(config) {
    var _this;

    _classCallCheck(this, EmptyType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EmptyType).call(this, _objectSpread({}, config)));

    _defineProperty(_assertThisInitialized(_this), "onCancel", function (e, Editor) {
      var update = {
        remove: true
      };

      var id = _this.shouldDoDefault(e, update, Editor, _this.userEvents.onCancel);

      id && Editor.remove(id);
    });

    _defineProperty(_assertThisInitialized(_this), "onTypeChange", function (e, Editor) {
      var input = e.target || e.currentTarget;
      var value = input.value;
      var key = input.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_16__["default"].Values.DATA_SCHEMA_KEY);
      if (value === undefined || key === undefined || _this.original[key] && _this.original[key] === value) return;
      value && _this.config.expandOnChange !== false && _this.setWidth(input);
      var update = {
        matchType: value
      };
      if (_this.updated.key && _this.updated.key !== _this.original.key) update.key = _this.updated.key;
      _this.userEvents.onChange(e, update, _this.original.id, Editor) !== false && _this.original.id && Editor.update(_this.original.id, update);
    });

    _defineProperty(_assertThisInitialized(_this), "render", function (props) {
      var _props$schema = props.schema,
          id = _props$schema.id,
          key = _props$schema.key,
          value = _props$schema.value,
          mode = _props$schema.mode,
          matchType = _props$schema.matchType,
          keyType = _props$schema.keyType,
          parent = _props$schema.parent,
          error = _props$schema.error,
          Types = props.settings.Editor.Types;
      return Object(_components__WEBPACK_IMPORTED_MODULE_15__["Item"])(_objectSpread({
        id: id,
        value: '',
        Types: Types,
        error: error,
        key: Array.isArray(parent.value) ? key : '',
        type: _constants__WEBPACK_IMPORTED_MODULE_16__["default"].Schema.EMPTY,
        showLabel: true,
        keyType: keyType || 'text',
        keyEdit: !parent || !Array.isArray(parent.value),
        mode: _constants__WEBPACK_IMPORTED_MODULE_16__["default"].Schema.MODES.EDIT
      }, _this.getActions(_constants__WEBPACK_IMPORTED_MODULE_16__["default"].Schema.MODES.EDIT, {
        onTypeChange: _this.onTypeChange
      }), {
        config: _this.config
      }));
    });

    return _this;
  }

  return EmptyType;
}(_base__WEBPACK_IMPORTED_MODULE_14__["default"]);

_defineProperty(EmptyType, "priority", 1);

_defineProperty(EmptyType, "eval", function (value) {
  return value === undefined;
});

_defineProperty(EmptyType, "defaultValue", function (newType, schema, settings) {
  return undefined;
});

/* harmony default export */ __webpack_exports__["default"] = (EmptyType);

/***/ }),

/***/ "./src/definitions/empty/index.js":
/*!****************************************!*\
  !*** ./src/definitions/empty/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty */ "./src/definitions/empty/empty.js");

/* harmony default export */ __webpack_exports__["default"] = (_empty__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/definitions/group/index.js":
/*!****************************************!*\
  !*** ./src/definitions/group/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../base */ "./src/definitions/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");


















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var heightOffset = 2;

var getChildrenHt = function getChildrenHt(refNode) {
  return Array.from(refNode.firstChild.children).reduce(function (height, child) {
    height += child.scrollHeight || 0;
    return height;
  }, 0);
};

var GroupType =
/*#__PURE__*/
function (_BaseType) {
  _inherits(GroupType, _BaseType);

  function GroupType(config) {
    var _this;

    _classCallCheck(this, GroupType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GroupType).call(this, config));

    _defineProperty(_assertThisInitialized(_this), "config", {});

    _defineProperty(_assertThisInitialized(_this), "store", {});

    _defineProperty(_assertThisInitialized(_this), "onToggle", function (e, Editor) {
      e.stopPropagation();
      var id = e.currentTarget.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_20__["default"].Values.DATA_TREE_ID);
      if (!id) return;
      var schema = Editor.schema(id);
      if (!schema) return;
      var update = {
        open: !schema.open
      };

      if (_this.store.isOpen && !update.open) {
        _this.store.isOpen = false;
        var refNode = schema.domNode;
        refNode.style.maxHeight = _this.store.closedMaxHt;
        return setTimeout(function () {
          _this.store.currentMaxHt = _this.store.closedMaxHt;
          Editor.update(id, update);
        }, _this.toggleSpeed || 500);
      }

      Editor.update(id, update);
    });

    _defineProperty(_assertThisInitialized(_this), "getTransSpeed", function (refNode) {
      refNode = refNode || props.schema.domNode;
      if (!refNode) return;
      var domStyle = window.getComputedStyle(refNode);
      var transRule = domStyle.transition;
      if (!transRule) return;
      var speed = parseFloat(transRule.split(' ')[1]) * 1000;
      if (typeof speed !== 'number' || isNaN(speed)) return;
      _this.toggleSpeed = speed;
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function (props, Editor) {
      var refNode = props.schema.domNode;
      if (!refNode || refNode.style.maxHeight) return;
      _this.store.currentMaxHt = "".concat(refNode.scrollHeight + heightOffset, "px");
      _this.store.closedMaxHt = _this.store.currentMaxHt;
      refNode.style.maxHeight = _this.store.currentMaxHt;

      if (props.schema.isRoot && props.schema.open) {
        _this.store.isOpen = true;
        var rootHeader = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_20__["default"].Values.JT_ROOT_HEADER_ID);
        if (!rootHeader) return;
        _this.store.closedMaxHt = "".concat(rootHeader.scrollHeight + heightOffset, "px");
      }

      _this.getTransSpeed(refNode);
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (props, Editor) {
      var schema = props.schema;

      _this.setOriginal(schema);

      _this.updated && Object(jsUtils__WEBPACK_IMPORTED_MODULE_19__["clearObj"])(_this.updated);
      var refNode = schema.domNode;
      if (!refNode) return;
      var childrenHt = getChildrenHt(refNode);

      if (!_this.store.isOpen && schema.open) {
        _this.store.isOpen = true;
        _this.store.currentMaxHt = "".concat(childrenHt, "px");
        refNode.style.maxHeight = _this.store.currentMaxHt;
      }

      (schema.mode === _constants__WEBPACK_IMPORTED_MODULE_20__["default"].Schema.MODES.EDIT || schema.open) && Object(_utils__WEBPACK_IMPORTED_MODULE_18__["updateParentHeights"])(schema, childrenHt, heightOffset);
    });

    _defineProperty(_assertThisInitialized(_this), "onAdd", function (e, Editor) {
      e.stopPropagation();
      var id = e.currentTarget.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_20__["default"].Values.DATA_TREE_ID);
      var schema = id && Editor.schema(id);
      var update = {
        parent: schema,
        mode: _constants__WEBPACK_IMPORTED_MODULE_20__["default"].Schema.MODES.ADD,
        matchType: _constants__WEBPACK_IMPORTED_MODULE_20__["default"].Schema.EMPTY
      };
      if (Array.isArray(schema.value)) update.key = schema.value.length;
      schema && Editor.add({
        parent: schema,
        mode: _constants__WEBPACK_IMPORTED_MODULE_20__["default"].Schema.MODES.ADD,
        matchType: _constants__WEBPACK_IMPORTED_MODULE_20__["default"].Schema.EMPTY
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function (props) {
      var _props$schema = props.schema,
          id = _props$schema.id,
          key = _props$schema.key,
          value = _props$schema.value,
          mode = _props$schema.mode,
          matchType = _props$schema.matchType,
          keyType = _props$schema.keyType,
          keyText = _props$schema.keyText,
          isRoot = _props$schema.isRoot,
          open = _props$schema.open,
          error = _props$schema.error,
          children = props.children;
      var notEditMode = mode !== _constants__WEBPACK_IMPORTED_MODULE_20__["default"].Schema.MODES.EDIT;
      var classes = open && "list-open" || '';
      var actions = {};
      if (notEditMode) actions.onToggle = _this.onToggle;
      if (open && notEditMode) actions.onAdd = _this.onAdd;
      return Object(_components__WEBPACK_IMPORTED_MODULE_21__["List"])(_objectSpread({
        id: id,
        key: key,
        value: value,
        mode: mode,
        classes: classes,
        isRoot: isRoot,
        children: children,
        keyText: keyText,
        error: error,
        showPaste: props.settings.Editor.hasTemp(),
        keyType: keyType || 'text',
        isOpen: open,
        styles: {
          wrapper: {
            maxHeight: _this.store.currentMaxHt
          }
        },
        type: matchType,
        showLabel: true,
        valueEl: 'select',
        keyEdit: !props.schema.parent || !Array.isArray(props.schema.parent.value)
      }, _this.getActions(mode, actions), {
        config: _this.config
      }));
    });

    return _this;
  }

  return GroupType;
}(_base__WEBPACK_IMPORTED_MODULE_17__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (GroupType);

/***/ }),

/***/ "./src/definitions/map/index.js":
/*!**************************************!*\
  !*** ./src/definitions/map/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./src/definitions/map/map.js");

/* harmony default export */ __webpack_exports__["default"] = (_map__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/definitions/map/map.js":
/*!************************************!*\
  !*** ./src/definitions/map/map.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../group */ "./src/definitions/group/index.js");















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var MapType =
/*#__PURE__*/
function (_GroupType) {
  _inherits(MapType, _GroupType);

  function MapType(config) {
    _classCallCheck(this, MapType);

    return _possibleConstructorReturn(this, _getPrototypeOf(MapType).call(this, _objectSpread({}, config)));
  }

  return MapType;
}(_group__WEBPACK_IMPORTED_MODULE_14__["default"]);

_defineProperty(MapType, "priority", 1);

_defineProperty(MapType, "eval", function (value) {
  return _typeof(value) === 'object' && !Array.isArray(value);
});

_defineProperty(MapType, "defaultValue", function (newType, schema, settings) {
  return {};
});

/* harmony default export */ __webpack_exports__["default"] = (MapType);

/***/ }),

/***/ "./src/definitions/number/index.js":
/*!*****************************************!*\
  !*** ./src/definitions/number/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./src/definitions/number/number.js");

/* harmony default export */ __webpack_exports__["default"] = (_number__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/definitions/number/number.js":
/*!******************************************!*\
  !*** ./src/definitions/number/number.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _cleave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../cleave */ "./src/definitions/cleave/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NumberType =
/*#__PURE__*/
function (_CleaveType) {
  _inherits(NumberType, _CleaveType);

  function NumberType(config) {
    var _this;

    _classCallCheck(this, NumberType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberType).call(this, _objectSpread({}, config, {
      cleave: _objectSpread({
        numeral: true,
        numeralThousandsGroupStyle: 'none',
        stripLeadingZeroes: false,
        numeralDecimalScale: 0
      }, (config || {}).cleave)
    })));

    _defineProperty(_assertThisInitialized(_this), "config", {
      isNumber: true,
      useCleave: true
    });

    _defineProperty(_assertThisInitialized(_this), "render", function (props) {
      var _props$schema = props.schema,
          id = _props$schema.id,
          key = _props$schema.key,
          value = _props$schema.value,
          mode = _props$schema.mode,
          matchType = _props$schema.matchType,
          keyType = _props$schema.keyType,
          parent = _props$schema.parent,
          error = _props$schema.error;
      return Object(_components__WEBPACK_IMPORTED_MODULE_15__["Item"])(_objectSpread({
        id: id,
        key: key,
        value: value,
        mode: mode,
        error: error,
        type: matchType,
        showLabel: true,
        showPaste: props.settings.Editor.hasTemp(),
        keyEdit: !parent || !Array.isArray(parent.value),
        keyType: keyType || 'text'
      }, _this.getActions(mode), {
        config: _this.config
      }));
    });

    return _this;
  }

  return NumberType;
}(_cleave__WEBPACK_IMPORTED_MODULE_14__["default"]);

_defineProperty(NumberType, "priority", 1);

_defineProperty(NumberType, "eval", function (value) {
  return typeof value === 'number';
});

_defineProperty(NumberType, "defaultValue", function () {
  return 0;
});

/* harmony default export */ __webpack_exports__["default"] = (NumberType);

/***/ }),

/***/ "./src/definitions/number/sub_types/float.js":
/*!***************************************************!*\
  !*** ./src/definitions/number/sub_types/float.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../number */ "./src/definitions/number/number.js");
















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var FloatType =
/*#__PURE__*/
function (_NumberType) {
  _inherits(FloatType, _NumberType);

  function FloatType(config) {
    _classCallCheck(this, FloatType);

    return _possibleConstructorReturn(this, _getPrototypeOf(FloatType).call(this, _objectSpread({}, config, {
      cleave: _objectSpread({
        numeral: true,
        stripLeadingZeroes: false,
        numeralThousandsGroupStyle: 'none',
        numeralDecimalScale: 8
      }, (config || {}).cleave)
    })));
  }

  return FloatType;
}(_number__WEBPACK_IMPORTED_MODULE_15__["default"]);

_defineProperty(FloatType, "priority", 2);

_defineProperty(FloatType, "defaultValue", 0.0);

_defineProperty(FloatType, "eval", function (value) {
  return typeof value === 'number' && Number(value) === value && value % 1 !== 0;
});

/* harmony default export */ __webpack_exports__["default"] = (FloatType);

/***/ }),

/***/ "./src/definitions/number/sub_types/money.js":
/*!***************************************************!*\
  !*** ./src/definitions/number/sub_types/money.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../number */ "./src/definitions/number/number.js");
















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var MoneyType =
/*#__PURE__*/
function (_NumberType) {
  _inherits(MoneyType, _NumberType);

  function MoneyType(config) {
    var _this;

    _classCallCheck(this, MoneyType);

    console.log("---------- needs error handler ----------");
    _this = _possibleConstructorReturn(this, _getPrototypeOf(MoneyType).call(this, _objectSpread({}, config, {
      cleave: _objectSpread({
        numeral: true,
        delimiter: ',',
        stripLeadingZeroes: true,
        numeralDecimalScale: 2,
        prefix: '$',
        noImmediatePrefix: true
      }, (config || {}).cleave)
    })));

    _defineProperty(_assertThisInitialized(_this), "config", {
      isNumber: true,
      useCleave: true
    });

    return _this;
  }

  return MoneyType;
}(_number__WEBPACK_IMPORTED_MODULE_15__["default"]);

_defineProperty(MoneyType, "priority", 2);

_defineProperty(MoneyType, "defaultValue", '$0');

_defineProperty(MoneyType, "eval", function (value) {
  return typeof value === 'string' && value.indexOf('$') !== -1;
});

/* harmony default export */ __webpack_exports__["default"] = (MoneyType);

/***/ }),

/***/ "./src/definitions/number/sub_types/percent.js":
/*!*****************************************************!*\
  !*** ./src/definitions/number/sub_types/percent.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../number */ "./src/definitions/number/number.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components */ "./src/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var PercentType =
/*#__PURE__*/
function (_NumberType) {
  _inherits(PercentType, _NumberType);

  function PercentType(config) {
    var _this;

    _classCallCheck(this, PercentType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PercentType).call(this, config));

    _defineProperty(_assertThisInitialized(_this), "config", {
      isNumber: true
    });

    _defineProperty(_assertThisInitialized(_this), "suffix", '%');

    _defineProperty(_assertThisInitialized(_this), "updateSelection", function (e) {
      var input = e.target || e.currentTarget;
      var key = input && input.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_18__["default"].Values.DATA_SCHEMA_KEY);
      if (!key || !input || !input.value) return;
      key !== 'value' ? input.select() : input.setSelectionRange(0, input.value.length - 1);
    });

    _defineProperty(_assertThisInitialized(_this), "render", function (props) {
      var _props$schema = props.schema,
          id = _props$schema.id,
          key = _props$schema.key,
          value = _props$schema.value,
          mode = _props$schema.mode,
          matchType = _props$schema.matchType,
          keyType = _props$schema.keyType,
          parent = _props$schema.parent,
          error = _props$schema.error;
      var useVal = Object(_utils__WEBPACK_IMPORTED_MODULE_17__["updateSuffix"])(value, _this.suffix);
      return Object(_components__WEBPACK_IMPORTED_MODULE_16__["Item"])(_objectSpread({
        id: id,
        key: key,
        mode: mode,
        error: error,
        type: matchType,
        showLabel: true,
        value: useVal,
        showPaste: props.settings.Editor.hasTemp(),
        keyEdit: !parent || !Array.isArray(parent.value),
        keyType: keyType || 'text'
      }, _this.getActions(mode, {
        onFocus: _this.updateSelection,
        onClick: _this.updateSelection,
        onKeyUp: _utils__WEBPACK_IMPORTED_MODULE_17__["suffixSelection"].bind(_assertThisInitialized(_this))
      }), {
        config: _this.config
      }));
    });

    return _this;
  }

  return PercentType;
}(_number__WEBPACK_IMPORTED_MODULE_15__["default"]);

_defineProperty(PercentType, "priority", 2);

_defineProperty(PercentType, "defaultValue", '0%');

_defineProperty(PercentType, "eval", function (value) {
  return typeof value === 'string' && value.indexOf('%') !== -1;
});

/* harmony default export */ __webpack_exports__["default"] = (PercentType);

/***/ }),

/***/ "./src/definitions/string/index.js":
/*!*****************************************!*\
  !*** ./src/definitions/string/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/definitions/string/string.js");

/* harmony default export */ __webpack_exports__["default"] = (_string__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/definitions/string/string.js":
/*!******************************************!*\
  !*** ./src/definitions/string/string.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _cleave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../cleave */ "./src/definitions/cleave/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var StringType =
/*#__PURE__*/
function (_CleaveType) {
  _inherits(StringType, _CleaveType);

  function StringType(config) {
    var _this;

    _classCallCheck(this, StringType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StringType).call(this, _objectSpread({}, config, {
      cleave: _objectSpread({
        numeral: false,
        stripLeadingZeroes: false
      }, config && config.cleave || {})
    })));

    _defineProperty(_assertThisInitialized(_this), "config", {
      useCleave: true
    });

    _defineProperty(_assertThisInitialized(_this), "render", function (props) {
      var _props$schema = props.schema,
          id = _props$schema.id,
          key = _props$schema.key,
          value = _props$schema.value,
          mode = _props$schema.mode,
          matchType = _props$schema.matchType,
          keyType = _props$schema.keyType,
          parent = _props$schema.parent,
          error = _props$schema.error;
      var useValue = mode !== _constants__WEBPACK_IMPORTED_MODULE_17__["default"].Schema.MODES.EDIT && Object(jsUtils__WEBPACK_IMPORTED_MODULE_16__["isFunc"])(_this.getDisplayValue) ? _this.getDisplayValue(value, props) : value;
      return Object(_components__WEBPACK_IMPORTED_MODULE_15__["Item"])(_objectSpread({
        id: id,
        key: key,
        mode: mode,
        error: error,
        value: useValue,
        type: matchType,
        showLabel: true,
        showPaste: props.settings.Editor.hasTemp(),
        keyEdit: !parent || !Array.isArray(parent.value),
        keyType: keyType || 'text'
      }, _this.getActions(mode), {
        config: _this.config
      }));
    });

    return _this;
  }

  return StringType;
}(_cleave__WEBPACK_IMPORTED_MODULE_14__["default"]);

_defineProperty(StringType, "priority", 1);

_defineProperty(StringType, "eval", function (value) {
  return Object(jsUtils__WEBPACK_IMPORTED_MODULE_16__["isStr"])(value);
});

_defineProperty(StringType, "defaultValue", function (newType, schema, settings) {
  return '';
});

/* harmony default export */ __webpack_exports__["default"] = (StringType);

/***/ }),

/***/ "./src/definitions/string/sub_types/card.js":
/*!**************************************************!*\
  !*** ./src/definitions/string/sub_types/card.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../string */ "./src/definitions/string/string.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_17__);

















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var luhn = function (arr) {
  return function (ccNum) {
    var len = ccNum.length;
    var bit = 1;
    var sum = 0;
    var val;

    while (len) {
      val = parseInt(ccNum.charAt(--len), 10);
      sum += (bit ^= 1) ? arr[val] : val;
    }

    return sum && sum % 10 === 0;
  };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);

var CardType =
/*#__PURE__*/
function (_StringType) {
  _inherits(CardType, _StringType);

  function CardType(config) {
    var _this;

    _classCallCheck(this, CardType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CardType).call(this, _objectSpread({}, config, {
      cleave: _objectSpread({
        creditCard: true
      }, config && config.cleave || {})
    })));

    _defineProperty(_assertThisInitialized(_this), "config", {
      useCleave: true
    });

    return _this;
  }

  return CardType;
}(_string__WEBPACK_IMPORTED_MODULE_16__["default"]);

_defineProperty(CardType, "priority", 2);

_defineProperty(CardType, "defaultValue", '');

_defineProperty(CardType, "eval", function (value) {
  return Object(jsUtils__WEBPACK_IMPORTED_MODULE_17__["isStr"])(value) && luhn(value.replace(/ /g, ''));
});

_defineProperty(CardType, "error", function (args) {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  return "Invalid card number. Ensure the entered number matches the card number.";
});

/* harmony default export */ __webpack_exports__["default"] = (CardType);

/***/ }),

/***/ "./src/definitions/string/sub_types/color.js":
/*!***************************************************!*\
  !*** ./src/definitions/string/sub_types/color.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../string */ "./src/definitions/string/string.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_15__);















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ColorType =
/*#__PURE__*/
function (_StringType) {
  _inherits(ColorType, _StringType);

  function ColorType(config) {
    var _this;

    _classCallCheck(this, ColorType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColorType).call(this, _objectSpread({}, config, {
      cleave: _objectSpread({
        prefix: '#',
        uppercase: true
      }, config && config.cleave || {})
    })));

    _defineProperty(_assertThisInitialized(_this), "config", {
      valueAttrs: {
        min: 7
      },
      useCleave: true
    });

    return _this;
  }

  return ColorType;
}(_string__WEBPACK_IMPORTED_MODULE_14__["default"]);

_defineProperty(ColorType, "priority", 2);

_defineProperty(ColorType, "defaultValue", '#FFFFFF');

_defineProperty(ColorType, "error", function (args) {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  return "Invalid color. Color value should be in hex format (#FFFFFF)";
});

_defineProperty(ColorType, "eval", function (value) {
  if (!value || !Object(jsUtils__WEBPACK_IMPORTED_MODULE_15__["isStr"])(value)) return false;
  return Boolean(/^#(?:(?:[A-F0-9]{2}){3,4}|[A-F0-9]{3})$/i.test(value));
});

/* harmony default export */ __webpack_exports__["default"] = (ColorType);

/***/ }),

/***/ "./src/definitions/string/sub_types/date.js":
/*!**************************************************!*\
  !*** ./src/definitions/string/sub_types/date.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../string */ "./src/definitions/string/string.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");


















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var DATE_INPUT_SUPPORT;

var DateType =
/*#__PURE__*/
function (_StringType) {
  _inherits(DateType, _StringType);

  function DateType(config) {
    var _this;

    _classCallCheck(this, DateType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateType).call(this, _objectSpread({}, config, {
      cleave: _objectSpread({
        date: true,
        delimiter: '-',
        datePattern: ['Y', 'm', 'd']
      }, config && config.cleave || {})
    })));

    _defineProperty(_assertThisInitialized(_this), "config", {
      useCleave: false,
      valueAttrs: {}
    });

    _defineProperty(_assertThisInitialized(_this), "getDisplayValue", function (value) {
      var valSplit = value.split('-').reverse();
      var temp = valSplit[0];
      valSplit[0] = valSplit[1];
      valSplit[1] = temp;
      return valSplit.join('-');
    });

    if (!DATE_INPUT_SUPPORT && DATE_INPUT_SUPPORT !== false) DATE_INPUT_SUPPORT = Object(_utils__WEBPACK_IMPORTED_MODULE_19__["checkInputSupport"])('date');
    _this.config.useCleave = !DATE_INPUT_SUPPORT;
    _this.config.valueAttrs.type = DATE_INPUT_SUPPORT && 'date' || 'text';
    if (!DATE_INPUT_SUPPORT) _this.config.valueAttrs.placeholder = 'YYYY-MM-DD';
    return _this;
  }

  return DateType;
}(_string__WEBPACK_IMPORTED_MODULE_17__["default"]);

_defineProperty(DateType, "priority", 2);

_defineProperty(DateType, "defaultValue", '');

_defineProperty(DateType, "allowEmptyValue", '');

_defineProperty(DateType, "error", function (args) {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  var date = new Date();
  var today = date.getDate();
  var fullDay = today.length === 2 && today || "0".concat(today);
  var month = date.getMonth() + 1;
  var fullMonth = month.length === 2 && month || "0".concat(month);
  var format = "".concat(fullDay, "-").concat(fullMonth, "-").concat(date.getFullYear());
  return "Invalid date. Date format should match ".concat(format, " (Day-Month-Year)");
});

_defineProperty(DateType, "eval", function (value) {
  if (!Object(jsUtils__WEBPACK_IMPORTED_MODULE_18__["isStr"])(value)) return false;
  var dateSplit = value.split('-');
  if (dateSplit.length !== 3) return false;
  return dateSplit.reduce(function (valid, date) {
    if (!valid) return valid;
    return isNaN(parseInt(date)) ? false : valid && (date.length === 2 || date.length === 4);
  }, true);
});

/* harmony default export */ __webpack_exports__["default"] = (DateType);

/***/ }),

/***/ "./src/definitions/string/sub_types/datetime.js":
/*!******************************************************!*\
  !*** ./src/definitions/string/sub_types/datetime.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../string */ "./src/definitions/string/string.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");

















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var DATETIME_INPUT_SUPPORT;

var DateTimeType =
/*#__PURE__*/
function (_StringType) {
  _inherits(DateTimeType, _StringType);

  function DateTimeType(config) {
    var _this;

    _classCallCheck(this, DateTimeType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateTimeType).call(this, _objectSpread({}, config, {
      cleave: _objectSpread({
        numeral: true,
        numeralThousandsGroupStyle: 'none',
        blocks: [4, 2, 2, 2, 2],
        delimiters: ['-', '-', ', ', ':']
      }, config && config.cleave || {})
    })));

    _defineProperty(_assertThisInitialized(_this), "config", {
      useCleave: false,
      valueAttrs: {}
    });

    _defineProperty(_assertThisInitialized(_this), "getDisplayValue", function (value) {
      return value;
    });

    if (!DATETIME_INPUT_SUPPORT && DATETIME_INPUT_SUPPORT !== false) DATETIME_INPUT_SUPPORT = Object(_utils__WEBPACK_IMPORTED_MODULE_18__["checkInputSupport"])('datetime-local');
    _this.config.useCleave = !DATETIME_INPUT_SUPPORT;
    _this.config.valueAttrs.type = DATETIME_INPUT_SUPPORT && 'datetime-local' || 'text';
    if (!DATETIME_INPUT_SUPPORT) _this.config.valueAttrs.placeholder = 'YYYY-MM-DD, HH:MM';
    return _this;
  }

  return DateTimeType;
}(_string__WEBPACK_IMPORTED_MODULE_16__["default"]);

_defineProperty(DateTimeType, "priority", 2);

_defineProperty(DateTimeType, "defaultValue", '');

_defineProperty(DateTimeType, "allowEmptyValue", '');

_defineProperty(DateTimeType, "error", function (args) {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  var date = new Date();
  var format = "".concat(date.hours, ":").concat(date.minutes, "}");
  return "Invalid time. Time format should match ".concat(format, " (Hour:Minutes)");
});

_defineProperty(DateTimeType, "eval", function (value) {
  if (!Object(jsUtils__WEBPACK_IMPORTED_MODULE_17__["isStr"])(value)) return false;
  var dateSplit = value.split(':');
  if (dateSplit.length !== 2) return false;
  return dateSplit.reduce(function (valid, date) {
    if (!valid) return valid;
    return isNaN(parseInt(date)) ? false : valid && date.length === 2;
  }, true);
});

/* harmony default export */ __webpack_exports__["default"] = (DateTimeType);

/***/ }),

/***/ "./src/definitions/string/sub_types/email.js":
/*!***************************************************!*\
  !*** ./src/definitions/string/sub_types/email.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../string */ "./src/definitions/string/string.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_11__);











function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var EmailType =
/*#__PURE__*/
function (_StringType) {
  _inherits(EmailType, _StringType);

  function EmailType(config) {
    _classCallCheck(this, EmailType);

    return _possibleConstructorReturn(this, _getPrototypeOf(EmailType).call(this, config));
  }

  return EmailType;
}(_string__WEBPACK_IMPORTED_MODULE_10__["default"]);

_defineProperty(EmailType, "priority", 2);

_defineProperty(EmailType, "defaultValue", '');

_defineProperty(EmailType, "allowEmptyValue", '');

_defineProperty(EmailType, "error", function (args) {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  return "Invalid Email. Please enter a valid email address!";
});

_defineProperty(EmailType, "eval", function (value) {
  if (!value || !Object(jsUtils__WEBPACK_IMPORTED_MODULE_11__["isStr"])(value) || value.indexOf('@') === -1 || value.indexOf('.') === -1) return false;
  var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return Boolean(regex.test(value));
});

/* harmony default export */ __webpack_exports__["default"] = (EmailType);

/***/ }),

/***/ "./src/definitions/string/sub_types/phone.js":
/*!***************************************************!*\
  !*** ./src/definitions/string/sub_types/phone.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../string */ "./src/definitions/string/string.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_16__);
















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var PhoneType =
/*#__PURE__*/
function (_StringType) {
  _inherits(PhoneType, _StringType);

  function PhoneType(config) {
    var _this;

    _classCallCheck(this, PhoneType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PhoneType).call(this, _objectSpread({}, config, {
      cleave: _objectSpread({
        phone: true,
        delimiter: '-',
        phoneRegionCode: 'US'
      }, config && config.cleave || {})
    })));

    _defineProperty(_assertThisInitialized(_this), "config", {
      useCleave: true
    });

    return _this;
  }

  return PhoneType;
}(_string__WEBPACK_IMPORTED_MODULE_15__["default"]);

_defineProperty(PhoneType, "priority", 2);

_defineProperty(PhoneType, "defaultValue", '');

_defineProperty(PhoneType, "allowEmptyValue", '');

_defineProperty(PhoneType, "eval", function (value) {
  if (!Object(jsUtils__WEBPACK_IMPORTED_MODULE_16__["isStr"])(value)) return false;
  var regex = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  return Boolean(regex.test(value.replace(/\D/g, '')));
});

_defineProperty(PhoneType, "error", function (args) {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  return "Invalid phone number. Phone format should match 123-123-1234";
});

/* harmony default export */ __webpack_exports__["default"] = (PhoneType);

/***/ }),

/***/ "./src/definitions/string/sub_types/time.js":
/*!**************************************************!*\
  !*** ./src/definitions/string/sub_types/time.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../string */ "./src/definitions/string/string.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");

















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var TIME_INPUT_SUPPORT;

var TimeType =
/*#__PURE__*/
function (_StringType) {
  _inherits(TimeType, _StringType);

  function TimeType(config) {
    var _this;

    _classCallCheck(this, TimeType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeType).call(this, _objectSpread({}, config, {
      cleave: _objectSpread({
        delimiter: ':',
        time: true,
        timePattern: ['h', 'm']
      }, config && config.cleave || {})
    })));

    _defineProperty(_assertThisInitialized(_this), "config", {
      useCleave: false,
      valueAttrs: {}
    });

    _defineProperty(_assertThisInitialized(_this), "getDisplayValue", function (value) {
      return parseInt(value.split(':')[0]) < 12 ? "".concat(value, " AM") : "".concat(value, " PM");
    });

    if (!TIME_INPUT_SUPPORT && TIME_INPUT_SUPPORT !== false) TIME_INPUT_SUPPORT = Object(_utils__WEBPACK_IMPORTED_MODULE_18__["checkInputSupport"])('time');
    _this.config.useCleave = !TIME_INPUT_SUPPORT;
    _this.config.valueAttrs.type = TIME_INPUT_SUPPORT && 'time' || 'text';
    if (!TIME_INPUT_SUPPORT) _this.config.valueAttrs.placeholder = 'HH:MM';
    return _this;
  }

  return TimeType;
}(_string__WEBPACK_IMPORTED_MODULE_16__["default"]);

_defineProperty(TimeType, "priority", 2);

_defineProperty(TimeType, "defaultValue", '');

_defineProperty(TimeType, "allowEmptyValue", '');

_defineProperty(TimeType, "error", function (args) {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  var date = new Date();
  var format = "".concat(date.hours, ":").concat(date.minutes, "}");
  return "Invalid time. Time format should match ".concat(format, " (Hour:Minutes)");
});

_defineProperty(TimeType, "eval", function (value) {
  if (!Object(jsUtils__WEBPACK_IMPORTED_MODULE_17__["isStr"])(value)) return false;
  var dateSplit = value.split(':');
  if (dateSplit.length !== 2) return false;
  return dateSplit.reduce(function (valid, date) {
    if (!valid) return valid;
    return isNaN(parseInt(date)) ? false : valid && date.length === 2;
  }, true);
});

/* harmony default export */ __webpack_exports__["default"] = (TimeType);

/***/ }),

/***/ "./src/definitions/string/sub_types/url.js":
/*!*************************************************!*\
  !*** ./src/definitions/string/sub_types/url.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../string */ "./src/definitions/string/string.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_10__);










function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var UrlType =
/*#__PURE__*/
function (_StringType) {
  _inherits(UrlType, _StringType);

  function UrlType(config) {
    _classCallCheck(this, UrlType);

    return _possibleConstructorReturn(this, _getPrototypeOf(UrlType).call(this, config));
  }

  return UrlType;
}(_string__WEBPACK_IMPORTED_MODULE_9__["default"]);

_defineProperty(UrlType, "priority", 2);

_defineProperty(UrlType, "defaultValue", '');

_defineProperty(UrlType, "allowEmptyValue", '');

_defineProperty(UrlType, "error", function (args) {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  return "Invalid URL format. Please enter a valid URL.";
});

_defineProperty(UrlType, "eval", function (value) {
  if (!value || !Object(jsUtils__WEBPACK_IMPORTED_MODULE_10__["isStr"])(value)) return false;
  var regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  return Boolean(regex.test(value));
});

/* harmony default export */ __webpack_exports__["default"] = (UrlType);

/***/ }),

/***/ "./src/definitions/string/sub_types/uuid.js":
/*!**************************************************!*\
  !*** ./src/definitions/string/sub_types/uuid.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../string */ "./src/definitions/string/string.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_15__);















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var UuidType =
/*#__PURE__*/
function (_StringType) {
  _inherits(UuidType, _StringType);

  function UuidType(config) {
    var _this;

    _classCallCheck(this, UuidType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UuidType).call(this, _objectSpread({}, config, {
      cleave: _objectSpread({
        numeral: false,
        delimiter: '-',
        lowercase: true,
        blocks: [8, 4, 3, 3, 12],
        uppercase: false,
        stripLeadingZeroes: false
      }, config && config.cleave || {})
    })));

    _defineProperty(_assertThisInitialized(_this), "config", {
      useCleave: true
    });

    return _this;
  }

  return UuidType;
}(_string__WEBPACK_IMPORTED_MODULE_14__["default"]);

_defineProperty(UuidType, "priority", 2);

_defineProperty(UuidType, "defaultValue", '');

_defineProperty(UuidType, "allowEmptyValue", '');

_defineProperty(UuidType, "error", function (args) {
  if (args.prop !== 'value') return args.message || 'Error, Invalid data!';
  return "Invalid UUID format. Please enter a valid UUID (00000000-0000-000-000-000000000000)";
});

_defineProperty(UuidType, "eval", function (value) {
  if (!value || !Object(jsUtils__WEBPACK_IMPORTED_MODULE_15__["isStr"])(value)) return false;
  var regex = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
  return regex.test(value);
});

/* harmony default export */ __webpack_exports__["default"] = (UuidType);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: BaseType, BooleanType, CardType, CollectionType, ColorType, DateType, DateTimeType, EmailType, EmptyType, FloatType, MapType, MoneyType, NumberType, PercentType, PhoneType, StringType, TimeType, UrlType, UuidType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _definitions_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions/base */ "./src/definitions/base/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseType", function() { return _definitions_base__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _definitions_boolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions/boolean */ "./src/definitions/boolean/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanType", function() { return _definitions_boolean__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _definitions_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions/empty */ "./src/definitions/empty/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyType", function() { return _definitions_empty__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _definitions_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./definitions/collection */ "./src/definitions/collection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionType", function() { return _definitions_collection__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _definitions_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./definitions/map */ "./src/definitions/map/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapType", function() { return _definitions_map__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _definitions_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./definitions/number */ "./src/definitions/number/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberType", function() { return _definitions_number__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _definitions_number_sub_types_float__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./definitions/number/sub_types/float */ "./src/definitions/number/sub_types/float.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatType", function() { return _definitions_number_sub_types_float__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _definitions_number_sub_types_money__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./definitions/number/sub_types/money */ "./src/definitions/number/sub_types/money.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoneyType", function() { return _definitions_number_sub_types_money__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _definitions_number_sub_types_percent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./definitions/number/sub_types/percent */ "./src/definitions/number/sub_types/percent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PercentType", function() { return _definitions_number_sub_types_percent__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _definitions_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./definitions/string */ "./src/definitions/string/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringType", function() { return _definitions_string__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _definitions_string_sub_types_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./definitions/string/sub_types/card */ "./src/definitions/string/sub_types/card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardType", function() { return _definitions_string_sub_types_card__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _definitions_string_sub_types_color__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./definitions/string/sub_types/color */ "./src/definitions/string/sub_types/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorType", function() { return _definitions_string_sub_types_color__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _definitions_string_sub_types_date__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./definitions/string/sub_types/date */ "./src/definitions/string/sub_types/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateType", function() { return _definitions_string_sub_types_date__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _definitions_string_sub_types_datetime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./definitions/string/sub_types/datetime */ "./src/definitions/string/sub_types/datetime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimeType", function() { return _definitions_string_sub_types_datetime__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _definitions_string_sub_types_email__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./definitions/string/sub_types/email */ "./src/definitions/string/sub_types/email.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailType", function() { return _definitions_string_sub_types_email__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _definitions_string_sub_types_phone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./definitions/string/sub_types/phone */ "./src/definitions/string/sub_types/phone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneType", function() { return _definitions_string_sub_types_phone__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _definitions_string_sub_types_time__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./definitions/string/sub_types/time */ "./src/definitions/string/sub_types/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeType", function() { return _definitions_string_sub_types_time__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _definitions_string_sub_types_url__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./definitions/string/sub_types/url */ "./src/definitions/string/sub_types/url.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlType", function() { return _definitions_string_sub_types_url__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _definitions_string_sub_types_uuid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./definitions/string/sub_types/uuid */ "./src/definitions/string/sub_types/uuid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UuidType", function() { return _definitions_string_sub_types_uuid__WEBPACK_IMPORTED_MODULE_18__["default"]; });






















/***/ }),

/***/ "./src/styles/build_theme.js":
/*!***********************************!*\
  !*** ./src/styles/build_theme.js ***!
  \***********************************/
/*! exports provided: buildTheme, updateTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTheme", function() { return buildTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTheme", function() { return setTheme; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./theme */ "./src/styles/theme.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_16__);
















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

    var match = data.match(/@\S*/i);
    if (!match) return (filledBlock[rule] = data) && filledBlock;
    var fillVal = theme[match[0].replace('@', '')];
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
  Object(_theme__WEBPACK_IMPORTED_MODULE_15__["updateTheme"])(update);
  return buildTheme(update);
};

var buildTheme = function buildTheme(settings) {
  var builtTheme = Object(_theme__WEBPACK_IMPORTED_MODULE_15__["getTheme"])();
  var useTheme = settings.theme ? Object(jsUtils__WEBPACK_IMPORTED_MODULE_16__["deepMerge"])(builtTheme, settings.theme) : builtTheme;
  var useStyles = settings.styles ? Object(jsUtils__WEBPACK_IMPORTED_MODULE_16__["deepMerge"])(base, settings.styles) : base;

  var filled = _objectSpread({}, fillStyles(useTheme, useStyles));

  return filled;
};



/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/*! exports provided: updateTheme, getTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTheme", function() { return updateTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return getTheme; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);

















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
var getTheme = function getTheme() {
  return _objectSpread({
    size20Neg: "-20px",
    fontPrimary: "\"Raleway\", sans-serif",
    fontSecondary: "\"Cabin\", sans-serif",
    fontThird: "\"Roboto\", sans-serif",
    fontLite: '300',
    fontNormal: 'normal',
    fontBold: 'bold',
    toggleHoverColor: DEF_COLORS.blue,
    toggleOpenColor: DEF_COLORS.lime,
    toggleEditColor: DEF_COLORS.green,
    toggleErrorColor: DEF_COLORS.red,
    itemEditBackColor: DEF_COLORS.white,
    itemHoverBackColor: DEF_COLORS.white1,
    itemOpenBackColor: DEF_COLORS.gray,
    itemActiveBackColor: DEF_COLORS.gray,
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
    typeLabelColor: DEF_COLORS.gray2,
    inputEditBorder: "1px solid ".concat(DEF_COLORS.gray1),
    inputFocusBorderBottom: "1px solid ".concat(DEF_COLORS.green),
    inputErrorBorder: "1px solid ".concat(DEF_COLORS.red),
    inputDisabledBackColor: DEF_COLORS.gray1,
    inputDisabledColor: DEF_COLORS.gray2,
    inputDisabledOpacity: 0.5,
    inputDisabledCursor: 'not-allowed',
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

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: updateParentHeights, updateParentConstruct, addCustomEvents, addAllowedConfigOpts, callEditor, shouldDoDefault, updateValue, togglePastAction, updateSuffix, suffixSelection, updateValWithSuffix, checkInputSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateParentHeights", function() { return updateParentHeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateParentConstruct", function() { return updateParentConstruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomEvents", function() { return addCustomEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAllowedConfigOpts", function() { return addAllowedConfigOpts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callEditor", function() { return callEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldDoDefault", function() { return shouldDoDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateValue", function() { return updateValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePastAction", function() { return togglePastAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSuffix", function() { return updateSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suffixSelection", function() { return suffixSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateValWithSuffix", function() { return updateValWithSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInputSupport", function() { return checkInputSupport; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! jsUtils */ "./node_modules/jsUtils/build/jsUtils.min.js");
/* harmony import */ var jsUtils__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(jsUtils__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");



















function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var updateParentHeights = function updateParentHeights(schema, updateHeight) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var domNode = schema && schema.domNode;
  if (!domNode || !updateHeight) return;
  var newHeight = domNode.scrollHeight + updateHeight;
  domNode.style.maxHeight = "".concat(newHeight + offset, "px");
  schema.parent && updateParentHeights(schema.parent, newHeight);
};
var updateParentConstruct = function updateParentConstruct(config, parent) {
  Object.entries(_constants__WEBPACK_IMPORTED_MODULE_19__["default"].Values.PARENT_OVERWRITE).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        type = _ref2[1];

    if (_typeof(config[key]) === type && parent[key] !== config[key]) parent[key] = config[key];
  });
};
var addCustomEvents = function addCustomEvents(config, userEvents) {
  return Object.keys(_constants__WEBPACK_IMPORTED_MODULE_19__["default"].Values.CUSTOM_EVENTS).map(function (key) {
    return userEvents[key] = Object(jsUtils__WEBPACK_IMPORTED_MODULE_18__["isFunc"])(config[key]) && config[key] || _constants__WEBPACK_IMPORTED_MODULE_19__["default"].Values.CUSTOM_EVENTS[key];
  });
};
var addAllowedConfigOpts = function addAllowedConfigOpts(config, baseConfig) {
  return _objectSpread({}, baseConfig, _constants__WEBPACK_IMPORTED_MODULE_19__["default"].Values.TYPES_CONFIG_OPTS.reduce(function (typeConf, opt) {
    return opt in config && (typeConf[opt] = config[opt]) || typeConf;
  }, {}));
};
var callEditor = function callEditor(e, update, usrEvent, type, Editor) {
  e && e.stopPropagation();
  var id = shouldDoDefault(e, update, Editor, usrEvent);
  id && Editor[type] && Editor[type](id, update);
};
var shouldDoDefault = function shouldDoDefault(e, update, Editor, userEvent) {
  var id = e.currentTarget.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_19__["default"].Values.DATA_TREE_ID);
  return id && userEvent && userEvent(e, update, id, Editor) === false || id;
};
var updateValue = function updateValue(update, input) {
  var value = input.value;

  if (input.nodeName === 'INPUT' && input.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_19__["default"].Values.NUMBER_CLS)) {
    var numVal = Number(value);
    !isNaN(numVal) && (update.value = numVal);
  } else if (typeof update.original === 'boolean' && (value === 'false' || value === 'true')) update.value = value === 'true';else update.value = value;
};
var togglePastAction = function togglePastAction(type) {
  return Array.from(document.querySelectorAll(".".concat(_constants__WEBPACK_IMPORTED_MODULE_19__["default"].Values.PASTE_ACTION_CLS))).map(function (node) {
    node && node.classList && node.classList[type](_constants__WEBPACK_IMPORTED_MODULE_19__["default"].Values.SHOW_PASTE_CLS);
  });
};
var updateSuffix = function updateSuffix(value, suffix, remove) {
  if (!value && value !== 0) return;
  value = !Object(jsUtils__WEBPACK_IMPORTED_MODULE_18__["isStr"])(value) && "".concat(value) || value;
  var cleanVal = value.replace(/\D/g, '');
  cleanVal = cleanVal.length && value[0] === '-' ? "-".concat(cleanVal) : cleanVal;
  return remove ? cleanVal : cleanVal && cleanVal.length && "".concat(cleanVal).concat(suffix) || '';
};
var suffixSelection = function suffixSelection(e, Editor) {
  var input = e.target || e.currentTarget;
  var key = input && input.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_19__["default"].Values.DATA_SCHEMA_KEY);
  if (!key || key !== 'value' || !input || !input.value) return;
  var selection = window.getSelection();
  var selected = selection && selection.toString();
  return !selected ? input.selectionEnd === input.value.length && input.setSelectionRange(input.selectionEnd - 1, input.selectionEnd - 1) : selected[selected.length - 1] === this.suffix && input.setSelectionRange(input.selectionStart, input.selectionEnd - 1);
};
var updateValWithSuffix = function updateValWithSuffix(update, input, suffix) {
  var value = updateSuffix(input.value, suffix, true);
  if (!value) return input.value = '';
  var numVal = (value || value === 0) && Number(value);

  if (!isNaN(numVal)) {
    update.value = updateSuffix(numVal, suffix);
    update.value !== input.value && (input.value = update.value);
  } else input.value = '';
};
var checkInputSupport = function checkInputSupport(inputType) {
  var input = document.createElement('input');
  input.setAttribute('type', inputType);
  var notAnInputValue = 'not-a-input-value';
  input.setAttribute('value', notAnInputValue);
  return input.value !== notAnInputValue;
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9pY29uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvaXRlbS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy9saXN0L2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy9saXN0L2xpc3RfaGVhZGVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3N1Yi9kaXNwbGF5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3N1Yi9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy9zdWIvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvc3ViL2xhYmVsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3N1Yi9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29uc3RhbnRzL3NjaGVtYS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29uc3RhbnRzL3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZGVmaW5pdGlvbnMvYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZGVmaW5pdGlvbnMvYm9vbGVhbi9ib29sZWFuLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9kZWZpbml0aW9ucy9ib29sZWFuL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9kZWZpbml0aW9ucy9jbGVhdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2RlZmluaXRpb25zL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZGVmaW5pdGlvbnMvY29sbGVjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZGVmaW5pdGlvbnMvZW1wdHkvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2RlZmluaXRpb25zL2VtcHR5L2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9kZWZpbml0aW9ucy9ncm91cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZGVmaW5pdGlvbnMvbWFwL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9kZWZpbml0aW9ucy9tYXAvbWFwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9kZWZpbml0aW9ucy9udW1iZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2RlZmluaXRpb25zL251bWJlci9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2RlZmluaXRpb25zL251bWJlci9zdWJfdHlwZXMvZmxvYXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2RlZmluaXRpb25zL251bWJlci9zdWJfdHlwZXMvbW9uZXkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2RlZmluaXRpb25zL251bWJlci9zdWJfdHlwZXMvcGVyY2VudC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZGVmaW5pdGlvbnMvc3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9kZWZpbml0aW9ucy9zdHJpbmcvc3RyaW5nLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9kZWZpbml0aW9ucy9zdHJpbmcvc3ViX3R5cGVzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2RlZmluaXRpb25zL3N0cmluZy9zdWJfdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2RlZmluaXRpb25zL3N0cmluZy9zdWJfdHlwZXMvZGF0ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZGVmaW5pdGlvbnMvc3RyaW5nL3N1Yl90eXBlcy9kYXRldGltZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZGVmaW5pdGlvbnMvc3RyaW5nL3N1Yl90eXBlcy9lbWFpbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZGVmaW5pdGlvbnMvc3RyaW5nL3N1Yl90eXBlcy9waG9uZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZGVmaW5pdGlvbnMvc3RyaW5nL3N1Yl90eXBlcy90aW1lLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9kZWZpbml0aW9ucy9zdHJpbmcvc3ViX3R5cGVzL3VybC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZGVmaW5pdGlvbnMvc3RyaW5nL3N1Yl90eXBlcy91dWlkLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvc3R5bGVzL2J1aWxkX3RoZW1lLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9zdHlsZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbImRpdiIsImVsZW1lbnRzIiwic3BhbiIsIm9wdGlvbiIsImJ0blR5cGVzIiwib25FZGl0IiwiaWNvbiIsImtleSIsIm9uQ29weSIsIm9uQ3V0Iiwib25QYXN0ZSIsIm9uQWRkIiwib25EZWxldGUiLCJvblNhdmUiLCJvbkNhbmNlbCIsInR5cGVMYWJlbCIsInR5cGUiLCJjbGFzc05hbWUiLCJjYXBpdGFsaXplIiwic2hvd1R5cGVWYWx1ZSIsInByb3BzIiwiQ29uc3RhbnRzIiwiU2NoZW1hIiwiRU1QVFkiLCJUeXBlcyIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwiZ2V0IiwiZmlsdGVyIiwibWFwIiwidmFsdWUiLCJzZWxlY3RlZCIsIm1hdGNoVHlwZSIsInVuc2hpZnQiLCJpbnB1dFdyYXBwZXIiLCJzaG93TGFiZWwiLCJzZWxlY3RXcmFwcGVyIiwiVmFsdWVzIiwiRURJVF9DTFMiLCJEQVRBX1NDSEVNQV9LRVkiLCJvblR5cGVDaGFuZ2UiLCJidWlsZEljb24iLCJhY3Rpb24iLCJpZCIsIndyYXBwZXJQcm9wcyIsImJ0biIsIkljb24iLCJEQVRBX1RSRUVfSUQiLCJ3cmFwcGVyIiwiYnVpbGRCdG5zIiwicmVkdWNlIiwiYWN0aW9ucyIsImF0dHJzIiwiaXNSb290Iiwic2hvd1Bhc3RlIiwiU0hPV19QQVNURV9DTFMiLCJQQVNURV9BQ1RJT05fQ0xTIiwicHVzaCIsIkJ1dHRvbnMiLCJidXR0b25zIiwiZW50cmllcyIsImluZGV4T2YiLCJhIiwidGV4dCIsImV4dHJhUHJvcHMiLCJsb3dlclRleHQiLCJ0b0xvd2VyQ2FzZSIsIndyYXBDbGFzc2VzIiwiaHJlZiIsInRpdGxlIiwiY2hpbGRyZW4iLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsImJ1aWxkT3B0aW9ucyIsImlzRWRpdCIsIm1vZGUiLCJNT0RFUyIsIkVESVQiLCJ0eXBlRWwiLCJzdWJDb21wcyIsImJ1aWxkSXRlbUtleSIsIkVsIiwia2V5QXR0cnMiLCJrZXlWYWwiLCJrZXlFZGl0IiwiZGlzYWJsZWQiLCJrZXlFbCIsIm5hbWUiLCJidWlsZEl0ZW1WYWx1ZSIsIml0ZW1Qcm9wcyIsInZhbHVlQXR0cnMiLCJlbFZhbHVlIiwidmFsRWwiLCJpc0Z1bmMiLCJJdGVtIiwiY2xhc3NlcyIsInVsIiwibGkiLCJpIiwiUm93Iiwicm93UHJvcHMiLCJjaGlsZCIsImNoZWNrRXh0cmFDbGFzcyIsIm9yZyIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJhZGRFbXB0eSIsInJvd3MiLCJpc09wZW4iLCJsZW5ndGgiLCJMaXN0Iiwic3R5bGVzIiwiaGVhZGVyUHJvcHMiLCJMaXN0SGVhZGVyIiwic3R5bGUiLCJsaXN0IiwiYnVpbGRLZXlFbCIsImJ1aWxkSGVhZGVyS2V5Iiwia2V5VHlwZSIsImtleVRleHQiLCJjb25maWciLCJidWlsZEhlYWRlclZhbHVlIiwidHlwZU5hbWUiLCJpbnB1dERhdGEiLCJ2YWx1ZVR5cGUiLCJpY29uQ2xzIiwicm9vdENscyIsIm9uVG9nZ2xlIiwib25DbGljayIsIkpUX1JPT1RfSEVBREVSX0lEIiwiZ2V0VmFsdWUiLCJ2YWwiLCJwcmVmaXgiLCJ0b1N0cmluZyIsImRpc3BsYXkiLCJrZXlQcmVmaXgiLCJ2YWx1ZVRleHQiLCJ2YWxQcmVmaXgiLCJlZGl0Q2xzIiwiZ2V0QXR0cnMiLCJlbFZhbCIsImNvbmZpZ0NsYXNzZXMiLCJ1c2VDbGVhdmUiLCJDTEVBVkVfQ0xTIiwiaXNOdW1iZXIiLCJOVU1CRVJfQ0xTIiwib25Gb2N1cyIsIkRPTV9FVkVOVFMiLCJsYWJlbCIsImlucHV0IiwiZ2V0T3B0UHJvcHMiLCJnZXRDaGlsZHJlbiIsInNlbGVjdCIsInVzZVZhbHVlcyIsImRlZXBGcmVlemUiLCJ1cGRhdGVEZWZWYWx1ZXMiLCJ1cGRhdGUiLCJ1c2VTY2hlbWEiLCJ1cGRhdGVEZWZTY2hlbWEiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJCYXNlVHlwZSIsIkVkaXRvciIsImUiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwib3JpZ2luYWwiLCJzdWZmaXgiLCJ1cGRhdGVWYWxXaXRoU3VmZml4IiwidXBkYXRlVmFsdWUiLCJleHBhbmRPbkNoYW5nZSIsInNldFdpZHRoIiwidXNlckV2ZW50cyIsIm9uQ2hhbmdlIiwidXBkYXRlZCIsInN0b3BQcm9wYWdhdGlvbiIsInVuZGVmaW5lZCIsInNob3VsZERvRGVmYXVsdCIsInNjaGVtYSIsInBlbmRpbmciLCJyZW1vdmUiLCJjYWxsRWRpdG9yIiwiUkVNT1ZFIiwidGVtcCIsInRvZ2dsZVBhc3RBY3Rpb24iLCJDVVQiLCJyZXBsYWNlQXRQb3MiLCJleHRyYSIsIndpZHRoIiwiZG9tTm9kZSIsInRhZyIsImZyb20iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm9uaW5wdXQiLCJidWlsZEV2ZW50cyIsInBhcmVudCIsImluc3RhbmNlIiwic2V0T3JpZ2luYWwiLCJjbGVhck9iaiIsInBhcmFtcyIsInVwZGF0ZVBhcmVudENvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYWRkQ3VzdG9tRXZlbnRzIiwiYWRkQWxsb3dlZENvbmZpZ09wdHMiLCJuZXdUeXBlIiwic2V0dGluZ3MiLCJidWlsZFRoZW1lIiwibWVzc2FnZSIsIkJvb2xlYW5UeXBlIiwidmFsdWVFbCIsImhhc1RlbXAiLCJnZXRBY3Rpb25zIiwiZ2V0Q2xlYXZlRWwiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiQ2xlYXZlVHlwZSIsImNsZWF2ZSIsImVsZW1lbnQiLCJjb25zb2xlIiwid2FybiIsInJhd1ZhbHVlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJudW1WYWwiLCJOdW1iZXIiLCJpc05hTiIsImNsZWF2ZU9wdHMiLCJvblZhbHVlQ2hhbmdlZCIsIm9uQ2xlYXZlQ2hhbmdlIiwiY2xlYXJDbGVhdmUiLCJDbGVhdmUiLCJzZXRSYXdWYWx1ZSIsImNoZWNrQ2xlYXZlIiwicm1PcHRzIiwiZGVzdHJveSIsIkNvbGxlY3Rpb25UeXBlIiwiR3JvdXBUeXBlIiwiRW1wdHlUeXBlIiwiaGVpZ2h0T2Zmc2V0IiwiZ2V0Q2hpbGRyZW5IdCIsInJlZk5vZGUiLCJmaXJzdENoaWxkIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwib3BlbiIsInN0b3JlIiwibWF4SGVpZ2h0IiwiY2xvc2VkTWF4SHQiLCJzZXRUaW1lb3V0IiwiY3VycmVudE1heEh0IiwidG9nZ2xlU3BlZWQiLCJkb21TdHlsZSIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc1J1bGUiLCJ0cmFuc2l0aW9uIiwic3BlZWQiLCJwYXJzZUZsb2F0Iiwic3BsaXQiLCJyb290SGVhZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldFRyYW5zU3BlZWQiLCJjaGlsZHJlbkh0IiwidXBkYXRlUGFyZW50SGVpZ2h0cyIsIkFERCIsImFkZCIsIm5vdEVkaXRNb2RlIiwiTWFwVHlwZSIsIk51bWJlclR5cGUiLCJudW1lcmFsIiwibnVtZXJhbFRob3VzYW5kc0dyb3VwU3R5bGUiLCJzdHJpcExlYWRpbmdaZXJvZXMiLCJudW1lcmFsRGVjaW1hbFNjYWxlIiwiRmxvYXRUeXBlIiwiTW9uZXlUeXBlIiwibG9nIiwiZGVsaW1pdGVyIiwibm9JbW1lZGlhdGVQcmVmaXgiLCJQZXJjZW50VHlwZSIsInNldFNlbGVjdGlvblJhbmdlIiwidXNlVmFsIiwidXBkYXRlU3VmZml4IiwidXBkYXRlU2VsZWN0aW9uIiwib25LZXlVcCIsInN1ZmZpeFNlbGVjdGlvbiIsImJpbmQiLCJTdHJpbmdUeXBlIiwidXNlVmFsdWUiLCJnZXREaXNwbGF5VmFsdWUiLCJpc1N0ciIsImx1aG4iLCJhcnIiLCJjY051bSIsImxlbiIsImJpdCIsInN1bSIsInBhcnNlSW50IiwiY2hhckF0IiwiQ2FyZFR5cGUiLCJjcmVkaXRDYXJkIiwicmVwbGFjZSIsImFyZ3MiLCJwcm9wIiwiQ29sb3JUeXBlIiwidXBwZXJjYXNlIiwibWluIiwiQm9vbGVhbiIsInRlc3QiLCJEQVRFX0lOUFVUX1NVUFBPUlQiLCJEYXRlVHlwZSIsImRhdGUiLCJkYXRlUGF0dGVybiIsInZhbFNwbGl0IiwicmV2ZXJzZSIsImNoZWNrSW5wdXRTdXBwb3J0IiwicGxhY2Vob2xkZXIiLCJEYXRlIiwidG9kYXkiLCJnZXREYXRlIiwiZnVsbERheSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJmdWxsTW9udGgiLCJmb3JtYXQiLCJnZXRGdWxsWWVhciIsImRhdGVTcGxpdCIsInZhbGlkIiwiREFURVRJTUVfSU5QVVRfU1VQUE9SVCIsIkRhdGVUaW1lVHlwZSIsImJsb2NrcyIsImRlbGltaXRlcnMiLCJob3VycyIsIm1pbnV0ZXMiLCJFbWFpbFR5cGUiLCJyZWdleCIsIlBob25lVHlwZSIsInBob25lIiwicGhvbmVSZWdpb25Db2RlIiwiVElNRV9JTlBVVF9TVVBQT1JUIiwiVGltZVR5cGUiLCJ0aW1lIiwidGltZVBhdHRlcm4iLCJVcmxUeXBlIiwiVXVpZFR5cGUiLCJsb3dlcmNhc2UiLCJmaWxsQmxvY2tzIiwiYmxvY2siLCJ0aGVtZSIsImZpbGxlZEJsb2NrIiwicnVsZSIsImRhdGEiLCJtYXRjaCIsImZpbGxWYWwiLCJmaWxsU3R5bGVzIiwidXNlU3R5bGVzIiwic2VsZWN0b3IiLCJzZXRUaGVtZSIsInVwZGF0ZVRoZW1lIiwiYnVpbHRUaGVtZSIsImdldFRoZW1lIiwidXNlVGhlbWUiLCJkZWVwTWVyZ2UiLCJiYXNlIiwiZmlsbGVkIiwiREVGX0NPTkZJRyIsInNwcmVhZCIsInJhbmdlIiwidW5pdHMiLCJyYXciLCJuZWdhdGl2ZSIsIkRFRl9USEVNRSIsIkRFRl9DT0xPUlMiLCJibHVlIiwibGltZSIsImdyZWVuIiwicmVkIiwib3JhbmdlIiwid2hpdGUiLCJ3aGl0ZTEiLCJncmF5IiwiZ3JheTEiLCJncmF5MiIsImdyYXkzIiwiZ3JheTQiLCJidWlsZFVzZUNvbmYiLCJ1cGRhdGVWYWwiLCJidWlsZFJhbmdlUHJvcHMiLCJwb3N0Zml4IiwiYnVpbGRPYmoiLCJfIiwiaW5kIiwiY3VyIiwiTWF0aCIsInJvdW5kIiwiYnVpbGRSYW5nZSIsInVzZUNvbmYiLCJidWlsdCIsImJhc2VOYW1lIiwiREVGX1NJWkUiLCJERVZfU1BFRUQiLCJjb2xvcnMiLCJzaXplIiwic2l6ZTIwTmVnIiwiZm9udFByaW1hcnkiLCJmb250U2Vjb25kYXJ5IiwiZm9udFRoaXJkIiwiZm9udExpdGUiLCJmb250Tm9ybWFsIiwiZm9udEJvbGQiLCJ0b2dnbGVIb3ZlckNvbG9yIiwidG9nZ2xlT3BlbkNvbG9yIiwidG9nZ2xlRWRpdENvbG9yIiwidG9nZ2xlRXJyb3JDb2xvciIsIml0ZW1FZGl0QmFja0NvbG9yIiwiaXRlbUhvdmVyQmFja0NvbG9yIiwiaXRlbU9wZW5CYWNrQ29sb3IiLCJpdGVtQWN0aXZlQmFja0NvbG9yIiwicGFzc2l2ZUJ0bk9wYWNpdHkiLCJhY3RpdmVCdG5PcGFjaXR5IiwicGFzc2l2ZUJ0bkNvbG9yIiwiYWN0aXZlRWRpdENvbG9yIiwiYWN0aXZlQ29weUNvbG9yIiwiYWN0aXZlRHJhZ0NvbG9yIiwiYWN0aXZlQWRkQ29sb3IiLCJhY3RpdmVTYXZlQ29sb3IiLCJhY3RpdmVDYW5jZWxDb2xvciIsImFjdGl2ZURlbGV0ZUNvbG9yIiwidHlwZUxhYmVsQ29sb3IiLCJpbnB1dEVkaXRCb3JkZXIiLCJpbnB1dEZvY3VzQm9yZGVyQm90dG9tIiwiaW5wdXRFcnJvckJvcmRlciIsImlucHV0RGlzYWJsZWRCYWNrQ29sb3IiLCJpbnB1dERpc2FibGVkQ29sb3IiLCJpbnB1dERpc2FibGVkT3BhY2l0eSIsImlucHV0RGlzYWJsZWRDdXJzb3IiLCJpdGVtQm9yZGVyIiwiaXRlbUhvdmVyQm9yZGVyIiwiaXRlbUVkaXRCb3JkZXIiLCJpdGVtRW1wdHlCb3JkZXIiLCJpdGVtRXJyb3JCb3JkZXIiLCJpdGVtRXJyb3JUZXh0Q29sb3IiLCJpdGVtRXJyb3JUZXh0QmFja2dyb3VuZCIsImhlYWRlck9wZW5Cb3JkZXIiLCJ1cGRhdGVIZWlnaHQiLCJvZmZzZXQiLCJuZXdIZWlnaHQiLCJQQVJFTlRfT1ZFUldSSVRFIiwiQ1VTVE9NX0VWRU5UUyIsImJhc2VDb25maWciLCJUWVBFU19DT05GSUdfT1BUUyIsInR5cGVDb25mIiwib3B0IiwidXNyRXZlbnQiLCJ1c2VyRXZlbnQiLCJub2RlTmFtZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJub2RlIiwiY2xlYW5WYWwiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3Rpb25FbmQiLCJzZWxlY3Rpb25TdGFydCIsImlucHV0VHlwZSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJub3RBbklucHV0VmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiww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eEgsS0FBTixHQUFjLEVBQWQ7QUFDTixDQWJNO0FBZ0JBLElBQU04UixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFvSixTQUFTLEVBQUk7QUFDNUMsTUFBTTFULEtBQUssR0FBRytHLFFBQVEsQ0FBQzRNLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtBQUNBM1QsT0FBSyxDQUFDNFQsWUFBTixDQUFtQixNQUFuQixFQUEyQkYsU0FBM0I7QUFFQSxNQUFNRyxlQUFlLEdBQUcsbUJBQXhCO0FBQ0E3VCxPQUFLLENBQUM0VCxZQUFOLENBQW1CLE9BQW5CLEVBQTRCQyxlQUE1QjtBQUVBLFNBQVE3VCxLQUFLLENBQUN4SCxLQUFOLEtBQWdCcWIsZUFBeEI7QUFDRCxDQVJNLEMiLCJmaWxlIjoianRyZWUtZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImp0cmVlLWRlZmluaXRpb25zXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImp0cmVlLWRlZmluaXRpb25zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImp0cmVlLWRlZmluaXRpb25zXCJdID0gZmFjdG9yeSgpO1xufSkoKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKSwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImp0cmVlLWRlZmluaXRpb25zXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpW1wid2VicGFja0pzb25wX25hbWVfXCJdID0gKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKVtcIndlYnBhY2tKc29ucF9uYW1lX1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwiY29yZS1qc1wiLFwiY2xlYXZlLmpzXCIsXCJlbGVtZW50UlwiLFwianNVdGlsc1wiLFwid2VicGFja1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSAnZWxlbWVudFInXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi9pY29uJ1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ2pzVXRpbHMnXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IHNlbGVjdFdyYXBwZXIsIGlucHV0V3JhcHBlciB9IGZyb20gJy4uL3N1YidcblxuY29uc3QgeyBkaXYsIHNwYW4sIG9wdGlvbiB9ID0gZWxlbWVudHNcbmNvbnN0IGJ0blR5cGVzID0ge1xuICBvbkVkaXQ6IHsgaWNvbjogJ3BlbicsIGtleTogJ0VkaXQnIH0sXG4gIG9uQ29weTogeyBpY29uOiAnY29weScsIGtleTogJ0NvcHknIH0sXG4gIG9uQ3V0OiB7IGljb246ICdjdXQnLCBrZXk6ICdDdXQnIH0sXG4gIG9uUGFzdGU6IHsgaWNvbjogJ3Bhc3RlJywga2V5OiAnUGFzdGUnIH0sXG4gIG9uQWRkOiB7IGljb246ICdwbHVzLXNxdWFyZScsIGtleTogJ0FkZCcgfSxcbiAgb25EZWxldGU6IHsgaWNvbjogJ3RyYXNoLWFsdCcsIGtleTogJ0RlbGV0ZScgfSxcbiAgb25TYXZlOiB7IGljb246ICdjaGVjay1zcXVhcmUnLCBrZXk6ICdTYXZlJyB9LFxuICBvbkNhbmNlbDogeyBpY29uOiAnd2luZG93LWNsb3NlJywga2V5OiAnQ2FuY2VsJyB9LFxufVxuXG5jb25zdCB0eXBlTGFiZWwgPSB0eXBlID0+IChcbiAgZGl2KHsgY2xhc3NOYW1lOiBgdHlwZS1sYWJlbGAgfSwgXG4gICAgc3BhbihcbiAgICAgIHsgY2xhc3NOYW1lOiBgdHlwZS10ZXh0ICR7dHlwZX0tdGV4dGAgfSwgXG4gICAgICBgKCAke2NhcGl0YWxpemUodHlwZSl9IClgXG4gICAgKVxuICApXG4pXG5cbmNvbnN0IHNob3dUeXBlVmFsdWUgPSAocHJvcHMsIHR5cGUpID0+IHtcbiAgaWYodHlwZSAhPT0gQ29uc3RhbnRzLlNjaGVtYS5FTVBUWSB8fCAhcHJvcHMuVHlwZXMpIHJldHVybiB0eXBlTGFiZWwodHlwZSlcblxuICBjb25zdCBvcHRpb25zID0gT2JqZWN0XG4gICAgLmtleXMocHJvcHMuVHlwZXMuZ2V0KG51bGwsIHsgZmlsdGVyOiBbIENvbnN0YW50cy5TY2hlbWEuRU1QVFkgXSB9KSlcbiAgICAubWFwKHZhbHVlID0+IG9wdGlvbih7XG4gICAgICB2YWx1ZSxcbiAgICAgIHNlbGVjdGVkOiBwcm9wcy5tYXRjaFR5cGUgPT09IHZhbHVlXG4gICAgfSwgY2FwaXRhbGl6ZSh2YWx1ZSkpIClcbiAgXG4gIG9wdGlvbnMudW5zaGlmdChvcHRpb24oe1xuICAgIHNlbGVjdGVkOiAhcHJvcHMubWF0Y2hUeXBlXG4gIH0sICdTZWxlY3QgVHlwZS4uLicpKVxuICAgIFxuICByZXR1cm4gaW5wdXRXcmFwcGVyKFxuICAgIHsgdHlwZTogdHlwZSwgc2hvd0xhYmVsOiB0cnVlIH0sXG4gICAgc2VsZWN0V3JhcHBlcihcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6IGBpdGVtLW1hdGNoVHlwZSBpdGVtLWRhdGEgJHtDb25zdGFudHMuVmFsdWVzLkVESVRfQ0xTfWAsXG4gICAgICAgIFtDb25zdGFudHMuVmFsdWVzLkRBVEFfU0NIRU1BX0tFWV06ICdtYXRjaFR5cGUnLFxuICAgICAgICBuYW1lOiBgdHlwZS1tYXRjaFR5cGVgLFxuICAgICAgICB2YWx1ZTogcHJvcHMubWF0Y2hUeXBlLFxuICAgICAgICBvbkNoYW5nZTogcHJvcHMub25UeXBlQ2hhbmdlLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnMsXG4gICAgKVxuICApXG59XG5cbmNvbnN0IGJ1aWxkSWNvbiA9IChhY3Rpb24sIHR5cGUsIGlkLCB3cmFwcGVyUHJvcHM9e30pID0+IHtcbiAgY29uc3QgYnRuID0gYnRuVHlwZXNbdHlwZV0gfHwge31cbiAgcmV0dXJuIGFjdGlvblxuICAgID8gSWNvbihcbiAgICAgICAgYnRuLmljb24sXG4gICAgICAgIGJ0bi5rZXksXG4gICAgICAgIHsgaWNvbjogeyBbQ29uc3RhbnRzLlZhbHVlcy5EQVRBX1RSRUVfSURdOiBpZCwgb25jbGljazogYWN0aW9uLCB9LCB3cmFwcGVyOiB3cmFwcGVyUHJvcHMgfSxcbiAgICAgICAgdHlwZVxuICAgICAgKVxuICAgIDogJydcbn1cblxuY29uc3QgYnVpbGRCdG5zID0gKGlkLCBwcm9wcykgPT4ge1xuICByZXR1cm4gT2JqZWN0XG4gICAgLmtleXMoYnRuVHlwZXMpXG4gICAgLnJlZHVjZSgoYWN0aW9ucywga2V5KSA9PiB7XG4gICAgICBsZXQgYXR0cnMgPSB7fVxuICAgICAgaWYoa2V5ID09PSAnb25QYXN0ZScgJiYgIXByb3BzLmlzUm9vdCl7XG4gICAgICAgIGF0dHJzID0gcHJvcHMuc2hvd1Bhc3RlXG4gICAgICAgICAgPyB7IGNsYXNzTmFtZTogYCR7Q29uc3RhbnRzLlZhbHVlcy5TSE9XX1BBU1RFX0NMU30gJHtDb25zdGFudHMuVmFsdWVzLlBBU1RFX0FDVElPTl9DTFN9YCB9XG4gICAgICAgICAgOiB7IGNsYXNzTmFtZTogYCR7Q29uc3RhbnRzLlZhbHVlcy5QQVNURV9BQ1RJT05fQ0xTfWAgfVxuICAgICAgfVxuXG4gICAgICBpZihwcm9wcy5pc1Jvb3Qpe1xuICAgICAgICBrZXkgPT09ICdvbkFkZCdcbiAgICAgICAgICA/IGFjdGlvbnMucHVzaChidWlsZEljb24oIHByb3BzW2tleV0sIGtleSwgaWQsIGF0dHJzICkpXG4gICAgICAgICAgOiBudWxsXG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbnNcbiAgICAgIH1cblxuICAgICAgcHJvcHNba2V5XSAmJiBhY3Rpb25zLnB1c2goYnVpbGRJY29uKCBwcm9wc1trZXldLCBrZXksIGlkLCBhdHRycyApKVxuICAgICAgcmV0dXJuIGFjdGlvbnNcbiAgICB9LCBbXSlcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbnMgPSAocHJvcHMpID0+IHtcbiAgaWYoIXByb3BzLmlkKSByZXR1cm4gW11cbiAgY29uc3QgYnV0dG9ucyA9IE9iamVjdFxuICAgIC5lbnRyaWVzKHByb3BzKVxuICAgIC5yZWR1Y2UoKGJ1dHRvbnMsIFsga2V5LCB2YWx1ZSBdKSA9PiB7XG4gICAgICBrZXkuaW5kZXhPZignb24nKSA9PT0gMCAmJiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgKGJ1dHRvbnNba2V5XSA9IHZhbHVlKVxuXG4gICAgICByZXR1cm4gYnV0dG9uc1xuICAgIH0sIHt9KVxuICBjb25zdCB7IGlkLCB0eXBlIH0gPSBwcm9wc1xuICBidXR0b25zLnNob3dQYXN0ZSA9IHByb3BzLnNob3dQYXN0ZVxuICBidXR0b25zLmlzUm9vdCA9IHByb3BzLmlzUm9vdFxuICByZXR1cm4gZGl2KHsgY2xhc3NOYW1lOiBgYnRucy13cmFwcGVyYCB9LCBbXG4gICAgc2hvd1R5cGVWYWx1ZShwcm9wcywgdHlwZSksXG4gICAgZGl2KHsgY2xhc3NOYW1lOiBgYnRucy1saXN0YCB9LCBbXG4gICAgICAuLi5idWlsZEJ0bnMoaWQsIGJ1dHRvbnMpXG4gICAgXSlcbiAgXSlcbn1cbiIsImltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSAnZWxlbWVudFInXG5jb25zdCB7IHNwYW4sIGEgIH0gPSBlbGVtZW50c1xuXG5leHBvcnQgY29uc3QgSWNvbiA9IChpY29uLCB0ZXh0LCBleHRyYVByb3BzPXt9KSA9PiB7XG4gIGNvbnN0IGxvd2VyVGV4dCA9IHRleHQgJiYgdGV4dC50b0xvd2VyQ2FzZSgpXG4gIGNvbnN0IHdyYXBDbGFzc2VzID0gZXh0cmFQcm9wcy53cmFwcGVyICYmIGV4dHJhUHJvcHMud3JhcHBlci5jbGFzc05hbWVcbiAgICA/IGBpY29uLXdyYXBwZXIgd3JhcC1pY29uLSR7bG93ZXJUZXh0fSAke2V4dHJhUHJvcHMud3JhcHBlci5jbGFzc05hbWV9YFxuICAgIDogYGljb24td3JhcHBlciB3cmFwLWljb24tJHtsb3dlclRleHR9YFxuICBcbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgd3JhcHBlcjoge1xuICAgICAgLi4uZXh0cmFQcm9wcy53cmFwcGVyLFxuICAgICAgY2xhc3NOYW1lOiB3cmFwQ2xhc3NlcyxcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIGNsYXNzTmFtZTogYGljb24gaWNvbi0ke2xvd2VyVGV4dH0gZmEgZmEtJHtpY29ufWAsXG4gICAgICBocmVmOiAnamF2YXNjcmlwdDp2b2lkKDApOycsXG4gICAgICB0aXRsZTogdGV4dCB8fCBpY29uLFxuICAgICAgLi4uZXh0cmFQcm9wcy5pY29uXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICBjbGFzc05hbWU6IGBpY29uLXRleHRgLFxuICAgICAgLi4uZXh0cmFQcm9wcy50ZXh0XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hpbGRyZW4gPSB0ZXh0XG4gICAgPyBbIGEocHJvcHMuaWNvbiwgc3Bhbihwcm9wcy50ZXh0LCB0ZXh0KSkgXVxuICAgIDogWyBhKHByb3BzLmljb24pIF1cbiAgcmV0dXJuIHNwYW4ocHJvcHMud3JhcHBlciwgY2hpbGRyZW4gKVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9idXR0b25zJ1xuZXhwb3J0ICogZnJvbSAnLi9pY29uJyIsImltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSAnZWxlbWVudFInXG5jb25zdCB7IGRpdiwgc3BhbiB9ID0gZWxlbWVudHNcblxuZXhwb3J0IGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yID0+IChcbiAgZXJyb3IgJiYgZGl2KHsgY2xhc3NOYW1lOiAnaXRlbS1lcnJvci1tZXNzYWdlJyB9LFxuICAgIHNwYW4oeyBjbGFzc05hbWU6ICdpdGVtLWVycm9yLXRleHQnIH0sIGVycm9yKVxuICApIHx8IG51bGxcbikiLCJleHBvcnQgKiBmcm9tICcuL2J1dHRvbnMnXG5leHBvcnQgKiBmcm9tICcuL2l0ZW0nXG5leHBvcnQgKiBmcm9tICcuL2xpc3QnIiwiaW1wb3J0IHsgQnV0dG9ucyB9IGZyb20gJy4vYnV0dG9ucydcbmltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSAnZWxlbWVudFInXG5pbXBvcnQgeyBpc0Z1bmMgfSBmcm9tICdqc1V0aWxzJ1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBzdWJDb21wcyBmcm9tICcuL3N1YidcbmltcG9ydCB7IGVycm9yTWVzc2FnZSB9IGZyb20gJy4vZXJyb3InXG5cbmNvbnN0IHsgZGl2IH0gPSBlbGVtZW50c1xuXG5jb25zdCBidWlsZE9wdGlvbnMgPSAocHJvcHMsIHR5cGUpID0+IHsgIFxuICBjb25zdCBpc0VkaXQgPSBwcm9wcy5tb2RlID09PSBDb25zdGFudHMuU2NoZW1hLk1PREVTLkVESVRcbiAgY29uc3QgdHlwZUVsID0gcHJvcHNbYCR7dHlwZX1FbGBdXG4gIHJldHVybiAhaXNFZGl0IFxuICAgID8gc3ViQ29tcHMuZGlzcGxheShwcm9wcywgdHlwZSlcbiAgICA6IHR5cGVFbCAmJiBzdWJDb21wc1t0eXBlRWxdXG4gICAgICA/IHN1YkNvbXBzW3R5cGVFbF0ocHJvcHMsIHR5cGUpXG4gICAgICA6IHN1YkNvbXBzLmlucHV0KHByb3BzLCB0eXBlKVxufVxuXG5jb25zdCBidWlsZEl0ZW1LZXkgPSAoeyBzaG93TGFiZWwsIEVsLCBrZXlBdHRycywga2V5VmFsIH0sIHByb3BzKSA9PiB7XG4gIGlmKHByb3BzICYmIHByb3BzLmtleUVkaXQgPT09IGZhbHNlKSBrZXlBdHRycy5kaXNhYmxlZCA9IHRydWVcbiAgY29uc3Qga2V5RWwgPSBFbChrZXlBdHRycywga2V5VmFsKVxuICByZXR1cm4gIXNob3dMYWJlbFxuICAgID8ga2V5RWxcbiAgICA6IGRpdih7IGNsYXNzTmFtZTogJ2l0ZW0tZGF0YS13cmFwcGVyIGl0ZW0ta2V5LXdyYXBwZXInIH0sXG4gICAgICBzdWJDb21wcy5sYWJlbChrZXlBdHRycy5uYW1lLCAnS2V5JyksXG4gICAgICBrZXlFbFxuICAgIClcbn1cblxuY29uc3QgYnVpbGRJdGVtVmFsdWUgPSAoaXRlbVByb3BzLCBwcm9wcykgPT4ge1xuICBjb25zdCB7IHNob3dMYWJlbCwgRWwsIHZhbHVlQXR0cnMsIGVsVmFsdWUsIGNoaWxkcmVuIH0gPSBpdGVtUHJvcHNcbiAgaWYocHJvcHMgJiYgcHJvcHMudHlwZSA9PT0gQ29uc3RhbnRzLlNjaGVtYS5FTVBUWSkgdmFsdWVBdHRycy5kaXNhYmxlZCA9IHRydWVcblxuICBjb25zdCB2YWxFbCA9IEVsKHZhbHVlQXR0cnMsIGlzRnVuYyhjaGlsZHJlbikgJiYgY2hpbGRyZW4oaXRlbVByb3BzKSB8fCBlbFZhbHVlKVxuICBcbiAgcmV0dXJuICFzaG93TGFiZWxcbiAgICA/IHZhbEVsXG4gICAgOiBkaXYoeyBjbGFzc05hbWU6ICdpdGVtLWRhdGEtd3JhcHBlciBpdGVtLXZhbHVlLXdyYXBwZXInIH0sXG4gICAgICBzdWJDb21wcy5sYWJlbCh2YWx1ZUF0dHJzLm5hbWUsICdWYWx1ZScpLFxuICAgICAgdmFsRWwsXG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgSXRlbSA9IChwcm9wcz17fSkgPT4ge1xuICBsZXQgY2xhc3NlcyA9IGBpdGVtICR7cHJvcHMubW9kZSA9PT0gQ29uc3RhbnRzLlNjaGVtYS5NT0RFUy5FRElUICYmIENvbnN0YW50cy5WYWx1ZXMuRURJVF9DTFMgfHwgJyd9YFxuICBcbiAgaWYocHJvcHMudHlwZSA9PT0gQ29uc3RhbnRzLlNjaGVtYS5FTVBUWSkgY2xhc3NlcyArPSBgIGl0ZW0tZW1wdHlgXG4gIGlmKHByb3BzLmVycm9yKSBjbGFzc2VzICs9IGAgaXRlbS1lcnJvcmBcblxuICByZXR1cm4gZGl2KFxuICAgIHsgY2xhc3NOYW1lOiBjbGFzc2VzIH0sXG4gICAgYnVpbGRJdGVtS2V5KGJ1aWxkT3B0aW9ucyhwcm9wcywgJ2tleScpLCBwcm9wcyksXG4gICAgYnVpbGRJdGVtVmFsdWUoYnVpbGRPcHRpb25zKHByb3BzLCAndmFsdWUnKSwgcHJvcHMpLFxuICAgIGRpdihcbiAgICAgIHsgY2xhc3NOYW1lOiBgaXRlbS1idG5zIGl0ZW0tZGF0YWAgfSxcbiAgICAgIEJ1dHRvbnMocHJvcHMpLFxuICAgICksXG4gICAgZXJyb3JNZXNzYWdlKHByb3BzLmVycm9yKVxuICApXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2xpc3QnXG5leHBvcnQgKiBmcm9tICcuL2xpc3RfaGVhZGVyJyIsImltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSAnZWxlbWVudFInXG5pbXBvcnQgeyBMaXN0SGVhZGVyIH0gZnJvbSAnLi9saXN0X2hlYWRlcidcbmNvbnN0IHsgZGl2LCB1bCwgbGksIGkgfSA9IGVsZW1lbnRzXG5cbmV4cG9ydCBjb25zdCBSb3cgPSAocm93UHJvcHMsIGNoaWxkKSA9PiAoXG4gIGxpKHtcbiAgICAgIC4uLnJvd1Byb3BzLFxuICAgICAgY2xhc3NOYW1lOiBgcm93JHtyb3dQcm9wcy5jbGFzc05hbWUgJiYgJyAnICsgcm93UHJvcHMuY2xhc3NOYW1lIHx8ICcnfWBcbiAgICB9LCBjaGlsZClcbilcblxuY29uc3QgY2hlY2tFeHRyYUNsYXNzID0gKG9yZywgY2xhc3NlcykgPT4gKFxuICB0eXBlb2YgY2xhc3NlcyA9PT0gJ3N0cmluZydcbiAgICA/IGAke29yZ30gJHtjbGFzc2VzfWBcbiAgICA6IEFycmF5LmlzQXJyYXkoY2xhc3NlcylcbiAgICAgID8gYCR7b3JnfSAke2NsYXNzZXMuam9pbihgIGApfWBcbiAgICAgIDogb3JnXG4pXG5cbmNvbnN0IGFkZEVtcHR5ID0gKHJvd3MsIHByb3BzKSA9PiB7XG4gIHByb3BzLmlzT3BlbiAmJlxuICAgIHByb3BzLmNoaWxkcmVuICYmXG4gICAgIXByb3BzLmNoaWxkcmVuLmxlbmd0aCAmJiBcbiAgICByb3dzLnB1c2goUm93KFxuICAgICAgeyBjbGFzc05hbWU6ICdsaXN0LWVtcHR5JyB9LFxuICAgICAgZGl2KHsgY2xhc3NOYW1lOiAnbGlzdC1lbXB0eS10ZXh0JyB9LFxuICAgICAgICBpKHtjbGFzc05hbWU6J2ZhcyBmYS1iYW4gZmEtcm90YXRlLTkwIGxpc3QtZW1wdHktaWNvbid9KSxcbiAgICAgICAgJ0VtcHR5J1xuICAgICAgKVxuICAgICkpXG59XG5cbmV4cG9ydCBjb25zdCBMaXN0ID0gKHByb3BzKSA9PiB7XG4gIGxldCB7IGNoaWxkcmVuLCBjbGFzc2VzLCBzdHlsZXMsIC4uLmhlYWRlclByb3BzIH0gPSBwcm9wc1xuICBzdHlsZXMgPSBzdHlsZXMgfHwge31cblxuICBjb25zdCByb3dzID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubWFwKGNoaWxkID0+IFJvdyh7fSwgY2hpbGQpKSB8fCBbXSAgXG4gIHJvd3MudW5zaGlmdCggUm93KHsgY2xhc3NOYW1lOiAnbGlzdC1oZWFkZXInIH0sIExpc3RIZWFkZXIoaGVhZGVyUHJvcHMpICkgKVxuICBhZGRFbXB0eShyb3dzLCBwcm9wcylcblxuICByZXR1cm4gZGl2KFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogY2hlY2tFeHRyYUNsYXNzKCdsaXN0LXdyYXBwZXInLCBjbGFzc2VzKSxcbiAgICAgIHN0eWxlOiBzdHlsZXMud3JhcHBlclxuICAgIH0sIFxuICAgIHVsKFxuICAgICAgeyBcbiAgICAgICAgY2xhc3NOYW1lOiBjaGVja0V4dHJhQ2xhc3MoJ2xpc3QnLCBjbGFzc2VzKSxcbiAgICAgICAgc3R5bGU6IHN0eWxlcy5saXN0XG4gICAgICB9LFxuICAgICAgcm93c1xuICAgIClcbiAgKVxufSIsImltcG9ydCB7IEJ1dHRvbnMsIEljb24gfSBmcm9tICcuLi9idXR0b25zJ1xuaW1wb3J0IHsgZWxlbWVudHMgfSBmcm9tICdlbGVtZW50UidcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICdqc1V0aWxzJ1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBzdWJDb21wcyBmcm9tICcuLi9zdWInXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9lcnJvcidcblxuY29uc3QgeyBkaXYgfSA9IGVsZW1lbnRzXG5cbmNvbnN0IGJ1aWxkS2V5RWwgPSAoeyBzaG93TGFiZWwsIEVsLCBrZXlBdHRycywga2V5VmFsIH0pID0+IHtcbiAgY29uc3Qga2V5RWwgPSBFbChrZXlBdHRycywga2V5VmFsKVxuICByZXR1cm4gIXNob3dMYWJlbFxuICAgID8ga2V5RWxcbiAgICA6IGRpdih7IGNsYXNzTmFtZTogJ2l0ZW0tZGF0YS13cmFwcGVyIGl0ZW0ta2V5LXdyYXBwZXInIH0sXG4gICAgICBzdWJDb21wcy5sYWJlbChrZXlBdHRycy5uYW1lLCAnS2V5JyksXG4gICAgICBrZXlFbFxuICAgIClcbn1cblxuY29uc3QgYnVpbGRIZWFkZXJLZXkgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBrZXksIGtleVR5cGUsIGtleVRleHQsIGNvbmZpZyB9ID0gcHJvcHNcbiAgY29uc3QgdGV4dCA9IGAke2tleVRleHQgfHwga2V5fSBgXG5cbiAgcmV0dXJuIHByb3BzLm1vZGUgIT09IENvbnN0YW50cy5TY2hlbWEuTU9ERVMuRURJVFxuICAgID8gZGl2KHsgY2xhc3NOYW1lOiAnaXRlbS1rZXkgaXRlbS1kYXRhJyB9LCB0ZXh0KVxuICAgIDogYnVpbGRLZXlFbChcbiAgICAgICAgc3ViQ29tcHMuaW5wdXQoe1xuICAgICAgICBrZXksXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgdmFsdWU6IGtleSxcbiAgICAgICAga2V5VHlwZToga2V5VHlwZSB8fCAndGV4dCcsXG4gICAgICAgIHNob3dMYWJlbDogdHJ1ZSxcbiAgICAgIH0sICdrZXknKVxuICAgIClcbn1cblxuY29uc3QgYnVpbGRIZWFkZXJWYWx1ZSA9IChwcm9wcykgPT4ge1xuICBcbiAgY29uc3QgeyBtb2RlLCB0eXBlLCBjb25maWcgfSA9IHByb3BzXG4gIGNvbnN0IHR5cGVOYW1lID0gY2FwaXRhbGl6ZSh0eXBlKSAgXG4gIGlmKG1vZGUgIT09IENvbnN0YW50cy5TY2hlbWEuTU9ERVMuRURJVClcbiAgICByZXR1cm4gZGl2KHsgY2xhc3NOYW1lOiAnaXRlbS12YWx1ZSBpdGVtLWRhdGEnIH0sIHR5cGVOYW1lKVxuICBcbiAgY29uc3QgaW5wdXREYXRhID0gc3ViQ29tcHMuaW5wdXQoe1xuICAgIGNvbmZpZyxcbiAgICB2YWx1ZTogdHlwZU5hbWUsXG4gICAgdmFsdWVUeXBlOiAndGV4dCcsXG4gICAgc2hvd0xhYmVsOiB0cnVlLFxuICAgIGRpc2FibGVkOiB0cnVlLFxuICB9LCAndmFsdWUnKVxuICBcbiAgcmV0dXJuIGRpdihcbiAgICB7IGNsYXNzTmFtZTogJ2l0ZW0tZGF0YS13cmFwcGVyIGl0ZW0tdmFsdWUtd3JhcHBlcicgfSxcbiAgICBzdWJDb21wcy5sYWJlbChgdmFsdWUtJHt0eXBlfWAsICdUeXBlJyksXG4gICAgaW5wdXREYXRhLkVsKGlucHV0RGF0YS52YWx1ZUF0dHJzLCBpbnB1dERhdGEuZWxWYWx1ZSlcbiAgKVxufVxuXG5leHBvcnQgY29uc3QgTGlzdEhlYWRlciA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBpZCwgaXNPcGVuLCBpc1Jvb3QsIGVycm9yIH0gPSBwcm9wc1xuICBjb25zdCBpY29uQ2xzID0gaXNPcGVuICYmIGBvcGVuYCB8fCBgYFxuICBjb25zdCByb290Q2xzID0gaXNSb290ID8gYHJvb3RgIDogYGBcbiAgY29uc3QgY2xhc3NlcyA9IGAke2ljb25DbHN9ICR7cm9vdENsc30gaGVhZGVyIGl0ZW0gJHtwcm9wcy5tb2RlID09PSBDb25zdGFudHMuU2NoZW1hLk1PREVTLkVESVQgJiYgQ29uc3RhbnRzLlZhbHVlcy5FRElUX0NMUyB8fCAnJ30keyBlcnJvciAmJiAnIGl0ZW0tZXJyb3InIHx8ICcnIH1gXG5cbiAgY29uc3Qgd3JhcHBlclByb3BzID0geyBjbGFzc05hbWU6IGNsYXNzZXMsIFtDb25zdGFudHMuVmFsdWVzLkRBVEFfVFJFRV9JRF06IGlkIH1cbiAgaWYocHJvcHMub25Ub2dnbGUpe1xuICAgIHdyYXBwZXJQcm9wcy5jbGFzc05hbWUgKz0gJyBpdGVtLWhhcy10b2dnbGUnXG4gICAgd3JhcHBlclByb3BzLm9uQ2xpY2sgPSBwcm9wcy5vblRvZ2dsZVxuICB9XG4gIFxuICBpZihpc1Jvb3QpIHdyYXBwZXJQcm9wcy5pZCA9IENvbnN0YW50cy5WYWx1ZXMuSlRfUk9PVF9IRUFERVJfSURcblxuICByZXR1cm4gZGl2KFxuICAgIHdyYXBwZXJQcm9wcyxcbiAgICBJY29uKG51bGwsIG51bGwsIHtcbiAgICAgIGljb246IHtcbiAgICAgICAgY2xhc3NOYW1lOiBgaWNvbiB0b2dnbGUtaWNvbiBmYXMgZmEtYW5nbGUtcmlnaHQgJHtpY29uQ2xzfWAsXG4gICAgICAgIHRpdGxlOiBgVG9nZ2xlIG9wZW4gLyBjbG9zZWRgLFxuICAgICAgICBvbkNsaWNrOiBwcm9wcy5vblRvZ2dsZSxcbiAgICAgICAgW0NvbnN0YW50cy5WYWx1ZXMuREFUQV9UUkVFX0lEXTogaWQsXG4gICAgICB9XG4gICAgfSksXG4gICAgYnVpbGRIZWFkZXJLZXkocHJvcHMpLFxuICAgICFyb290Q2xzIFxuICAgICAgPyBidWlsZEhlYWRlclZhbHVlKHByb3BzKVxuICAgICAgOiBudWxsLFxuICAgIGRpdih7IGNsYXNzTmFtZTogYGl0ZW0tYnRucyBpdGVtLWRhdGFgIH0sIEJ1dHRvbnMocHJvcHMpKSxcbiAgICBlcnJvck1lc3NhZ2UoZXJyb3IpXG4gIClcbn0iLCJpbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gJ2VsZW1lbnRSJ1xuXG5jb25zdCBnZXRWYWx1ZSA9ICh2YWwsIHRleHQsIHByZWZpeD0nJykgPT4ge1xuICByZXR1cm4gdGV4dFxuICAgID8gYCR7cHJlZml4fSR7dGV4dH1gXG4gICAgOiAodmFsIHx8IHZhbCA9PT0gMCB8fCB2YWwgPT09ICcnKVxuICAgICAgPyBgJHtwcmVmaXh9JHsodmFsICsgJycpLnRvU3RyaW5nKCl9YFxuICAgICAgOiAnJ1xufVxuXG5leHBvcnQgY29uc3QgZGlzcGxheSA9IChwcm9wcywgdHlwZSkgPT4ge1xuXG4gIGNvbnN0IGtleVZhbCA9IHR5cGUgPT09ICdrZXknXG4gICAgPyBnZXRWYWx1ZShwcm9wcy5rZXksIHByb3BzLmtleVRleHQsIHByb3BzLmtleVByZWZpeClcbiAgICA6ICcnXG4gIGNvbnN0IGVsVmFsdWUgPSB0eXBlID09PSAndmFsdWUnXG4gICAgPyBnZXRWYWx1ZShwcm9wcy52YWx1ZSwgcHJvcHMudmFsdWVUZXh0LCBwcm9wcy52YWxQcmVmaXgpXG4gICAgOiAnJ1xuXG4gIHJldHVybiB7XG4gICAga2V5VmFsLFxuICAgIGVsVmFsdWUsXG4gICAgZWRpdENsczogJycsXG4gICAgRWw6IGVsZW1lbnRzLmRpdixcbiAgICBbYCR7dHlwZX1BdHRyc2BdOiB7IGNsYXNzOiBgaXRlbS0ke3R5cGV9IGl0ZW0tZGF0YWAgfVxuICB9IFxufSIsImV4cG9ydCAqIGZyb20gJy4vZGlzcGxheSdcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXQnXG5leHBvcnQgKiBmcm9tICcuL2xhYmVsJ1xuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3QnIiwiaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gJ2VsZW1lbnRSJ1xuaW1wb3J0IHsgbGFiZWwgfSBmcm9tICcuL2xhYmVsJ1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSwgaXNGdW5jLCBnZXQgfSBmcm9tICdqc1V0aWxzJ1xuXG5jb25zdCB7IFZhbHVlcyB9ID0gQ29uc3RhbnRzXG5cbmNvbnN0IGdldFZhbHVlID0gKHZhbCwgdGV4dCkgPT4ge1xuICByZXR1cm4gdGV4dFxuICAgID8gdGV4dFxuICAgIDogKHZhbCB8fCB2YWwgPT09IDAgfHwgdmFsID09PSAnJylcbiAgICAgID8gKHZhbCArICcnKS50b1N0cmluZygpXG4gICAgICA6ICcnXG59XG5cbmNvbnN0IGdldEF0dHJzID0gKHByb3BzLCB0eXBlLCBrZXlWYWwsIGVsVmFsKSA9PiB7XG4gIGNvbnN0IGNvbmZpZ0NsYXNzZXMgPSB0eXBlID09PSAna2V5J1xuICAgID8gZ2V0KHByb3BzLCAnY29uZmlnLmtleUF0dHJzLmNsYXNzZXMnKVxuICAgIDogZ2V0KHByb3BzLCAnY29uZmlnLnZhbHVlQXR0cnMuY2xhc3NlcycpXG5cbiAgbGV0IGNsYXNzZXMgPSBgaXRlbS1kYXRhICR7Q29uc3RhbnRzLlZhbHVlcy5FRElUX0NMU30ke2NvbmZpZ0NsYXNzZXMgJiYgJyAnICsgY29uZmlnQ2xhc3NlcyB8fCAnJ31gXG4gIHR5cGUgIT09ICdrZXknICYmIHByb3BzLmNvbmZpZy51c2VDbGVhdmUgJiYgKGNsYXNzZXMgKz0gYCAke0NvbnN0YW50cy5WYWx1ZXMuQ0xFQVZFX0NMU31gKVxuXG4gIHByb3BzLmNvbmZpZy5pc051bWJlciAmJiAoY2xhc3NlcyArPSBgICR7Q29uc3RhbnRzLlZhbHVlcy5OVU1CRVJfQ0xTfWApXG5cbiAgY29uc3QgYXR0cnMgPSB0eXBlID09PSAna2V5J1xuICAgID8ge1xuICAgICAgY2xhc3M6IGNsYXNzZXMsXG4gICAgICB0eXBlOiBwcm9wcy5rZXlUeXBlIHx8ICd0ZXh0JyxcbiAgICAgIHZhbHVlOiBrZXlWYWwsXG4gICAgICBbQ29uc3RhbnRzLlZhbHVlcy5EQVRBX1NDSEVNQV9LRVldOiB0eXBlLFxuICAgICAgbmFtZTogYGtleS0ke3Byb3BzLmtleX1gLFxuICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLFxuICAgICAgb25DbGljazogcHJvcHMub25DbGljayB8fCAhcHJvcHMub25Gb2N1cyAmJiBgdGhpcy5zZWxlY3QoKWAsXG4gICAgICAuLi4ocHJvcHMuY29uZmlnICYmIHByb3BzLmNvbmZpZy5rZXlBdHRycyB8fCB7fSksXG4gICAgfVxuICAgIDoge1xuICAgICAgY2xhc3M6IGNsYXNzZXMsXG4gICAgICB0eXBlOiBwcm9wcy52YWx1ZVR5cGUgfHwgJ3RleHQnLFxuICAgICAgW0NvbnN0YW50cy5WYWx1ZXMuREFUQV9TQ0hFTUFfS0VZXTogdHlwZSxcbiAgICAgIG5hbWU6IGB2YWx1ZS0ke3Byb3BzLmtleX1gLFxuICAgICAgdmFsdWU6IGVsVmFsLFxuICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLFxuICAgICAgb25DbGljazogcHJvcHMub25DbGljayB8fCAhcHJvcHMub25Gb2N1cyAmJiBgdGhpcy5zZWxlY3QoKWAsXG4gICAgICAuLi4ocHJvcHMuY29uZmlnICYmIHByb3BzLmNvbmZpZy52YWx1ZUF0dHJzIHx8IHt9KSxcbiAgICB9XG5cbiBcbiAgT2JqZWN0LmVudHJpZXMocHJvcHMpXG4gICAgLm1hcCgoWyBrZXksIHZhbHVlIF0pID0+IFxuICAgICAgIWF0dHJzW2tleV0gJiZcbiAgICAgICAgQ29uc3RhbnRzLlZhbHVlcy5ET01fRVZFTlRTLmluZGV4T2Yoa2V5KSAhPT0gLTEgJiZcbiAgICAgICAgaXNGdW5jKHZhbHVlKSAmJlxuICAgICAgICAoYXR0cnNba2V5XSA9IHZhbHVlKVxuICAgIClcblxuICByZXR1cm4gYXR0cnNcbn1cblxuZXhwb3J0IGNvbnN0IGlucHV0V3JhcHBlciA9IChwcm9wcywgY2hpbGRyZW4pID0+IHtcbiAgbGV0IHsgdHlwZSwgc2hvd0xhYmVsLCBjbGFzc2VzLCAuLi5hdHRycyB9ID0gcHJvcHNcbiAgY2xhc3NlcyA9IGNsYXNzZXMgJiYgYCR7Y2xhc3Nlc30gaXRlbS1kYXRhLXdyYXBwZXJgIHx8ICdpdGVtLWRhdGEtd3JhcHBlcicgXG4gIGlmKHR5cGUpIGNsYXNzZXMgKz0gYCBpdGVtLSR7dHlwZX0td3JhcHBlcmBcblxuICByZXR1cm4gZWxlbWVudHMuZGl2KFxuICAgIHsgLi4uYXR0cnMsIGNsYXNzTmFtZTogY2xhc3NlcyB9LCBcbiAgICBzaG93TGFiZWwgJiYgbGFiZWwodHlwZSwgY2FwaXRhbGl6ZSh0eXBlKSksXG4gICAgY2hpbGRyZW5cbiAgKVxufVxuXG5cbmV4cG9ydCBjb25zdCBpbnB1dCA9IChwcm9wcywgdHlwZSkgPT4ge1xuICBcbiAgY29uc3Qga2V5VmFsID0gdHlwZSA9PT0gJ2tleScgJiYgZ2V0VmFsdWUocHJvcHMua2V5LCBwcm9wcy5rZXlUZXh0KVxuICBjb25zdCBlbFZhbHVlID0gdHlwZSA9PT0gJ3ZhbHVlJyAmJiBnZXRWYWx1ZShwcm9wcy52YWx1ZSwgcHJvcHMudmFsdWVUZXh0KVxuXG4gIHJldHVybiB7IFxuICAgIGtleVZhbCxcbiAgICBlbFZhbHVlLFxuICAgIEVsOiBlbGVtZW50cy5pbnB1dCxcbiAgICBpc0VkaXQ6IHRydWUsXG4gICAgc2hvd0xhYmVsOiBwcm9wcy5zaG93TGFiZWwsXG4gICAgZWRpdENsczogQ29uc3RhbnRzLlZhbHVlcy5FRElUX0NMUyxcbiAgICBbYCR7dHlwZX1BdHRyc2BdOiBnZXRBdHRycyhwcm9wcywgdHlwZSwga2V5VmFsLCBlbFZhbHVlKVxuICB9XG59XG4iLCJpbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gJ2VsZW1lbnRSJ1xuXG5leHBvcnQgY29uc3QgbGFiZWwgPSAobmFtZSwgdmFsdWUpID0+IChcbiAgdmFsdWUgJiZcbiAgICBlbGVtZW50cy5sYWJlbChcbiAgICAgIHsgY2xhc3NOYW1lOiBgaXRlbS1sYWJlbCBpdGVtLSR7dmFsdWUudG9Mb3dlckNhc2UoKX0tbGFiZWxgLCBmb3I6IG5hbWUgfSxcbiAgICAgIHZhbHVlXG4gICAgKVxuKSIsImltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSAnZWxlbWVudFInXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL2NvbnN0YW50cydcblxuY29uc3QgeyBWYWx1ZXMgfSA9IENvbnN0YW50c1xuY29uc3QgZ2V0T3B0UHJvcHMgPSAodmFsdWUsIGVsVmFsdWUpID0+IChcbiAgeyB2YWx1ZSwgY2xhc3NOYW1lOiAnaXRlbS1vcHRpb24nLCBzZWxlY3RlZDogZWxWYWx1ZSA9PT0gdmFsdWUgfVxuKVxuXG5jb25zdCBnZXRDaGlsZHJlbiA9IHByb3BzID0+IChcbiAgcHJvcHMub3B0aW9ucyAmJiBwcm9wcy5vcHRpb25zXG4gICAgLm1hcChvcHRpb24gPT4gKFxuICAgICAgdHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBlbGVtZW50cy5vcHRpb24oZ2V0T3B0UHJvcHMob3B0aW9uLCBwcm9wcy5lbFZhbHVlKSwgb3B0aW9uKVxuICAgICAgICA6IGVsZW1lbnRzLm9wdGlvbihcbiAgICAgICAgICBnZXRPcHRQcm9wcyhvcHRpb24udmFsdWUsIHByb3BzLmVsVmFsdWUpLFxuICAgICAgICAgIG9wdGlvbi50ZXh0IHx8IG9wdGlvbi52YWx1ZVxuICAgICAgICApXG4gICAgKSlcbilcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFdyYXBwZXIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PiAoXG4gIGVsZW1lbnRzLmRpdih7Y2xhc3NOYW1lOiAnc2VsZWN0LXdyYXBwZXInfSxcbiAgICBlbGVtZW50cy5zZWxlY3QocHJvcHMsIGNoaWxkcmVuKSxcbiAgICBlbGVtZW50cy5pKHtjbGFzc05hbWU6ICdmYXMgZmEtc29ydCBzZWxlY3QtaWNvbid9KSwgXG4gIClcbilcblxuZXhwb3J0IGNvbnN0IHNlbGVjdCA9IChwcm9wcywgdHlwZSkgPT4gKHtcbiAgRWw6IHNlbGVjdFdyYXBwZXIsXG4gIGlzRWRpdDogdHJ1ZSxcbiAgc2hvd0xhYmVsOiBwcm9wcy5zaG93TGFiZWwsXG4gIGtleVZhbDogJycsXG4gIGVkaXRDbHM6IENvbnN0YW50cy5WYWx1ZXMuRURJVF9DTFMsXG4gIGVsVmFsdWU6IHByb3BzLnZhbHVlICYmIHByb3BzLnZhbHVlLnRvU3RyaW5nKCkgfHwgJycsXG4gIFtgJHt0eXBlfUF0dHJzYF06IHtcbiAgICBjbGFzczogYGl0ZW0tJHt0eXBlfSBpdGVtLWRhdGEgJHtDb25zdGFudHMuVmFsdWVzLkVESVRfQ0xTfWAsXG4gICAgW0NvbnN0YW50cy5WYWx1ZXMuREFUQV9TQ0hFTUFfS0VZXTogdHlwZSxcbiAgICBuYW1lOiBgJHt0eXBlfS0ke3Byb3BzLmtleX1gLFxuICAgIHZhbHVlOiBwcm9wc1t0eXBlXSxcbiAgfSxcbiAgY2hpbGRyZW46IGdldENoaWxkcmVuLFxuICBvcHRpb25zOiBBcnJheS5pc0FycmF5KHByb3BzLm9wdGlvbnMpICYmIHByb3BzLm9wdGlvbnMgfHwgW10sXG59KSIsImltcG9ydCB7IGRlZXBGcmVlemUgfSBmcm9tICdqc1V0aWxzJ1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgeyBWYWx1ZXMgfSBmcm9tICcuL3ZhbHVlcydcblxubGV0IHVzZVZhbHVlcyA9IGRlZXBGcmVlemUoeyAuLi5WYWx1ZXMgfSlcbmNvbnN0IHVwZGF0ZURlZlZhbHVlcyA9IHVwZGF0ZSA9PiAodXNlVmFsdWVzID0gZGVlcEZyZWV6ZSh7IC4uLnVzZVZhbHVlcywgLi4udXBkYXRlIH0pKVxubGV0IHVzZVNjaGVtYSA9IGRlZXBGcmVlemUoeyAuLi5TY2hlbWEgfSlcbmNvbnN0IHVwZGF0ZURlZlNjaGVtYSA9IHVwZGF0ZSA9PiAodXNlU2NoZW1hID0gZGVlcEZyZWV6ZSh7IC4uLnVzZVNjaGVtYSwgLi4udXBkYXRlIH0pKVxuXG5jb25zdCBDb25zdGFudHMgPSB7XG4gIHVwZGF0ZURlZlNjaGVtYSxcbiAgdXBkYXRlRGVmVmFsdWVzLFxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RhbnRzLCAnVmFsdWVzJywge1xuICBnZXQ6ICgpID0+IHtcbiAgICByZXR1cm4gdXNlVmFsdWVzXG4gIH0sXG4gIGVudW1lcmFibGU6IHRydWUsXG59KVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RhbnRzLCAnU2NoZW1hJywge1xuICBnZXQ6ICgpID0+IHtcbiAgICByZXR1cm4gdXNlU2NoZW1hXG4gIH0sXG4gIGVudW1lcmFibGU6IHRydWUsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBDb25zdGFudHMiLCJleHBvcnQgY29uc3QgU2NoZW1hID0ge30iLCJleHBvcnQgY29uc3QgVmFsdWVzID0ge31cbiIsImltcG9ydCB7IGJ1aWxkVGhlbWUgfSBmcm9tICcuLi8uLi9zdHlsZXMvYnVpbGRfdGhlbWUnXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGNsZWFyT2JqIH0gZnJvbSAnanNVdGlscydcbmltcG9ydCB7IFxuICB1cGRhdGVQYXJlbnRDb25zdHJ1Y3QsXG4gIGFkZEN1c3RvbUV2ZW50cyxcbiAgYWRkQWxsb3dlZENvbmZpZ09wdHMsXG4gIGNhbGxFZGl0b3IsXG4gIHNob3VsZERvRGVmYXVsdCxcbiAgdG9nZ2xlUGFzdEFjdGlvbixcbiAgdXBkYXRlVmFsdWUsXG4gIHVwZGF0ZVZhbFdpdGhTdWZmaXgsXG59IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVHlwZSB7XG5cbiAgc3RhdGljIHByaW9yaXR5ID0gMFxuICBzdGF0aWMgbWF0Y2hIZWxwZXIgPSAoKSA9PiB7fVxuICBzdGF0aWMgZXZhbCA9ICh2YWx1ZSkgPT4gdHJ1ZVxuICBzdGF0aWMgZGVmYXVsdFZhbHVlID0gKG5ld1R5cGUsIHNjaGVtYSwgc2V0dGluZ3MpID0+ICcnXG4gIHN0YXRpYyBnZXRTdHlsZXMgPSAoc2V0dGluZ3MpID0+IGJ1aWxkVGhlbWUoc2V0dGluZ3MpXG4gIHN0YXRpYyBlcnJvciA9ICh7IG1lc3NhZ2UgfSkgPT4gKG1lc3NhZ2UgfHwgYEludmFsaWQgaW5wdXQgZm9ybWF0YClcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIEVkaXRvcil7XG4gICAgaWYoIWNvbmZpZykgcmV0dXJuXG5cbiAgICB1cGRhdGVQYXJlbnRDb25zdHJ1Y3QoY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yKVxuICAgIGFkZEN1c3RvbUV2ZW50cyhjb25maWcsIHRoaXMudXNlckV2ZW50cylcbiAgICB0aGlzLmNvbmZpZyA9IGFkZEFsbG93ZWRDb25maWdPcHRzKGNvbmZpZywgdGhpcy5jb25maWcpIHx8IHt9XG4gIH1cblxuICB1c2VyRXZlbnRzID0ge31cbiAgdXBkYXRlZCA9IHt9XG4gIG9yaWdpbmFsID0ge31cblxuICBvbkNoYW5nZSA9IChlLCBFZGl0b3IpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9ICBlLnRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXRcbiAgIFxuICAgIGNvbnN0IGtleSA9IGlucHV0ICYmIGlucHV0LmdldEF0dHJpYnV0ZShDb25zdGFudHMuVmFsdWVzLkRBVEFfU0NIRU1BX0tFWSlcbiAgICBpZigha2V5IHx8ICFpbnB1dCkgcmV0dXJuXG5cbiAgIFxuICAgIGNvbnN0IG9yaWdpbmFsID0gdGhpcy5vcmlnaW5hbFtrZXldXG4gICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZVxuICAgXG4gICAgY29uc3QgdXBkYXRlID0geyBrZXksIG9yaWdpbmFsIH1cblxuICAgIHRoaXMuc3VmZml4XG4gICAgIFxuICAgICAgPyB1cGRhdGVWYWxXaXRoU3VmZml4KHVwZGF0ZSwgaW5wdXQsIHRoaXMuc3VmZml4KVxuICAgICBcbiAgICAgIDogdXBkYXRlVmFsdWUodXBkYXRlLCBpbnB1dClcblxuICAgXG4gICAgaWYob3JpZ2luYWwgPT09IHVwZGF0ZS52YWx1ZSkgcmV0dXJuXG5cbiAgIFxuICAgIHVwZGF0ZS52YWx1ZSAmJiAgdGhpcy5jb25maWcuZXhwYW5kT25DaGFuZ2UgIT09IGZhbHNlICYmIHRoaXMuc2V0V2lkdGgoaW5wdXQpXG4gICBcbiAgIFxuICAgXG4gICAgaWYodGhpcy51c2VyRXZlbnRzLm9uQ2hhbmdlKGUsIHVwZGF0ZSwgdGhpcy5vcmlnaW5hbC5pZCwgRWRpdG9yKSAhPT0gZmFsc2UpXG4gICAgICB0aGlzLnVwZGF0ZWRbdXBkYXRlLmtleV0gPSB1cGRhdGUudmFsdWVcbiAgfVxuXG4gIG9uQ2FuY2VsID0gKGUsIEVkaXRvcikgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGNvbnN0IHVwZGF0ZSA9IHsgbW9kZTogdW5kZWZpbmVkLCB2YWx1ZTogdGhpcy5vcmlnaW5hbC52YWx1ZSB9XG4gICAgY29uc3QgaWQgPSBzaG91bGREb0RlZmF1bHQoIGUsIHVwZGF0ZSwgRWRpdG9yLCB0aGlzLnVzZXJFdmVudHMub25DYW5jZWwgKVxuICAgIGlmKCFpZCkgcmV0dXJuXG5cbiAgIFxuICAgXG4gICAgY29uc3Qgc2NoZW1hID0gRWRpdG9yLnNjaGVtYShpZClcbiAgICBzY2hlbWEgJiYgc2NoZW1hLnBlbmRpbmdcbiAgICAgID8gRWRpdG9yLnJlbW92ZShpZClcbiAgICAgIDogRWRpdG9yLnVwZGF0ZShpZCwgdXBkYXRlKVxuICB9XG5cbiAgb25TYXZlID0gKGUsIEVkaXRvcikgPT4ge1xuICAgIGNhbGxFZGl0b3IoXG4gICAgICBlLFxuICAgICAgeyAuLi50aGlzLnVwZGF0ZWQsIG1vZGU6IHVuZGVmaW5lZCB9LFxuICAgICAgdGhpcy51c2VyRXZlbnRzLm9uU2F2ZSxcbiAgICAgICd1cGRhdGUnLFxuICAgICAgRWRpdG9yXG4gICAgKVxuICB9XG5cbiAgb25FZGl0ID0gKGUsIEVkaXRvcikgPT4ge1xuICAgIGNhbGxFZGl0b3IoXG4gICAgICBlLFxuICAgICAgeyBtb2RlOiBDb25zdGFudHMuU2NoZW1hLk1PREVTLkVESVQgfSxcbiAgICAgIHRoaXMudXNlckV2ZW50cy5vbkVkaXQsXG4gICAgICAndXBkYXRlJyxcbiAgICAgIEVkaXRvclxuICAgIClcbiAgfVxuXG4gIG9uRGVsZXRlID0gKGUsIEVkaXRvcikgPT4ge1xuICAgIGNhbGxFZGl0b3IoXG4gICAgICBlLFxuICAgICAgeyBtb2RlOiBDb25zdGFudHMuU2NoZW1hLk1PREVTLlJFTU9WRSB9LFxuICAgICAgdGhpcy51c2VyRXZlbnRzLm9uRGVsZXRlLFxuICAgICAgJ3JlbW92ZScsXG4gICAgICBFZGl0b3JcbiAgICApXG4gIH1cbiAgXG4gIG9uQ29weSA9IChlLCBFZGl0b3IpID0+IHtcbiAgICBlICYmIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCBpZCA9IHNob3VsZERvRGVmYXVsdChcbiAgICAgIGUsXG4gICAgICB7IG1vZGU6IENvbnN0YW50cy5TY2hlbWEuTU9ERVMuUkVNT1ZFIH0sXG4gICAgICBFZGl0b3IsXG4gICAgICB0aGlzLnVzZXJFdmVudHMub25Db3B5LFxuICAgIClcblxuICAgIGlmKCFpZCkgcmV0dXJuXG5cbiAgICBFZGl0b3IudGVtcCA9IGlkXG4gICAgdG9nZ2xlUGFzdEFjdGlvbignYWRkJylcbiAgfVxuXG4gIG9uQ3V0ID0gKGUsIEVkaXRvcikgPT4ge1xuICAgIGUgJiYgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0IHVwZGF0ZSA9IHsgbW9kZTogQ29uc3RhbnRzLlNjaGVtYS5NT0RFUy5DVVQgfVxuICAgIGNvbnN0IGlkID0gc2hvdWxkRG9EZWZhdWx0KFxuICAgICAgZSxcbiAgICAgIHVwZGF0ZSxcbiAgICAgIEVkaXRvcixcbiAgICAgIHRoaXMudXNlckV2ZW50cy5vbkN1dCxcbiAgICApXG5cbiAgICBpZighaWQpIHJldHVyblxuICAgIFxuICAgIEVkaXRvci50ZW1wID0gaWRcbiAgICB0b2dnbGVQYXN0QWN0aW9uKCdhZGQnKVxuICAgIEVkaXRvci5yZW1vdmUgJiYgRWRpdG9yLnVwZGF0ZShpZCwgdXBkYXRlKVxuICB9XG5cbiAgb25QYXN0ZSA9IChlLCBFZGl0b3IpID0+IHtcbiAgICBlICYmIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCBzY2hlbWEgPSBFZGl0b3Iuc2NoZW1hKGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoQ29uc3RhbnRzLlZhbHVlcy5EQVRBX1RSRUVfSUQpKVxuICAgIEVkaXRvci5yZXBsYWNlQXRQb3Moc2NoZW1hLmlkLCB7IC4uLkVkaXRvci50ZW1wIH0pXG4gICAgRWRpdG9yLnRlbXAgPSB1bmRlZmluZWRcbiAgICB0b2dnbGVQYXN0QWN0aW9uKCdyZW1vdmUnKVxuICB9XG5cbiAgc2hvdWxkRG9EZWZhdWx0ID0gKC4uLmFyZ3MpID0+IHNob3VsZERvRGVmYXVsdCguLi5hcmdzKVxuICBcbiAgZ2V0QWN0aW9ucyA9IChtb2RlLCBleHRyYSkgPT4ge1xuICAgIHJldHVybiBtb2RlICE9PSBDb25zdGFudHMuU2NoZW1hLk1PREVTLkVESVRcbiAgICAgID8ge1xuICAgICAgICBvbkVkaXQ6IHRoaXMub25FZGl0LFxuICAgICAgICBvbkNvcHk6IHRoaXMub25Db3B5LFxuICAgICAgICBvbkN1dDogdGhpcy5vbkN1dCxcbiAgICAgICAgb25QYXN0ZTogdGhpcy5vblBhc3RlLFxuICAgICAgICBvbkRlbGV0ZTogdGhpcy5vbkRlbGV0ZSxcbiAgICAgICAgLi4uZXh0cmFcbiAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgb25TYXZlOiB0aGlzLm9uU2F2ZSxcbiAgICAgICAgb25DYW5jZWw6IHRoaXMub25DYW5jZWwsXG4gICAgICAgIC4uLmV4dHJhXG4gICAgICB9XG4gIH1cblxuICBzZXRXaWR0aCA9IGlucHV0ID0+IChcbiAgICBpbnB1dCAmJlxuICAgICAgaW5wdXQudmFsdWUgJiZcbiAgICAgIChpbnB1dC5zdHlsZS53aWR0aCA9IGAke2lucHV0LnZhbHVlLmxlbmd0aH1jaGApXG4gIClcblxuICBidWlsZEV2ZW50cyA9IChzY2hlbWEsIGRvbU5vZGUpID0+IChcbiAgICBkb21Ob2RlICYmIFsnaW5wdXQnLCAnc2VsZWN0JywgJ3RleHRhcmVhJ11cbiAgICAgIC5tYXAodGFnID0+IChcbiAgICAgICAgQXJyYXkuZnJvbShkb21Ob2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZykpXG4gICAgICAgICAgLm1hcChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC5vbmlucHV0ID0gdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgdGhpcy5jb25maWcuZXhwYW5kT25DaGFuZ2UgIT09IGZhbHNlICYmIHRoaXMuc2V0V2lkdGgoaW5wdXQpXG4gICAgICAgICAgfSlcbiAgICAgICkpXG4gIClcblxuICBzZXRPcmlnaW5hbCA9IHNjaGVtYSA9PiB7XG4gICAgdGhpcy5idWlsZEV2ZW50cyhzY2hlbWEsIHNjaGVtYS5kb21Ob2RlKVxuICAgIGNvbnN0IHsgcGFyZW50LCBpbnN0YW5jZSwgZG9tTm9kZSwgLi4ub3JpZ2luYWwgfSA9IHNjaGVtYVxuICAgIHRoaXMub3JpZ2luYWwgPSBvcmlnaW5hbFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAocHJvcHMsIEVkaXRvcikgPT4ge1xuICAgIHRoaXMuc2V0T3JpZ2luYWwocHJvcHMuc2NoZW1hKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKHByb3BzLCBFZGl0b3IpID0+IHtcbiAgICB0aGlzLnNldE9yaWdpbmFsKHByb3BzLnNjaGVtYSlcbiAgIFxuICAgIHRoaXMudXBkYXRlZCAmJiBjbGVhck9iaih0aGlzLnVwZGF0ZWQpXG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKEVkaXRvcikgPT4ge1xuICAgXG4gICBcbiAgICB0aGlzLm9yaWdpbmFsLnZhbHVlID0gdW5kZWZpbmVkXG4gIH1cblxuICByZW5kZXIgPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuICcnXG4gIH1cbiAgXG59IiwiaW1wb3J0IEJhc2VUeXBlIGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cydcblxuY2xhc3MgQm9vbGVhblR5cGUgZXh0ZW5kcyBCYXNlVHlwZSB7XG5cbiAgc3RhdGljIHByaW9yaXR5ID0gMVxuICBzdGF0aWMgZXZhbCA9ICh2YWx1ZSkgPT4gKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKVxuICBzdGF0aWMgZGVmYXVsdFZhbHVlID0gKCkgPT4gdHJ1ZVxuICBcbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICBzdXBlcih7IC4uLmNvbmZpZyB9KVxuICB9XG5cbiAgcmVuZGVyID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHsgc2NoZW1hOiB7IGlkLCBrZXksIHZhbHVlLCBtb2RlLCBtYXRjaFR5cGUsIGtleVR5cGUsIHBhcmVudCwgZXJyb3IgfSB9ID0gcHJvcHNcbiAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuaXNBcnJheSh0aGlzLmNvbmZpZy5vcHRpb25zKVxuICAgICAgPyB0aGlzLmNvbmZpZy5vcHRpb25zXG4gICAgICA6IFsgJ3RydWUnLCAnZmFsc2UnXVxuXG4gICAgcmV0dXJuIEl0ZW0oe1xuICAgICAgaWQsXG4gICAgICBrZXksXG4gICAgICB2YWx1ZTogdmFsdWUudG9TdHJpbmcoKSxcbiAgICAgIG1vZGUsXG4gICAgICBvcHRpb25zLFxuICAgICAgZXJyb3IsXG4gICAgICB0eXBlOiBtYXRjaFR5cGUsXG4gICAgICBzaG93TGFiZWw6IHRydWUsXG4gICAgICB2YWx1ZUVsOiAnc2VsZWN0JyxcbiAgICAgIHNob3dQYXN0ZTogcHJvcHMuc2V0dGluZ3MuRWRpdG9yLmhhc1RlbXAoKSxcbiAgICAgIGtleUVkaXQ6ICFwYXJlbnQgfHwgIUFycmF5LmlzQXJyYXkocGFyZW50LnZhbHVlKSxcbiAgICAgIGtleVR5cGU6IGtleVR5cGUgfHwgJ3RleHQnLFxuICAgICAgLi4udGhpcy5nZXRBY3Rpb25zKG1vZGUpLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICB9KVxuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuVHlwZSIsImltcG9ydCBCb29sZWFuVHlwZSBmcm9tICAnLi9ib29sZWFuJ1xuZXhwb3J0IGRlZmF1bHQgQm9vbGVhblR5cGUiLCJpbXBvcnQgQmFzZVR5cGUgZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBDbGVhdmUgZnJvbSAnY2xlYXZlLmpzJ1xuaW1wb3J0IHsgY2xlYXJPYmogfSBmcm9tICdqc1V0aWxzJ1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5cbmNvbnN0IGdldENsZWF2ZUVsID0gKEVkaXRvciwgaWQpID0+IHtcbiAgY29uc3Qgc2NoZW1hID0gRWRpdG9yLnNjaGVtYShpZClcbiAgcmV0dXJuIHNjaGVtYSAmJlxuICAgIHNjaGVtYS5kb21Ob2RlICYmXG4gICAgc2NoZW1hLmRvbU5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShDb25zdGFudHMuVmFsdWVzLkNMRUFWRV9DTFMpWzBdXG59XG5cbmNsYXNzIENsZWF2ZVR5cGUgZXh0ZW5kcyBCYXNlVHlwZSB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICBzdXBlcihjb25maWcpXG4gICAgdGhpcy5jbGVhdmVPcHRzID0ge1xuICAgICAgb25WYWx1ZUNoYW5nZWQ6IHRoaXMub25DbGVhdmVDaGFuZ2UsXG4gICAgICAuLi5jb25maWcuY2xlYXZlLFxuICAgIH1cbiAgfVxuICBcbiAgb25DbGVhdmVDaGFuZ2UgPSAoZSwgRWRpdG9yKSA9PiB7XG4gICBcbiAgIFxuICAgIGlmKCF0aGlzLmNsZWF2ZSkgcmV0dXJuXG4gICBcbiAgIFxuICAgIGlmKCF0aGlzLmNsZWF2ZS5lbGVtZW50KVxuICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihgQ2FsbGVkIG9uQ2xlYXZlQ2hhbmdlIGJ1dCBubyBjbGVhdmUgZWxlbWVudCBleGlzdHNgLCB0aGlzKVxuXG4gICAgY29uc3QgdXBkYXRlID0ge1xuICAgICAgdmFsdWU6IGUudGFyZ2V0LnJhd1ZhbHVlLFxuICAgICAga2V5OiB0aGlzLmNsZWF2ZS5lbGVtZW50LmdldEF0dHJpYnV0ZShDb25zdGFudHMuVmFsdWVzLkRBVEFfU0NIRU1BX0tFWSksXG4gICAgICBvcmlnaW5hbDogdGhpcy5vcmlnaW5hbC52YWx1ZVxuICAgIH1cblxuICAgXG4gICAgaWYodGhpcy5jbGVhdmUuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ29uc3RhbnRzLlZhbHVlcy5OVU1CRVJfQ0xTKSl7XG4gICAgICBjb25zdCBudW1WYWwgPSBOdW1iZXIodXBkYXRlLnZhbHVlKVxuICAgICBcbiAgICAgICFpc05hTihudW1WYWwpICYmICh1cGRhdGUudmFsdWUgPSBudW1WYWwpXG4gICAgfVxuXG4gICBcbiAgICBpZihcbiAgICAgICh1cGRhdGUudmFsdWUgPT09IHVuZGVmaW5lZCB8fCB1cGRhdGUua2V5ID09PSB1bmRlZmluZWQpIHx8XG4gICAgICAodGhpcy5vcmlnaW5hbFt1cGRhdGUua2V5XSAmJiB0aGlzLm9yaWdpbmFsW3VwZGF0ZS5rZXldID09PSB1cGRhdGUudmFsdWUpXG4gICAgKSByZXR1cm5cblxuICAgIHRoaXMuY29uZmlnLmV4cGFuZE9uQ2hhbmdlICE9PSBmYWxzZSAmJlxuICAgICAgdGhpcy5zZXRXaWR0aChnZXRDbGVhdmVFbChFZGl0b3IsIHRoaXMub3JpZ2luYWwuaWQpKVxuXG4gICAgcmV0dXJuIHRoaXMub3JpZ2luYWwudmFsdWUgIT09IHVwZGF0ZS52YWx1ZSAmJlxuICAgICAgdGhpcy51c2VyRXZlbnRzLm9uQ2hhbmdlKGUsIHVwZGF0ZSwgdGhpcy5vcmlnaW5hbC5pZCwgRWRpdG9yKSAhPT0gZmFsc2UgJiZcbiAgICAgICh0aGlzLnVwZGF0ZWQudmFsdWUgPSB1cGRhdGUudmFsdWUpXG4gIH1cblxuICBjaGVja0NsZWF2ZSA9IChzY2hlbWEsIGRvbU5vZGUpID0+IHtcbiAgICBpZihkb21Ob2RlLmNsYXNzTGlzdCAmJiBkb21Ob2RlLmNsYXNzTGlzdC5jb250YWlucyhDb25zdGFudHMuVmFsdWVzLkNMRUFWRV9DTFMpKXtcbiAgICAgXG4gICAgICB0aGlzLmNsZWF2ZU9wdHMub25WYWx1ZUNoYW5nZWQgPSB0aGlzLm9uQ2xlYXZlQ2hhbmdlXG4gICAgIFxuICAgICAgdGhpcy5jbGVhdmUgJiYgdGhpcy5jbGVhckNsZWF2ZSgpXG4gICAgIFxuICAgICAgdGhpcy5jbGVhdmUgPSBuZXcgQ2xlYXZlKGRvbU5vZGUsIHRoaXMuY2xlYXZlT3B0cylcbiAgICAgXG4gICAgICB0aGlzLmNsZWF2ZS5zZXRSYXdWYWx1ZShzY2hlbWEudmFsdWUpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICBcbiAgYnVpbGRFdmVudHMgPSAoc2NoZW1hLCBkb21Ob2RlKSA9PiAoXG4gICAgZG9tTm9kZSAmJiBBcnJheVxuICAgICAgLmZyb20oZG9tTm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKSlcbiAgICAgIC5tYXAoaW5wdXQgPT4ge1xuICAgICAgIFxuICAgICAgIFxuICAgICAgICAhdGhpcy5jbGVhdmUgJiYgdGhpcy5jaGVja0NsZWF2ZShzY2hlbWEsIGlucHV0KVxuICAgICAgICAgID8gKGlucHV0Lm9uaW5wdXQgPSB1bmRlZmluZWQpXG4gICAgICAgICAgOiAoaW5wdXQub25pbnB1dCA9IHRoaXMub25DaGFuZ2UpXG5cbiAgICAgICAgdGhpcy5jb25maWcuZXhwYW5kT25DaGFuZ2UgIT09IGZhbHNlICYmIHRoaXMuc2V0V2lkdGgoaW5wdXQpXG4gICAgICB9KVxuICApXG5cbiAgY2xlYXJDbGVhdmUgPSAocm1PcHRzPXRydWUpID0+IHtcbiAgICBpZighdGhpcy5jbGVhdmUpIHJldHVyblxuICAgIHRoaXMuY2xlYXZlLmRlc3Ryb3koKVxuICAgIHRoaXMuY2xlYXZlID0gdW5kZWZpbmVkXG4gICAgcm1PcHRzICYmIGNsZWFyT2JqKHRoaXMuY2xlYXZlT3B0cylcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcm9wcywgRWRpdG9yKSA9PiB7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IHByb3BzXG4gICBcbiAgICBpZihzY2hlbWEubW9kZSAhPT0gQ29uc3RhbnRzLlNjaGVtYS5NT0RFUy5FRElUKSB0aGlzLmNsZWFyQ2xlYXZlKGZhbHNlKVxuICAgXG4gICAgZWxzZSBpZighdGhpcy5jbGVhdmUpIHRoaXMuYnVpbGRFdmVudHMoc2NoZW1hLCBzY2hlbWEuZG9tTm9kZSlcbiAgIFxuICAgIGVsc2UgdGhpcy5jbGVhdmUuc2V0UmF3VmFsdWUoc2NoZW1hLnZhbHVlKVxuICAgIFxuICAgIGNvbnN0IHsgcGFyZW50LCBpbnN0YW5jZSwgZG9tTm9kZSwgLi4ub3JpZ2luYWwgfSA9IHNjaGVtYVxuICAgXG4gICAgdGhpcy5vcmlnaW5hbCA9IG9yaWdpbmFsXG4gICBcbiAgICB0aGlzLnVwZGF0ZWQgJiYgY2xlYXJPYmoodGhpcy51cGRhdGVkKVxuICB9XG4gIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCA9IChFZGl0b3IpID0+IHtcbiAgIFxuICAgXG4gICAgdGhpcy5vcmlnaW5hbC52YWx1ZSA9IHVuZGVmaW5lZFxuICAgIHRoaXMuY2xlYXJDbGVhdmUoKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xlYXZlVHlwZSIsImltcG9ydCBHcm91cFR5cGUgZnJvbSAnLi4vZ3JvdXAnXG5cbmNsYXNzIENvbGxlY3Rpb25UeXBlIGV4dGVuZHMgR3JvdXBUeXBlIHtcbiAgXG4gIHN0YXRpYyBwcmlvcml0eSA9IDFcbiAgc3RhdGljIGV2YWwgPSB2YWx1ZSA9PiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gIHN0YXRpYyBkZWZhdWx0VmFsdWUgPSAobmV3VHlwZSwgc2NoZW1hLCBzZXR0aW5ncykgPT4gW11cblxuICBjb25zdHJ1Y3Rvcihjb25maWcpe1xuICAgIHN1cGVyKHsgLi4uY29uZmlnIH0pXG4gIH1cblxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvblR5cGUiLCJpbXBvcnQgQ29sbGVjdGlvblR5cGUgZnJvbSAgJy4vY29sbGVjdGlvbidcbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25UeXBlIiwiaW1wb3J0IEJhc2VUeXBlIGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cydcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG5jbGFzcyBFbXB0eVR5cGUgZXh0ZW5kcyBCYXNlVHlwZSB7XG5cbiAgc3RhdGljIHByaW9yaXR5ID0gMVxuICBzdGF0aWMgZXZhbCA9ICh2YWx1ZSkgPT4gKHZhbHVlID09PSB1bmRlZmluZWQpXG4gIHN0YXRpYyBkZWZhdWx0VmFsdWUgPSAobmV3VHlwZSwgc2NoZW1hLCBzZXR0aW5ncykgPT4gdW5kZWZpbmVkXG5cbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICBzdXBlcih7IC4uLmNvbmZpZyB9KVxuICB9XG5cbiAgb25DYW5jZWwgPSAoZSwgRWRpdG9yKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlID0geyByZW1vdmU6IHRydWUgfVxuICAgIGNvbnN0IGlkID0gdGhpcy5zaG91bGREb0RlZmF1bHQoIGUsIHVwZGF0ZSwgRWRpdG9yLCB0aGlzLnVzZXJFdmVudHMub25DYW5jZWwgKVxuICAgIGlkICYmIEVkaXRvci5yZW1vdmUoaWQpXG4gIH1cblxuICBvblR5cGVDaGFuZ2UgPSAoZSwgRWRpdG9yKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSAgZS50YXJnZXQgfHwgZS5jdXJyZW50VGFyZ2V0XG4gICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZVxuICAgIGNvbnN0IGtleSA9IGlucHV0LmdldEF0dHJpYnV0ZShDb25zdGFudHMuVmFsdWVzLkRBVEFfU0NIRU1BX0tFWSlcblxuICAgIGlmKFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgfHwga2V5ID09PSB1bmRlZmluZWQpIHx8XG4gICAgICAodGhpcy5vcmlnaW5hbFtrZXldICYmIHRoaXMub3JpZ2luYWxba2V5XSA9PT0gdmFsdWUpXG4gICAgKSByZXR1cm5cblxuICAgIHZhbHVlICYmICB0aGlzLmNvbmZpZy5leHBhbmRPbkNoYW5nZSAhPT0gZmFsc2UgJiYgdGhpcy5zZXRXaWR0aChpbnB1dClcbiAgICBjb25zdCB1cGRhdGUgPSB7IG1hdGNoVHlwZTogdmFsdWUgfVxuICAgIFxuICAgIGlmKHRoaXMudXBkYXRlZC5rZXkgJiYgdGhpcy51cGRhdGVkLmtleSAhPT0gdGhpcy5vcmlnaW5hbC5rZXkpXG4gICAgICB1cGRhdGUua2V5ID0gdGhpcy51cGRhdGVkLmtleVxuICAgIFxuICAgIHRoaXMudXNlckV2ZW50cy5vbkNoYW5nZShlLCB1cGRhdGUsIHRoaXMub3JpZ2luYWwuaWQsIEVkaXRvcikgIT09IGZhbHNlICYmXG4gICAgICB0aGlzLm9yaWdpbmFsLmlkICYmIFxuICAgICAgRWRpdG9yLnVwZGF0ZSh0aGlzLm9yaWdpbmFsLmlkLCB1cGRhdGUpXG5cbiAgfVxuXG4gIHJlbmRlciA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzY2hlbWE6IHsgaWQsIGtleSwgdmFsdWUsIG1vZGUsIG1hdGNoVHlwZSwga2V5VHlwZSwgcGFyZW50LCBlcnJvciB9LFxuICAgICAgc2V0dGluZ3M6IHsgRWRpdG9yOiB7IFR5cGVzIH0gfVxuICAgIH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIEl0ZW0oe1xuICAgICAgaWQsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICBUeXBlcyxcbiAgICAgIGVycm9yLFxuICAgICAga2V5OiBBcnJheS5pc0FycmF5KHBhcmVudC52YWx1ZSkgPyBrZXkgOiAnJyxcbiAgICAgIHR5cGU6IENvbnN0YW50cy5TY2hlbWEuRU1QVFksXG4gICAgICBzaG93TGFiZWw6IHRydWUsXG4gICAgICBrZXlUeXBlOiBrZXlUeXBlIHx8ICd0ZXh0JyxcbiAgICAgIGtleUVkaXQ6ICFwYXJlbnQgfHwgIUFycmF5LmlzQXJyYXkocGFyZW50LnZhbHVlKSxcbiAgICAgIG1vZGU6IENvbnN0YW50cy5TY2hlbWEuTU9ERVMuRURJVCxcbiAgICAgIC4uLnRoaXMuZ2V0QWN0aW9ucyhDb25zdGFudHMuU2NoZW1hLk1PREVTLkVESVQsIHsgb25UeXBlQ2hhbmdlOiB0aGlzLm9uVHlwZUNoYW5nZSB9KSxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5VHlwZSIsImltcG9ydCBFbXB0eVR5cGUgZnJvbSAgJy4vZW1wdHknXG5leHBvcnQgZGVmYXVsdCBFbXB0eVR5cGUiLCJpbXBvcnQgQmFzZVR5cGUgZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IHVwZGF0ZVBhcmVudEhlaWdodHMsIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBjbGVhck9iaiB9IGZyb20gJ2pzVXRpbHMnXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJ1xuXG5jb25zdCBoZWlnaHRPZmZzZXQgPSAyXG5jb25zdCBnZXRDaGlsZHJlbkh0ID0gcmVmTm9kZSA9PiB7XG4gIHJldHVybiBBcnJheVxuICAgIC5mcm9tKHJlZk5vZGUuZmlyc3RDaGlsZC5jaGlsZHJlbilcbiAgICAucmVkdWNlKChoZWlnaHQsIGNoaWxkKSA9PiB7XG4gICAgICBoZWlnaHQrPSBjaGlsZC5zY3JvbGxIZWlnaHQgfHwgMFxuICAgICAgcmV0dXJuIGhlaWdodFxuICAgIH0sIDApXG59XG5cbmNsYXNzIEdyb3VwVHlwZSBleHRlbmRzIEJhc2VUeXBlIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcpe1xuICAgIHN1cGVyKGNvbmZpZylcbiAgfVxuICBcbiAgY29uZmlnID0ge31cbiAgXG4gIHN0b3JlID0ge31cblxuICBvblRvZ2dsZSA9IChlLCBFZGl0b3IpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKENvbnN0YW50cy5WYWx1ZXMuREFUQV9UUkVFX0lEKVxuICAgIGlmKCFpZCkgcmV0dXJuXG5cbiAgICBjb25zdCBzY2hlbWEgPSBFZGl0b3Iuc2NoZW1hKGlkKVxuICAgXG4gICAgaWYoIXNjaGVtYSkgcmV0dXJuXG5cbiAgICBjb25zdCB1cGRhdGUgPSB7IG9wZW46ICFzY2hlbWEub3BlbiB9XG5cbiAgIFxuICAgXG4gICAgaWYodGhpcy5zdG9yZS5pc09wZW4gJiYgIXVwZGF0ZS5vcGVuKXtcbiAgICAgXG4gICAgICB0aGlzLnN0b3JlLmlzT3BlbiA9IGZhbHNlXG4gICAgICBcbiAgICAgIGNvbnN0IHJlZk5vZGUgPSBzY2hlbWEuZG9tTm9kZVxuICAgICBcbiAgICAgIHJlZk5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5zdG9yZS5jbG9zZWRNYXhIdFxuICAgICBcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICBcbiAgICAgICBcbiAgICAgICAgdGhpcy5zdG9yZS5jdXJyZW50TWF4SHQgPSB0aGlzLnN0b3JlLmNsb3NlZE1heEh0XG4gICAgICAgIEVkaXRvci51cGRhdGUoaWQsIHVwZGF0ZSlcbiAgICAgIH0sIHRoaXMudG9nZ2xlU3BlZWQgfHwgNTAwKVxuICAgIH1cblxuICAgIEVkaXRvci51cGRhdGUoaWQsIHVwZGF0ZSlcbiAgfVxuICBcbiAgZ2V0VHJhbnNTcGVlZCA9IHJlZk5vZGUgPT4ge1xuICAgIHJlZk5vZGUgPSByZWZOb2RlIHx8IHByb3BzLnNjaGVtYS5kb21Ob2RlXG5cbiAgICBpZighcmVmTm9kZSkgcmV0dXJuXG5cbiAgICBjb25zdCBkb21TdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHJlZk5vZGUpXG4gICAgY29uc3QgdHJhbnNSdWxlID0gZG9tU3R5bGUudHJhbnNpdGlvblxuICAgIGlmKCF0cmFuc1J1bGUpIHJldHVyblxuICAgXG4gICAgY29uc3Qgc3BlZWQgPSBwYXJzZUZsb2F0KHRyYW5zUnVsZS5zcGxpdCgnICcpWzFdKSAqIDEwMDBcbiAgICBpZih0eXBlb2Ygc3BlZWQgIT09ICdudW1iZXInIHx8IGlzTmFOKHNwZWVkKSkgcmV0dXJuXG4gICAgdGhpcy50b2dnbGVTcGVlZCA9IHNwZWVkXG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKHByb3BzLCBFZGl0b3IpID0+IHtcbiAgICBjb25zdCByZWZOb2RlID0gcHJvcHMuc2NoZW1hLmRvbU5vZGVcbiAgICBpZighcmVmTm9kZSB8fCByZWZOb2RlLnN0eWxlLm1heEhlaWdodCkgcmV0dXJuXG5cbiAgIFxuICAgIHRoaXMuc3RvcmUuY3VycmVudE1heEh0ID0gYCR7cmVmTm9kZS5zY3JvbGxIZWlnaHQgKyBoZWlnaHRPZmZzZXR9cHhgXG4gICAgdGhpcy5zdG9yZS5jbG9zZWRNYXhIdCA9IHRoaXMuc3RvcmUuY3VycmVudE1heEh0XG4gICAgcmVmTm9kZS5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLnN0b3JlLmN1cnJlbnRNYXhIdFxuXG4gICBcbiAgICBpZihwcm9wcy5zY2hlbWEuaXNSb290ICYmIHByb3BzLnNjaGVtYS5vcGVuKXtcbiAgICAgIHRoaXMuc3RvcmUuaXNPcGVuID0gdHJ1ZVxuICAgICBcbiAgICAgIGNvbnN0IHJvb3RIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDb25zdGFudHMuVmFsdWVzLkpUX1JPT1RfSEVBREVSX0lEKVxuICAgICAgaWYoIXJvb3RIZWFkZXIpIHJldHVyblxuICAgICAgdGhpcy5zdG9yZS5jbG9zZWRNYXhIdCA9IGAke3Jvb3RIZWFkZXIuc2Nyb2xsSGVpZ2h0ICsgaGVpZ2h0T2Zmc2V0fXB4YFxuXG4gICAgfVxuXG4gICAgdGhpcy5nZXRUcmFuc1NwZWVkKHJlZk5vZGUpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgPSAocHJvcHMsIEVkaXRvcikgPT4ge1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBwcm9wc1xuXG4gICAgdGhpcy5zZXRPcmlnaW5hbChzY2hlbWEpXG5cbiAgIFxuICAgIHRoaXMudXBkYXRlZCAmJiBjbGVhck9iaih0aGlzLnVwZGF0ZWQpXG4gICAgXG4gICBcbiAgIFxuICAgIGNvbnN0IHJlZk5vZGUgPSBzY2hlbWEuZG9tTm9kZVxuICAgIGlmKCFyZWZOb2RlKSByZXR1cm5cbiAgICBcbiAgICBjb25zdCBjaGlsZHJlbkh0ID0gZ2V0Q2hpbGRyZW5IdChyZWZOb2RlKVxuXG4gICBcbiAgIFxuICAgIGlmKCF0aGlzLnN0b3JlLmlzT3BlbiAmJiBzY2hlbWEub3Blbil7XG4gICBcbiAgICAgIHRoaXMuc3RvcmUuaXNPcGVuID0gdHJ1ZVxuICAgICAgdGhpcy5zdG9yZS5jdXJyZW50TWF4SHQgPSBgJHtjaGlsZHJlbkh0fXB4YFxuICAgICBcbiAgICAgIHJlZk5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5zdG9yZS5jdXJyZW50TWF4SHRcbiAgICB9XG5cbiAgIFxuICAgXG4gICBcbiAgICAoc2NoZW1hLm1vZGUgPT09IENvbnN0YW50cy5TY2hlbWEuTU9ERVMuRURJVCB8fCBzY2hlbWEub3BlbikgJiZcbiAgICAgIHVwZGF0ZVBhcmVudEhlaWdodHMoc2NoZW1hLCBjaGlsZHJlbkh0LCBoZWlnaHRPZmZzZXQpXG4gIH1cblxuXG4gIG9uQWRkID0gKGUsIEVkaXRvcikgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGNvbnN0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShDb25zdGFudHMuVmFsdWVzLkRBVEFfVFJFRV9JRClcbiAgICBjb25zdCBzY2hlbWEgPSBpZCAmJiBFZGl0b3Iuc2NoZW1hKGlkKVxuICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgIHBhcmVudDogc2NoZW1hLFxuICAgICAgbW9kZTogQ29uc3RhbnRzLlNjaGVtYS5NT0RFUy5BREQsXG4gICAgICBtYXRjaFR5cGU6IENvbnN0YW50cy5TY2hlbWEuRU1QVFksXG4gICAgfVxuXG4gICAgaWYoQXJyYXkuaXNBcnJheShzY2hlbWEudmFsdWUpKVxuICAgICAgdXBkYXRlLmtleSA9IHNjaGVtYS52YWx1ZS5sZW5ndGhcbiAgICBcbiAgICBzY2hlbWEgJiYgRWRpdG9yLmFkZCh7XG4gICAgICBwYXJlbnQ6IHNjaGVtYSxcbiAgICAgIG1vZGU6IENvbnN0YW50cy5TY2hlbWEuTU9ERVMuQURELFxuICAgICAgbWF0Y2hUeXBlOiBDb25zdGFudHMuU2NoZW1hLkVNUFRZLFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgPSBwcm9wcyA9PiB7XG5cbiAgICBjb25zdCB7XG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgaWQsIGtleSwgdmFsdWUsIG1vZGUsIG1hdGNoVHlwZSwga2V5VHlwZSwga2V5VGV4dCwgaXNSb290LCBvcGVuLCBlcnJvclxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuLFxuICAgIH0gPSBwcm9wc1xuICAgIGNvbnN0IG5vdEVkaXRNb2RlID0gbW9kZSAhPT0gQ29uc3RhbnRzLlNjaGVtYS5NT0RFUy5FRElUXG4gICAgY29uc3QgY2xhc3NlcyA9IG9wZW4gJiYgYGxpc3Qtb3BlbmAgfHwgJydcbiAgICBsZXQgYWN0aW9ucyA9IHt9XG4gICAgaWYobm90RWRpdE1vZGUpIGFjdGlvbnMub25Ub2dnbGUgPSB0aGlzLm9uVG9nZ2xlXG4gICAgaWYob3BlbiAmJiBub3RFZGl0TW9kZSkgYWN0aW9ucy5vbkFkZCA9IHRoaXMub25BZGRcblxuICAgIHJldHVybiBMaXN0KHtcbiAgICAgIGlkLFxuICAgICAga2V5LFxuICAgICAgdmFsdWUsXG4gICAgICBtb2RlLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIGlzUm9vdCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAga2V5VGV4dCxcbiAgICAgIGVycm9yLFxuICAgICAgc2hvd1Bhc3RlOiBwcm9wcy5zZXR0aW5ncy5FZGl0b3IuaGFzVGVtcCgpLFxuICAgICAga2V5VHlwZToga2V5VHlwZSB8fCAndGV4dCcsXG4gICAgICBpc09wZW46IG9wZW4sXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICBcbiAgICAgICBcbiAgICAgICAgd3JhcHBlcjogeyBtYXhIZWlnaHQ6IHRoaXMuc3RvcmUuY3VycmVudE1heEh0IH0sXG4gICAgICB9LFxuICAgICAgdHlwZTogbWF0Y2hUeXBlLFxuICAgICAgc2hvd0xhYmVsOiB0cnVlLFxuICAgICAgdmFsdWVFbDogJ3NlbGVjdCcsXG4gICAgICBrZXlFZGl0OiAhcHJvcHMuc2NoZW1hLnBhcmVudCB8fCAhQXJyYXkuaXNBcnJheShwcm9wcy5zY2hlbWEucGFyZW50LnZhbHVlKSxcbiAgICAgIC4uLnRoaXMuZ2V0QWN0aW9ucyhtb2RlLCBhY3Rpb25zKSxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwVHlwZSIsImltcG9ydCBNYXBUeXBlIGZyb20gICcuL21hcCdcbmV4cG9ydCBkZWZhdWx0IE1hcFR5cGUiLCJpbXBvcnQgR3JvdXBUeXBlIGZyb20gJy4uL2dyb3VwJ1xuXG5jbGFzcyBNYXBUeXBlIGV4dGVuZHMgR3JvdXBUeXBlIHtcblxuICBzdGF0aWMgcHJpb3JpdHkgPSAxXG4gIHN0YXRpYyBldmFsID0gdmFsdWUgPT4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgc3RhdGljIGRlZmF1bHRWYWx1ZSA9IChuZXdUeXBlLCBzY2hlbWEsIHNldHRpbmdzKSA9PiAoe30pXG4gIFxuICBjb25zdHJ1Y3Rvcihjb25maWcpe1xuICAgIHN1cGVyKHsgLi4uY29uZmlnIH0pXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBUeXBlIiwiaW1wb3J0IE51bWJlclR5cGUgZnJvbSAgJy4vbnVtYmVyJ1xuZXhwb3J0IGRlZmF1bHQgTnVtYmVyVHlwZSIsImltcG9ydCBDbGVhdmVUeXBlIGZyb20gJy4uL2NsZWF2ZSdcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJ1xuXG5jbGFzcyBOdW1iZXJUeXBlIGV4dGVuZHMgQ2xlYXZlVHlwZSB7XG5cbiAgc3RhdGljIHByaW9yaXR5ID0gMVxuICBzdGF0aWMgZXZhbCA9ICh2YWx1ZSkgPT4gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG4gIHN0YXRpYyBkZWZhdWx0VmFsdWUgPSAoKSA9PiAwXG4gIFxuICBjb25zdHJ1Y3Rvcihjb25maWcpe1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLmNvbmZpZyxcbiAgICAgIGNsZWF2ZToge1xuICAgICAgICBudW1lcmFsOiB0cnVlLFxuICAgICAgICBudW1lcmFsVGhvdXNhbmRzR3JvdXBTdHlsZTogJ25vbmUnLFxuICAgICAgICBzdHJpcExlYWRpbmdaZXJvZXM6IGZhbHNlLFxuICAgICAgICBudW1lcmFsRGVjaW1hbFNjYWxlOiAwLFxuICAgICAgICAuLi4oY29uZmlnIHx8IHt9KS5jbGVhdmUsXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbmZpZyA9IHtcbiAgICBpc051bWJlcjogdHJ1ZSxcbiAgICB1c2VDbGVhdmU6IHRydWUsXG4gIH1cbiAgXG4gIFxuICByZW5kZXIgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgeyBzY2hlbWE6IHsgaWQsIGtleSwgdmFsdWUsIG1vZGUsIG1hdGNoVHlwZSwga2V5VHlwZSwgcGFyZW50LCBlcnJvciB9IH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIEl0ZW0oe1xuICAgICAgaWQsXG4gICAgICBrZXksXG4gICAgICB2YWx1ZSxcbiAgICAgIG1vZGUsXG4gICAgICBlcnJvcixcbiAgICAgIHR5cGU6IG1hdGNoVHlwZSxcbiAgICAgIHNob3dMYWJlbDogdHJ1ZSxcbiAgICAgIHNob3dQYXN0ZTogcHJvcHMuc2V0dGluZ3MuRWRpdG9yLmhhc1RlbXAoKSxcbiAgICAgIGtleUVkaXQ6ICFwYXJlbnQgfHwgIUFycmF5LmlzQXJyYXkocGFyZW50LnZhbHVlKSxcbiAgICAgIGtleVR5cGU6IGtleVR5cGUgfHwgJ3RleHQnLFxuICAgICAgLi4udGhpcy5nZXRBY3Rpb25zKG1vZGUpLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICB9KVxuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJUeXBlIiwiaW1wb3J0IE51bWJlclR5cGUgZnJvbSAnLi4vbnVtYmVyJ1xuXG5jbGFzcyBGbG9hdFR5cGUgZXh0ZW5kcyBOdW1iZXJUeXBlIHtcblxuICBzdGF0aWMgcHJpb3JpdHkgPSAyXG4gIHN0YXRpYyBkZWZhdWx0VmFsdWUgPSAwLjBcbiAgc3RhdGljIGV2YWwgPSAodmFsdWUpID0+IChcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmXG4gICAgICBOdW1iZXIodmFsdWUpID09PSB2YWx1ZSAmJiBcbiAgICAgIHZhbHVlICUgMSAhPT0gMFxuICApXG5cbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICBzdXBlcih7XG4gICAgICAuLi5jb25maWcsXG4gICAgICBjbGVhdmU6IHtcbiAgICAgICAgbnVtZXJhbDogdHJ1ZSxcbiAgICAgICAgc3RyaXBMZWFkaW5nWmVyb2VzOiBmYWxzZSxcbiAgICAgICAgbnVtZXJhbFRob3VzYW5kc0dyb3VwU3R5bGU6ICdub25lJyxcbiAgICAgICAgbnVtZXJhbERlY2ltYWxTY2FsZTogOCxcbiAgICAgICAgLi4uKGNvbmZpZyB8fCB7fSkuY2xlYXZlLFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdFR5cGUiLCJpbXBvcnQgTnVtYmVyVHlwZSBmcm9tICcuLi9udW1iZXInXG5cbmNsYXNzIE1vbmV5VHlwZSBleHRlbmRzIE51bWJlclR5cGUge1xuXG4gIHN0YXRpYyBwcmlvcml0eSA9IDJcbiAgc3RhdGljIGRlZmF1bHRWYWx1ZSA9ICckMCdcbiAgc3RhdGljIGV2YWwgPSB2YWx1ZSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignJCcpICE9PSAtMVxuICB9XG4gIFxuICBjb25zdHJ1Y3Rvcihjb25maWcpe1xuICAgIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tIG5lZWRzIGVycm9yIGhhbmRsZXIgLS0tLS0tLS0tLWApXG4gICAgc3VwZXIoe1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgY2xlYXZlOiB7XG4gICAgICAgIG51bWVyYWw6IHRydWUsXG4gICAgICAgIGRlbGltaXRlcjogJywnLFxuICAgICAgICBzdHJpcExlYWRpbmdaZXJvZXM6IHRydWUsXG4gICAgICAgIG51bWVyYWxEZWNpbWFsU2NhbGU6IDIsXG4gICAgICAgIHByZWZpeDogJyQnLFxuICAgICAgICBub0ltbWVkaWF0ZVByZWZpeDogdHJ1ZSxcbiAgICAgICAgLi4uKGNvbmZpZyB8fCB7fSkuY2xlYXZlLFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgXG4gIGNvbmZpZyA9IHtcbiAgICBpc051bWJlcjogdHJ1ZSxcbiAgICB1c2VDbGVhdmU6IHRydWUsXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNb25leVR5cGUiLCJpbXBvcnQgTnVtYmVyVHlwZSBmcm9tICcuLi9udW1iZXInXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cydcbmltcG9ydCB7IHN1ZmZpeFNlbGVjdGlvbiwgdXBkYXRlU3VmZml4IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cydcblxuY2xhc3MgUGVyY2VudFR5cGUgZXh0ZW5kcyBOdW1iZXJUeXBlIHtcbiAgXG4gIHN0YXRpYyBwcmlvcml0eSA9IDJcbiAgc3RhdGljIGRlZmF1bHRWYWx1ZSA9ICcwJSdcbiAgc3RhdGljIGV2YWwgPSB2YWx1ZSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignJScpICE9PSAtMVxuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICBzdXBlcihjb25maWcpXG4gIH1cblxuICBjb25maWcgPSB7XG4gICAgaXNOdW1iZXI6IHRydWVcbiAgfVxuXG4gIHN1ZmZpeCA9ICclJ1xuICBcbiAgdXBkYXRlU2VsZWN0aW9uID0gZSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSAgZS50YXJnZXQgfHwgZS5jdXJyZW50VGFyZ2V0XG4gICAgY29uc3Qga2V5ID0gaW5wdXQgJiYgaW5wdXQuZ2V0QXR0cmlidXRlKENvbnN0YW50cy5WYWx1ZXMuREFUQV9TQ0hFTUFfS0VZKVxuICAgIGlmKCFrZXkgfHwgIWlucHV0IHx8ICFpbnB1dC52YWx1ZSkgcmV0dXJuXG5cbiAgICBrZXkgIT09ICd2YWx1ZSdcbiAgICAgID8gaW5wdXQuc2VsZWN0KClcbiAgICAgIDogaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgaW5wdXQudmFsdWUubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIHJlbmRlciA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IHNjaGVtYTogeyBpZCwga2V5LCB2YWx1ZSwgbW9kZSwgbWF0Y2hUeXBlLCBrZXlUeXBlLCBwYXJlbnQsIGVycm9yIH0gfSA9IHByb3BzXG4gICAgY29uc3QgdXNlVmFsID0gdXBkYXRlU3VmZml4KHZhbHVlLCB0aGlzLnN1ZmZpeClcblxuICAgIHJldHVybiBJdGVtKHtcbiAgICAgIGlkLFxuICAgICAga2V5LFxuICAgICAgbW9kZSxcbiAgICAgIGVycm9yLFxuICAgICAgdHlwZTogbWF0Y2hUeXBlLFxuICAgICAgc2hvd0xhYmVsOiB0cnVlLFxuICAgICAgdmFsdWU6IHVzZVZhbCxcbiAgICAgIHNob3dQYXN0ZTogcHJvcHMuc2V0dGluZ3MuRWRpdG9yLmhhc1RlbXAoKSxcbiAgICAgIGtleUVkaXQ6ICFwYXJlbnQgfHwgIUFycmF5LmlzQXJyYXkocGFyZW50LnZhbHVlKSxcbiAgICAgIGtleVR5cGU6IGtleVR5cGUgfHwgJ3RleHQnLFxuICAgICAgLi4udGhpcy5nZXRBY3Rpb25zKG1vZGUsIHtcbiAgICAgICAgb25Gb2N1czogdGhpcy51cGRhdGVTZWxlY3Rpb24sXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMudXBkYXRlU2VsZWN0aW9uLFxuICAgICAgICBvbktleVVwOiBzdWZmaXhTZWxlY3Rpb24uYmluZCh0aGlzKVxuICAgICAgfSksXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgIH0pXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJjZW50VHlwZSIsImltcG9ydCBTdHJpbmdUeXBlIGZyb20gICcuL3N0cmluZydcbmV4cG9ydCBkZWZhdWx0IFN0cmluZ1R5cGVcbiIsImltcG9ydCBDbGVhdmVUeXBlIGZyb20gJy4uL2NsZWF2ZSdcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgaXNTdHIsIGlzRnVuYyB9IGZyb20gJ2pzVXRpbHMnXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmNsYXNzIFN0cmluZ1R5cGUgZXh0ZW5kcyBDbGVhdmVUeXBlIHtcblxuICBzdGF0aWMgcHJpb3JpdHkgPSAxXG4gIHN0YXRpYyBldmFsID0gKHZhbHVlKSA9PiBpc1N0cih2YWx1ZSlcbiAgc3RhdGljIGRlZmF1bHRWYWx1ZSA9IChuZXdUeXBlLCBzY2hlbWEsIHNldHRpbmdzKSA9PiAnJ1xuICBcbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICBzdXBlcih7XG4gICAgICAuLi5jb25maWcsXG4gICAgICBjbGVhdmU6IHtcbiAgICAgICAgbnVtZXJhbDogZmFsc2UsXG4gICAgICAgIHN0cmlwTGVhZGluZ1plcm9lczogZmFsc2UsXG4gICAgICAgIC4uLihjb25maWcgJiYgY29uZmlnLmNsZWF2ZSB8fCB7fSksXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbmZpZyA9IHsgdXNlQ2xlYXZlOiB0cnVlIH1cblxuICByZW5kZXIgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgeyBzY2hlbWE6IHsgaWQsIGtleSwgdmFsdWUsIG1vZGUsIG1hdGNoVHlwZSwga2V5VHlwZSwgcGFyZW50LCBlcnJvciB9IH0gPSBwcm9wc1xuICAgIGNvbnN0IHVzZVZhbHVlID0gbW9kZSAhPT0gQ29uc3RhbnRzLlNjaGVtYS5NT0RFUy5FRElUICYmIGlzRnVuYyh0aGlzLmdldERpc3BsYXlWYWx1ZSlcbiAgICAgID8gdGhpcy5nZXREaXNwbGF5VmFsdWUodmFsdWUsIHByb3BzKVxuICAgICAgOiB2YWx1ZVxuXG4gICAgcmV0dXJuIEl0ZW0oe1xuICAgICAgaWQsXG4gICAgICBrZXksXG4gICAgICBtb2RlLFxuICAgICAgZXJyb3IsXG4gICAgICB2YWx1ZTogdXNlVmFsdWUsXG4gICAgICB0eXBlOiBtYXRjaFR5cGUsXG4gICAgICBzaG93TGFiZWw6IHRydWUsXG4gICAgICBzaG93UGFzdGU6IHByb3BzLnNldHRpbmdzLkVkaXRvci5oYXNUZW1wKCksXG4gICAgICBrZXlFZGl0OiAhcGFyZW50IHx8ICFBcnJheS5pc0FycmF5KHBhcmVudC52YWx1ZSksXG4gICAgICBrZXlUeXBlOiBrZXlUeXBlIHx8ICd0ZXh0JyxcbiAgICAgIC4uLnRoaXMuZ2V0QWN0aW9ucyhtb2RlKSxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ1R5cGUiLCJpbXBvcnQgU3RyaW5nVHlwZSBmcm9tICcuLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1N0ciB9IGZyb20gJ2pzVXRpbHMnXG5cbmNvbnN0IGx1aG4gPSAoYXJyID0+IHtcbiAgcmV0dXJuIGNjTnVtID0+IHtcbiAgICBsZXQgbGVuID0gY2NOdW0ubGVuZ3RoXG4gICAgbGV0IGJpdCA9IDFcbiAgICBsZXQgc3VtID0gMFxuICAgIGxldCB2YWxcblxuICAgIHdoaWxlIChsZW4pIHtcbiAgICAgIHZhbCA9IHBhcnNlSW50KGNjTnVtLmNoYXJBdCgtLWxlbiksIDEwKVxuICAgICAgc3VtICs9IChiaXQgXj0gMSkgPyBhcnJbdmFsXSA6IHZhbFxuICAgIH1cblxuICAgIHJldHVybiBzdW0gJiYgc3VtICUgMTAgPT09IDBcbiAgfVxufSkoWzAsIDIsIDQsIDYsIDgsIDEsIDMsIDUsIDcsIDldKVxuXG5cbmNsYXNzIENhcmRUeXBlIGV4dGVuZHMgU3RyaW5nVHlwZSB7XG5cbiAgc3RhdGljIHByaW9yaXR5ID0gMlxuICBzdGF0aWMgZGVmYXVsdFZhbHVlID0gJydcbiAgc3RhdGljIGV2YWwgPSB2YWx1ZSA9PiBpc1N0cih2YWx1ZSkgJiYgbHVobih2YWx1ZS5yZXBsYWNlKC8gL2csICcnKSlcbiAgXG4gIHN0YXRpYyBlcnJvciA9IGFyZ3MgPT4ge1xuICAgIGlmKGFyZ3MucHJvcCAhPT0gJ3ZhbHVlJykgcmV0dXJuIGFyZ3MubWVzc2FnZSB8fCAnRXJyb3IsIEludmFsaWQgZGF0YSEnXG5cbiAgICByZXR1cm4gYEludmFsaWQgY2FyZCBudW1iZXIuIEVuc3VyZSB0aGUgZW50ZXJlZCBudW1iZXIgbWF0Y2hlcyB0aGUgY2FyZCBudW1iZXIuYFxuICB9XG4gIFxuICBjb25zdHJ1Y3Rvcihjb25maWcpe1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLmNvbmZpZyxcbiAgICAgIGNsZWF2ZToge1xuICAgICAgICBjcmVkaXRDYXJkOiB0cnVlLFxuICAgICAgICAuLi4oY29uZmlnICYmIGNvbmZpZy5jbGVhdmUgfHwge30pLFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgXG4gIGNvbmZpZyA9IHtcbiAgICB1c2VDbGVhdmU6IHRydWVcbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFR5cGUiLCJpbXBvcnQgU3RyaW5nVHlwZSBmcm9tICcuLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1N0ciB9IGZyb20gJ2pzVXRpbHMnXG5jbGFzcyBDb2xvclR5cGUgZXh0ZW5kcyBTdHJpbmdUeXBlIHtcblxuICBzdGF0aWMgcHJpb3JpdHkgPSAyXG4gIHN0YXRpYyBkZWZhdWx0VmFsdWUgPSAnI0ZGRkZGRidcbiAgXG4gIHN0YXRpYyBlcnJvciA9IGFyZ3MgPT4ge1xuICAgIGlmKGFyZ3MucHJvcCAhPT0gJ3ZhbHVlJykgcmV0dXJuIGFyZ3MubWVzc2FnZSB8fCAnRXJyb3IsIEludmFsaWQgZGF0YSEnXG5cbiAgICByZXR1cm4gYEludmFsaWQgY29sb3IuIENvbG9yIHZhbHVlIHNob3VsZCBiZSBpbiBoZXggZm9ybWF0ICgjRkZGRkZGKWBcbiAgfVxuICBcbiAgc3RhdGljIGV2YWwgPSB2YWx1ZSA9PiB7XG4gICAgaWYgKCF2YWx1ZSB8fCAhaXNTdHIodmFsdWUpKSByZXR1cm4gZmFsc2VcbiAgICBcbiAgICByZXR1cm4gIEJvb2xlYW4oL14jKD86KD86W0EtRjAtOV17Mn0pezMsNH18W0EtRjAtOV17M30pJC9pLnRlc3QodmFsdWUpKVxuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICBzdXBlcih7XG4gICAgICAuLi5jb25maWcsXG4gICAgICBjbGVhdmU6IHtcbiAgICAgICAgcHJlZml4OiAnIycsXG4gICAgICAgIHVwcGVyY2FzZTogdHJ1ZSxcbiAgICAgICAgLi4uKGNvbmZpZyAmJiBjb25maWcuY2xlYXZlIHx8IHt9KSxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uZmlnID0geyB2YWx1ZUF0dHJzOiB7IG1pbjogNyB9LCB1c2VDbGVhdmU6IHRydWUgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yVHlwZSIsImltcG9ydCBTdHJpbmdUeXBlIGZyb20gJy4uL3N0cmluZydcbmltcG9ydCB7IGlzU3RyIH0gZnJvbSAnanNVdGlscydcbmltcG9ydCB7IGNoZWNrSW5wdXRTdXBwb3J0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnXG5cbmxldCBEQVRFX0lOUFVUX1NVUFBPUlRcblxuY2xhc3MgRGF0ZVR5cGUgZXh0ZW5kcyBTdHJpbmdUeXBlIHtcblxuICBzdGF0aWMgcHJpb3JpdHkgPSAyXG4gIHN0YXRpYyBkZWZhdWx0VmFsdWUgPSAnJ1xuICBzdGF0aWMgYWxsb3dFbXB0eVZhbHVlID0gJydcbiAgc3RhdGljIGVycm9yID0gYXJncyA9PiB7XG4gICAgaWYoYXJncy5wcm9wICE9PSAndmFsdWUnKSByZXR1cm4gYXJncy5tZXNzYWdlIHx8ICdFcnJvciwgSW52YWxpZCBkYXRhISdcblxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgdG9kYXkgPSBkYXRlLmdldERhdGUoKVxuICAgIGNvbnN0IGZ1bGxEYXkgPSB0b2RheS5sZW5ndGggPT09IDIgJiYgdG9kYXkgfHwgYDAke3RvZGF5fWBcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICBjb25zdCBmdWxsTW9udGggPSBtb250aC5sZW5ndGggPT09IDIgJiYgbW9udGggfHwgYDAke21vbnRofWBcbiAgICBjb25zdCBmb3JtYXQgPSBgJHtmdWxsRGF5fS0ke2Z1bGxNb250aH0tJHtkYXRlLmdldEZ1bGxZZWFyKCl9YFxuXG4gICAgcmV0dXJuIGBJbnZhbGlkIGRhdGUuIERhdGUgZm9ybWF0IHNob3VsZCBtYXRjaCAke2Zvcm1hdH0gKERheS1Nb250aC1ZZWFyKWBcbiAgfVxuICBcbiAgc3RhdGljIGV2YWwgPSB2YWx1ZSA9PiB7XG4gICAgaWYoIWlzU3RyKHZhbHVlKSkgcmV0dXJuIGZhbHNlXG5cbiAgICBjb25zdCBkYXRlU3BsaXQgPSB2YWx1ZS5zcGxpdCgnLScpXG4gICAgaWYoZGF0ZVNwbGl0Lmxlbmd0aCAhPT0gMykgcmV0dXJuIGZhbHNlXG5cbiAgICByZXR1cm4gZGF0ZVNwbGl0LnJlZHVjZSgodmFsaWQsIGRhdGUpID0+IHtcbiAgICAgIGlmKCF2YWxpZCkgcmV0dXJuIHZhbGlkXG5cbiAgICAgIHJldHVybiBpc05hTihwYXJzZUludChkYXRlKSlcbiAgICAgICAgPyBmYWxzZVxuICAgICAgICA6IHZhbGlkICYmIChkYXRlLmxlbmd0aCA9PT0gMiB8fCBkYXRlLmxlbmd0aCA9PT0gNClcbiAgICB9LCB0cnVlKVxuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICBzdXBlcih7XG4gICAgICAuLi5jb25maWcsXG4gICAgICBjbGVhdmU6IHtcbiAgICAgICAgZGF0ZTogdHJ1ZSxcbiAgICAgICAgZGVsaW1pdGVyOiAnLScsXG4gICAgICAgIGRhdGVQYXR0ZXJuOiBbJ1knLCAnbScsICdkJ10sXG4gICAgICAgIC4uLihjb25maWcgJiYgY29uZmlnLmNsZWF2ZSB8fCB7fSksXG4gICAgICB9XG4gICAgfSlcbiAgICBcbiAgICBpZighREFURV9JTlBVVF9TVVBQT1JUICYmIERBVEVfSU5QVVRfU1VQUE9SVCAhPT0gZmFsc2UpXG4gICAgICBEQVRFX0lOUFVUX1NVUFBPUlQgPSBjaGVja0lucHV0U3VwcG9ydCgnZGF0ZScpXG4gICAgXG4gICAgdGhpcy5jb25maWcudXNlQ2xlYXZlID0gIURBVEVfSU5QVVRfU1VQUE9SVFxuICAgIHRoaXMuY29uZmlnLnZhbHVlQXR0cnMudHlwZSA9IERBVEVfSU5QVVRfU1VQUE9SVCAmJiAnZGF0ZScgfHwgJ3RleHQnXG4gICAgaWYoIURBVEVfSU5QVVRfU1VQUE9SVClcbiAgICAgIHRoaXMuY29uZmlnLnZhbHVlQXR0cnMucGxhY2Vob2xkZXIgPSAnWVlZWS1NTS1ERCdcbiAgfVxuXG4gIGNvbmZpZyA9IHtcbiAgICB1c2VDbGVhdmU6IGZhbHNlLFxuICAgIHZhbHVlQXR0cnM6IHt9XG4gIH1cbiAgXG4gIGdldERpc3BsYXlWYWx1ZSA9IHZhbHVlID0+IHtcbiAgICBjb25zdCB2YWxTcGxpdCA9IHZhbHVlLnNwbGl0KCctJykucmV2ZXJzZSgpXG4gICAgY29uc3QgdGVtcCA9IHZhbFNwbGl0WzBdXG4gICAgdmFsU3BsaXRbMF0gPSB2YWxTcGxpdFsxXVxuICAgIHZhbFNwbGl0WzFdID0gdGVtcFxuICAgIHJldHVybiB2YWxTcGxpdC5qb2luKCctJylcbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVR5cGUiLCJpbXBvcnQgU3RyaW5nVHlwZSBmcm9tICcuLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1N0ciB9IGZyb20gJ2pzVXRpbHMnXG5pbXBvcnQgeyBjaGVja0lucHV0U3VwcG9ydCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJ1xuXG5sZXQgREFURVRJTUVfSU5QVVRfU1VQUE9SVFxuXG5jbGFzcyBEYXRlVGltZVR5cGUgZXh0ZW5kcyBTdHJpbmdUeXBlIHtcblxuICBzdGF0aWMgcHJpb3JpdHkgPSAyXG4gIHN0YXRpYyBkZWZhdWx0VmFsdWUgPSAnJ1xuICBzdGF0aWMgYWxsb3dFbXB0eVZhbHVlID0gJydcbiAgc3RhdGljIGVycm9yID0gYXJncyA9PiB7XG4gICAgaWYoYXJncy5wcm9wICE9PSAndmFsdWUnKSByZXR1cm4gYXJncy5tZXNzYWdlIHx8ICdFcnJvciwgSW52YWxpZCBkYXRhISdcblxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgZm9ybWF0ID0gYCR7ZGF0ZS5ob3Vyc306JHtkYXRlLm1pbnV0ZXN9fWBcblxuICAgIHJldHVybiBgSW52YWxpZCB0aW1lLiBUaW1lIGZvcm1hdCBzaG91bGQgbWF0Y2ggJHtmb3JtYXR9IChIb3VyOk1pbnV0ZXMpYFxuICB9XG4gIFxuICBzdGF0aWMgZXZhbCA9IHZhbHVlID0+IHtcbiAgICBpZighaXNTdHIodmFsdWUpKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBkYXRlU3BsaXQgPSB2YWx1ZS5zcGxpdCgnOicpXG4gICAgaWYoZGF0ZVNwbGl0Lmxlbmd0aCAhPT0gMikgcmV0dXJuIGZhbHNlXG5cbiAgICByZXR1cm4gZGF0ZVNwbGl0LnJlZHVjZSgodmFsaWQsIGRhdGUpID0+IHtcbiAgICAgIGlmKCF2YWxpZCkgcmV0dXJuIHZhbGlkXG5cbiAgICAgIHJldHVybiBpc05hTihwYXJzZUludChkYXRlKSlcbiAgICAgICAgPyBmYWxzZVxuICAgICAgICA6IHZhbGlkICYmIChkYXRlLmxlbmd0aCA9PT0gMilcbiAgICB9LCB0cnVlKVxuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICBzdXBlcih7XG4gICAgICAuLi5jb25maWcsXG4gICAgICBjbGVhdmU6IHtcbiAgICAgICAgbnVtZXJhbDogdHJ1ZSxcbiAgICAgICAgbnVtZXJhbFRob3VzYW5kc0dyb3VwU3R5bGU6ICdub25lJyxcbiAgICAgICAgYmxvY2tzOiBbNCwgMiwgMiwgMiwgMl0sXG4gICAgICAgIGRlbGltaXRlcnM6IFsnLScsICctJywgJywgJywgJzonXSxcbiAgICAgICAgLi4uKGNvbmZpZyAmJiBjb25maWcuY2xlYXZlIHx8IHt9KSxcbiAgICAgIH1cbiAgICB9KVxuXG5cbiAgICBpZighREFURVRJTUVfSU5QVVRfU1VQUE9SVCAmJiBEQVRFVElNRV9JTlBVVF9TVVBQT1JUICE9PSBmYWxzZSlcbiAgICAgIERBVEVUSU1FX0lOUFVUX1NVUFBPUlQgPSBjaGVja0lucHV0U3VwcG9ydCgnZGF0ZXRpbWUtbG9jYWwnKVxuICAgIFxuICAgIHRoaXMuY29uZmlnLnVzZUNsZWF2ZSA9ICFEQVRFVElNRV9JTlBVVF9TVVBQT1JUXG4gICAgdGhpcy5jb25maWcudmFsdWVBdHRycy50eXBlID0gREFURVRJTUVfSU5QVVRfU1VQUE9SVCAmJiAnZGF0ZXRpbWUtbG9jYWwnIHx8ICd0ZXh0J1xuICAgIGlmKCFEQVRFVElNRV9JTlBVVF9TVVBQT1JUKVxuICAgICAgdGhpcy5jb25maWcudmFsdWVBdHRycy5wbGFjZWhvbGRlciA9ICdZWVlZLU1NLURELCBISDpNTSdcbiAgfVxuXG4gIGNvbmZpZyA9IHtcbiAgICB1c2VDbGVhdmU6IGZhbHNlLFxuICAgIHZhbHVlQXR0cnM6IHt9XG4gIH1cblxuICBnZXREaXNwbGF5VmFsdWUgPSB2YWx1ZSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlVGltZVR5cGUiLCJpbXBvcnQgU3RyaW5nVHlwZSBmcm9tICcuLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1N0ciB9IGZyb20gJ2pzVXRpbHMnXG5jbGFzcyBFbWFpbFR5cGUgZXh0ZW5kcyBTdHJpbmdUeXBlIHtcblxuICBzdGF0aWMgcHJpb3JpdHkgPSAyXG4gIHN0YXRpYyBkZWZhdWx0VmFsdWUgPSAnJ1xuICBzdGF0aWMgYWxsb3dFbXB0eVZhbHVlID0gJydcbiAgXG4gIHN0YXRpYyBlcnJvciA9IGFyZ3MgPT4ge1xuICAgIGlmKGFyZ3MucHJvcCAhPT0gJ3ZhbHVlJykgcmV0dXJuIGFyZ3MubWVzc2FnZSB8fCAnRXJyb3IsIEludmFsaWQgZGF0YSEnXG5cbiAgICByZXR1cm4gYEludmFsaWQgRW1haWwuIFBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MhYFxuICB9XG4gIFxuICBzdGF0aWMgZXZhbCA9IHZhbHVlID0+IHtcbiAgICBpZiAoXG4gICAgICAhdmFsdWUgfHxcbiAgICAgICFpc1N0cih2YWx1ZSkgfHxcbiAgICAgIHZhbHVlLmluZGV4T2YoJ0AnKSA9PT0gLTEgfHxcbiAgICAgIHZhbHVlLmluZGV4T2YoJy4nKSA9PT0gLTFcbiAgICApXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0IHJlZ2V4ID0gL15cXHcrKFsuLV0/XFx3KykqQFxcdysoWy4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvXG4gICAgcmV0dXJuIEJvb2xlYW4ocmVnZXgudGVzdCh2YWx1ZSkpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb25maWcpe1xuICAgIHN1cGVyKGNvbmZpZylcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1haWxUeXBlIiwiaW1wb3J0IFN0cmluZ1R5cGUgZnJvbSAnLi4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTdHIgfSBmcm9tICdqc1V0aWxzJ1xuXG5jbGFzcyBQaG9uZVR5cGUgZXh0ZW5kcyBTdHJpbmdUeXBlIHtcblxuICBzdGF0aWMgcHJpb3JpdHkgPSAyXG4gIHN0YXRpYyBkZWZhdWx0VmFsdWUgPSAnJ1xuICBzdGF0aWMgYWxsb3dFbXB0eVZhbHVlID0gJydcbiAgc3RhdGljIGV2YWwgPSB2YWx1ZSA9PiB7XG4gICAgaWYoIWlzU3RyKHZhbHVlKSkgcmV0dXJuIGZhbHNlXG5cbiAgICBjb25zdCByZWdleCA9IC9eWzItOV1cXGR7Mn1bMi05XVxcZHsyfVxcZHs0fSQvXG4gICAgcmV0dXJuIEJvb2xlYW4ocmVnZXgudGVzdCh2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpKSlcbiAgfVxuXG4gIHN0YXRpYyBlcnJvciA9IGFyZ3MgPT4ge1xuICAgIGlmKGFyZ3MucHJvcCAhPT0gJ3ZhbHVlJykgcmV0dXJuIGFyZ3MubWVzc2FnZSB8fCAnRXJyb3IsIEludmFsaWQgZGF0YSEnXG5cbiAgICByZXR1cm4gYEludmFsaWQgcGhvbmUgbnVtYmVyLiBQaG9uZSBmb3JtYXQgc2hvdWxkIG1hdGNoIDEyMy0xMjMtMTIzNGBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZyl7XG4gICAgc3VwZXIoe1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgY2xlYXZlOiB7XG4gICAgICAgIHBob25lOiB0cnVlLFxuICAgICAgICBkZWxpbWl0ZXI6ICctJyxcbiAgICAgICAgcGhvbmVSZWdpb25Db2RlOiAnVVMnLFxuICAgICAgICAuLi4oY29uZmlnICYmIGNvbmZpZy5jbGVhdmUgfHwge30pLFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgXG4gIGNvbmZpZyA9IHtcbiAgICB1c2VDbGVhdmU6IHRydWVcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBob25lVHlwZSIsImltcG9ydCBTdHJpbmdUeXBlIGZyb20gJy4uL3N0cmluZydcbmltcG9ydCB7IGlzU3RyIH0gZnJvbSAnanNVdGlscydcbmltcG9ydCB7IGNoZWNrSW5wdXRTdXBwb3J0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnXG5cbmxldCBUSU1FX0lOUFVUX1NVUFBPUlRcblxuY2xhc3MgVGltZVR5cGUgZXh0ZW5kcyBTdHJpbmdUeXBlIHtcblxuICBzdGF0aWMgcHJpb3JpdHkgPSAyXG4gIHN0YXRpYyBkZWZhdWx0VmFsdWUgPSAnJ1xuICBzdGF0aWMgYWxsb3dFbXB0eVZhbHVlID0gJydcbiAgc3RhdGljIGVycm9yID0gYXJncyA9PiB7XG4gICAgaWYoYXJncy5wcm9wICE9PSAndmFsdWUnKSByZXR1cm4gYXJncy5tZXNzYWdlIHx8ICdFcnJvciwgSW52YWxpZCBkYXRhISdcblxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgZm9ybWF0ID0gYCR7ZGF0ZS5ob3Vyc306JHtkYXRlLm1pbnV0ZXN9fWBcblxuICAgIHJldHVybiBgSW52YWxpZCB0aW1lLiBUaW1lIGZvcm1hdCBzaG91bGQgbWF0Y2ggJHtmb3JtYXR9IChIb3VyOk1pbnV0ZXMpYFxuICB9XG4gIFxuICBzdGF0aWMgZXZhbCA9IHZhbHVlID0+IHtcbiAgICBpZighaXNTdHIodmFsdWUpKSByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0IGRhdGVTcGxpdCA9IHZhbHVlLnNwbGl0KCc6JylcbiAgICBpZihkYXRlU3BsaXQubGVuZ3RoICE9PSAyKSByZXR1cm4gZmFsc2VcblxuICAgIHJldHVybiBkYXRlU3BsaXQucmVkdWNlKCh2YWxpZCwgZGF0ZSkgPT4ge1xuICAgICAgaWYoIXZhbGlkKSByZXR1cm4gdmFsaWRcblxuICAgICAgcmV0dXJuIGlzTmFOKHBhcnNlSW50KGRhdGUpKVxuICAgICAgICA/IGZhbHNlXG4gICAgICAgIDogdmFsaWQgJiYgKGRhdGUubGVuZ3RoID09PSAyKVxuICAgIH0sIHRydWUpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb25maWcpe1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLmNvbmZpZyxcbiAgICAgIGNsZWF2ZToge1xuICAgICAgICBkZWxpbWl0ZXI6ICc6JyxcbiAgICAgICAgdGltZTogdHJ1ZSxcbiAgICAgICAgdGltZVBhdHRlcm46IFsnaCcsICdtJ10sXG4gICAgICAgIC4uLihjb25maWcgJiYgY29uZmlnLmNsZWF2ZSB8fCB7fSksXG4gICAgICB9XG4gICAgfSlcbiAgICBcbiAgICBpZighVElNRV9JTlBVVF9TVVBQT1JUICYmIFRJTUVfSU5QVVRfU1VQUE9SVCAhPT0gZmFsc2UpXG4gICAgICBUSU1FX0lOUFVUX1NVUFBPUlQgPSBjaGVja0lucHV0U3VwcG9ydCgndGltZScpXG4gICAgXG4gICAgdGhpcy5jb25maWcudXNlQ2xlYXZlID0gIVRJTUVfSU5QVVRfU1VQUE9SVFxuICAgIHRoaXMuY29uZmlnLnZhbHVlQXR0cnMudHlwZSA9IFRJTUVfSU5QVVRfU1VQUE9SVCAmJiAndGltZScgfHwgJ3RleHQnXG4gICAgaWYoIVRJTUVfSU5QVVRfU1VQUE9SVClcbiAgICAgIHRoaXMuY29uZmlnLnZhbHVlQXR0cnMucGxhY2Vob2xkZXIgPSAnSEg6TU0nXG4gIH1cblxuICBjb25maWcgPSB7XG4gICAgdXNlQ2xlYXZlOiBmYWxzZSxcbiAgICB2YWx1ZUF0dHJzOiB7fVxuICB9XG5cbiAgZ2V0RGlzcGxheVZhbHVlID0gdmFsdWUgPT4ge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZS5zcGxpdCgnOicpWzBdKSA8IDEyXG4gICAgICA/IGAke3ZhbHVlfSBBTWBcbiAgICAgIDogYCR7dmFsdWV9IFBNYFxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZVR5cGUiLCJpbXBvcnQgU3RyaW5nVHlwZSBmcm9tICcuLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1N0ciB9IGZyb20gJ2pzVXRpbHMnXG5jbGFzcyBVcmxUeXBlIGV4dGVuZHMgU3RyaW5nVHlwZSB7XG5cbiAgc3RhdGljIHByaW9yaXR5ID0gMlxuICBzdGF0aWMgZGVmYXVsdFZhbHVlID0gJydcbiAgc3RhdGljIGFsbG93RW1wdHlWYWx1ZSA9ICcnXG4gIFxuICBzdGF0aWMgZXJyb3IgPSBhcmdzID0+IHtcbiAgICBpZihhcmdzLnByb3AgIT09ICd2YWx1ZScpIHJldHVybiBhcmdzLm1lc3NhZ2UgfHwgJ0Vycm9yLCBJbnZhbGlkIGRhdGEhJ1xuXG4gICAgcmV0dXJuIGBJbnZhbGlkIFVSTCBmb3JtYXQuIFBsZWFzZSBlbnRlciBhIHZhbGlkIFVSTC5gXG4gIH1cbiAgXG4gIHN0YXRpYyBldmFsID0gdmFsdWUgPT4ge1xuICAgIGlmICghdmFsdWUgfHwgIWlzU3RyKHZhbHVlKSkgcmV0dXJuIGZhbHNlXG5cbiAgICBjb25zdCByZWdleCA9IC9eKD86KD86aHR0cHM/fGZ0cCk6XFwvXFwvKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykoPzpcXC4oPzpbYS16XFx1MDBhMS1cXHVmZmZmMC05XS0qKSpbYS16XFx1MDBhMS1cXHVmZmZmMC05XSspKig/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfSkpKSg/OjpcXGR7Miw1fSk/KD86XFwvXFxTKik/JC9cbiAgICByZXR1cm4gQm9vbGVhbihyZWdleC50ZXN0KHZhbHVlKSlcbiAgfVxuICBcbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICBzdXBlcihjb25maWcpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVcmxUeXBlIiwiaW1wb3J0IFN0cmluZ1R5cGUgZnJvbSAnLi4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTdHIgfSBmcm9tICdqc1V0aWxzJ1xuY2xhc3MgVXVpZFR5cGUgZXh0ZW5kcyBTdHJpbmdUeXBlIHtcblxuICBzdGF0aWMgcHJpb3JpdHkgPSAyXG4gIHN0YXRpYyBkZWZhdWx0VmFsdWUgPSAnJ1xuICBzdGF0aWMgYWxsb3dFbXB0eVZhbHVlID0gJydcbiAgXG4gIHN0YXRpYyBlcnJvciA9IGFyZ3MgPT4ge1xuICAgIGlmKGFyZ3MucHJvcCAhPT0gJ3ZhbHVlJykgcmV0dXJuIGFyZ3MubWVzc2FnZSB8fCAnRXJyb3IsIEludmFsaWQgZGF0YSEnXG5cbiAgICByZXR1cm4gYEludmFsaWQgVVVJRCBmb3JtYXQuIFBsZWFzZSBlbnRlciBhIHZhbGlkIFVVSUQgKDAwMDAwMDAwLTAwMDAtMDAwLTAwMC0wMDAwMDAwMDAwMDApYFxuICB9XG4gIFxuICBzdGF0aWMgZXZhbCA9IHZhbHVlID0+IHtcbiAgICBpZiAoIXZhbHVlIHx8ICFpc1N0cih2YWx1ZSkpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IHJlZ2V4ID0gL15bMC05QS1GXXs4fS1bMC05QS1GXXs0fS1bNF1bMC05QS1GXXszfS1bODlBQl1bMC05QS1GXXszfS1bMC05QS1GXXsxMn0kL2lcbiAgICByZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZyl7XG4gICAgc3VwZXIoe1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgY2xlYXZlOiB7XG4gICAgICAgIG51bWVyYWw6IGZhbHNlLFxuICAgICAgICBkZWxpbWl0ZXI6ICctJyxcbiAgICAgICAgbG93ZXJjYXNlOiB0cnVlLFxuICAgICAgICBibG9ja3M6IFs4LCA0LCAzLCAzLCAxMl0sXG4gICAgICAgIHVwcGVyY2FzZTogZmFsc2UsXG4gICAgICAgIHN0cmlwTGVhZGluZ1plcm9lczogZmFsc2UsXG4gICAgICAgIC4uLihjb25maWcgJiYgY29uZmlnLmNsZWF2ZSB8fCB7fSksXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBcbiAgY29uZmlnID0ge1xuICAgIHVzZUNsZWF2ZTogdHJ1ZVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXVpZFR5cGUiLCJpbXBvcnQgQmFzZVR5cGUgZnJvbSAnLi9kZWZpbml0aW9ucy9iYXNlJ1xuaW1wb3J0IEJvb2xlYW5UeXBlIGZyb20gJy4vZGVmaW5pdGlvbnMvYm9vbGVhbidcbmltcG9ydCBFbXB0eVR5cGUgZnJvbSAnLi9kZWZpbml0aW9ucy9lbXB0eSdcbmltcG9ydCBDb2xsZWN0aW9uVHlwZSBmcm9tICcuL2RlZmluaXRpb25zL2NvbGxlY3Rpb24nXG5pbXBvcnQgTWFwVHlwZSBmcm9tICcuL2RlZmluaXRpb25zL21hcCdcblxuaW1wb3J0IE51bWJlclR5cGUgZnJvbSAnLi9kZWZpbml0aW9ucy9udW1iZXInXG5pbXBvcnQgRmxvYXRUeXBlIGZyb20gJy4vZGVmaW5pdGlvbnMvbnVtYmVyL3N1Yl90eXBlcy9mbG9hdCdcbmltcG9ydCBNb25leVR5cGUgZnJvbSAnLi9kZWZpbml0aW9ucy9udW1iZXIvc3ViX3R5cGVzL21vbmV5J1xuaW1wb3J0IFBlcmNlbnRUeXBlIGZyb20gJy4vZGVmaW5pdGlvbnMvbnVtYmVyL3N1Yl90eXBlcy9wZXJjZW50J1xuXG5pbXBvcnQgU3RyaW5nVHlwZSBmcm9tICcuL2RlZmluaXRpb25zL3N0cmluZydcbmltcG9ydCBDYXJkVHlwZSBmcm9tICcuL2RlZmluaXRpb25zL3N0cmluZy9zdWJfdHlwZXMvY2FyZCdcbmltcG9ydCBDb2xvclR5cGUgZnJvbSAnLi9kZWZpbml0aW9ucy9zdHJpbmcvc3ViX3R5cGVzL2NvbG9yJ1xuaW1wb3J0IERhdGVUeXBlIGZyb20gJy4vZGVmaW5pdGlvbnMvc3RyaW5nL3N1Yl90eXBlcy9kYXRlJ1xuaW1wb3J0IERhdGVUaW1lVHlwZSBmcm9tICcuL2RlZmluaXRpb25zL3N0cmluZy9zdWJfdHlwZXMvZGF0ZXRpbWUnXG5pbXBvcnQgRW1haWxUeXBlIGZyb20gJy4vZGVmaW5pdGlvbnMvc3RyaW5nL3N1Yl90eXBlcy9lbWFpbCdcbmltcG9ydCBQaG9uZVR5cGUgZnJvbSAnLi9kZWZpbml0aW9ucy9zdHJpbmcvc3ViX3R5cGVzL3Bob25lJ1xuaW1wb3J0IFRpbWVUeXBlIGZyb20gJy4vZGVmaW5pdGlvbnMvc3RyaW5nL3N1Yl90eXBlcy90aW1lJ1xuaW1wb3J0IFVybFR5cGUgZnJvbSAnLi9kZWZpbml0aW9ucy9zdHJpbmcvc3ViX3R5cGVzL3VybCdcbmltcG9ydCBVdWlkVHlwZSBmcm9tICcuL2RlZmluaXRpb25zL3N0cmluZy9zdWJfdHlwZXMvdXVpZCdcblxuZXhwb3J0IHtcbiAgQmFzZVR5cGUsXG4gIEJvb2xlYW5UeXBlLFxuICBDYXJkVHlwZSxcbiAgQ29sbGVjdGlvblR5cGUsXG4gIENvbG9yVHlwZSxcbiAgRGF0ZVR5cGUsXG4gIERhdGVUaW1lVHlwZSxcbiAgRW1haWxUeXBlLFxuICBFbXB0eVR5cGUsXG4gIEZsb2F0VHlwZSxcbiAgTWFwVHlwZSxcbiAgTW9uZXlUeXBlLFxuICBOdW1iZXJUeXBlLFxuICBQZXJjZW50VHlwZSxcbiAgUGhvbmVUeXBlLFxuICBTdHJpbmdUeXBlLFxuICBUaW1lVHlwZSxcbiAgVXJsVHlwZSxcbiAgVXVpZFR5cGUsXG59IiwiaW1wb3J0IGJhc2UgZnJvbSAnLi9iYXNlLmNzcydcbmltcG9ydCB7IGdldFRoZW1lLCB1cGRhdGVUaGVtZSB9IGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICdqc1V0aWxzJ1xuXG5cbmNvbnN0IGZpbGxCbG9ja3MgPSAoYmxvY2ssIHRoZW1lKSA9PiAoXG4gIE9iamVjdFxuICAgIC5lbnRyaWVzKGJsb2NrKVxuICAgIC5yZWR1Y2UoKGZpbGxlZEJsb2NrLCBbIHJ1bGUsIGRhdGEgXSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2ggPSBkYXRhLm1hdGNoKC9AXFxTKi9pKVxuICAgICBcbiAgICAgIGlmKCFtYXRjaClcbiAgICAgICAgcmV0dXJuIChmaWxsZWRCbG9ja1tydWxlXSA9IGRhdGEpICYmIGZpbGxlZEJsb2NrXG5cbiAgICAgXG4gICAgICBjb25zdCBmaWxsVmFsID0gdGhlbWVbbWF0Y2hbMF0ucmVwbGFjZSgnQCcsICcnKV1cbiAgICAgXG4gICAgICBmaWxsVmFsICYmIChmaWxsZWRCbG9ja1tydWxlXSA9IGRhdGEucmVwbGFjZShtYXRjaFswXSwgZmlsbFZhbCkpXG5cbiAgICAgIHJldHVybiBmaWxsZWRCbG9ja1xuICAgIH0sIHt9KVxuKVxuXG5jb25zdCBmaWxsU3R5bGVzID0gKHRoZW1lLCB1c2VTdHlsZXMpID0+IChcbiAgT2JqZWN0XG4gIC5lbnRyaWVzKHVzZVN0eWxlcylcbiAgLnJlZHVjZSgoc3R5bGVzLCBbIHNlbGVjdG9yLCBibG9jayBdKSA9PiAoXG4gICAgKHN0eWxlc1tzZWxlY3Rvcl0gPSBmaWxsQmxvY2tzKGJsb2NrLCB0aGVtZSkpICYmIHN0eWxlc1xuICApLCB7fSlcbilcblxuY29uc3Qgc2V0VGhlbWUgPSB1cGRhdGUgPT4ge1xuICB1cGRhdGVUaGVtZSh1cGRhdGUpXG4gIHJldHVybiBidWlsZFRoZW1lKHVwZGF0ZSlcbn1cblxuY29uc3QgYnVpbGRUaGVtZSA9IHNldHRpbmdzID0+IHtcbiAgY29uc3QgYnVpbHRUaGVtZSA9IGdldFRoZW1lKClcbiAgY29uc3QgdXNlVGhlbWUgPSBzZXR0aW5ncy50aGVtZVxuICAgID8gZGVlcE1lcmdlKGJ1aWx0VGhlbWUsIHNldHRpbmdzLnRoZW1lKVxuICAgIDogYnVpbHRUaGVtZVxuICBcbiAgY29uc3QgdXNlU3R5bGVzID0gc2V0dGluZ3Muc3R5bGVzXG4gICAgPyBkZWVwTWVyZ2UoYmFzZSwgc2V0dGluZ3Muc3R5bGVzKVxuICAgIDogYmFzZVxuICBcbiAgY29uc3QgZmlsbGVkID0ge1xuICAgIC4uLmZpbGxTdHlsZXModXNlVGhlbWUsIHVzZVN0eWxlcylcbiAgfVxuXG4gIHJldHVybiBmaWxsZWRcbn1cblxuZXhwb3J0IHtcbiAgYnVpbGRUaGVtZSxcbiAgc2V0VGhlbWUgYXMgdXBkYXRlVGhlbWVcbn0iLCJsZXQgREVGX0NPTkZJRyA9IHtcbiAgYmFzZTogNSxcbiAgc3ByZWFkOiAyLFxuICByYW5nZTogMTAsXG4gIHVuaXRzOiAncHgnLFxuICByYXc6IGZhbHNlLFxuICBuZWdhdGl2ZTogZmFsc2UsXG59XG5sZXQgREVGX1RIRU1FXG5sZXQgREVGX0NPTE9SUyA9IHtcbiAgYmx1ZTogJyMwM0E5RjQnLFxuICBsaW1lOiAnIzBGQ0VEMScsXG4gIGdyZWVuOiAnIzRDQUY1MCcsXG4gIHJlZDogJyNGQTA3MTknLFxuICBvcmFuZ2U6ICcjRkE3ODA3JyxcblxuICB3aGl0ZTogJyNGRkZGRkYnLFxuICB3aGl0ZTE6ICcjRkNGQ0ZFJyxcbiAgZ3JheTogJyNGNUY1RkEnLFxuICBncmF5MTogJyNENkQ2REInLFxuICBncmF5MjogJyM5OTk5OUMnLFxuICBncmF5MzogJyMzRDNEM0UnLFxuICBncmF5NDogJyMxRjFGMUYnLFxufVxuXG5jb25zdCBidWlsZFVzZUNvbmYgPSB1cGRhdGUgPT4ge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoREVGX0NPTkZJRylcbiAgICAucmVkdWNlKChjb25maWcsIFsga2V5LCB2YWx1ZSBdKSA9PiB7XG4gICAgICBjb25zdCB1cGRhdGVWYWwgPSB1cGRhdGVba2V5XVxuICAgICAgaWYoIXVwZGF0ZVZhbCAmJiB1cGRhdGVWYWwgIT09IGZhbHNlKXtcbiAgICAgICAgY29uZmlnW2tleV0gPSBERUZfQ09ORklHW2tleV1cbiAgICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgICAgfVxuXG4gICAgICBjb25maWdba2V5XSA9IHR5cGVvZiB1cGRhdGVWYWwgPT09IHR5cGVvZiB2YWx1ZVxuICAgICAgICA/IHVwZGF0ZVZhbFxuICAgICAgICA6IHVwZGF0ZVZhbCAhPT0gZmFsc2UgJiYgREVGX0NPTkZJR1trZXldXG5cbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9LCB7fSlcbn1cblxuY29uc3QgYnVpbGRSYW5nZVByb3BzID0gKHR5cGUsIGNvbmZpZywgcG9zdGZpeD0nJykgPT4ge1xuICBjb25zdCB7IHVuaXRzLCByYXcsIHJhbmdlLCBzcHJlYWQsIGJhc2UsIG5lZ2F0aXZlIH0gPSBjb25maWdcbiAgcmV0dXJuIFsgLi4uQXJyYXkocmFuZ2UpIF1cbiAgICAucmVkdWNlKChidWlsZE9iaiwgXywgaW5kKSA9PiB7XG4gICAgICBjb25zdCBjdXIgPSAgTWF0aC5yb3VuZCggKGJhc2UgKyAoc3ByZWFkICogaW5kKSkgKiAxMCApIC8gMTBcbiAgICAgIGNvbnN0IG5hbWUgPSBgJHt0eXBlfSR7Y3VyfWAucmVwbGFjZShcbiAgICAgICAgL1tgfiFAIyQlXiYqKClffCtcXC09Pzs6J1wiLC48Plxce1xcfVxcW1xcXVxcXFxcXC9dL2csICcnXG4gICAgICApXG4gICAgICB1bml0cyAmJiAoYnVpbGRPYmpbIG5hbWUgXSA9IGAke2N1cn0ke3VuaXRzfSR7cG9zdGZpeH1gKVxuICAgICAgbmVnYXRpdmUgJiYgKGJ1aWxkT2JqWyBgJHtuYW1lfU5lZ2AgXSA9IGAtJHtjdXJ9JHt1bml0c30ke3Bvc3RmaXh9YClcbiAgICAgIHJhdyAmJiAoYnVpbGRPYmpbIGAke25hbWV9UmF3YCBdID0gY3VyKVxuICAgICAgcmV0dXJuIGJ1aWxkT2JqXG4gICAgfSwge30pXG59XG5cbmNvbnN0IGJ1aWxkUmFuZ2UgPSB1cGRhdGUgPT4ge1xuICBjb25zdCB0eXBlID0gdXBkYXRlICYmIHVwZGF0ZS50eXBlXG4gIGlmKCF0eXBlIHx8IHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykgcmV0dXJuIHt9XG4gIFxuICBjb25zdCB1c2VDb25mID0gYnVpbGRVc2VDb25mKHVwZGF0ZSlcbiAgY29uc3QgcG9zdGZpeCA9IHVwZGF0ZS5wb3N0Zml4IHx8ICcnXG4gIGNvbnN0IGJ1aWx0ID0gYnVpbGRSYW5nZVByb3BzKHR5cGUsIHVzZUNvbmYsIHBvc3RmaXgpXG4gIFxuICBjb25zdCBiYXNlTmFtZSA9IGAke3R5cGV9JHt1c2VDb25mLmJhc2V9YC5yZXBsYWNlKFxuICAgICAgL1tgfiFAIyQlXiYqKClffCtcXC09Pzs6J1wiLC48Plxce1xcfVxcW1xcXVxcXFxcXC9dL2csICcnXG4gICAgKVxuXG4gIHVzZUNvbmYudW5pdHMgJiZcbiAgICAoYnVpbHRbYmFzZU5hbWVdID0gYCR7dXNlQ29uZi5iYXNlfSR7dXNlQ29uZi51bml0c30ke3Bvc3RmaXh9YClcbiAgdXNlQ29uZi5uZWdhdGl2ZSAmJlxuICAgIChidWlsdFtgJHtiYXNlTmFtZX1OZWdgXSA9IGAtJHt1c2VDb25mLmJhc2V9JHt1c2VDb25mLnVuaXRzfSR7cG9zdGZpeH1gKVxuICB1c2VDb25mLnJhdyAmJlxuICAgIChidWlsdFtgJHtiYXNlTmFtZX1SYXdgXSA9IHVzZUNvbmYuYmFzZSlcblxuICByZXR1cm4gYnVpbHRcbn1cblxubGV0IERFRl9TSVpFID0gYnVpbGRSYW5nZSh7XG4gIHR5cGU6ICdzaXplJyxcbiAgc3ByZWFkOiAxLFxuICByYW5nZTogNDAsXG59KVxubGV0IERFVl9TUEVFRCA9IGJ1aWxkUmFuZ2Uoe1xuICB0eXBlOiAnc3BlZWQnLFxuICB1bml0czogJ3MnLFxuICBzcHJlYWQ6IDAuMjUsXG4gIHJhdzogZmFsc2UsXG4gIGJhc2U6IDAuNSxcbiAgcmFuZ2U6IDUsXG59KVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVGhlbWUgPSAoeyB0aGVtZSwgY29uZmlnLCBjb2xvcnMsIHNpemUsIHNwZWVkIH0pID0+IHtcbiAgaWYoY29sb3JzKSBERUZfQ09MT1JTID0geyAuLi5ERUZfQ09MT1JTLCAuLi5jb2xvcnMgfVxuICBpZihjb25maWcpIERFRl9DT05GSUcgPSB7IC4uLkRFRl9DT05GSUcsIC4uLmNvbmZpZyB9XG4gIGlmKHNpemUpIERFRl9TSVpFID0gc2l6ZS50eXBlID8gYnVpbGRSYW5nZShzaXplKSA6IHsgLi4uREVGX1NJWkUsIC4uLnNpemUgfVxuICBpZihzcGVlZCkgREVWX1NQRUVEID0gc3BlZWQudHlwZSA/IGJ1aWxkUmFuZ2Uoc3BlZWQpIDogeyAuLi5ERUZfU0laRSwgLi4uc3BlZWQgfVxuICBpZih0aGVtZSkgREVGX1RIRU1FID0geyAuLi5ERUZfVEhFTUUsIC4uLnRoZW1lIH1cbiAgXG4gIHJldHVybiBnZXRUaGVtZSgpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUaGVtZSA9ICgpID0+ICh7XG4gIHNpemUyME5lZzogXCItMjBweFwiLFxuIFxuICBmb250UHJpbWFyeTogYFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmYCxcbiAgZm9udFNlY29uZGFyeTogYFwiQ2FiaW5cIiwgc2Fucy1zZXJpZmAsXG4gIGZvbnRUaGlyZDogYFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZgLFxuICBmb250TGl0ZTogJzMwMCcsXG4gIGZvbnROb3JtYWw6ICdub3JtYWwnLFxuICBmb250Qm9sZDogJ2JvbGQnLFxuXG4gXG4gIHRvZ2dsZUhvdmVyQ29sb3I6IERFRl9DT0xPUlMuYmx1ZSxcbiAgdG9nZ2xlT3BlbkNvbG9yOiBERUZfQ09MT1JTLmxpbWUsXG4gIHRvZ2dsZUVkaXRDb2xvcjogREVGX0NPTE9SUy5ncmVlbixcbiAgdG9nZ2xlRXJyb3JDb2xvcjogREVGX0NPTE9SUy5yZWQsXG5cbiBcbiAgaXRlbUVkaXRCYWNrQ29sb3I6IERFRl9DT0xPUlMud2hpdGUsXG4gIGl0ZW1Ib3ZlckJhY2tDb2xvcjogREVGX0NPTE9SUy53aGl0ZTEsXG4gIGl0ZW1PcGVuQmFja0NvbG9yOiBERUZfQ09MT1JTLmdyYXksXG4gIGl0ZW1BY3RpdmVCYWNrQ29sb3I6IERFRl9DT0xPUlMuZ3JheSxcblxuIFxuICBwYXNzaXZlQnRuT3BhY2l0eTogJzAnLFxuICBhY3RpdmVCdG5PcGFjaXR5OiAnMScsXG4gIHBhc3NpdmVCdG5Db2xvcjogREVGX0NPTE9SUy5ncmF5MyxcbiAgYWN0aXZlRWRpdENvbG9yOiBERUZfQ09MT1JTLmxpbWUsXG4gIGFjdGl2ZUNvcHlDb2xvcjogREVGX0NPTE9SUy5ibHVlLFxuICBhY3RpdmVEcmFnQ29sb3I6IERFRl9DT0xPUlMub3JhbmdlLFxuICBhY3RpdmVBZGRDb2xvcjogREVGX0NPTE9SUy5ncmVlbixcbiAgYWN0aXZlU2F2ZUNvbG9yOiBERUZfQ09MT1JTLmdyZWVuLFxuICBhY3RpdmVDYW5jZWxDb2xvcjogREVGX0NPTE9SUy5yZWQsXG4gIGFjdGl2ZURlbGV0ZUNvbG9yOiBERUZfQ09MT1JTLnJlZCxcbiAgXG4gXG4gIHR5cGVMYWJlbENvbG9yOiBERUZfQ09MT1JTLmdyYXkyLFxuICBcbiBcbiAgaW5wdXRFZGl0Qm9yZGVyOiAgYDFweCBzb2xpZCAke0RFRl9DT0xPUlMuZ3JheTF9YCxcbiAgaW5wdXRGb2N1c0JvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke0RFRl9DT0xPUlMuZ3JlZW59YCxcbiAgaW5wdXRFcnJvckJvcmRlcjogYDFweCBzb2xpZCAke0RFRl9DT0xPUlMucmVkfWAsXG4gIGlucHV0RGlzYWJsZWRCYWNrQ29sb3I6IERFRl9DT0xPUlMuZ3JheTEsXG4gIGlucHV0RGlzYWJsZWRDb2xvcjogREVGX0NPTE9SUy5ncmF5MixcbiAgaW5wdXREaXNhYmxlZE9wYWNpdHk6IDAuNSxcbiAgaW5wdXREaXNhYmxlZEN1cnNvcjogJ25vdC1hbGxvd2VkJyxcblxuIFxuICBpdGVtQm9yZGVyOiBgMnB4IHNvbGlkIHRyYW5zcGFyZW50YCxcbiAgaXRlbUhvdmVyQm9yZGVyOiBgMnB4IHNvbGlkICR7REVGX0NPTE9SUy5ibHVlfWAsXG4gIGl0ZW1FZGl0Qm9yZGVyOiBgMnB4IHNvbGlkICR7REVGX0NPTE9SUy5ncmVlbn1gLFxuICBpdGVtRW1wdHlCb3JkZXI6IGAycHggc29saWQgJHtERUZfQ09MT1JTLmdyZWVufWAsXG4gIGl0ZW1FcnJvckJvcmRlcjogYDJweCBzb2xpZCAke0RFRl9DT0xPUlMucmVkfWAsXG4gIFxuICBpdGVtRXJyb3JUZXh0Q29sb3I6IERFRl9DT0xPUlMud2hpdGUsXG4gIGl0ZW1FcnJvclRleHRCYWNrZ3JvdW5kOiBERUZfQ09MT1JTLnJlZCxcbiAgXG4gIGhlYWRlck9wZW5Cb3JkZXI6IGAycHggc29saWQgJHtERUZfQ09MT1JTLmxpbWV9YCxcblxuICAuLi5ERUZfQ09MT1JTLFxuICAuLi5ERUZfU0laRSxcbiAgLi4uREVWX1NQRUVELFxufSkiLCJpbXBvcnQgeyBpc0Z1bmMsIGlzU3RyIH0gZnJvbSAnanNVdGlscydcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUGFyZW50SGVpZ2h0cyA9IChzY2hlbWEsIHVwZGF0ZUhlaWdodCwgb2Zmc2V0PTApID0+IHtcbiAgY29uc3QgZG9tTm9kZSA9IHNjaGVtYSAmJiBzY2hlbWEuZG9tTm9kZVxuICBpZighZG9tTm9kZSB8fCAhdXBkYXRlSGVpZ2h0KVxuICAgIHJldHVyblxuICBcbiAgY29uc3QgbmV3SGVpZ2h0ID0gZG9tTm9kZS5zY3JvbGxIZWlnaHQgKyB1cGRhdGVIZWlnaHRcbiAgZG9tTm9kZS5zdHlsZS5tYXhIZWlnaHQgPSBgJHtuZXdIZWlnaHQgKyBvZmZzZXR9cHhgXG4gIHNjaGVtYS5wYXJlbnQgJiYgdXBkYXRlUGFyZW50SGVpZ2h0cyhzY2hlbWEucGFyZW50LCBuZXdIZWlnaHQpXG59XG5cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBhcmVudENvbnN0cnVjdCA9IChjb25maWcsIHBhcmVudCkgPT4ge1xuICBPYmplY3QuZW50cmllcyhDb25zdGFudHMuVmFsdWVzLlBBUkVOVF9PVkVSV1JJVEUpLm1hcCgoWyBrZXksIHR5cGUgXSkgPT4ge1xuICAgIGlmKHR5cGVvZiBjb25maWdba2V5XSA9PT0gdHlwZSAmJiBwYXJlbnRba2V5XSAhPT0gY29uZmlnW2tleV0pXG4gICAgICBwYXJlbnRba2V5XSA9IGNvbmZpZ1trZXldXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBhZGRDdXN0b21FdmVudHMgPSAoY29uZmlnLCB1c2VyRXZlbnRzKSA9PiAoXG4gIE9iamVjdFxuICAgIC5rZXlzKENvbnN0YW50cy5WYWx1ZXMuQ1VTVE9NX0VWRU5UUylcbiAgICAubWFwKGtleSA9PiAoXG4gICAgICB1c2VyRXZlbnRzW2tleV0gPSBpc0Z1bmMoY29uZmlnW2tleV0pICYmIGNvbmZpZ1trZXldIHx8IENvbnN0YW50cy5WYWx1ZXMuQ1VTVE9NX0VWRU5UU1trZXldXG4gICAgKSlcbilcblxuZXhwb3J0IGNvbnN0IGFkZEFsbG93ZWRDb25maWdPcHRzID0gKGNvbmZpZywgYmFzZUNvbmZpZykgPT4gKHtcbiAgLi4uYmFzZUNvbmZpZyxcbiAgLi4uQ29uc3RhbnRzLlZhbHVlcy5UWVBFU19DT05GSUdfT1BUU1xuICAgIC5yZWR1Y2UoKHR5cGVDb25mLCBvcHQpID0+IChcbiAgICAgIChvcHQgaW4gY29uZmlnKSAgJiYgKHR5cGVDb25mW29wdF0gPSBjb25maWdbb3B0XSkgfHwgdHlwZUNvbmYpLCB7fVxuICAgICkgXG59KVxuXG5leHBvcnQgY29uc3QgY2FsbEVkaXRvciA9IChlLCB1cGRhdGUsIHVzckV2ZW50LCB0eXBlLCBFZGl0b3IpID0+IHtcbiAgZSAmJiBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIGNvbnN0IGlkID0gc2hvdWxkRG9EZWZhdWx0KCBlLCB1cGRhdGUsIEVkaXRvciwgdXNyRXZlbnQgKVxuICBpZCAmJiBFZGl0b3JbdHlwZV0gJiYgRWRpdG9yW3R5cGVdKGlkLCB1cGRhdGUpXG59XG5cbmV4cG9ydCBjb25zdCBzaG91bGREb0RlZmF1bHQgPSAoZSwgdXBkYXRlLCBFZGl0b3IsIHVzZXJFdmVudCkgPT4ge1xuICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoQ29uc3RhbnRzLlZhbHVlcy5EQVRBX1RSRUVfSUQpXG4gIHJldHVybiBpZCAmJiB1c2VyRXZlbnQgJiYgdXNlckV2ZW50KGUsIHVwZGF0ZSwgaWQsIEVkaXRvcikgPT09IGZhbHNlIHx8IGlkXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVWYWx1ZSA9ICh1cGRhdGUsIGlucHV0KSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWVcblxuIFxuIFxuICBpZihpbnB1dC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyAmJiBpbnB1dC5jbGFzc0xpc3QuY29udGFpbnMoQ29uc3RhbnRzLlZhbHVlcy5OVU1CRVJfQ0xTKSl7XG4gICBcbiAgICBjb25zdCBudW1WYWwgPSBOdW1iZXIodmFsdWUpXG4gICBcbiAgICAhaXNOYU4obnVtVmFsKSAmJiAodXBkYXRlLnZhbHVlID0gbnVtVmFsKVxuICB9XG4gXG4gIGVsc2UgaWYodHlwZW9mIHVwZGF0ZS5vcmlnaW5hbCA9PT0gJ2Jvb2xlYW4nICYmICh2YWx1ZSA9PT0gJ2ZhbHNlJyB8fCB2YWx1ZSA9PT0gJ3RydWUnKSlcbiAgICB1cGRhdGUudmFsdWUgPSB2YWx1ZSA9PT0gJ3RydWUnXG4gXG4gIGVsc2UgdXBkYXRlLnZhbHVlID0gdmFsdWVcblxufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlUGFzdEFjdGlvbiA9IHR5cGUgPT4gKFxuICBBcnJheVxuICAgIC5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke0NvbnN0YW50cy5WYWx1ZXMuUEFTVEVfQUNUSU9OX0NMU31gKSlcbiAgICAubWFwKG5vZGUgPT4ge1xuICAgICAgbm9kZSAmJiBub2RlLmNsYXNzTGlzdCAmJiBub2RlLmNsYXNzTGlzdFt0eXBlXShDb25zdGFudHMuVmFsdWVzLlNIT1dfUEFTVEVfQ0xTKVxuICAgIH0pXG4pXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTdWZmaXggPSAodmFsdWUsIHN1ZmZpeCwgcmVtb3ZlKSA9PiB7XG4gIGlmKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkgcmV0dXJuXG4gIHZhbHVlID0gIWlzU3RyKHZhbHVlKSAmJiBgJHt2YWx1ZX1gIHx8IHZhbHVlXG4gIGxldCBjbGVhblZhbCA9IHZhbHVlLnJlcGxhY2UoL1xcRC9nLCcnKVxuICBjbGVhblZhbCA9IGNsZWFuVmFsLmxlbmd0aCAmJiB2YWx1ZVswXSA9PT0gJy0nXG4gICAgPyBgLSR7Y2xlYW5WYWx9YFxuICAgIDogY2xlYW5WYWxcblxuICByZXR1cm4gcmVtb3ZlXG4gICAgPyBjbGVhblZhbFxuICAgIDogY2xlYW5WYWwgJiYgY2xlYW5WYWwubGVuZ3RoICYmIGAke2NsZWFuVmFsfSR7c3VmZml4fWAgfHwgJydcbn1cblxuZXhwb3J0IGNvbnN0IHN1ZmZpeFNlbGVjdGlvbiA9IGZ1bmN0aW9uKGUsIEVkaXRvcikge1xuICBjb25zdCBpbnB1dCA9ICBlLnRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXRcbiAgY29uc3Qga2V5ID0gaW5wdXQgJiYgaW5wdXQuZ2V0QXR0cmlidXRlKENvbnN0YW50cy5WYWx1ZXMuREFUQV9TQ0hFTUFfS0VZKVxuICBpZigha2V5IHx8IGtleSAhPT0gJ3ZhbHVlJyB8fCAhaW5wdXQgfHwgIWlucHV0LnZhbHVlKSByZXR1cm5cblxuICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKClcbiAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLnRvU3RyaW5nKClcblxuICByZXR1cm4gIXNlbGVjdGVkXG4gICAgPyBpbnB1dC5zZWxlY3Rpb25FbmQgPT09IGlucHV0LnZhbHVlLmxlbmd0aCAmJlxuICAgICAgICBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShpbnB1dC5zZWxlY3Rpb25FbmQgLSAxLCBpbnB1dC5zZWxlY3Rpb25FbmQgLSAxKVxuICAgIDogc2VsZWN0ZWRbc2VsZWN0ZWQubGVuZ3RoIC0gMV0gPT09IHRoaXMuc3VmZml4ICYmXG4gICAgICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKGlucHV0LnNlbGVjdGlvblN0YXJ0LCBpbnB1dC5zZWxlY3Rpb25FbmQgLSAxKVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVmFsV2l0aFN1ZmZpeCA9ICh1cGRhdGUsIGlucHV0LCBzdWZmaXgpID0+IHtcbiAgY29uc3QgdmFsdWUgPSB1cGRhdGVTdWZmaXgoaW5wdXQudmFsdWUsIHN1ZmZpeCwgdHJ1ZSlcbiAgXG4gIGlmKCF2YWx1ZSkgcmV0dXJuIGlucHV0LnZhbHVlID0gJydcbiBcbiAgY29uc3QgbnVtVmFsID0gKHZhbHVlIHx8IHZhbHVlID09PSAwKSAmJiBOdW1iZXIodmFsdWUpXG5cbiBcbiAgaWYoIWlzTmFOKG51bVZhbCkpe1xuICAgIHVwZGF0ZS52YWx1ZSA9IHVwZGF0ZVN1ZmZpeChudW1WYWwsIHN1ZmZpeClcbiAgICB1cGRhdGUudmFsdWUgIT09IGlucHV0LnZhbHVlICYmIChpbnB1dC52YWx1ZSA9IHVwZGF0ZS52YWx1ZSlcbiAgfVxuICBlbHNlIGlucHV0LnZhbHVlID0gJydcbn1cblxuXG5leHBvcnQgY29uc3QgY2hlY2tJbnB1dFN1cHBvcnQgPSBpbnB1dFR5cGUgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0VHlwZSk7XG5cbiAgY29uc3Qgbm90QW5JbnB1dFZhbHVlID0gJ25vdC1hLWlucHV0LXZhbHVlJztcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG5vdEFuSW5wdXRWYWx1ZSk7IFxuXG4gIHJldHVybiAoaW5wdXQudmFsdWUgIT09IG5vdEFuSW5wdXRWYWx1ZSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
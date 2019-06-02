"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-float");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("../base"));

var _utils = require("../../utils");

var _jsUtils = require("jsUtils");

var _constants = _interopRequireDefault(require("../../constants"));

var _components = require("../../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      var id = e.currentTarget.getAttribute(_constants.default.Values.DATA_TREE_ID);
      if (!id) return;
      var schema = Editor.schema(id); // If no schema just return, cause we cant update

      if (!schema) return;
      var update = {
        open: !schema.open // --- Does the opposite of the didUpdate method below --- //
        // Check if the store is open, but the update is changing to closed

      };

      if (_this.store.isOpen && !update.open) {
        // If true, close the object before the update is called
        _this.store.isOpen = false;
        var refNode = schema.domNode; // First update the maxHeight, to `close the object`

        refNode.style.maxHeight = _this.store.closedMaxHt; // Use a timeout to wait until the object is closed

        return setTimeout(function () {
          // Then update the store, can call the update method
          // Now the object have been closed
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
      if (!transRule) return; // Convert the transition rule speed into milliseconds

      var speed = parseFloat(transRule.split(' ')[1]) * 1000;
      if (typeof speed !== 'number' || isNaN(speed)) return;
      _this.toggleSpeed = speed;
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function (props, Editor) {
      var refNode = props.schema.domNode;
      if (!refNode || refNode.style.maxHeight) return; // Set the currentMax height

      _this.store.currentMaxHt = "".concat(refNode.scrollHeight + heightOffset, "px");
      _this.store.closedMaxHt = _this.store.currentMaxHt;
      refNode.style.maxHeight = _this.store.currentMaxHt; // If it's the root node, it defaults to open

      if (props.schema.isRoot && props.schema.open) {
        _this.store.isOpen = true; // So use the header child height to set the default closed height

        var rootHeader = document.getElementById(_constants.default.Values.JT_ROOT_HEADER_ID);
        if (!rootHeader) return;
        _this.store.closedMaxHt = "".concat(rootHeader.scrollHeight + heightOffset, "px");
      }

      _this.getTransSpeed(refNode);
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (props, Editor) {
      var schema = props.schema;

      _this.setOriginal(schema); // Clear out the updated, because the instance just updated


      _this.updated && (0, _jsUtils.clearObj)(_this.updated); // ----- height update ----- //
      // If no comp || not open, just return

      var refNode = schema.domNode;
      if (!refNode) return;
      var childrenHt = getChildrenHt(refNode); // --- Does the opposite of the toggle method above --- //
      // Check if the schema is open, but the local store is closed

      if (!_this.store.isOpen && schema.open) {
        // If true, set the store to open, and update the maxHeight of the element
        _this.store.isOpen = true;
        _this.store.currentMaxHt = "".concat(childrenHt, "px"); // Only set in open, so it keeps the height when about to close

        refNode.style.maxHeight = _this.store.currentMaxHt;
      } // If the schema is open, update all the parent heights
      // This ensures the parent height does not cut off the children
      // when a child grows larger


      (schema.mode === _constants.default.Schema.MODES.EDIT || schema.open) && (0, _utils.updateParentHeights)(schema, childrenHt, heightOffset);
    });

    _defineProperty(_assertThisInitialized(_this), "onAdd", function (e, Editor) {
      e.stopPropagation();
      var id = e.currentTarget.getAttribute(_constants.default.Values.DATA_TREE_ID);
      var schema = id && Editor.schema(id);
      var update = {
        parent: schema,
        mode: _constants.default.Schema.MODES.ADD,
        matchType: _constants.default.Schema.EMPTY
      };
      if (Array.isArray(schema.value)) update.key = schema.value.length;
      schema && Editor.add({
        parent: schema,
        mode: _constants.default.Schema.MODES.ADD,
        matchType: _constants.default.Schema.EMPTY
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
      var notEditMode = mode !== _constants.default.Schema.MODES.EDIT;
      var classes = open && "list-open" || '';
      var actions = {};
      if (notEditMode) actions.onToggle = _this.onToggle;
      if (open && notEditMode) actions.onAdd = _this.onAdd;
      return (0, _components.List)(_objectSpread({
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
          // Always set the height to be the currentMax height
          // When opened, height will be updated in componentDidUpdate
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
}(_base.default);

var _default = GroupType;
exports.default = _default;
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _build_theme = require("../../styles/build_theme");

var _constants = _interopRequireDefault(require("../../constants"));

var _jsutils = require("jsutils");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    var input = e.target || e.currentTarget; // Get the key for the input

    var key = input && input.getAttribute(_constants.default.Values.DATA_SCHEMA_KEY);
    if (!key || !input) return; // Get the values to compare

    var original = _this.original[key];
    var value = input.value; // Build our update object

    var update = {
      key: key,
      original: original
    };
    _this.suffix // update the value and suffix
    ? (0, _utils.updateValWithSuffix)(update, input, _this.suffix) // Set the value to update
    : (0, _utils.updateValue)(update, input); // Ensure these was a change, before we call the update

    if (original === update.value) return; // Check if the input width should be update to match the value

    update.value && _this.config.expandOnChange !== false && _this.setWidth(input); // Call the userEvent to check if it should be updated
    // Then update the value locally
    // When the save action is called, this value will then be saved to the tree

    if (_this.userEvents.onChange(e, update, _this.original.id, Editor) !== false) _this.updated[update.key] = update.value;
  });

  _defineProperty(this, "onCancel", function (e, Editor) {
    e.stopPropagation();
    var update = {
      mode: undefined,
      value: _this.original.value
    };
    var id = (0, _utils.shouldDoDefault)(e, update, Editor, _this.userEvents.onCancel);
    if (!id) return; // Check the pending, if true, that means cancel was pressed
    // Without the key / value ever being saved, so remove the item

    var schema = Editor.schema(id);
    schema && schema.pending ? Editor.remove(id) : Editor.update(id, update);
  });

  _defineProperty(this, "onSave", function (e, Editor) {
    (0, _utils.callEditor)(e, _objectSpread({}, _this.updated, {
      mode: undefined
    }), _this.userEvents.onSave, 'update', Editor);
  });

  _defineProperty(this, "onEdit", function (e, Editor) {
    (0, _utils.callEditor)(e, {
      mode: _constants.default.Schema.MODES.EDIT
    }, _this.userEvents.onEdit, 'update', Editor);
  });

  _defineProperty(this, "onDelete", function (e, Editor) {
    (0, _utils.callEditor)(e, {
      mode: _constants.default.Schema.MODES.REMOVE
    }, _this.userEvents.onDelete, 'remove', Editor);
  });

  _defineProperty(this, "onCopy", function (e, Editor) {
    e && e.stopPropagation();
    var id = (0, _utils.shouldDoDefault)(e, {
      mode: _constants.default.Schema.MODES.REMOVE
    }, Editor, _this.userEvents.onCopy);
    if (!id) return;
    Editor.temp = id;
    (0, _utils.togglePastAction)('add');
  });

  _defineProperty(this, "onCut", function (e, Editor) {
    e && e.stopPropagation();
    var update = {
      mode: _constants.default.Schema.MODES.CUT
    };
    var id = (0, _utils.shouldDoDefault)(e, update, Editor, _this.userEvents.onCut);
    if (!id) return;
    Editor.temp = id;
    (0, _utils.togglePastAction)('add');
    Editor.remove && Editor.update(id, update);
  });

  _defineProperty(this, "onPaste", function (e, Editor) {
    e && e.stopPropagation();
    var schema = Editor.schema(e.currentTarget.getAttribute(_constants.default.Values.DATA_TREE_ID));
    Editor.replaceAtPos(schema.id, _objectSpread({}, Editor.temp));
    Editor.temp = undefined;
    (0, _utils.togglePastAction)('remove');
  });

  _defineProperty(this, "shouldDoDefault", function () {
    return _utils.shouldDoDefault.apply(void 0, arguments);
  });

  _defineProperty(this, "getActions", function (mode, extra) {
    return mode !== _constants.default.Schema.MODES.EDIT ? _objectSpread({
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
    _this.setOriginal(props.schema); // Clear out the updated, because the component just updated


    _this.updated && (0, _jsutils.clearObj)(_this.updated);
  });

  _defineProperty(this, "shouldComponentUpdate", function (params) {
    return true;
  });

  _defineProperty(this, "componentWillUnmount", function (Editor) {
    // Set to undefined, because when the instance gets remove, we don't want it 
    // to remove the value; because it's a ref to the actual value in the tree
    _this.original.value = undefined;
  });

  _defineProperty(this, "render", function (props) {
    return '';
  });

  if (!config) return;
  (0, _utils.updateParentConstruct)(config, this.constructor);
  (0, _utils.addCustomEvents)(config, this.userEvents);
  this.config = (0, _utils.addAllowedConfigOpts)(config, this.config) || {};
};

exports.default = BaseType;

_defineProperty(BaseType, "priority", 0);

_defineProperty(BaseType, "matchHelper", function () {});

_defineProperty(BaseType, "eval", function (value) {
  return true;
});

_defineProperty(BaseType, "defaultValue", function (newType, schema, settings) {
  return '';
});

_defineProperty(BaseType, "getStyles", function (settings) {
  return (0, _build_theme.buildTheme)(settings);
});

_defineProperty(BaseType, "error", function (_ref) {
  var message = _ref.message;
  return message || "Invalid input format";
});
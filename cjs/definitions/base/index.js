"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _build_theme = require("../../styles/build_theme");

var _constants = _interopRequireDefault(require("../../constants"));

var _jsUtils = require("jsUtils");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BaseType {
  constructor(config, _Editor) {
    _defineProperty(this, "userEvents", {});

    _defineProperty(this, "updated", {});

    _defineProperty(this, "original", {});

    _defineProperty(this, "onChange", (e, Editor) => {
      const input = e.target || e.currentTarget; // Get the key for the input

      const key = input && input.getAttribute(_constants.default.Values.DATA_SCHEMA_KEY);
      if (!key || !input) return; // Get the values to compare

      const original = this.original[key];
      const value = input.value; // Build our update object

      const update = {
        key,
        original
      };
      this.suffix // update the value and suffix
      ? (0, _utils.updateValWithSuffix)(update, input, this.suffix) // Set the value to update
      : (0, _utils.updateValue)(update, input); // Ensure these was a change, before we call the update

      if (original === update.value) return; // Check if the input width should be update to match the value

      update.value && this.config.expandOnChange !== false && this.setWidth(input); // Call the userEvent to check if it should be updated
      // Then update the value locally
      // When the save action is called, this value will then be saved to the tree

      if (this.userEvents.onChange(e, update, this.original.id, Editor) !== false) this.updated[update.key] = update.value;
    });

    _defineProperty(this, "onCancel", (e, Editor) => {
      e.stopPropagation();
      const update = {
        mode: undefined,
        value: this.original.value
      };
      const id = (0, _utils.shouldDoDefault)(e, update, Editor, this.userEvents.onCancel);
      if (!id) return; // Check the pending, if true, that means cancel was pressed
      // Without the key / value ever being saved, so remove the item

      const schema = Editor.schema(id);
      schema && schema.pending ? Editor.remove(id) : Editor.update(id, update);
    });

    _defineProperty(this, "onSave", (e, Editor) => {
      (0, _utils.callEditor)(e, _objectSpread({}, this.updated, {
        mode: undefined
      }), this.userEvents.onSave, 'update', Editor);
    });

    _defineProperty(this, "onEdit", (e, Editor) => {
      (0, _utils.callEditor)(e, {
        mode: _constants.default.Schema.MODES.EDIT
      }, this.userEvents.onEdit, 'update', Editor);
    });

    _defineProperty(this, "onDelete", (e, Editor) => {
      (0, _utils.callEditor)(e, {
        mode: _constants.default.Schema.MODES.REMOVE
      }, this.userEvents.onDelete, 'remove', Editor);
    });

    _defineProperty(this, "onCopy", (e, Editor) => {
      e && e.stopPropagation();
      const id = (0, _utils.shouldDoDefault)(e, {
        mode: _constants.default.Schema.MODES.REMOVE
      }, Editor, this.userEvents.onCopy);
      if (!id) return;
      Editor.temp = id;
      (0, _utils.togglePastAction)('add');
    });

    _defineProperty(this, "onCut", (e, Editor) => {
      e && e.stopPropagation();
      const update = {
        mode: _constants.default.Schema.MODES.CUT
      };
      const id = (0, _utils.shouldDoDefault)(e, update, Editor, this.userEvents.onCut);
      if (!id) return;
      Editor.temp = id;
      (0, _utils.togglePastAction)('add');
      Editor.remove && Editor.update(id, update);
    });

    _defineProperty(this, "onPaste", (e, Editor) => {
      e && e.stopPropagation();
      const schema = Editor.schema(e.currentTarget.getAttribute(_constants.default.Values.DATA_TREE_ID));
      Editor.replaceAtPos(schema.id, _objectSpread({}, Editor.temp));
      Editor.temp = undefined;
      (0, _utils.togglePastAction)('remove');
    });

    _defineProperty(this, "shouldDoDefault", (...args) => (0, _utils.shouldDoDefault)(...args));

    _defineProperty(this, "getActions", (mode, extra) => {
      return mode !== _constants.default.Schema.MODES.EDIT ? _objectSpread({
        onEdit: this.onEdit,
        onCopy: this.onCopy,
        onCut: this.onCut,
        onPaste: this.onPaste,
        onDelete: this.onDelete
      }, extra) : _objectSpread({
        onChange: this.onChange,
        onSave: this.onSave,
        onCancel: this.onCancel
      }, extra);
    });

    _defineProperty(this, "setWidth", input => input && input.value && (input.style.width = `${input.value.length}ch`));

    _defineProperty(this, "buildEvents", (schema, domNode) => domNode && ['input', 'select', 'textarea'].map(tag => Array.from(domNode.getElementsByTagName(tag)).map(input => {
      input.oninput = this.onChange;
      this.config.expandOnChange !== false && this.setWidth(input);
    })));

    _defineProperty(this, "setOriginal", schema => {
      this.buildEvents(schema, schema.domNode);

      const parent = schema.parent,
            instance = schema.instance,
            domNode = schema.domNode,
            original = _objectWithoutProperties(schema, ["parent", "instance", "domNode"]);

      this.original = original;
    });

    _defineProperty(this, "componentDidMount", (props, Editor) => {
      this.setOriginal(props.schema);
    });

    _defineProperty(this, "componentDidUpdate", (props, Editor) => {
      this.setOriginal(props.schema); // Clear out the updated, because the component just updated

      this.updated && (0, _jsUtils.clearObj)(this.updated);
    });

    _defineProperty(this, "shouldComponentUpdate", params => {
      return true;
    });

    _defineProperty(this, "componentWillUnmount", Editor => {
      // Set to undefined, because when the instance gets remove, we don't want it 
      // to remove the value; because it's a ref to the actual value in the tree
      this.original.value = undefined;
    });

    _defineProperty(this, "render", props => {
      return '';
    });

    if (!config) return;
    (0, _utils.updateParentConstruct)(config, this.constructor);
    (0, _utils.addCustomEvents)(config, this.userEvents);
    this.config = (0, _utils.addAllowedConfigOpts)(config, this.config) || {};
  }

}

exports.default = BaseType;

_defineProperty(BaseType, "priority", 0);

_defineProperty(BaseType, "matchHelper", () => {});

_defineProperty(BaseType, "eval", value => true);

_defineProperty(BaseType, "defaultValue", (newType, schema, settings) => '');

_defineProperty(BaseType, "getStyles", settings => (0, _build_theme.buildTheme)(settings));

_defineProperty(BaseType, "error", ({
  message
}) => message || `Invalid input format`);
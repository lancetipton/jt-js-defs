"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("../base"));

var _cleave = _interopRequireDefault(require("cleave.js"));

var _jsutils = require("jsutils");

var _constants = _interopRequireDefault(require("../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getCleaveEl = (Editor, id) => {
  const schema = Editor.schema(id);
  return schema && schema.domNode && schema.domNode.getElementsByClassName(_constants.default.Values.CLEAVE_CLS)[0];
};

class CleaveType extends _base.default {
  constructor(config) {
    super(config);

    _defineProperty(this, "onCleaveChange", (e, Editor) => {
      // Sometimes this method gets called before the cleave is initialized
      // So if no cleave, but return 
      if (!this.cleave) return; // If there is no cleave element, then just return
      // this method should never have been called

      if (!this.cleave.element) return console.warn(`Called onCleaveChange but no cleave element exists`, this);
      const update = {
        value: e.target.rawValue,
        key: this.cleave.element.getAttribute(_constants.default.Values.DATA_SCHEMA_KEY),
        original: this.original.value // Check if the input should be a number

      };

      if (this.cleave.element.classList.contains(_constants.default.Values.NUMBER_CLS)) {
        const numVal = Number(update.value); // If it's a valid number use that instead

        !isNaN(numVal) && (update.value = numVal);
      } // Ensure we have a valid key and value, and there was an update


      if (update.value === undefined || update.key === undefined || this.original[update.key] && this.original[update.key] === update.value) return;
      this.config.expandOnChange !== false && this.setWidth(getCleaveEl(Editor, this.original.id));
      return this.original.value !== update.value && this.userEvents.onChange(e, update, this.original.id, Editor) !== false && (this.updated.value = update.value);
    });

    _defineProperty(this, "checkCleave", (schema, domNode) => {
      if (domNode.classList && domNode.classList.contains(_constants.default.Values.CLEAVE_CLS)) {
        // Set the onValueChanged cb here, so we get access to the injected Editor
        this.cleaveOpts.onValueChanged = this.onCleaveChange; // If a cleave instance already exists, clear it out

        this.cleave && this.clearCleave(); // Create a new cleave instance, with the current domNode

        this.cleave = new _cleave.default(domNode, this.cleaveOpts); // Set the initial cleave value

        this.cleave.setRawValue(schema.value);
        return true;
      }
    });

    _defineProperty(this, "buildEvents", (schema, domNode) => domNode && Array.from(domNode.getElementsByTagName('input')).map(input => {
      // Checks if it has the cleave class
      // Catches changes for the key input
      !this.cleave && this.checkCleave(schema, input) ? input.oninput = undefined : input.oninput = this.onChange;
      this.config.expandOnChange !== false && this.setWidth(input);
    }));

    _defineProperty(this, "clearCleave", (rmOpts = true) => {
      if (!this.cleave) return;
      this.cleave.destroy();
      this.cleave = undefined;
      rmOpts && (0, _jsutils.clearObj)(this.cleaveOpts);
    });

    _defineProperty(this, "componentDidUpdate", (props, Editor) => {
      const schema = props.schema; // If not in edit mode, clear out cleave

      if (schema.mode !== _constants.default.Schema.MODES.EDIT) this.clearCleave(false); // If in edit mode, and no cleave, add the cleave to the domNode
      else if (!this.cleave) this.buildEvents(schema, schema.domNode); // Else update the cleave to the current raw value
        else this.cleave.setRawValue(schema.value);

      const parent = schema.parent,
            instance = schema.instance,
            domNode = schema.domNode,
            original = _objectWithoutProperties(schema, ["parent", "instance", "domNode"]); // Update original with current schema


      this.original = original; // Clear out the updated, because we just updated

      this.updated && (0, _jsutils.clearObj)(this.updated);
    });

    _defineProperty(this, "componentWillUnmount", Editor => {
      // Set to undefined, because when the instance gets remove, we don't want it 
      // to remove the value; it's a ref to the actual value in the tree
      this.original.value = undefined;
      this.clearCleave();
    });

    this.cleaveOpts = _objectSpread({
      onValueChanged: this.onCleaveChange
    }, config.cleave);
  }

}

var _default = CleaveType;
exports.default = _default;
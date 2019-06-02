"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("../base"));

var _components = require("../../components");

var _constants = _interopRequireDefault(require("../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class EmptyType extends _base.default {
  constructor(config) {
    super(_objectSpread({}, config));

    _defineProperty(this, "onCancel", (e, Editor) => {
      const update = {
        remove: true
      };
      const id = this.shouldDoDefault(e, update, Editor, this.userEvents.onCancel);
      id && Editor.remove(id);
    });

    _defineProperty(this, "onTypeChange", (e, Editor) => {
      const input = e.target || e.currentTarget;
      const value = input.value;
      const key = input.getAttribute(_constants.default.Values.DATA_SCHEMA_KEY);
      if (value === undefined || key === undefined || this.original[key] && this.original[key] === value) return;
      value && this.config.expandOnChange !== false && this.setWidth(input);
      const update = {
        matchType: value
      };
      if (this.updated.key && this.updated.key !== this.original.key) update.key = this.updated.key;
      this.userEvents.onChange(e, update, this.original.id, Editor) !== false && this.original.id && Editor.update(this.original.id, update);
    });

    _defineProperty(this, "render", props => {
      const _props$schema = props.schema,
            id = _props$schema.id,
            key = _props$schema.key,
            value = _props$schema.value,
            mode = _props$schema.mode,
            matchType = _props$schema.matchType,
            keyType = _props$schema.keyType,
            parent = _props$schema.parent,
            error = _props$schema.error,
            Types = props.settings.Editor.Types;
      return (0, _components.Item)(_objectSpread({
        id,
        value: '',
        Types,
        error,
        key: Array.isArray(parent.value) ? key : '',
        type: _constants.default.Schema.EMPTY,
        showLabel: true,
        keyType: keyType || 'text',
        keyEdit: !parent || !Array.isArray(parent.value),
        mode: _constants.default.Schema.MODES.EDIT
      }, this.getActions(_constants.default.Schema.MODES.EDIT, {
        onTypeChange: this.onTypeChange
      }), {
        config: this.config
      }));
    });
  }

}

_defineProperty(EmptyType, "priority", 1);

_defineProperty(EmptyType, "eval", value => value === undefined);

_defineProperty(EmptyType, "defaultValue", (newType, schema, settings) => undefined);

var _default = EmptyType;
exports.default = _default;
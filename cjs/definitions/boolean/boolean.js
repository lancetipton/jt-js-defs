"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("../base"));

var _components = require("../../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BooleanType extends _base.default {
  constructor(config) {
    super(_objectSpread({}, config));

    _defineProperty(this, "render", props => {
      const _props$schema = props.schema,
            id = _props$schema.id,
            key = _props$schema.key,
            value = _props$schema.value,
            mode = _props$schema.mode,
            matchType = _props$schema.matchType,
            keyType = _props$schema.keyType,
            parent = _props$schema.parent,
            error = _props$schema.error;
      const options = Array.isArray(this.config.options) ? this.config.options : ['true', 'false'];
      return (0, _components.Item)(_objectSpread({
        id,
        key,
        value: value.toString(),
        mode,
        options,
        error,
        type: matchType,
        showLabel: true,
        valueEl: 'select',
        showPaste: props.settings.Editor.hasTemp(),
        keyEdit: !parent || !Array.isArray(parent.value),
        keyType: keyType || 'text'
      }, this.getActions(mode), {
        config: this.config
      }));
    });
  }

}

_defineProperty(BooleanType, "priority", 1);

_defineProperty(BooleanType, "eval", value => typeof value === 'boolean');

_defineProperty(BooleanType, "defaultValue", () => true);

var _default = BooleanType;
exports.default = _default;
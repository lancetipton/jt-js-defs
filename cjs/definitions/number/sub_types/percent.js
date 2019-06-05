"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.index-of");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _number = _interopRequireDefault(require("../number"));

var _components = require("../../../components");

var _utils = require("../../../utils");

var _constants = _interopRequireDefault(require("../../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PercentType extends _number.default {
  constructor(config) {
    super(config);

    _defineProperty(this, "config", {
      isNumber: true
    });

    _defineProperty(this, "suffix", '%');

    _defineProperty(this, "updateSelection", e => {
      const input = e.target || e.currentTarget;
      const key = input && input.getAttribute(_constants.default.Values.DATA_SCHEMA_KEY);
      if (!key || !input || !input.value) return;
      key !== 'value' ? input.select() : input.setSelectionRange(0, input.value.length - 1);
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
            error = _props$schema.error;
      const useVal = (0, _utils.updateSuffix)(value, this.suffix);
      return (0, _components.Item)(_objectSpread({
        id,
        key,
        mode,
        error,
        type: matchType,
        showLabel: true,
        value: useVal,
        showPaste: props.settings.Editor.hasTemp(),
        keyEdit: !parent || !Array.isArray(parent.value),
        keyType: keyType || 'text'
      }, this.getActions(mode, {
        onFocus: this.updateSelection,
        onClick: this.updateSelection,
        onKeyUp: _utils.suffixSelection.bind(this)
      }), {
        config: this.config
      }));
    });
  }

}

_defineProperty(PercentType, "priority", 2);

_defineProperty(PercentType, "defaultValue", '0%');

_defineProperty(PercentType, "eval", value => {
  return typeof value === 'string' && value.indexOf('%') !== -1;
});

var _default = PercentType;
exports.default = _default;
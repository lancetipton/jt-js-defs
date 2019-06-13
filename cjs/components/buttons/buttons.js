"use strict";

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.entries");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Buttons = void 0;

var _elementR = require("elementR");

var _icon = require("./icon");

var _jsutils = require("jsutils");

var _constants = _interopRequireDefault(require("../../constants"));

var _sub = require("../sub");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

const div = _elementR.elements.div,
      span = _elementR.elements.span,
      option = _elementR.elements.option;
const btnTypes = {
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

const typeLabel = type => div({
  className: `type-label`
}, span({
  className: `type-text ${type}-text`
}, `( ${(0, _jsutils.capitalize)(type)} )`));

const showTypeValue = (props, type) => {
  if (type !== _constants.default.Schema.EMPTY || !props.Types) return typeLabel(type);
  const options = Object.keys(props.Types.get(null, {
    filter: [_constants.default.Schema.EMPTY]
  })).map(value => option({
    value,
    selected: props.matchType === value
  }, (0, _jsutils.capitalize)(value)));
  options.unshift(option({
    selected: !props.matchType
  }, 'Select Type...'));
  return (0, _sub.inputWrapper)({
    type: type,
    showLabel: true
  }, (0, _sub.selectWrapper)({
    "class": `item-matchType item-data ${_constants.default.Values.EDIT_CLS}`,
    [_constants.default.Values.DATA_SCHEMA_KEY]: 'matchType',
    name: `type-matchType`,
    value: props.matchType,
    onChange: props.onTypeChange
  }, options));
};

const buildIcon = (action, type, id, wrapperProps = {}) => {
  const btn = btnTypes[type] || {};
  return action ? (0, _icon.Icon)(btn.icon, btn.key, {
    icon: {
      [_constants.default.Values.DATA_TREE_ID]: id,
      onclick: action
    },
    wrapper: wrapperProps
  }, type) : '';
};

const buildBtns = (id, props) => {
  return Object.keys(btnTypes).reduce((actions, key) => {
    let attrs = {};

    if (key === 'onPaste' && !props.isRoot) {
      attrs = props.showPaste ? {
        className: `${_constants.default.Values.SHOW_PASTE_CLS} ${_constants.default.Values.PASTE_ACTION_CLS}`
      } : {
        className: `${_constants.default.Values.PASTE_ACTION_CLS}`
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

const Buttons = props => {
  if (!props.id) return [];
  const buttons = Object.entries(props).reduce((buttons, [key, value]) => {
    key.indexOf('on') === 0 && typeof value === 'function' && (buttons[key] = value);
    return buttons;
  }, {});
  const id = props.id,
        type = props.type;
  buttons.showPaste = props.showPaste;
  buttons.isRoot = props.isRoot;
  return div({
    className: `btns-wrapper`
  }, [showTypeValue(props, type), div({
    className: `btns-list`
  }, [...buildBtns(id, buttons)])]);
};

exports.Buttons = Buttons;
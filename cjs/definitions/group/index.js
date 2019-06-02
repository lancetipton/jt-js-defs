"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.string.split");

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const heightOffset = 2;

const getChildrenHt = refNode => {
  return Array.from(refNode.firstChild.children).reduce((height, child) => {
    height += child.scrollHeight || 0;
    return height;
  }, 0);
};

class GroupType extends _base.default {
  constructor(config) {
    super(config);

    _defineProperty(this, "config", {});

    _defineProperty(this, "store", {});

    _defineProperty(this, "onToggle", (e, Editor) => {
      e.stopPropagation();
      const id = e.currentTarget.getAttribute(_constants.default.Values.DATA_TREE_ID);
      if (!id) return;
      const schema = Editor.schema(id); // If no schema just return, cause we cant update

      if (!schema) return;
      const update = {
        open: !schema.open // --- Does the opposite of the didUpdate method below --- //
        // Check if the store is open, but the update is changing to closed

      };

      if (this.store.isOpen && !update.open) {
        // If true, close the object before the update is called
        this.store.isOpen = false;
        const refNode = schema.domNode; // First update the maxHeight, to `close the object`

        refNode.style.maxHeight = this.store.closedMaxHt; // Use a timeout to wait until the object is closed

        return setTimeout(() => {
          // Then update the store, can call the update method
          // Now the object have been closed
          this.store.currentMaxHt = this.store.closedMaxHt;
          Editor.update(id, update);
        }, this.toggleSpeed || 500);
      }

      Editor.update(id, update);
    });

    _defineProperty(this, "getTransSpeed", refNode => {
      refNode = refNode || props.schema.domNode;
      if (!refNode) return;
      const domStyle = window.getComputedStyle(refNode);
      const transRule = domStyle.transition;
      if (!transRule) return; // Convert the transition rule speed into milliseconds

      const speed = parseFloat(transRule.split(' ')[1]) * 1000;
      if (typeof speed !== 'number' || isNaN(speed)) return;
      this.toggleSpeed = speed;
    });

    _defineProperty(this, "componentDidMount", (props, Editor) => {
      const refNode = props.schema.domNode;
      if (!refNode || refNode.style.maxHeight) return; // Set the currentMax height

      this.store.currentMaxHt = `${refNode.scrollHeight + heightOffset}px`;
      this.store.closedMaxHt = this.store.currentMaxHt;
      refNode.style.maxHeight = this.store.currentMaxHt; // If it's the root node, it defaults to open

      if (props.schema.isRoot && props.schema.open) {
        this.store.isOpen = true; // So use the header child height to set the default closed height

        const rootHeader = document.getElementById(_constants.default.Values.JT_ROOT_HEADER_ID);
        if (!rootHeader) return;
        this.store.closedMaxHt = `${rootHeader.scrollHeight + heightOffset}px`;
      }

      this.getTransSpeed(refNode);
    });

    _defineProperty(this, "componentDidUpdate", (props, Editor) => {
      const schema = props.schema;
      this.setOriginal(schema); // Clear out the updated, because the instance just updated

      this.updated && (0, _jsUtils.clearObj)(this.updated); // ----- height update ----- //
      // If no comp || not open, just return

      const refNode = schema.domNode;
      if (!refNode) return;
      const childrenHt = getChildrenHt(refNode); // --- Does the opposite of the toggle method above --- //
      // Check if the schema is open, but the local store is closed

      if (!this.store.isOpen && schema.open) {
        // If true, set the store to open, and update the maxHeight of the element
        this.store.isOpen = true;
        this.store.currentMaxHt = `${childrenHt}px`; // Only set in open, so it keeps the height when about to close

        refNode.style.maxHeight = this.store.currentMaxHt;
      } // If the schema is open, update all the parent heights
      // This ensures the parent height does not cut off the children
      // when a child grows larger


      (schema.mode === _constants.default.Schema.MODES.EDIT || schema.open) && (0, _utils.updateParentHeights)(schema, childrenHt, heightOffset);
    });

    _defineProperty(this, "onAdd", (e, Editor) => {
      e.stopPropagation();
      const id = e.currentTarget.getAttribute(_constants.default.Values.DATA_TREE_ID);
      const schema = id && Editor.schema(id);
      const update = {
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

    _defineProperty(this, "render", props => {
      const _props$schema = props.schema,
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
      const notEditMode = mode !== _constants.default.Schema.MODES.EDIT;
      const classes = open && `list-open` || '';
      let actions = {};
      if (notEditMode) actions.onToggle = this.onToggle;
      if (open && notEditMode) actions.onAdd = this.onAdd;
      return (0, _components.List)(_objectSpread({
        id,
        key,
        value,
        mode,
        classes,
        isRoot,
        children,
        keyText,
        error,
        showPaste: props.settings.Editor.hasTemp(),
        keyType: keyType || 'text',
        isOpen: open,
        styles: {
          // Always set the height to be the currentMax height
          // When opened, height will be updated in componentDidUpdate
          wrapper: {
            maxHeight: this.store.currentMaxHt
          }
        },
        type: matchType,
        showLabel: true,
        valueEl: 'select',
        keyEdit: !props.schema.parent || !Array.isArray(props.schema.parent.value)
      }, this.getActions(mode, actions), {
        config: this.config
      }));
    });
  }

}

var _default = GroupType;
exports.default = _default;
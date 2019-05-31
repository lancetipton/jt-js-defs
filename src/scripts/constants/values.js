const NO_OP = () => {}

export const Values = Object.freeze({
  CLEAVE_CLS: 'item-cleave',
  CUSTOM_EVENTS: Object.freeze({
    onCancel: NO_OP,
    onChange: NO_OP,
    onEdit: NO_OP,
    onDelete: NO_OP,
    onSave: NO_OP,
    onCopy: NO_OP,
    onPaste: NO_OP,
    onCut: NO_OP,
  }),
  DATA_SCHEMA_KEY: 'data-schema-key',
  DATA_TREE_ID: 'data-tree-id',
  EDIT_CLS: 'item-edit',
  JT_ROOT_HEADER_ID: 'jt-root-header',
  NO_OP: NO_OP,
  NUMBER_CLS: 'item-number',
  PASTE_ACTION_CLS: 'item-paste-action',
  SHOW_PASTE_CLS: 'show-paste-action',
  PARENT_OVERWRITE: Object.freeze({
    eval: 'function',
    matchHelper: 'function',
    priority: 'number',
  }),
  TYPES_CONFIG_OPTS: Object.freeze([
    // Allowed custom config properties
    // Auto expand the input to the size of it's text content
    'expandOnChange',
    // Array of allowed options to be used in select inputs, when editing
    'options'
  ]),
})

import { buildTheme } from '../../styles/build_theme'
import Constants from '../../constants'
import { clearObj } from 'jsutils'
import { 
  updateParentConstruct,
  addCustomEvents,
  addAllowedConfigOpts,
  callEditor,
  shouldDoDefault,
  togglePastAction,
  updateValue,
  updateValWithSuffix,
} from '../../utils'

export default class BaseType {

  static priority = 0
  static matchHelper = () => {}
  static eval = (value) => true
  static defaultValue = (newType, schema, settings) => ''
  static getStyles = (settings) => buildTheme(settings)
  static error = ({ message }) => (message || `Invalid input format`)

  constructor(config, Editor){
    if(!config) return

    updateParentConstruct(config, this.constructor)
    addCustomEvents(config, this.userEvents)
    this.config = addAllowedConfigOpts(config, this.config) || {}
  }

  userEvents = {}
  updated = {}
  original = {}

  onChange = (e, Editor) => {
    const input =  e.target || e.currentTarget
    // Get the key for the input
    const key = input && input.getAttribute(Constants.Values.DATA_SCHEMA_KEY)
    if(!key || !input) return

    // Get the values to compare
    const original = this.original[key]
    const value = input.value
    // Build our update object
    const update = { key, original }

    this.suffix
      // update the value and suffix
      ? updateValWithSuffix(update, input, this.suffix)
      // Set the value to update
      : updateValue(update, input)

    // Ensure these was a change, before we call the update
    if(original === update.value) return

    // Check if the input width should be update to match the value
    update.value &&  this.config.expandOnChange !== false && this.setWidth(input)
    // Call the userEvent to check if it should be updated
    // Then update the value locally
    // When the save action is called, this value will then be saved to the tree
    if(this.userEvents.onChange(e, update, this.original.id, Editor) !== false)
      this.updated[update.key] = update.value
  }

  onCancel = (e, Editor) => {
    e.stopPropagation()

    const update = { mode: undefined, value: this.original.value }
    const id = shouldDoDefault( e, update, Editor, this.userEvents.onCancel )
    if(!id) return

    // Check the pending, if true, that means cancel was pressed
    // Without the key / value ever being saved, so remove the item
    const schema = Editor.schema(id)
    schema && schema.pending
      ? Editor.remove(id)
      : Editor.update(id, update)
  }

  onSave = (e, Editor) => {
    callEditor(
      e,
      { ...this.updated, mode: undefined },
      this.userEvents.onSave,
      'update',
      Editor
    )
  }

  onEdit = (e, Editor) => {
    callEditor(
      e,
      { mode: Constants.Schema.MODES.EDIT },
      this.userEvents.onEdit,
      'update',
      Editor
    )
  }

  onDelete = (e, Editor) => {
    callEditor(
      e,
      { mode: Constants.Schema.MODES.REMOVE },
      this.userEvents.onDelete,
      'remove',
      Editor
    )
  }
  
  onCopy = (e, Editor) => {
    e && e.stopPropagation()
    const id = shouldDoDefault(
      e,
      { mode: Constants.Schema.MODES.REMOVE },
      Editor,
      this.userEvents.onCopy,
    )

    if(!id) return

    Editor.temp = id
    togglePastAction('add')
  }

  onCut = (e, Editor) => {
    e && e.stopPropagation()
    const update = { mode: Constants.Schema.MODES.CUT }
    const id = shouldDoDefault(
      e,
      update,
      Editor,
      this.userEvents.onCut,
    )

    if(!id) return
    
    Editor.temp = id
    togglePastAction('add')
    Editor.remove && Editor.update(id, update)
  }

  onPaste = (e, Editor) => {
    e && e.stopPropagation()
    const schema = Editor.schema(e.currentTarget.getAttribute(Constants.Values.DATA_TREE_ID))
    Editor.replaceAtPos(schema.id, { ...Editor.temp })
    Editor.temp = undefined
    togglePastAction('remove')
  }

  shouldDoDefault = (...args) => shouldDoDefault(...args)
  
  getActions = (mode, extra) => {
    return mode !== Constants.Schema.MODES.EDIT
      ? {
        onEdit: this.onEdit,
        onCopy: this.onCopy,
        onCut: this.onCut,
        onPaste: this.onPaste,
        onDelete: this.onDelete,
        ...extra
      }
      : {
        onChange: this.onChange,
        onSave: this.onSave,
        onCancel: this.onCancel,
        ...extra
      }
  }

  setWidth = input => (
    input &&
      input.value &&
      (input.style.width = `${input.value.length}ch`)
  )

  buildEvents = (schema, domNode) => (
    domNode && ['input', 'select', 'textarea']
      .map(tag => (
        Array.from(domNode.getElementsByTagName(tag))
          .map(input => {
            input.oninput = this.onChange
            this.config.expandOnChange !== false && this.setWidth(input)
          })
      ))
  )

  setOriginal = schema => {
    this.buildEvents(schema, schema.domNode)
    const { parent, instance, domNode, ...original } = schema
    this.original = original
  }

  componentDidMount = (props, Editor) => {
    this.setOriginal(props.schema)
  }

  componentDidUpdate = (props, Editor) => {
    this.setOriginal(props.schema)
    // Clear out the updated, because the component just updated
    this.updated && clearObj(this.updated)
  }

  shouldComponentUpdate = (params) => {
    return true
  }

  componentWillUnmount = (Editor) => {
    // Set to undefined, because when the instance gets remove, we don't want it 
    // to remove the value; because it's a ref to the actual value in the tree
    this.original.value = undefined
  }

  render = props => {
    return ''
  }
  
}
import NumberType from '../number'
import { Item } from '../../../components'
import { isStr } from 'jsUtils'
import { Values, Schema } from 'jTConstants'
import { 
  updateParentConstruct,
  addCustomEvents,
  addAllowedConfigOpts,
  callEditor,
  shouldDoDefault,
  updateValue,
} from '../../../utils'

class PercentType extends NumberType {
  
  static priority = 2
  static defaultValue = '0%'
  static eval = value => {
    return typeof value === 'string' && value.indexOf('%') !== -1
  }


  constructor(config){
    super(config)
  }

  postfix = '%'
  
  checkPostfix = (value, remove) => {
    if(!value && value !== 0) return
    value = !isStr(value) && `${value}` || value
    let cleanVal = value.replace(/\D/g,'')
    cleanVal = cleanVal.length && value[0] === '-'
      ? `-${cleanVal}`
      : cleanVal

    return remove
      ? cleanVal
      : cleanVal && cleanVal.length && `${cleanVal}${this.postfix}` || ''
  }
  
  onChange = (e, Editor) => {
    const input =  e.target || e.currentTarget
    // Get the key for the input
    const key = input && input.getAttribute(Values.DATA_SCHEMA_KEY)
    if(!key || !input) return

    // Get the values to compare
    const original = this.original[key]
    const value = this.checkPostfix(input.value, true)
    
    if(!value) return input.value = ''
    
    // Build our update object
    const update = { key, original }

    // Check if the input should be a number
    const numVal = (value || value === 0) && Number(value)

    // If it's a valid number use that instead
    if(!isNaN(numVal)){
      update.value = this.checkPostfix(numVal, false)

      if(update.value !== input.value)
        input.value = update.value
    }
    else input.value = ''

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
  
  onFocus = (e, Editor) => {
    console.log(`---------- on focus ----------`)
    console.log(e.target)
  }
  
  render = props => {
    const { schema: { id, key, value, mode, matchType, keyType, parent, error } } = props
    const useVal = this.checkPostfix(value, false)

    return Item({
      id,
      key,
      mode,
      error,
      type: matchType,
      showLabel: true,
      isNumber: true,
      value: useVal,
      showPaste: props.settings.Editor.hasTemp(),
      keyEdit: !parent || !Array.isArray(parent.value),
      keyType: keyType || 'text',
      ...this.getActions(mode, { onFocus: this.onFocus })
    })
  }

}

export default PercentType
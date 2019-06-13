import CleaveType from '../cleave'
import { Item } from '../../components'
import { isStr, isFunc } from 'jsutils'
import Constants from '../../constants'
class StringType extends CleaveType {

  static priority = 1
  static eval = (value) => isStr(value)
  static defaultValue = (newType, schema, settings) => ''
  
  constructor(config){
    super({
      ...config,
      cleave: {
        numeral: false,
        stripLeadingZeroes: false,
        ...(config && config.cleave || {}),
      }
    })
  }

  config = { useCleave: true }

  render = props => {
    const { schema: { id, key, value, mode, matchType, keyType, parent, error } } = props
    const useValue = mode !== Constants.Schema.MODES.EDIT && isFunc(this.getDisplayValue)
      ? this.getDisplayValue(value, props)
      : value

    return Item({
      id,
      key,
      mode,
      error,
      value: useValue,
      type: matchType,
      showLabel: true,
      showPaste: props.settings.Editor.hasTemp(),
      keyEdit: !parent || !Array.isArray(parent.value),
      keyType: keyType || 'text',
      ...this.getActions(mode),
      config: this.config,
    })
  }

}

export default StringType
import CleaveType from '../cleave'
import { Item } from '../../components'

class NumberType extends CleaveType {

  static priority = 1
  static eval = (value) => (typeof value === 'number')
  static defaultValue = () => 0
  
  constructor(config){
    super({
      ...config,
      cleave: {
        numeral: true,
        numeralThousandsGroupStyle: 'none',
        stripLeadingZeroes: false,
        numeralDecimalScale: 0,
        ...(config || {}).cleave,
      }
    })
  }
  
  isNumber = true
  
  render = props => {
    const { schema: { id, key, value, mode, matchType, keyType, parent, error } } = props

    return Item({
      id,
      key,
      value,
      mode,
      error,
      type: matchType,
      showLabel: true,
      cleave: true,
      isNumber: this.isNumber,
      showPaste: props.settings.Editor.hasTemp(),
      keyEdit: !parent || !Array.isArray(parent.value),
      keyType: keyType || 'text',
      ...this.getActions(mode)
    })
  }
  
}

export default NumberType
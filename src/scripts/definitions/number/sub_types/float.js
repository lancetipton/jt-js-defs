import NumberType from '../number'
import { Item } from '../../../components'

class FloatType extends NumberType {

  static priority = 2
  static defaultValue = 0.0
  static eval = (value) => (
    typeof value === 'number' &&
      Number(value) === value && 
      value % 1 !== 0
  )

  constructor(config){
    super({
      ...config,
      cleave: {
        numeral: true,
        stripLeadingZeroes: false,
        numeralThousandsGroupStyle: 'none',
        numeralDecimalScale: 8,
        ...(config || {}).cleave,
      }
    })
  }

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
      isNumber: true,
      showPaste: props.settings.Editor.hasTemp(),
      keyEdit: !parent || !Array.isArray(parent.value),
      keyType: keyType || 'text',
      ...this.getActions(mode)
    })
  }

}

export default FloatType
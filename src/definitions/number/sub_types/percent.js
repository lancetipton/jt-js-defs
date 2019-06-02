import NumberType from '../number'
import { Item } from '../../../components'
import { suffixSelection, updateSuffix } from '../../../utils'
import Constants from '../../../constants'

const { Values } = Constants

class PercentType extends NumberType {
  
  static priority = 2
  static defaultValue = '0%'
  static eval = value => {
    return typeof value === 'string' && value.indexOf('%') !== -1
  }

  constructor(config){
    super(config)
  }

  config = {
    isNumber: true
  }

  suffix = '%'
  
  updateSelection = (e, Editor) => {
    const input =  e.target || e.currentTarget
    const key = input && input.getAttribute(Constants.Values.DATA_SCHEMA_KEY)
    if(!key || !input || !input.value) return

    key !== 'value'
      ? input.select()
      : input.setSelectionRange(0, input.value.length - 1)
  }

  render = props => {
    const { schema: { id, key, value, mode, matchType, keyType, parent, error } } = props
    const useVal = updateSuffix(value, this.suffix)

    return Item({
      id,
      key,
      mode,
      error,
      type: matchType,
      showLabel: true,
      value: useVal,
      showPaste: props.settings.Editor.hasTemp(),
      keyEdit: !parent || !Array.isArray(parent.value),
      keyType: keyType || 'text',
      ...this.getActions(mode, {
        onFocus: this.updateSelection,
        onClick: this.updateSelection,
        onKeyUp: suffixSelection.bind(this)
      }),
      config: this.config,
    })
  }

}

export default PercentType
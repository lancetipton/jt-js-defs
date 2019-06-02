import StringType from '../string'
import { isStr } from 'jsUtils'
class ColorType extends StringType {

  static priority = 2
  static defaultValue = '#FFFFFF'
  
  static error = args => {
    if(args.prop !== 'value') return args.message || 'Error, Invalid data!'

    return `Invalid color. Color value should be in hex format (#FFFFFF)`
  }
  
  static eval = value => {
    if (!value || !isStr(value)) return false
    
    return  Boolean(/^#(?:(?:[A-F0-9]{2}){3,4}|[A-F0-9]{3})$/i.test(value))
  }

  constructor(config){
    super({
      ...config,
      cleave: {
        prefix: '#',
        uppercase: true,
        ...(config && config.cleave || {}),
      }
    })
  }

  config = { valueAttrs: { min: 7 }, useCleave: true }

}

export default ColorType
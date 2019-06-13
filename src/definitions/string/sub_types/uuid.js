import StringType from '../string'
import { isStr } from 'jsutils'
class UuidType extends StringType {

  static priority = 2
  static defaultValue = ''
  static allowEmptyValue = ''
  
  static error = args => {
    if(args.prop !== 'value') return args.message || 'Error, Invalid data!'

    return `Invalid UUID format. Please enter a valid UUID (00000000-0000-000-000-000000000000)`
  }
  
  static eval = value => {
    if (!value || !isStr(value)) return false
    const regex = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    return regex.test(value)
  }

  constructor(config){
    super({
      ...config,
      cleave: {
        numeral: false,
        delimiter: '-',
        lowercase: true,
        blocks: [8, 4, 3, 3, 12],
        uppercase: false,
        stripLeadingZeroes: false,
        ...(config && config.cleave || {}),
      }
    })
  }
  
  config = {
    useCleave: true
  }

}

export default UuidType
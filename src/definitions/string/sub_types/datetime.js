import StringType from '../string'
import { isStr } from 'jsutils'
import { checkInputSupport } from '../../../utils'

let DATETIME_INPUT_SUPPORT

class DateTimeType extends StringType {

  static priority = 2
  static defaultValue = ''
  static allowEmptyValue = ''
  static error = args => {
    if(args.prop !== 'value') return args.message || 'Error, Invalid data!'

    const date = new Date()
    const format = `${date.hours}:${date.minutes}}`

    return `Invalid time. Time format should match ${format} (Hour:Minutes)`
  }
  
  static eval = value => {
    if(!isStr(value)) return false
    const dateSplit = value.split(':')
    if(dateSplit.length !== 2) return false

    return dateSplit.reduce((valid, date) => {
      if(!valid) return valid

      return isNaN(parseInt(date))
        ? false
        : valid && (date.length === 2)
    }, true)
  }

  constructor(config){
    super({
      ...config,
      cleave: {
        numeral: true,
        numeralThousandsGroupStyle: 'none',
        blocks: [4, 2, 2, 2, 2],
        delimiters: ['-', '-', ', ', ':'],
        ...(config && config.cleave || {}),
      }
    })


    if(!DATETIME_INPUT_SUPPORT && DATETIME_INPUT_SUPPORT !== false)
      DATETIME_INPUT_SUPPORT = checkInputSupport('datetime-local')
    
    this.config.useCleave = !DATETIME_INPUT_SUPPORT
    this.config.valueAttrs.type = DATETIME_INPUT_SUPPORT && 'datetime-local' || 'text'
    if(!DATETIME_INPUT_SUPPORT)
      this.config.valueAttrs.placeholder = 'YYYY-MM-DD, HH:MM'
  }

  config = {
    useCleave: false,
    valueAttrs: {}
  }

  getDisplayValue = value => {
    return value
  }

}

export default DateTimeType
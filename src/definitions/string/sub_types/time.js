import StringType from '../string'
import { isStr } from 'jsutils'
import { checkInputSupport } from '../../../utils'

let TIME_INPUT_SUPPORT

class TimeType extends StringType {

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
        delimiter: ':',
        time: true,
        timePattern: ['h', 'm'],
        ...(config && config.cleave || {}),
      }
    })
    
    if(!TIME_INPUT_SUPPORT && TIME_INPUT_SUPPORT !== false)
      TIME_INPUT_SUPPORT = checkInputSupport('time')
    
    this.config.useCleave = !TIME_INPUT_SUPPORT
    this.config.valueAttrs.type = TIME_INPUT_SUPPORT && 'time' || 'text'
    if(!TIME_INPUT_SUPPORT)
      this.config.valueAttrs.placeholder = 'HH:MM'
  }

  config = {
    useCleave: false,
    valueAttrs: {}
  }

  getDisplayValue = value => {
    return parseInt(value.split(':')[0]) < 12
      ? `${value} AM`
      : `${value} PM`
  }

}

export default TimeType
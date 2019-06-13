import StringType from '../string'
import { isStr } from 'jsutils'
import { checkInputSupport } from '../../../utils'

let DATE_INPUT_SUPPORT

class DateType extends StringType {

  static priority = 2
  static defaultValue = ''
  static allowEmptyValue = ''
  static error = args => {
    if(args.prop !== 'value') return args.message || 'Error, Invalid data!'

    const date = new Date()
    const today = date.getDate()
    const fullDay = today.length === 2 && today || `0${today}`
    const month = date.getMonth() + 1
    const fullMonth = month.length === 2 && month || `0${month}`
    const format = `${fullDay}-${fullMonth}-${date.getFullYear()}`

    return `Invalid date. Date format should match ${format} (Day-Month-Year)`
  }
  
  static eval = value => {
    if(!isStr(value)) return false

    const dateSplit = value.split('-')
    if(dateSplit.length !== 3) return false

    return dateSplit.reduce((valid, date) => {
      if(!valid) return valid

      return isNaN(parseInt(date))
        ? false
        : valid && (date.length === 2 || date.length === 4)
    }, true)
  }

  constructor(config){
    super({
      ...config,
      cleave: {
        date: true,
        delimiter: '-',
        datePattern: ['Y', 'm', 'd'],
        ...(config && config.cleave || {}),
      }
    })
    
    if(!DATE_INPUT_SUPPORT && DATE_INPUT_SUPPORT !== false)
      DATE_INPUT_SUPPORT = checkInputSupport('date')
    
    this.config.useCleave = !DATE_INPUT_SUPPORT
    this.config.valueAttrs.type = DATE_INPUT_SUPPORT && 'date' || 'text'
    if(!DATE_INPUT_SUPPORT)
      this.config.valueAttrs.placeholder = 'YYYY-MM-DD'
  }

  config = {
    useCleave: false,
    valueAttrs: {}
  }
  
  getDisplayValue = value => {
    const valSplit = value.split('-').reverse()
    const temp = valSplit[0]
    valSplit[0] = valSplit[1]
    valSplit[1] = temp
    return valSplit.join('-')
  }
  
}

export default DateType
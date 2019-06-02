import StringType from '../string'
import { isStr } from 'jsUtils'
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
    if(dateSplit.length !== '3') return false
    return dateSplit.reduce(valid, date => {
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
        datePattern: ['d', 'm', 'Y'],
        ...(config && config.cleave || {}),
      }
    })
  }

  config = {
    useCleave: true
  }

}

export default DateType
import StringType from '../string'
import { isStr } from 'jsutils'

class PhoneType extends StringType {

  static priority = 2
  static defaultValue = ''
  static allowEmptyValue = ''
  static eval = value => {
    if(!isStr(value)) return false

    const regex = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/
    return Boolean(regex.test(value.replace(/\D/g, '')))
  }

  static error = args => {
    if(args.prop !== 'value') return args.message || 'Error, Invalid data!'

    return `Invalid phone number. Phone format should match 123-123-1234`
  }

  constructor(config){
    super({
      ...config,
      cleave: {
        phone: true,
        delimiter: '-',
        phoneRegionCode: 'US',
        ...(config && config.cleave || {}),
      }
    })
  }
  
  config = {
    useCleave: true
  }

}

export default PhoneType
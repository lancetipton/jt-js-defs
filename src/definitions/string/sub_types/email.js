import StringType from '../string'
import { isStr } from 'jsutils'
class EmailType extends StringType {

  static priority = 2
  static defaultValue = ''
  static allowEmptyValue = ''
  
  static error = args => {
    if(args.prop !== 'value') return args.message || 'Error, Invalid data!'

    return `Invalid Email. Please enter a valid email address!`
  }
  
  static eval = value => {
    if (
      !value ||
      !isStr(value) ||
      value.indexOf('@') === -1 ||
      value.indexOf('.') === -1
    )
      return false

    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return Boolean(regex.test(value))
  }

  constructor(config){
    super(config)
  }


}

export default EmailType
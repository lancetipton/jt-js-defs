import StringType from '../string'

class EmailType extends StringType {

  static priority = 2
  static defaultValue = ''
  static allowEmptyValue = ''
  
  static error = args => {
    if(args.prop !== 'value') return args.message || 'Error, Invalid data!'

    return `Invalid email. Format should follow this example: me@example.com`
  }
  
  static eval = value => {
    if (
      !value ||
      typeof value !== 'string' ||
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
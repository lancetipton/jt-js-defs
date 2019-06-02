import NumberType from '../number'

class MoneyType extends NumberType {

  static priority = 2
  static defaultValue = '$0'
  static eval = value => {
    return typeof value === 'string' && value.indexOf('$') !== -1
  }
  
  constructor(config){
    console.log(`---------- needs error handler ----------`)
    super({
      ...config,
      cleave: {
        numeral: true,
        delimiter: ',',
        stripLeadingZeroes: true,
        numeralDecimalScale: 2,
        prefix: '$',
        noImmediatePrefix: true,
        ...(config || {}).cleave,
      }
    })
  }
  
  config = {
    isNumber: true,
    useCleave: true,
  }

}

export default MoneyType
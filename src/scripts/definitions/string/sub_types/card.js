import StringType from '../string'

const luhn = (arr => {
  return ccNum => {
    let len = ccNum.length
    let bit = 1
    let sum = 0
    let val

    while (len) {
      val = parseInt(ccNum.charAt(--len), 10)
      sum += (bit ^= 1) ? arr[val] : val
    }

    return sum && sum % 10 === 0
  }
})([0, 2, 4, 6, 8, 1, 3, 5, 7, 9])


class CardType extends StringType {

  static priority = 2
  static defaultValue = ''
  static eval = value => luhn(value.replace(/ /g, ''))
  
  static error = args => {
    if(args.prop !== 'value') return args.message || 'Error, Invalid data!'

    return `Invalid card number, ensure the number matches the card number.`
  }
  
  constructor(config){
    super({
      ...config,
      cleave: {
        creditCard: true,
        ...(config && config.cleave || {}),
      }
    })
  }
  
  config = {
    useCleave: true
  }
  
}

export default CardType
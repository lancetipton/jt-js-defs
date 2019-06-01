import NumberType from '../number'

class FloatType extends NumberType {

  static priority = 2
  static defaultValue = 0.0
  static eval = (value) => (
    typeof value === 'number' &&
      Number(value) === value && 
      value % 1 !== 0
  )

  constructor(config){
    super({
      ...config,
      cleave: {
        numeral: true,
        stripLeadingZeroes: false,
        numeralThousandsGroupStyle: 'none',
        numeralDecimalScale: 8,
        ...(config || {}).cleave,
      }
    })
  }

}

export default FloatType
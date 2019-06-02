import Constants from '../../constants'
import { elements } from 'elementR'
import { label } from './label'
import { capitalize, isFunc, get } from 'jsUtils'

const { Values } = Constants

const getValue = (val, text) => {
  return text
    ? text
    : (val || val === 0 || val === '')
      ? (val + '').toString()
      : ''
}

/**
 * Gets the attributes for the input element, based on the passed in type
 * @param  { object } props - data passed in from TypeClass instance
 * @param  { string } type - which property the input is being built for ( key || value )
 * 
 * @return { dom node }
 */
const getAttrs = (props, type, keyVal, elVal) => {
  const configClasses = type === 'key'
    ? get(props, 'config.keyAttrs.classes')
    : get(props, 'config.valueAttrs.classes')

  let classes = `item-data ${Constants.Values.EDIT_CLS}${configClasses && ' ' + configClasses || ''}`
  type !== 'key' && props.config.useCleave && (classes += ` ${Constants.Values.CLEAVE_CLS}`)

  props.config.isNumber && (classes += ` ${Constants.Values.NUMBER_CLS}`)
  
  const attrs = type === 'key'
    ? {
      ...(props.config && props.config.keyAttrs || {}),
      class: classes,
      type: props.keyType || 'text',
      value: keyVal,
      [Constants.Values.DATA_SCHEMA_KEY]: type,
      name: `key-${props.key}`,
      disabled: props.disabled,
      onClick: props.onClick || !props.onFocus && `this.select()`,
    }
    : {
      ...(props.config && props.config.valueAttrs || {}),
      class: classes,
      type: props.valueType || 'text',
      [Constants.Values.DATA_SCHEMA_KEY]: type,
      name: `value-${props.key}`,
      value: elVal,
      disabled: props.disabled,
      onClick: props.onClick || !props.onFocus && `this.select()`,
    }

  // Add dom event handlers
  Object.entries(props)
    .map(([ key, value ]) => 
      !attrs[key] &&
        Constants.Values.DOM_EVENTS.indexOf(key) !== -1 &&
        isFunc(value) &&
        (attrs[key] = value)
    )

  return attrs
}

/**
 * Wraps an input element to help with styling and placement ( i.e. position: relative )
 * @param  { object } props - attributes for the wrapper and type of data being wrapped
 * @param  { any } children - sub elements of the wrapper
 * 
 * @return { dom node }
 */
export const inputWrapper = (props, children) => {
  let { type, showLabel, classes, ...attrs } = props
  classes = classes && `${classes} item-data-wrapper` || 'item-data-wrapper' 
  if(type) classes += ` item-${type}-wrapper`

  return elements.div(
    { ...attrs, className: classes }, 
    showLabel && label(type, capitalize(type)),
    children
  )
}


/**
 * Builds an input object based on passed in params
 * @param  { object } props - data passed in from TypeClass instance
 * @param  { object } props.showLabel - should show input label
 * @param  { object } props.value - value of the element
 * @param  { object } props.valueType - value input type if editing
 * @param  { object } props.key - key being edited
 * @param  { object } props.keyType - key input type if editing
 * @param  { string } type - which property the input is being built for ( key || value )
 * 
 * @return { object } - object with properties used to create an input domNode
 */
export const input = (props, type) => {
  
  const keyVal = type === 'key' && getValue(props.key, props.keyText)
  const elValue = type === 'value' && getValue(props.value, props.valueText)

  return { 
    keyVal,
    elValue,
    El: elements.input,
    isEdit: true,
    showLabel: props.showLabel,
    editCls: Constants.Values.EDIT_CLS,
    [`${type}Attrs`]: getAttrs(props, type, keyVal, elValue)
  }
}

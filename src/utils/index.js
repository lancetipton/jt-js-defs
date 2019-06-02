import { isFunc, isStr } from 'jsUtils'
import Constants from '../constants'

/**
 * Loop through the schema, from the bottom up
 * Updates the Heights of the parents to ensure all content can be seen
 * @param  { object } schema - schema at the location in the tree.schema to start the loop
 * @param  { number } updateHeight - hight that should be added to the schemas maxHeight
 * @return { void }
 */
export const updateParentHeights = (schema, updateHeight, offset=0) => {
  const domNode = schema && schema.domNode
  if(!domNode || !updateHeight)
    return
  
  const newHeight = domNode.scrollHeight + updateHeight
  domNode.style.maxHeight = `${newHeight + offset}px`
  schema.parent && updateParentHeights(schema.parent, newHeight)
}


export const updateParentConstruct = (config, parent) => {
  Object.entries(Constants.Values.PARENT_OVERWRITE).map(([ key, type ]) => {
    if(typeof config[key] === type && parent[key] !== config[key])
      parent[key] = config[key]
  })
}

export const addCustomEvents = (config, userEvents) => (
  Object
    .keys(Constants.Values.CUSTOM_EVENTS)
    .map(key => (
      userEvents[key] = isFunc(config[key]) && config[key] || Constants.Values.CUSTOM_EVENTS[key]
    ))
)

export const addAllowedConfigOpts = (config, baseConfig) => ({
  ...baseConfig,
  ...Constants.Values.TYPES_CONFIG_OPTS
    .reduce((typeConf, opt) => (
      (opt in config)  && (typeConf[opt] = config[opt]) || typeConf), {}
    ) 
})

export const callEditor = (e, update, usrEvent, type, Editor) => {
  e && e.stopPropagation()
  const id = shouldDoDefault( e, update, Editor, usrEvent )
  id && Editor[type] && Editor[type](id, update)
}

export const shouldDoDefault = (e, update, Editor, userEvent) => {
  const id = e.currentTarget.getAttribute(Constants.Values.DATA_TREE_ID)
  return id && userEvent && userEvent(e, update, id, Editor) === false || id
}

export const updateValue = (update, input) => {
  const value = input.value

  // Check input type, and if it has the CLEAVE_CLS
  // Which means is should be a number
  if(input.nodeName === 'INPUT' && input.classList.contains(Constants.Values.NUMBER_CLS)){
    // Check if the input should be a number
    const numVal = Number(value)
    // If it's a valid number use that instead
    !isNaN(numVal) && (update.value = numVal)
  }
  // Check if the original is a boolean, if the value is a string boolean version
  else if(typeof update.original === 'boolean' && (value === 'false' || value === 'true'))
    update.value = value === 'true'
  // Just set the value to update if none of the above
  else update.value = value

}

export const togglePastAction = type => (
  Array
    .from(document.querySelectorAll(`.${Constants.Values.PASTE_ACTION_CLS}`))
    .map(node => {
      node && node.classList && node.classList[type](Constants.Values.SHOW_PASTE_CLS)
    })
)

export const updateSuffix = (value, suffix, remove) => {
  if(!value && value !== 0) return
  value = !isStr(value) && `${value}` || value
  let cleanVal = value.replace(/\D/g,'')
  cleanVal = cleanVal.length && value[0] === '-'
    ? `-${cleanVal}`
    : cleanVal

  return remove
    ? cleanVal
    : cleanVal && cleanVal.length && `${cleanVal}${suffix}` || ''
}

export const suffixSelection = function(e, Editor) {
  const input =  e.target || e.currentTarget
  const key = input && input.getAttribute(Constants.Values.DATA_SCHEMA_KEY)
  if(!key || key !== 'value' || !input || !input.value) return

  const selection = window.getSelection()
  const selected = selection && selection.toString()

  return !selected
    ? input.selectionEnd === input.value.length &&
        input.setSelectionRange(input.selectionEnd - 1, input.selectionEnd - 1)
    : selected[selected.length - 1] === this.suffix &&
        input.setSelectionRange(input.selectionStart, input.selectionEnd - 1)
}

export const updateValWithSuffix = (update, input, suffix) => {
  const value = updateSuffix(input.value, suffix, true)
  
  if(!value) return input.value = ''
  // Check if the input should be a number
  const numVal = (value || value === 0) && Number(value)

  // If it's a valid number use that instead
  if(!isNaN(numVal)){
    update.value = updateSuffix(numVal, suffix)
    update.value !== input.value && (input.value = update.value)
  }
  else input.value = ''
}
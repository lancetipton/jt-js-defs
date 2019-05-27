import { isFunc, logData, clearObj } from 'jsUtils'

export const typesOverride = (typeInstance, config) => {
  if(!config) return null

  Object.entries(Values.TYPE_OVERWRITE).map(([ key, type ]) => (
    typeof config[key] === type &&
      typeInstance[key] !== config[key] &&
      (typeInstance[key] = config[key])
  ))
}

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

export const noId = e => (
  logData(`Element id not found from event`, e, 'error') || false
)

export const updateParentConstruct = (config, parent) => {
  Object.entries(Values.PARENT_OVERWRITE).map(([ key, type ]) => {
    if(typeof config[key] === type && parent[key] !== config[key])
      parent[key] = config[key]
  })
}

export const addCustomEvents = (config, userEvents) => (
  Object
    .keys(Values.CUSTOM_EVENTS)
    .map(key => (
      userEvents[key] = isFunc(config[key]) && config[key] || Values.CUSTOM_EVENTS[key]
    ))
)

export const addAllowedConfigOpts = config => (
  Values.TYPES_CONFIG_OPTS
    .reduce((typeConf, opt) => (
      (opt in config)  && (typeConf[opt] = config[opt]) || typeConf), {}
    )
)

export const callEditor = (e, update, usrEvent, type, Editor) => {
  e && e.stopPropagation()
  const id = shouldDoDefault( e, update, Editor, usrEvent )
  id && Editor[type] && Editor[type](id, update)
}

export const shouldDoDefault = (e, update, Editor, userEvent) => {
  const id = e.currentTarget.getAttribute(Values.DATA_TREE_ID)
  return !id
    ? noId()
    : userEvent && userEvent(e, update, id, Editor) === false || id
}

export const updateValue = (update, input, value) => {
  // Check input type, and if it has the CLEAVE_CLS
  // Which means is should be a number
  if(input.nodeName === 'INPUT' && input.classList.contains(Values.NUMBER_CLS)){
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
    .from(document.querySelectorAll(`.${Values.PASTE_ACTION_CLS}`))
    .map(node => {
      node && node.classList && node.classList[type](Values.SHOW_PASTE_CLS)
    })
)
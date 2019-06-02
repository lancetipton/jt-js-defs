import { Buttons, Icon } from '../buttons'
import { elements } from 'elementR'
import { capitalize } from 'jsUtils'
import Constants from '../../constants'
import * as subComps from '../sub'
import { errorMessage } from '../error'

const { div } = elements

const buildKeyEl = ({ showLabel, El, keyAttrs, keyVal }) => {
  const keyEl = El(keyAttrs, keyVal)
  return !showLabel
    ? keyEl
    : div({ className: 'item-data-wrapper item-key-wrapper' },
      subComps.label(keyAttrs.name, 'Key'),
      keyEl
    )
}

const buildHeaderKey = (props) => {
  const { key, keyType, keyText, config } = props
  const text = `${keyText || key} `

  return props.mode !== Constants.Schema.MODES.EDIT
    ? div({ className: 'item-key item-data' }, text)
    : buildKeyEl(
        subComps.input({
        key,
        config,
        value: key,
        keyType: keyType || 'text',
        showLabel: true,
      }, 'key')
    )
}

const buildHeaderValue = (props) => {
  
  const { mode, type, config } = props
  const typeName = capitalize(type)  
  if(mode !== Constants.Schema.MODES.EDIT)
    return div({ className: 'item-value item-data' }, typeName)
  
  const inputData = subComps.input({
    config,
    value: typeName,
    valueType: 'text',
    showLabel: true,
    disabled: true,
  }, 'value')
  
  return div(
    { className: 'item-data-wrapper item-value-wrapper' },
    subComps.label(`value-${type}`, 'Type'),
    inputData.El(inputData.valueAttrs, inputData.elValue)
  )
}

export const ListHeader = props => {
  const { id, isOpen, isRoot, error } = props
  const iconCls = isOpen && `open` || ``
  const rootCls = isRoot ? `root` : ``
  const classes = `${iconCls} ${rootCls} header item ${props.mode === Constants.Schema.MODES.EDIT && Constants.Values.EDIT_CLS || ''}${ error && ' item-error' || '' }`

  const wrapperProps = { className: classes, [Constants.Values.DATA_TREE_ID]: id }
  if(props.onToggle){
    wrapperProps.className += ' item-has-toggle'
    wrapperProps.onClick = props.onToggle
  }
  
  if(isRoot) wrapperProps.id = Constants.Values.JT_ROOT_HEADER_ID

  return div(
    wrapperProps,
    Icon(null, null, {
      icon: {
        className: `icon toggle-icon fas fa-angle-right ${iconCls}`,
        title: `Toggle open / closed`,
        onClick: props.onToggle,
        [Constants.Values.DATA_TREE_ID]: id,
      }
    }),
    buildHeaderKey(props),
    !rootCls 
      ? buildHeaderValue(props)
      : null,
    div({ className: `item-btns item-data` }, Buttons(props)),
    errorMessage(error)
  )
}
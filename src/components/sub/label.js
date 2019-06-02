import { elements } from 'elementR'

export const label = (name, value) => (
  value &&
    elements.label(
      { className: `item-label item-${value.toLowerCase()}-label`, for: name },
      value
    )
)
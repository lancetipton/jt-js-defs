import { elements } from 'elementR'
const { li } = elements


export const Row = (rowProps, child, props) => (
  li(
    {
      ...rowProps,
      className: `row${rowProps.className && ' ' + rowProps.className || ''}`
    },
    child
  )
)
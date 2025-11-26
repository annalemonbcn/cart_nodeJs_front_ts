import { Children, isValidElement, type ReactNode } from 'react'

// TODO: move this and modal/types to common file
const getChildrenDisplayName = (children: ReactNode, displayName: string) =>
  Children.toArray(children).filter(
    (child) => !(!isValidElement(child) || typeof child.type !== 'function' || child.type.name !== displayName)
  )

export { getChildrenDisplayName }

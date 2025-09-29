import { Children, isValidElement, type ReactNode } from 'react'

const validateChildren = (allowed: string[], children: ReactNode | ReactNode[], componentName: string) => {
  const notMatched = Children.toArray(children)
    .map((child) => {
      if (!isValidElement(child)) return typeof child
      const type = child.type as any
      return type.displayName || type.name || typeof child
    })
    .filter((childName) => !allowed.includes(childName))

  if (notMatched.length > 0) {
    throw new Error(
      `Children of type [${notMatched.join(', ')}] do not match allowed children definition at ${componentName}`
    )
  }
}

const getChildrenDisplayName = (children: ReactNode, displayName: string) =>
  Children.toArray(children).filter(
    (child) => !(!isValidElement(child) || typeof child.type !== 'function' || child.type.name !== displayName)
  )

export { validateChildren, getChildrenDisplayName }

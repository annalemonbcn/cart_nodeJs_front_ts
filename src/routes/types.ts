import React from 'react'
import type { RouteName } from './routesData'

type PageRoute = {
  name: RouteName
  path: string
  title?: string
  component?: () => React.JSX.Element
  children?: PageRoute[]
  protected?: boolean
  isWrapper?: boolean
  redirectTo?: string
}

export type { PageRoute }

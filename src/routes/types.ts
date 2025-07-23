import React from 'react'
import type { RouteName } from './routesData'

type PageRoute = {
  name: RouteName
  path: string
  title?: string
  component?: () => React.JSX.Element
  children?: PageRoute[]
  protected?: boolean
}

export type { PageRoute }

import type { PageRoute } from './types'
import { routesData } from './routesData'

type RouteEntry = {
  name: string
  path: string
  title: string
}

const flattenRoutes = (routes: PageRoute[], basePath = ''): Record<string, RouteEntry> =>
  routes.reduce((acc, route) => {
    const fullPath = basePath + route.path
    acc[route.name] = {
      name: route.name,
      path: fullPath,
      title: route.title || ''
    }

    if (route.children) {
      const childrenMap = flattenRoutes(route.children, fullPath + '/')
      Object.assign(acc, childrenMap)
    }

    return acc
  }, {} as Record<string, RouteEntry>)

const routeMap = flattenRoutes(routesData)

export { routeMap }

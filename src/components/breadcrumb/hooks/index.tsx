import type { IBreadcrumbItem } from '../types'
import { homeStep } from '../constants'
import { routeMap } from '@/routes/routeMap'

const useGenerateBreadcrumbSteps = (pathname: string) => {
  const segments = pathname.split('/').filter(Boolean)
  const cumulativePaths: string[] = []
  const breadcrumbSteps: IBreadcrumbItem[] = []

  segments.forEach((segment, index) => {
    const currentPath = '/' + segments.slice(0, index + 1).join('/')
    cumulativePaths.push(currentPath)

    const matchingRoute = Object.values(routeMap).find((route) => route.path === currentPath)

    if (matchingRoute) {
      breadcrumbSteps.push({
        name: matchingRoute.title || segment,
        linkto: matchingRoute.path
      })
    } else {
      breadcrumbSteps.push({
        name: segment,
        linkto: currentPath
      })
    }
  })

  return [homeStep, ...breadcrumbSteps]
}

export { useGenerateBreadcrumbSteps }

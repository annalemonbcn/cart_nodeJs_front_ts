import type { IBreadcrumbItem } from './types'
import { routeMap } from '@/routes/utils'

const homeStep: IBreadcrumbItem = {
  name: 'Home',
  linkto: routeMap.home.path
}

export { homeStep }

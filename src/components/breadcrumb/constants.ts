import routes from '@/routes/routes'
import type { IBreadcrumbItem } from './types'

const homeStep: IBreadcrumbItem = {
  name: 'Home',
  linkto: routes.homePage.path
}

export { homeStep }

import { routeMap } from '@/routes/utils'
import type { NavLink } from './types'

const navLinks: NavLink[] = [
  {
    label: routeMap.home.title,
    path: routeMap.home.path
  },
  {
    label: routeMap.women.title,
    path: routeMap.women.path
  },
  {
    label: routeMap.men.title,
    path: routeMap.men.path
  }
]

export { navLinks }

import type { PageRoute } from '@/utils/routes'
import { HomePage } from './index.tsx'

const HomePageRoute: PageRoute = {
  name: 'home',
  path: '/shop',
  displayText: 'Home',
  component: HomePage
}

export default HomePageRoute

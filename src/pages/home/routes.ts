import type { Route } from '@/utils/routes'
import { HomePage } from './index.tsx'

const HomePageRoute: Route = {
  name: 'home',
  path: '/',
  displayText: 'Home',
  component: HomePage
}

export default HomePageRoute

import type { Route } from '@/utils/routes'
import { MyAccount } from './index.tsx'

const MyAccountRoute: Route = {
  name: 'my-account',
  path: '/my-account',
  displayText: 'My Account',
  component: MyAccount
}

export default MyAccountRoute

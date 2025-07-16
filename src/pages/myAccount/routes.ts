import type { PageRoute } from '@/utils/routes'
import { MyAccount } from './index.tsx'

const MyAccountRoute: PageRoute = {
  name: 'my-account',
  path: '/my-account',
  displayText: 'My Account',
  component: MyAccount
}

export default MyAccountRoute

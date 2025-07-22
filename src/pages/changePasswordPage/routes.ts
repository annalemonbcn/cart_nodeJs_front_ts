import type { PageRoute } from '@/utils/routes'
import { ChangePasswordPage } from '.'

const ChangePasswordRoute: PageRoute = {
  name: 'change-password',
  path: '/change-password',
  displayText: 'Change Password',
  component: ChangePasswordPage
}

export default ChangePasswordRoute

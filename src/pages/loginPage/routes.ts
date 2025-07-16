import type { PageRoute } from '@/utils/routes'
import { LoginPage } from './index.tsx'

const LoginRoute: PageRoute = {
  name: 'login',
  path: '/login',
  displayText: 'Login',
  component: LoginPage
}

export default LoginRoute

import type { Route } from '@/utils/routes'
import { LoginPage } from './index.tsx'

const LoginRoute: Route = {
  name: 'login',
  path: '/login',
  displayText: 'Login',
  component: LoginPage
}

export default LoginRoute

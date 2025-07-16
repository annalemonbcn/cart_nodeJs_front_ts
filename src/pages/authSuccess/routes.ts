import type { PageRoute } from '@/utils/routes'
import AuthSuccess from './index.tsx'

const AuthSuccessRoute: PageRoute = {
  name: 'auth-success',
  path: '/auth/success',
  displayText: 'Auth Success',
  component: AuthSuccess
}

export default AuthSuccessRoute

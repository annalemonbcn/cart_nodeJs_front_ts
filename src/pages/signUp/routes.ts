import type { PageRoute } from '@/utils/routes'
import { SignUpPage } from './index.tsx'

const SignUpRoute: PageRoute = {
  name: 'signup',
  path: '/signup',
  displayText: 'Sign Up',
  component: SignUpPage
}

export default SignUpRoute

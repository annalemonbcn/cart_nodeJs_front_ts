import type { Route } from '@/utils/routes'
import { SignUpPage } from './index.tsx'

const SignUpRoute: Route = {
  name: 'signup',
  path: '/signup',
  displayText: 'Sign Up',
  component: SignUpPage
}

export default SignUpRoute

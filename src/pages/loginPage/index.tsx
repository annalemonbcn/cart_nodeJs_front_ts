import { AuthLayout } from '@/common/layouts/authLayout'
import { SocialLogin } from './components/socialLogin'
import { Separator } from '@/components/separator'
import { LoginForm } from './components/loginForm'

const LoginPage = () => (
  <AuthLayout imgSrc="/images/login.png" headerText="Sign In">
    <SocialLogin />
    <Separator displayText />
    <LoginForm />
  </AuthLayout>
)

export { LoginPage }

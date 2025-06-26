import { AuthLayout } from '@/common/layouts/authLayout'
import { SocialLogin } from './components/socialLogin'
import { Separator } from '@/components/separator'

const LoginPage = () => (
  <AuthLayout imgSrc="/images/login.png" headerText="Sign In">
    <SocialLogin />
    <Separator displayText={true} />
    {/* <LoginForm /> */}
  </AuthLayout>
)

export default LoginPage

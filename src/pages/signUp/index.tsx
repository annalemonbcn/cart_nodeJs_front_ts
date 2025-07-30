import { AuthLayout } from '@/common/layouts/authLayout'
import { SocialLogin } from '../loginPage/components/socialLogin'
import { SignUpForm } from './components/signUpForm'

const SignUpPage = () => (
  <AuthLayout
    imgSrc="/images/signup.png"
    headerText="Sign Up"
    headerDescription="Sign up for free to access to our products."
  >
    <SocialLogin />
    <SignUpForm />
  </AuthLayout>
)

export { SignUpPage }

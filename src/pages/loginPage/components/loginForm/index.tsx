import { useForm } from 'react-hook-form'
import type { LoginFormShape } from './types'
import { SignInBtn } from '../signInBtn'
import EmailFormField from '@/common/form/emailFormField'
import Link from '@/components/link'
import { routeMap } from '@/routes/utils'
import { StandardForm } from '@/components/customForm/standardForm'
import { PasswordFormField } from '@/common/form/passwordFormField'

const LoginForm = () => {
  const methods = useForm<LoginFormShape>()

  return (
    <StandardForm methods={methods}>
      <EmailFormField<LoginFormShape> />
      <PasswordFormField<LoginFormShape> label="Password" isRequired variant="primary" />

      <Link to={routeMap.forgotPassword.path}>Forget your password?</Link>
      <SignInBtn />
    </StandardForm>
  )
}

export { LoginForm }

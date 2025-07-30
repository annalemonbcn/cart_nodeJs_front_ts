import { useForm } from 'react-hook-form'
import type { LoginFormShape } from './types'
import CustomForm from '@/components/customForm'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { SignInBtn } from '../signInBtn'
import EmailFormField from '@/common/form/emailFormField'
import PasswordFormField from '@/common/form/passwordFormField'
import Link from '@/components/link'

const LoginForm = () => {
  const methods = useForm<LoginFormShape>()

  return (
    <CustomForm methods={methods}>
      <FlexContainer flexDirection="column" gap={tokens.space.md}>
        <EmailFormField<LoginFormShape> />
        <PasswordFormField<LoginFormShape> />

        <Link to="_void">Forget your password?</Link>

        <SignInBtn />
      </FlexContainer>
    </CustomForm>
  )
}

export { LoginForm }

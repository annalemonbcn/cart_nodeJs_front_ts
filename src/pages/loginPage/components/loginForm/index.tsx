import { useForm } from 'react-hook-form'
import type { LoginFormType } from './types'
import CustomForm from '@/components/customForm'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { SignInBtn } from '../signInBtn'
import EmailFormField from '@/common/emailFormField'
import PasswordFormField from '@/common/passwordFormField'
import Link from '@/components/link'

const LoginForm = () => {
  const methods = useForm<LoginFormType>()

  return (
    <CustomForm methods={methods}>
      <FlexContainer flexDirection="column" gap={tokens.space.md}>
        <EmailFormField<LoginFormType> />
        <PasswordFormField<LoginFormType> />

        <Link to="_void">Forget your password?</Link>

        <SignInBtn />
      </FlexContainer>
    </CustomForm>
  )
}

export { LoginForm }

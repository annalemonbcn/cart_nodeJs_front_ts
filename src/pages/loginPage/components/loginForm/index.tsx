import { useForm } from 'react-hook-form'
import type { LoginFormType } from './types'
import CustomForm from '@/components/customForm'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables'
import { SignInBtn } from '../signInBtn'
import EmailFormField from '@/common/emailFormField'
import PasswordFormField from '@/common/passwordFormField'

const LoginForm = () => {
  const methods = useForm<LoginFormType>()

  // const auxText = <StyledLink href="https://google.com">Forget your password?</StyledLink>

  return (
    <CustomForm methods={methods}>
      <FlexContainer flexDirection="column" gap={tokens.space.md}>
        <EmailFormField<LoginFormType> />

        <PasswordFormField<LoginFormType> />

        <SignInBtn />
      </FlexContainer>
    </CustomForm>
  )
}

export { LoginForm }

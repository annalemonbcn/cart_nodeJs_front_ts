import CustomForm from '@/components/customForm'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables'
import { useForm } from 'react-hook-form'
import type { SignUpFormType } from './types'
import EmailFormField from '@/common/emailFormField'
import PasswordFormField from '@/common/passwordFormField'
import { SignUpBtn } from '../signUpBtn'

const SignUpForm = () => {
  const methods = useForm<SignUpFormType>()

  return (
    <CustomForm methods={methods}>
      <FlexContainer flexDirection="column" gap={tokens.space.md}>
        <EmailFormField<SignUpFormType> />
        <PasswordFormField<SignUpFormType> />
        <SignUpBtn />
      </FlexContainer>
    </CustomForm>
  )
}

export { SignUpForm }

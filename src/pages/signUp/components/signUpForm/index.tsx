import CustomForm from '@/components/customForm'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { useForm } from 'react-hook-form'
import EmailFormField from '@/common/emailFormField'
import PasswordFormField from '@/common/passwordFormField'
import { SignUpBtn } from '../signUpBtn'
import TextFormField from '@/common/textFormField'
import type { SignUpFormType } from './types'

const SignUpForm = () => {
  const methods = useForm<SignUpFormType>()

  return (
    <CustomForm methods={methods}>
      <FlexContainer flexDirection="column" gap={tokens.space.md}>
        <TextFormField<SignUpFormType> label="First Name" inputName="firstName" />
        <TextFormField<SignUpFormType> label="Last Name" inputName="lastName" />
        <EmailFormField<SignUpFormType> />
        <PasswordFormField<SignUpFormType> />

        <SignUpBtn />
      </FlexContainer>
    </CustomForm>
  )
}

export { SignUpForm }

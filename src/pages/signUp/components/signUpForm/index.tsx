import CustomForm from '@/components/customForm'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { useForm } from 'react-hook-form'
import EmailFormField from '@/common/form/emailFormField'
import PasswordFormField from '@/common/form/passwordFormField'
import { SignUpBtn } from '../signUpBtn'
import TextFormField from '@/common/form/textFormField'
import type { SignUpFormShape } from './types'

const SignUpForm = () => {
  const methods = useForm<SignUpFormShape>()

  return (
    <CustomForm methods={methods}>
      <FlexContainer flexDirection="column" gap={tokens.space.md}>
        <TextFormField<SignUpFormShape> label="First Name" inputName="firstName" isRequired />
        <TextFormField<SignUpFormShape> label="Last Name" inputName="lastName" isRequired />
        <EmailFormField<SignUpFormShape> isRequired />
        <PasswordFormField<SignUpFormShape> isRequired />

        <SignUpBtn />
      </FlexContainer>
    </CustomForm>
  )
}

export { SignUpForm }

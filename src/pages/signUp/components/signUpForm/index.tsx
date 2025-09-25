import { useForm } from 'react-hook-form'
import EmailFormField from '@/common/form/emailFormField'
import { PasswordFormField } from '@/common/form/passwordFormField'
import { SignUpBtn } from '../signUpBtn'
import TextFormField from '@/common/form/textFormField'
import type { SignUpFormShape } from './types'
import { StandardForm } from '@/components/customForm/standardForm'

const SignUpForm = () => {
  const methods = useForm<SignUpFormShape>()

  return (
    <StandardForm methods={methods}>
      <TextFormField<SignUpFormShape> label="First Name" inputName="firstName" isRequired />
      <TextFormField<SignUpFormShape> label="Last Name" inputName="lastName" isRequired />
      <EmailFormField<SignUpFormShape> isRequired />
      <PasswordFormField<SignUpFormShape> label="Password" isRequired />

      <SignUpBtn />
    </StandardForm>
  )
}

export { SignUpForm }

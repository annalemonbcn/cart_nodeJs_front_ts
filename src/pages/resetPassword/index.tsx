import EmailFormField from '@/common/form/emailFormField'
import { AuthLayout } from '@/common/layouts/authLayout'
import CustomForm from '@/components/customForm'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { StyledButton } from './styles'

type ResetPasswordFormShape = {
  email: string
}

const ResetPasswordPage = () => {
  const methods = useForm<ResetPasswordFormShape>()
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<ResetPasswordFormShape> = (data) => console.log(data)

  return (
    <AuthLayout
      imgSrc="/images/reset_password.png"
      headerText="Reset Password"
      headerDescription="Enter your email address and we'll send you a link to reset your password."
    >
      <CustomForm methods={methods}>
        <EmailFormField isRequired />

        <StyledButton variant="primary" onClick={handleSubmit(onSubmit)}>
          Reset Password
        </StyledButton>
      </CustomForm>
    </AuthLayout>
  )
}

export { ResetPasswordPage }

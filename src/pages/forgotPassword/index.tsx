import EmailFormField from '@/common/form/emailFormField'
import { AuthLayout } from '@/common/layouts/authLayout'
import CustomForm from '@/components/customForm'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { StyledButton } from './styles'
import type { ForgotPasswordType } from '@/services/auth/types'
import { useForgotPassword } from './hooks'

type ForgotPasswordFormShape = ForgotPasswordType

const ForgotPasswordPage = () => {
  const methods = useForm<ForgotPasswordFormShape>()
  const { handleSubmit } = methods

  const { mutate, isPending } = useForgotPassword()

  const onSubmit: SubmitHandler<ForgotPasswordFormShape> = (data) => mutate(data)

  return (
    <AuthLayout
      imgSrc="/images/reset_password.png"
      headerText="Forgot Your Password?"
      headerDescription="Enter your email address and we'll send you a link to reset your password."
    >
      <CustomForm methods={methods}>
        <EmailFormField isRequired />

        <StyledButton variant="primary" onClick={handleSubmit(onSubmit)} disabled={isPending}>
          Send
        </StyledButton>
      </CustomForm>
    </AuthLayout>
  )
}

export { ForgotPasswordPage }

import EmailFormField from '@/common/form/emailFormField'
import { AuthLayout } from '@/common/layouts/authLayout'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { ForgotPasswordType } from '@/services/auth/types'
import { useForgotPassword } from './hooks'
import { StandardForm } from '@/components/customForm/standardForm'
import { StyledFormButton } from '@/components/customForm/standardForm/styles'

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
      <StandardForm methods={methods}>
        <EmailFormField isRequired />

        <StyledFormButton variant="primary" onClick={handleSubmit(onSubmit)} disabled={isPending}>
          Send
        </StyledFormButton>
      </StandardForm>
    </AuthLayout>
  )
}

export { ForgotPasswordPage }

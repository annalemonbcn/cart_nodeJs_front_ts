import EmailFormField from '@/common/form/emailFormField'
import { AuthLayout } from '@/common/layouts/authLayout'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useForgotPassword } from './hooks'
import { StandardForm } from '@/components/customForm/standardForm'
import { StyledFormButton } from '@/components/customForm/standardForm/styles'
import type { ForgotPasswordFormShape } from './types'
import { forgotPasswordDefaultValues } from './constants'

const ForgotPasswordPage = () => {
  const methods = useForm<ForgotPasswordFormShape>({
    defaultValues: forgotPasswordDefaultValues
  })
  const { handleSubmit, reset } = methods

  const { mutate, isPending } = useForgotPassword(reset)

  const onSubmit: SubmitHandler<ForgotPasswordFormShape> = (data) => {
    mutate(data)
  }

  const shouldDisable = !methods.formState.isValid || isPending

  return (
    <AuthLayout
      imgSrc="/images/reset_password.png"
      headerText="Forgot Your Password?"
      headerDescription="Enter your email address and we'll send you a link to reset your password."
    >
      <StandardForm methods={methods}>
        <EmailFormField isRequired />

        <StyledFormButton variant="primary" onClick={handleSubmit(onSubmit)} disabled={shouldDisable}>
          {isPending ? 'Sending...' : 'Send'}
        </StyledFormButton>
      </StandardForm>
    </AuthLayout>
  )
}

export { ForgotPasswordPage }

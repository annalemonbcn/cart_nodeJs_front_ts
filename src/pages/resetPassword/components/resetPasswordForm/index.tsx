import { PasswordFormField } from '@/common/form/passwordFormField'
import { useForm } from 'react-hook-form'
import type { IResetPasswordFormProps, ResetPasswordFormShape } from './types'
import type { SubmitHandler } from 'react-hook-form'
import { useGetValidationRules } from './utils'
import { useChangePassword, useResetPassword } from '../../hooks'
import { useSearchParams } from 'react-router-dom'
import type { ResetPasswordType } from '@/services/auth/types'
import { StyledFormButton } from '@/components/customForm/standardForm/styles'
import { StandardForm } from '@/components/customForm/standardForm'

const ResetPasswordForm = ({ mode }: IResetPasswordFormProps) => {
  const methods = useForm<ResetPasswordFormShape>()
  const { handleSubmit, watch } = methods

  const { mutate: resetPassword, isPending: isResetPending } = useResetPassword()
  const { mutate: changePassword, isPending: isChangePending } = useChangePassword()

  const [searchParams] = useSearchParams()

  const onSubmit: SubmitHandler<ResetPasswordFormShape> = (data) => {
    if (mode === 'reset') {
      const payload: ResetPasswordType = { password: data.password, token: searchParams.get('token') as string }
      resetPassword(payload)
    } else {
      changePassword({ password: data.password })
    }
  }

  const { confirmPasswordRule } = useGetValidationRules(watch)

  const shouldDisable = !methods.formState.isValid || isResetPending || isChangePending

  return (
    <StandardForm methods={methods}>
      <PasswordFormField<ResetPasswordFormShape> label="Password" isRequired variant="primary" />
      <PasswordFormField<ResetPasswordFormShape>
        label="Confirm Password"
        inputName="confirmPassword"
        isRequired
        validationRules={confirmPasswordRule}
      />

      <StyledFormButton variant="primary" onClick={handleSubmit(onSubmit)} disabled={shouldDisable}>
        Reset Password
      </StyledFormButton>
    </StandardForm>
  )
}

export { ResetPasswordForm }

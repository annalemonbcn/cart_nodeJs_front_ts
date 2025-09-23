import { NewPasswordFormField } from '@/common/form/passwordFormField'
import CustomForm from '@/components/customForm'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { useForm } from 'react-hook-form'
import { StyledButton } from './styles'
import type { IResetPasswordFormProps, ResetPasswordFormShape } from './types'
import type { SubmitHandler } from 'react-hook-form'
import { useGetValidationRules } from './utils'
import { useChangePassword, useResetPassword } from '../../hooks'
import { useSearchParams } from 'react-router-dom'
import type { ResetPasswordType } from '@/services/auth/types'

// TODO: refactor ?
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

  const { passwordRule, confirmPasswordRule } = useGetValidationRules(watch)

  const shouldDisable = !methods.formState.isValid || isResetPending || isChangePending

  return (
    <CustomForm methods={methods}>
      <FlexContainer flexDirection="column" gap={tokens.space.md}>
        <NewPasswordFormField<ResetPasswordFormShape>
          label="Password"
          inputName="password"
          isRequired
          validationRules={passwordRule}
          variant="primary"
        />
        <NewPasswordFormField<ResetPasswordFormShape>
          label="Confirm Password"
          inputName="confirmPassword"
          isRequired
          validationRules={confirmPasswordRule}
        />

        <StyledButton variant="primary" onClick={handleSubmit(onSubmit)} disabled={shouldDisable}>
          Reset Password
        </StyledButton>
      </FlexContainer>
    </CustomForm>
  )
}

export { ResetPasswordForm }

import { NewPasswordFormField } from '@/common/form/passwordFormField'
import CustomForm from '@/components/customForm'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { useForm } from 'react-hook-form'
import { StyledButton } from './styles'
import type { ChangePasswordFormShape } from './types'
import type { SubmitHandler } from 'react-hook-form'
import { useGetValidationRules } from './utils'

// TODO: refactor ?
const ChangePasswordForm = () => {
  const methods = useForm<ChangePasswordFormShape>()
  const { handleSubmit, watch } = methods

  const onSubmit: SubmitHandler<ChangePasswordFormShape> = (data) => console.log(data)

  const { passwordRule, confirmPasswordRule } = useGetValidationRules(watch)

  const shouldDisable = !methods.formState.isValid

  return (
    <CustomForm methods={methods}>
      <FlexContainer flexDirection="column" gap={tokens.space.md}>
        <NewPasswordFormField<ChangePasswordFormShape>
          label="Password"
          inputName="password"
          isRequired
          validationRules={passwordRule}
          variant="primary"
        />
        <NewPasswordFormField<ChangePasswordFormShape>
          label="Confirm Password"
          inputName="confirmPassword"
          isRequired
          validationRules={confirmPasswordRule}
        />

        <StyledButton variant="primary" onClick={handleSubmit(onSubmit)} disabled={shouldDisable}>
          Change Password
        </StyledButton>
      </FlexContainer>
    </CustomForm>
  )
}

export { ChangePasswordForm }

import type { RegisterOptions, UseFormWatch } from 'react-hook-form'
import type { ResetPasswordFormShape } from './types'

const useGetValidationRules = (watch: UseFormWatch<ResetPasswordFormShape>) => {
  const confirmPasswordRule: RegisterOptions<ResetPasswordFormShape, 'confirmPassword'> = {
    required: 'Confirm Password is required',
    validate: (value) => value === watch('password') || 'Passwords do not match'
  }

  return { confirmPasswordRule }
}

export { useGetValidationRules }

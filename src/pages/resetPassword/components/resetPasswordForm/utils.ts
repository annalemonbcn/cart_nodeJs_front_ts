import type { RegisterOptions, UseFormWatch } from 'react-hook-form'
import { regex } from '@/utils/constants'
import type { ChangePasswordFormShape } from './types'

const useGetValidationRules = (watch: UseFormWatch<ChangePasswordFormShape>) => {
  const passwordRule: RegisterOptions = {
    pattern: {
      value: regex.passwordRegex,
      message: 'Password must be at least 8 characters long, include one uppercase letter and one special character'
    }
  }

  const confirmPasswordRule: RegisterOptions = {
    required: 'Confirm Password is required',
    validate: (value) => value === watch('password') || 'Passwords do not match'
  }

  return { passwordRule, confirmPasswordRule }
}

export { useGetValidationRules }

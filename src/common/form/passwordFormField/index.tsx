import type { FieldValues, Path, RegisterOptions } from 'react-hook-form'
import BaseFormField from '../baseFormField'
import { regex } from '@/utils/constants'
import { useMemo } from 'react'
import type { NewPasswordFormFieldProps } from './types'

const PasswordFormField = <T extends FieldValues>({
  validationRules,
  inputName = 'password' as Path<T>,
  ...props
}: NewPasswordFormFieldProps<T>) => {
  const passwordPattern: RegisterOptions<T, Path<T>>['pattern'] = {
    value: regex.passwordRegex,
    message: 'Password must be at least 8 characters long, include one uppercase letter and one special character'
  }

  const mergedRules = useMemo<RegisterOptions<T, Path<T>>>(() => {
    const userRules = (validationRules ?? {}) as Partial<RegisterOptions<T, Path<T>>>

    const result = {
      ...userRules,
      pattern: passwordPattern
    } as RegisterOptions<T, Path<T>>

    return result
  }, [validationRules])

  return (
    <BaseFormField<T>
      {...props}
      inputName={inputName}
      type="password"
      autoComplete="off"
      showIcon={true}
      validationRules={mergedRules}
    />
  )
}

export { PasswordFormField }

import { useFormContext, type FieldValues, type Path, type RegisterOptions } from 'react-hook-form'
import type { BaseFormFieldProps } from './types'
import { useState } from 'react'
import FormField from '@/components/formField'
import Input from '@/components/input'
import { mergeRefs } from './utils'

const BaseFormField = <T extends FieldValues>({
  label,
  inputName,
  type = 'text',
  autoComplete = 'off',
  isRequired = false,
  variant = 'primary',
  disabled = false,
  inputRef,
  showIcon = false,
  validationRules = {}
}: BaseFormFieldProps<T>) => {
  const {
    register,
    formState: { errors }
  } = useFormContext<T>()

  const fieldError = errors[inputName]

  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => setShowPassword((prev) => !prev)

  const mergedRules = {
    ...(isRequired && !validationRules?.required
      ? {
          required: {
            value: true,
            message: `${label} is required`
          }
        }
      : {}),
    ...validationRules
  }

  const { ref, ...restRegister } = register(inputName as Path<T>, mergedRules as RegisterOptions<T, Path<T>>)

  const resolvedType = type === 'password' ? (showPassword ? 'text' : 'password') : type

  return (
    <FormField
      label={label}
      inputName={inputName}
      isRequired={isRequired}
      variant={variant}
      hasError={!!fieldError}
      errorMessage={fieldError?.message as string}
      showIcon={showIcon}
      showPassword={showPassword}
      toggleShowPassword={toggleShowPassword}
    >
      <Input
        {...restRegister}
        type={resolvedType}
        autoComplete={autoComplete}
        variant={variant}
        disabled={disabled}
        ref={mergeRefs(ref, inputRef)}
      />
    </FormField>
  )
}

export default BaseFormField

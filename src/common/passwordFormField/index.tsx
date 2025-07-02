import FormField from '@/components/formField'
import Input from '@/components/input'
import { useState } from 'react'
import { type FieldValues, type Path, useFormContext } from 'react-hook-form'

const PasswordFormField = <T extends FieldValues>() => {
  const {
    register,
    formState: { errors }
  } = useFormContext<T>()

  const passwordFieldError = errors.password

  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => setShowPassword((prev) => !prev)

  return (
    <FormField
      label="Password"
      inputName="password"
      showIcon
      showPassword={showPassword}
      toggleShowPassword={toggleShowPassword}
      hasError={!!passwordFieldError}
      errorMessage={passwordFieldError?.message as string}
    >
      <Input
        {...register('password' as Path<T>, {
          required: 'Password is required',
          pattern: {
            value: /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
            message:
              'Password must be at least 8 characters long, include one uppercase letter and one special character'
          }
        })}
        type={showPassword ? 'text' : 'password'}
        autoComplete="current-password"
      />
    </FormField>
  )
}

export default PasswordFormField

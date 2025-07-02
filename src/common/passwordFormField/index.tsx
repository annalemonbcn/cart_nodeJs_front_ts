import FormField from '@/components/formField'
import Input from '@/components/input'
import Text from '@/components/text'
import { type FieldValues, type Path, useFormContext } from 'react-hook-form'

const PasswordFormField = <T extends FieldValues>() => {
  const {
    register,
    formState: { errors }
  } = useFormContext<T>()

  const passwordFieldError = errors.password

  return (
    <FormField label="Password" inputName="password">
      <Input
        {...register('password' as Path<T>, {
          required: 'Password is required',
          pattern: {
            value: /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
            message:
              'Password must be at least 8 characters long, include one uppercase letter and one special character'
          }
        })}
        type="password"
      />
      {passwordFieldError && (
        <Text color="danger" size="s2">
          {passwordFieldError?.message as string}
        </Text>
      )}
    </FormField>
  )
}

export default PasswordFormField

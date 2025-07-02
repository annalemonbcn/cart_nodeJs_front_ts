import FormField from '@/components/formField'
import Input from '@/components/input'
import Text from '@/components/text'
import { type FieldValues, type Path, useFormContext } from 'react-hook-form'

const EmailFormField = <T extends FieldValues>() => {
  const {
    register,
    formState: { errors }
  } = useFormContext<T>()

  const emailFieldError = errors.email

  return (
    <FormField label="Email address" inputName="email">
      <Input
        {...register('email' as Path<T>, {
          required: {
            value: true,
            message: 'Email is required'
          },
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Enter a valid email address'
          }
        })}
        type="text"
      />
      {emailFieldError && (
        <Text color="danger" size="s2">
          {emailFieldError?.message as string}
        </Text>
      )}
    </FormField>
  )
}

export default EmailFormField

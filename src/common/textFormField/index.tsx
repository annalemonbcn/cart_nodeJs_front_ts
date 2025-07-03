import FormField from '@/components/formField'
import Input from '@/components/input'
import { useFormContext, type FieldValues, type Path } from 'react-hook-form'

const TextFormField = <T extends FieldValues>({
  label,
  inputName,
  isRequired
}: {
  label: string
  inputName: string
  isRequired?: boolean
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext<T>()

  const fieldError = errors[inputName]

  return (
    <FormField label={label} inputName={inputName} hasError={!!fieldError} errorMessage={fieldError?.message as string}>
      <Input
        {...register(inputName as Path<T>, {
          required: {
            value: isRequired ?? true,
            message: `${label} is required`
          }
        })}
        type="text"
        autoComplete="off"
      />
    </FormField>
  )
}

export default TextFormField

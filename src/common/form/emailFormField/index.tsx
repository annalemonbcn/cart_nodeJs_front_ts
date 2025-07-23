import type { FormFieldVariant } from '@/components/formField/types'
import { type FieldValues, type Path } from 'react-hook-form'
import BaseFormField from '../baseFormField'

const EmailFormField = <T extends FieldValues>(props: {
  isRequired?: boolean
  variant?: FormFieldVariant
  disabled?: boolean
  inputRef?: React.RefObject<HTMLInputElement>
}) => {
  const inputName = 'email' as Path<T>

  return (
    <BaseFormField<T>
      label="Email address"
      inputName={inputName}
      type="text"
      autoComplete="email"
      {...props}
      validationRules={{
        pattern: {
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'Enter a valid email address'
        }
      }}
    />
  )
}

export default EmailFormField

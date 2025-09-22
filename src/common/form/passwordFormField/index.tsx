import type { FormFieldVariant } from '@/components/formField/types'
import type { FieldValues, Path, RegisterOptions } from 'react-hook-form'
import BaseFormField from '../baseFormField'

// TODO: drop ?
const PasswordFormField = <T extends FieldValues>(props: {
  isRequired?: boolean
  variant?: FormFieldVariant
  showIcon?: boolean
  disabled?: boolean
  inputRef?: React.RefObject<HTMLInputElement>
}) => {
  const inputName = 'password' as Path<T>

  return (
    <BaseFormField<T>
      label="Password"
      inputName={inputName}
      type="password"
      autoComplete="current-password"
      showIcon={props.showIcon}
      {...props}
      validationRules={{
        pattern: {
          value: /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
          message: 'Password must be at least 8 characters long, include one uppercase letter and one special character'
        }
      }}
    />
  )
}

const NewPasswordFormField = <T extends FieldValues>(props: {
  label: string
  inputName: Path<T>
  isRequired?: boolean
  variant?: FormFieldVariant
  disabled?: boolean
  inputRef?: React.RefObject<HTMLInputElement>
  placeholderText?: string
  validationRules?: RegisterOptions
}) => <BaseFormField<T> {...props} type="password" autoComplete="off" showIcon={true} />

export default PasswordFormField
export { NewPasswordFormField }

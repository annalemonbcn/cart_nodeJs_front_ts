import type { FormFieldVariant } from '@/components/formField/types'
import type { FieldValues, Path, RegisterOptions } from 'react-hook-form'

type BaseFormFieldProps<T extends FieldValues> = {
  label: string
  inputName: Path<T>
  type?: 'text' | 'email' | 'password'
  autoComplete?: string
  isRequired?: boolean
  variant?: FormFieldVariant
  disabled?: boolean
  inputRef?: React.RefObject<HTMLInputElement>
  showIcon?: boolean
  validationRules?: RegisterOptions<T, Path<T>>

  placeholderText?: string
}

export type { BaseFormFieldProps }

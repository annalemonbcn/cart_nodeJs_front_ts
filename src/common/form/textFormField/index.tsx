import type { FormFieldVariant } from '@/components/formField/types'
import { type FieldValues, type Path, type RegisterOptions } from 'react-hook-form'
import BaseFormField from '../baseFormField'

const TextFormField = <T extends FieldValues>(props: {
  label: string
  inputName: Path<T>
  isRequired?: boolean
  variant?: FormFieldVariant
  disabled?: boolean
  inputRef?: React.RefObject<HTMLInputElement>
  placeholderText?: string
  validationRules?: RegisterOptions
}) => <BaseFormField<T> {...props} type="text" autoComplete="off" />

export default TextFormField

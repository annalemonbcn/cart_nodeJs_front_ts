import type { FormFieldVariant } from '@/components/formField/types'
import { type FieldValues, type Path } from 'react-hook-form'
import BaseFormField from '../baseFormField'

const TextFormField = <T extends FieldValues>(props: {
  label: string
  inputName: Path<T>
  isRequired?: boolean
  variant?: FormFieldVariant
  disabled?: boolean
  inputRef?: React.RefObject<HTMLInputElement>
}) => <BaseFormField<T> {...props} type="text" autoComplete="off" />

export default TextFormField

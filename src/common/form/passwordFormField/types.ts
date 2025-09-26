import type { FieldValues, Path } from 'react-hook-form'
import type { BaseFormFieldProps } from '../baseFormField/types'

type NewPasswordFormFieldProps<T extends FieldValues> = Omit<
  BaseFormFieldProps<T>,
  'type' | 'autoComplete' | 'showIcon' | 'inputName'
> & { inputName?: Path<T> }

export type { NewPasswordFormFieldProps }

import type { PropsWithChildren } from '@/variables/types/global.types'
import type { IShowPasswordIconProps } from './components/showPasswordIcon/types'

type FormFieldVariant = 'primary' | 'secondary' | 'tertiary'

interface IFormFieldProps extends PropsWithChildren, IShowPasswordIconProps {
  label: string
  inputName: string
  isRequired?: boolean
  hasError?: boolean
  errorMessage?: string
  showIcon?: boolean
  variant?: FormFieldVariant
}

export type { IFormFieldProps, FormFieldVariant }

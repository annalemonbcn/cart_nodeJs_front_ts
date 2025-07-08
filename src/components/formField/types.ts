import type { PropsWithChildren } from '@/variables/types/global.types'
import type { IShowPasswordIconProps } from './components/showPasswordIcon/types'

interface IFormFieldProps extends PropsWithChildren, IShowPasswordIconProps {
  label: string
  inputName: string
  isRequired?: boolean
  hasError?: boolean
  errorMessage?: string
  showIcon?: boolean
}

export type { IFormFieldProps }

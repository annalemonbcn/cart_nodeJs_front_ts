import type { PropsWithChildren } from '@/variables/types'

interface IFormFieldProps extends PropsWithChildren {
  label: string
  inputName: string
  isRequired?: boolean
  hasError?: boolean
  errorMessage?: string
  shouldHide?: boolean
}

export type { IFormFieldProps }

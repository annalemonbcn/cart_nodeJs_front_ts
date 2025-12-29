import type { ButtonHTMLAttributes } from 'react'
import type { FontWeightToken } from '@/theme'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'text'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  isRounded?: boolean
  fitContent?: boolean
  fontWeight?: FontWeightToken
}

export type { ButtonVariant, IButtonProps }

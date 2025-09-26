import type { ButtonHTMLAttributes } from 'react'
import type { FontWeight } from '../text/types'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'text'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  isRounded?: boolean
  fitContent?: boolean
  fontWeight?: FontWeight
}

export type { ButtonVariant, IButtonProps }

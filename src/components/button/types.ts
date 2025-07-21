import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'text'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  isRounded?: boolean
  fitContent?: boolean
}

export type { ButtonVariant, IButtonProps }

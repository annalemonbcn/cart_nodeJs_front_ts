import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  isRounded?: boolean
}

export type { IButtonProps }

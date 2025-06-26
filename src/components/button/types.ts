import type { PropsWithChildren } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface IButtonProps extends PropsWithChildren {
  variant?: ButtonVariant
  isRounded?: boolean
}

export type { IButtonProps }

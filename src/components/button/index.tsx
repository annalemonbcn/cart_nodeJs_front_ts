import { forwardRef } from 'react'
import type { IButtonProps } from './types'
import { StyledButton } from './styles'

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ variant = 'primary', isRounded = false, children, ...props }, ref) => (
    <StyledButton variant={variant} isRounded={isRounded} {...props} ref={ref}>
      {children}
    </StyledButton>
  )
)
Button.displayName = 'Button'

export default Button

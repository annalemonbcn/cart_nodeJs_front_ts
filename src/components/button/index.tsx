import { forwardRef } from 'react'
import { StyledButton } from './styles'
import type { IButtonProps } from './types'

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ variant = 'primary', isRounded = false, fitContent = false, children, ...props }, ref) => (
    <StyledButton variant={variant} isRounded={isRounded} fitContent={fitContent} {...props} ref={ref}>
      {children}
    </StyledButton>
  )
)
Button.displayName = 'Button'

export default Button

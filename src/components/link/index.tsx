import { forwardRef } from 'react'
import { StyledLink } from './styles'
import type { LinkProps } from './types'

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children, size = 's3', weight = 'regular', color, underline = true, className }, ref) => (
    <StyledLink to={to} size={size} weight={weight} color={color} underline={underline} className={className} ref={ref}>
      {children}
    </StyledLink>
  )
)

Link.displayName = 'Link'

export default Link

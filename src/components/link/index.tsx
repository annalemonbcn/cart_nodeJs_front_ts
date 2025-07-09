import { forwardRef } from 'react'
import { StyledLink } from './styles'
import type { LinkProps } from './types'
import Text from '../text'

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children, size = 's3', weight = 'regular', color, underline = true, className }, ref) => (
    <StyledLink to={to} underline={underline} className={className} ref={ref}>
      <Text size={size} weight={weight} color={color}>
        {children}
      </Text>
    </StyledLink>
  )
)

Link.displayName = 'Link'

export default Link

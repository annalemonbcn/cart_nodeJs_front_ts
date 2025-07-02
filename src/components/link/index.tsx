import { StyledLink } from './styles'
import type { LinkProps } from './types'

const Link = ({ to, children, size = 's3', weight = 'regular', color = 'darkNeutral' }: LinkProps) => (
  <StyledLink to={to} size={size} weight={weight} color={color}>
    {children}
  </StyledLink>
)

export default Link

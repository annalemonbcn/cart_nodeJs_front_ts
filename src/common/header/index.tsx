import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables'
import { StyledHeader } from './styles'
import Link from '@/components/link'

const Header = () => (
  <StyledHeader>
    <FlexContainer justifyContent="flex-end" gap={tokens.space.md}>
      <Link to="/login">
        <Button variant="primary">Login</Button>
      </Link>

      <Link to="/login">
        <Button variant="secondary">Register</Button>
      </Link>
    </FlexContainer>
  </StyledHeader>
)

export default Header

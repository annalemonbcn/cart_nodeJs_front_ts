import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables'
import { StyledHeader } from './styles'

const Header = () => (
  <StyledHeader>
    <FlexContainer justifyContent="flex-end" gap={tokens.space.md}>
      <Button variant="primary">Login</Button>
      <Button variant="secondary">Register</Button>
    </FlexContainer>
  </StyledHeader>
)

export default Header

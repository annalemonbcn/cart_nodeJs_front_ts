import { StyledHeader } from './styles'
import { Navbar } from './components/navbar'
import { Buttons } from './components/buttons'
import { FastLinks } from './components/fastLinks'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { Link } from 'react-router'
import routes from '@/routes/routes'

const Header = () => (
  <StyledHeader>
    <Link to={routes.homePage.path}>
      <img src="/images/euphoria-logo.svg" alt="euphoria-logo" />
    </Link>

    <FlexContainer alignItems="center" gap={tokens.space.xl5}>
      <Navbar />

      <FastLinks />

      <Buttons />
    </FlexContainer>
  </StyledHeader>
)

export default Header

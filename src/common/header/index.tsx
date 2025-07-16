import { StyledHeader } from './styles'
import { Navbar } from './components/navbar'
import { Buttons } from './components/buttons'
import { Highlights } from './components/highlights'

const Header = () => (
  <StyledHeader>
    <img src="/images/euphoria-logo.svg" alt="euphoria-logo" />

    <Navbar />

    <Highlights />

    <Buttons />
  </StyledHeader>
)

export default Header

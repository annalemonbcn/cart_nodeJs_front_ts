import { Child, StyledHeader, StyledMobileHeader } from './styles'
import { Navbar } from './components/navbar'
import { Buttons } from './components/buttons'
import { FastLinks } from './components/fastLinks'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { Link } from 'react-router-dom'
import { routeMap } from '@/routes/utils'
import { useState } from 'react'
import { Menu } from './components/menu'

const DesktopHeader = () => (
  <StyledHeader>
    <Link to={routeMap.home.path}>
      <img src="/images/euphoria-logo.svg" alt="euphoria-logo" />
    </Link>

    <FlexContainer alignItems="center" gap={tokens.space.xl5}>
      <Navbar />

      <FastLinks />

      <Buttons />
    </FlexContainer>
  </StyledHeader>
)

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <StyledMobileHeader>
      <Child align="flex-start" onClick={() => setIsMenuOpen((prev) => !prev)}>
        <img src="/icons/hamburger-menu.svg" alt="hamburger-menu" style={{ width: '24px', height: '24px' }} />
      </Child>

      <Child align="center">
        <Link to={routeMap.home.path}>
          <img src="/images/euphoria-logo.svg" alt="euphoria-logo" />
        </Link>
      </Child>

      <Child align="flex-end">
        <FastLinks isMobile />
      </Child>

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </StyledMobileHeader>
  )
}

const Header = () => (
  <>
    <DesktopHeader />
    <MobileHeader />
  </>
)

export default Header

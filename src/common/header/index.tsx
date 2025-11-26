import { useState } from 'react'
import Link from '@/components/link'
import { routeMap } from '@/routes/utils'
import { Buttons } from './components/buttons'
import { FastLinks } from './components/fastLinks'
import { Menu } from './components/menu'
import { Navbar } from './components/navbar'
import { Child, StyledDesktopHeaderLinksWrapper, StyledHeader, StyledMobileHeader } from './styles'

const DesktopHeader = () => (
  <StyledHeader>
    <Link to={routeMap.home.path}>
      <img src="/images/euphoria-logo.svg" alt="euphoria-logo" />
    </Link>

    <StyledDesktopHeaderLinksWrapper alignItems="center">
      <Navbar />

      <FastLinks />

      <Buttons />
    </StyledDesktopHeaderLinksWrapper>
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

import Link from '@/components/link'
import { useDrawerContext } from '@/hooks/useDrawerContext'
import { DrawerProvider } from '@/hooks/useDrawerContext/provider'
import { routeMap } from '@/routes/utils'
import { Buttons } from './components/buttons'
import { FastLinks } from './components/fastLinks'
import { MenuDrawer } from './components/menu'
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
  const { handleOpen } = useDrawerContext()

  return (
    <StyledMobileHeader>
      <Child align="flex-start" onClick={handleOpen}>
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

      <MenuDrawer />
    </StyledMobileHeader>
  )
}

const Header = () => (
  <DrawerProvider>
    <DesktopHeader />
    <MobileHeader />
  </DrawerProvider>
)

export default Header

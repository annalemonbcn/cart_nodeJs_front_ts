import FlexContainer from '@/components/flexContainer'
import Link from '@/components/link'
import { useDrawerContext } from '@/hooks/useDrawerContext'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { routeMap } from '@/routes/utils'
import { theme } from '@/theme'
import { Buttons } from './components/buttons'
import { FastLinks } from './components/fastLinks'
import { MenuDrawer } from './components/menu'
import { Navbar } from './components/navbar'
import { Child, StyledHeader } from './styles'

const DesktopHeader = () => {
  const isDesktop = useMediaQuery(theme.mq.js.up('md'))

  return (
    <>
      <Logo />
      <FlexContainer alignItems="center" gap={isDesktop ? 'xl5' : 'xl2'}>
        <Navbar />
        <FastLinks />
        <Buttons />
      </FlexContainer>
    </>
  )
}

const MobileHeader = () => {
  const { handleOpen } = useDrawerContext()

  return (
    <>
      <Child align="flex-start" onClick={handleOpen}>
        <img src="/icons/hamburger-menu.svg" alt="hamburger-menu" style={{ width: '24px', height: '24px' }} />
      </Child>
      <Child align="center">
        <Logo />
      </Child>
      <Child align="flex-end">
        <FastLinks isMobile />
      </Child>
    </>
  )
}

const Logo = () => (
  <Link to={routeMap.home.path}>
    <img src="/images/euphoria-logo.svg" alt="euphoria-logo" />
  </Link>
)

const Header = () => {
  const isDesktop = useMediaQuery(theme.mq.js.up('md'))

  return (
    <>
      <StyledHeader>{isDesktop ? <DesktopHeader /> : <MobileHeader />}</StyledHeader>

      {!isDesktop && <MenuDrawer />}
    </>
  )
}

export default Header

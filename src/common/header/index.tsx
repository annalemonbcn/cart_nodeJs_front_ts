import Link from '@/components/link'
import { useDrawerContext } from '@/hooks/useDrawerContext'
import { routeMap } from '@/routes/utils'
import { Buttons } from './components/buttons'
import { Highlights } from './components/highlights'
import { MenuDrawer } from './components/menu'
import { Navbar } from './components/navbar'
import { HamburgerButton, SlotCenter, SlotLeft, SlotRight, StyledHeader } from './styles'

const Logo = ({ className }: { className?: string }) => (
  <Link to={routeMap.home.path} className={className}>
    <img src="/images/euphoria-logo.svg" alt="euphoria-logo" />
  </Link>
)

const Header = () => {
  const { handleOpen } = useDrawerContext()

  return (
    <>
      <StyledHeader>
        <SlotLeft>
          <HamburgerButton onClick={handleOpen} aria-label="Open menu">
            <img src="/icons/hamburger-menu.svg" alt="hamburger/menu-icon" width={24} height={24} />
          </HamburgerButton>

          <Logo className="logoDesktop" />
        </SlotLeft>

        <SlotCenter>
          <Logo className="logoMobile" />
        </SlotCenter>

        <SlotRight>
          <Navbar />
          <Highlights />
          <Buttons />
        </SlotRight>
      </StyledHeader>

      <MenuDrawer />
    </>
  )
}

export default Header

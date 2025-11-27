import { Drawer } from '@/common/drawer'
import FlexContainer from '@/components/flexContainer'
import { Separator } from '@/components/separator'
import { useDrawerContext } from '@/hooks/useDrawerContext'
import { routeMap } from '@/routes/utils'
import { tokens } from '@/variables/styles'
import { NavLinks } from './styles'
import { Buttons } from '../buttons'

const MenuDrawer = () => {
  const { isOpen, handleClose } = useDrawerContext()

  return (
    <Drawer isOpen={isOpen} handleClose={handleClose} slideFrom="left" mobileWidth="80%">
      <Drawer.Header handleClose={handleClose} title="Menu" />
      <Drawer.Body>
        <FlexContainer flexDirection="column" gap={tokens.space.xl} style={{ gap: '32px' }}>
          <NavLinks>
            <a href={routeMap.home.path}>Home</a>
            <a href={routeMap.men.path}>Men</a>
            <a href={routeMap.women.path}>Women</a>
          </NavLinks>

          <Separator />

          <NavLinks>
            <a href={routeMap.wishlist.path}>Wishlist</a>
            <a href={routeMap.profile.path}>Profile</a>
            <a href={routeMap.cart.path}>Cart</a>
          </NavLinks>

          <Buttons />
        </FlexContainer>
      </Drawer.Body>
      <Drawer.Footer>Footer here</Drawer.Footer>
    </Drawer>
  )
}

export { MenuDrawer }

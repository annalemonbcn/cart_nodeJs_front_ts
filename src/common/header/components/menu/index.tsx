import { NavLinks, Overlay, StyledSidebar, StyledCloseIcon } from './styles'
import CloseIcon from '@/icons/close.svg?react'
import type { MenuProps } from './types'
import { routeMap } from '@/routes/utils'
import { Separator } from '@/components/separator'
import { tokens } from '@/variables/styles'
import { Buttons } from '../buttons'

const Menu = ({ isOpen, onClose }: MenuProps) => (
  <Overlay isOpen={isOpen} onClick={onClose}>
    <StyledSidebar onClick={(e) => e.stopPropagation()} flexDirection="column" gap={tokens.space.xl}>
      <StyledCloseIcon onClick={onClose}>
        <CloseIcon />
      </StyledCloseIcon>

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
    </StyledSidebar>
  </Overlay>
)

export { Menu }

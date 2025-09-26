import FlexContainer from '@/components/flexContainer'
import { media } from '@/theme'
import { colors, tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledCloseIcon = styled(FlexContainer)`
  cursor: pointer;
  align-self: flex-end;
`

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1000;

  ${media.desktop(`display: none;`)}
`

const StyledSidebar = styled(FlexContainer)`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  background: ${colors.white};

  box-shadow: ${tokens.shadows.basic};

  padding: ${tokens.space.xl};
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
`

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${tokens.space.lg};

  a {
    text-decoration: none;
    color: ${colors.mediumNeutral};
    font-weight: ${tokens.font.weight.medium};
    transition: color 0.2s;

    &:hover {
      color: ${colors.darkNeutral};
    }
  }
`

export { StyledCloseIcon, Overlay, StyledSidebar, NavLinks }

import { createPortal } from 'react-dom'
import FlexContainer from '@/components/flexContainer'
import CloseIcon from '@/icons/close.svg?react'
import { colors, tokens } from '@/variables/styles'
import { StyledOverlay, StyledBody, StyledContainer, StyledFooter } from './styles'
import { getChildrenDisplayName } from './utils'
import type { BodyProps, FooterProps, HeaderProps, DrawerProps } from './types'
import type { PropsWithChildren } from '@/variables/types/global.types'

const DrawerProducer = ({ children }: PropsWithChildren) => createPortal(<>{children}</>, document.body)

const Header = ({ children, handleClose }: HeaderProps) => (
  <FlexContainer gap={tokens.space.md}>
    {children}
    <div onClick={handleClose}>
      <CloseIcon color={colors.darkNeutral} />
    </div>
  </FlexContainer>
)
Header.displayName = 'DrawerHeader'

const Body = ({ children, ...rest }: BodyProps) => (
  <StyledBody flexDirection="column" {...rest}>
    {children}
  </StyledBody>
)
Body.displayName = 'DrawerBody'

const Footer = ({ children }: FooterProps) => <StyledFooter gap={tokens.space.md}>{children}</StyledFooter>
Footer.displayName = 'DrawerFooter'

const Drawer = ({ children, handleClose, isOpen }: DrawerProps) => {
  if (!isOpen) return null

  const header = getChildrenDisplayName(children, Header.name)
  const body = getChildrenDisplayName(children, Body.name)
  const footer = getChildrenDisplayName(children, Footer.name)

  return (
    <DrawerProducer>
      <StyledOverlay onClick={handleClose}>
        <StyledContainer onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
          {header}
          {body}
          {footer}
        </StyledContainer>
      </StyledOverlay>
    </DrawerProducer>
  )
}

Drawer.Body = Body
Drawer.Footer = Footer
Drawer.Header = Header

export { Drawer }

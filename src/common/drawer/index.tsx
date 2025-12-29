import { createPortal } from 'react-dom'
import Text from '@/components/text'
import { getChildrenDisplayName, validateChildren } from '@/utils/children'
import {
  StyledOverlay,
  StyledBody,
  StyledContainer,
  StyledFooter,
  StyledHeaderWrapper,
  StyledIconWrapper,
  StyledCloseIcon
} from './styles'
import type { BodyProps, FooterProps, HeaderProps, DrawerProps } from './types'
import type { PropsWithChildren } from '@/variables/types/global.types'

const DrawerProducer = ({ children }: PropsWithChildren) => createPortal(<>{children}</>, document.body)

const Header = ({ title, handleClose }: HeaderProps) => (
  <StyledHeaderWrapper gap="md">
    {title && (
      <Text color="darkNeutral" size="s5" weight="bold">
        {title}
      </Text>
    )}

    <StyledIconWrapper onClick={handleClose}>
      <StyledCloseIcon />
    </StyledIconWrapper>
  </StyledHeaderWrapper>
)
Header.displayName = 'Header'

const Body = ({ children, ...rest }: BodyProps) => (
  <StyledBody flexDirection="column" {...rest}>
    {children}
  </StyledBody>
)
Body.displayName = 'Body'

const Footer = ({ children }: FooterProps) => <StyledFooter gap="md">{children}</StyledFooter>
Footer.displayName = 'Footer'

const Drawer = ({ children, handleClose, isOpen, slideFrom = 'right', mobileWidth = '100%' }: DrawerProps) => {
  if (!isOpen) return null

  validateChildren(Object.keys(Drawer), children, Drawer.name)
  const header = getChildrenDisplayName(children, Header.name)
  const body = getChildrenDisplayName(children, Body.name)
  const footer = getChildrenDisplayName(children, Footer.name)

  return (
    <DrawerProducer>
      <StyledOverlay onClick={handleClose}>
        <StyledContainer
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          slideFrom={slideFrom}
          mobileWidth={mobileWidth}
        >
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

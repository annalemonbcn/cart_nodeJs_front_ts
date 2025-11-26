import type { FC, JSX } from 'react'
import Modal from 'react-modal'
import Text from '@/components/text'
import CloseIcon from '@/icons/close.svg?react'
import { colors } from '@/variables/styles'
import { DEFAULT_STYLES } from './constants'
import { StyledCloseIcon, StyledFooter, StyledHeader, StyledModalBody, StyledModalWrapper } from './styles'
import { getChildrenDisplayName, validateChildren } from './utils'
import type { BodyProps, FooterProps, HeaderProps, IModalBaseProps } from './types'

const Header = ({ title, description, ...rest }: HeaderProps) => (
  <StyledHeader {...rest}>
    <Text size="s5" weight="bold">
      {title}
    </Text>
    {description && <Text size="s4">{description}</Text>}
  </StyledHeader>
)
Header.displayName = 'ModalHeader'

const Body = ({ children, ...rest }: BodyProps): JSX.Element => (
  <StyledModalBody flexDirection="column" {...rest}>
    {children}
  </StyledModalBody>
)
Body.displayName = 'ModalBody'

const Footer = ({ children }: FooterProps) => <StyledFooter>{children}</StyledFooter>
Footer.displayName = 'ModalFooter'

interface ModalBaseType extends FC<IModalBaseProps> {
  Header: typeof Header
  Body: typeof Body
  Footer: typeof Footer
  displayNames?: string[]
}

const ModalBase: ModalBaseType = ({ handleClose, isOpen, children, width }) => {
  ModalBase.displayNames = ['ModalHeader', 'ModalBody', 'ModalFooter']
  validateChildren(ModalBase.displayNames, children, 'ModalBase')

  const header = getChildrenDisplayName(children, Header.name)
  const body = getChildrenDisplayName(children, Body.name)
  const footer = getChildrenDisplayName(children, Footer.name)

  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} style={DEFAULT_STYLES}>
      <StyledModalWrapper width={width}>
        <StyledCloseIcon justifyContent="flex-end" alignItems="center" onClick={handleClose}>
          <CloseIcon color={colors.darkNeutral} />
        </StyledCloseIcon>
        {header}
        {body}
        {footer}
      </StyledModalWrapper>
    </Modal>
  )
}
ModalBase.Body = Body
ModalBase.Footer = Footer
ModalBase.Header = Header

export default ModalBase

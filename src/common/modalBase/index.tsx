import Text from '@/components/text'
import type { BodyProps, FooterProps, HeaderProps, IModalBaseProps } from './types'
import { StyledCloseIcon, StyledFooter, StyledHeader, StyledModalBody, StyledModalWrapper } from './styles'
import type { JSX } from 'react'
import { getChildrenDisplayName, validateChildren } from './utils'
import Modal from 'react-modal'
import CloseIcon from '@/icons/close.svg?react'

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

const ModalBase = ({ handleClose, isOpen, children, width }: IModalBaseProps) => {
  validateChildren(Object.keys(ModalBase), children, ModalBase.name)
  const header = getChildrenDisplayName(children, Header.name)
  const body = getChildrenDisplayName(children, Body.name)
  const footer = getChildrenDisplayName(children, Footer.name)

  const defaultStyles: Modal.Styles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
      zIndex: 100
    },
    content: {
      inset: '50% auto auto 50%',
      border: 'none',
      borderRadius: '16px',
      padding: '0px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxHeight: '90vh'
    }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} style={defaultStyles}>
      <StyledModalWrapper width={width}>
        <StyledCloseIcon justifyContent="flex-end" alignItems="center" onClick={handleClose}>
          <CloseIcon />
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

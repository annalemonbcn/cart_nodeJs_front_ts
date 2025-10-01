import { SubTitle } from '@/common/titles/subTitle'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { useDeleteAccount } from './hooks'
import ModalBase from '@/common/modalBase'
import { useMultiModal } from '@/hooks/useMultiModal'
import { DELETE_ACCOUNT_MODAL_ID } from './constants'
import { StyledFooter } from './styles'

const DeleteAccountModal = () => {
  const { mutate: deleteAccount, isPending } = useDeleteAccount()

  const { isOpen, handleClose } = useMultiModal(DELETE_ACCOUNT_MODAL_ID)

  return (
    <ModalBase isOpen={isOpen} handleClose={handleClose} width="md">
      <ModalBase.Header title="Are you sure?" />
      <ModalBase.Body>
        <Text size="s3">Are you sure you want to delete your account? This action cannot be undone.</Text>
      </ModalBase.Body>
      <ModalBase.Footer>
        <StyledFooter>
          <Button variant="secondary" onClick={() => handleClose()} disabled={isPending}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => deleteAccount()} disabled={isPending}>
            Delete account
          </Button>
        </StyledFooter>
      </ModalBase.Footer>
    </ModalBase>
  )
}

const DeleteAccount = () => {
  const { handleOpen } = useMultiModal(DELETE_ACCOUNT_MODAL_ID)

  return (
    <>
      <FlexContainer justifyContent="space-between" alignItems="center">
        <SubTitle title="Delete account" />
      </FlexContainer>

      <Text size="s3">Are you sure you want to delete your account? This action cannot be undone.</Text>
      <FlexContainer>
        <Button variant="secondary" onClick={() => handleOpen()}>
          Delete account
        </Button>
      </FlexContainer>

      <DeleteAccountModal />
    </>
  )
}

export { DeleteAccount }

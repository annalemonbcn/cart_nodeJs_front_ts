import { SubTitle } from '@/common/titles/subTitle'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { useDeleteAccount } from './hooks'

const DeleteAccount = () => {
  const { mutate: deleteAccount, isPending } = useDeleteAccount()

  return (
    <>
      <FlexContainer justifyContent="space-between" alignItems="center">
        <SubTitle title="Delete account" />
      </FlexContainer>

      <Text size="s3">Are you sure you want to delete your account? This action cannot be undone.</Text>
      <FlexContainer>
        <Button variant="secondary" onClick={() => deleteAccount()} disabled={isPending}>
          Delete account
        </Button>
      </FlexContainer>
    </>
  )
}

export { DeleteAccount }

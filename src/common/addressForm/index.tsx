import Button from '@/components/button'
import CustomForm from '@/components/customForm'
import FlexContainer from '@/components/flexContainer'
import Loader from '@/components/loader'
import { useAddressForm } from './hooks'
import { renderForm } from './utils'

const AddressForm = () => {
  const { methods, handleSubmit, shouldDisableBtn, isLoading, isPending, goToProfile } = useAddressForm()

  if (isLoading) return <Loader />

  return (
    <CustomForm methods={methods}>
      {renderForm()}

      <FlexContainer alignItems="center" gap="xl">
        <Button fontWeight="medium" onClick={handleSubmit} disabled={shouldDisableBtn}>
          {isPending ? 'Saving...' : 'Save'}
        </Button>
        <Button variant="tertiary" onClick={goToProfile}>
          Cancel
        </Button>
      </FlexContainer>
    </CustomForm>
  )
}

export { AddressForm }

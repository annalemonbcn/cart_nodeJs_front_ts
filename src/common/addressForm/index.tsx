import CustomForm from '@/components/customForm'
import { renderForm } from './utils'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import Button from '@/components/button'
import { useAddressForm } from './hooks'
import Loader from '@/components/loader'

const AddressForm = () => {
  const { methods, handleSubmit, onSubmit, shouldDisableBtn, isLoading, goToProfile } = useAddressForm()

  if (isLoading) return <Loader />

  return (
    <CustomForm methods={methods}>
      {renderForm()}

      <FlexContainer alignItems="center" gap={tokens.space.xl}>
        <Button fontWeight="medium" onClick={handleSubmit(onSubmit)} disabled={shouldDisableBtn}>
          Save
        </Button>
        <Button variant="tertiary" onClick={goToProfile}>
          Cancel
        </Button>
      </FlexContainer>
    </CustomForm>
  )
}

export { AddressForm }

import CustomForm from '@/components/customForm'
import { tokens } from '@/variables/styles'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import { renderFormFields } from './utils'
import Loader from '@/components/loader'
import { useContactDetailsFrom } from '../../hooks'
import ErrorState from '@/common/errorState'

const ContactDetailsForm = () => {
  const { isLoading, noData, refetch, methods, handleSubmit, onSubmit, shouldDisable, isPending } =
    useContactDetailsFrom()

  if (isLoading) return <Loader />

  if (noData) {
    return (
      <ErrorState
        message="We couldn't load your profile details."
        actionLabel="Try again"
        onAction={refetch}
        centerContent
      />
    )
  }

  return (
    <FlexContainer flexDirection="column" gap={tokens.space.md}>
      <CustomForm methods={methods}>{renderFormFields()}</CustomForm>

      <FlexContainer justifyContent="flex-start">
        <Button onClick={handleSubmit(onSubmit)} disabled={shouldDisable}>
          {isPending ? 'Saving...' : 'Save'}
        </Button>
      </FlexContainer>
    </FlexContainer>
  )
}

export { ContactDetailsForm }

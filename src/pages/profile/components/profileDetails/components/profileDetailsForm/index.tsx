import ErrorState from '@/common/errorState'
import { StandardForm } from '@/components/customForm/standardForm'
import { StyledFormButton } from '@/components/customForm/standardForm/styles'
import FlexContainer from '@/components/flexContainer'
import Loader from '@/components/loader'
import { renderFormFields } from './utils'
import { useProfileDetailsFrom } from '../../hooks'

const ProfileDetailsForm = () => {
  const { isLoading, noData, refetch, methods, handleSubmit, shouldDisable, isPending } = useProfileDetailsFrom()

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
    <FlexContainer flexDirection="column" gap="md">
      <StandardForm methods={methods} gap="xs">
        {renderFormFields()}
      </StandardForm>

      <FlexContainer justifyContent="flex-start">
        <StyledFormButton onClick={handleSubmit} disabled={shouldDisable}>
          {isPending ? 'Saving...' : 'Save'}
        </StyledFormButton>
      </FlexContainer>
    </FlexContainer>
  )
}

export { ProfileDetailsForm }

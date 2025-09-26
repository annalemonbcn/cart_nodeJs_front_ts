import { tokens } from '@/variables/styles'
import FlexContainer from '@/components/flexContainer'
import { renderFormFields } from './utils'
import Loader from '@/components/loader'
import ErrorState from '@/common/errorState'
import { StandardForm } from '@/components/customForm/standardForm'
import { StyledFormButton } from '@/components/customForm/standardForm/styles'
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
    <FlexContainer flexDirection="column" gap={tokens.space.md}>
      <StandardForm methods={methods} gap={tokens.space.xs}>
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

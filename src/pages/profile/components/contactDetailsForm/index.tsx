import { useForm, type SubmitHandler } from 'react-hook-form'
import type { ProfileFormType } from './types'
import CustomForm from '@/components/customForm'
import { StyledFormWrapper } from './styles'
import { tokens } from '@/variables/styles'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import { renderFormFields } from './utils'
import { useLoadUser } from '@/hooks/useLoadUser'
import Loader from '@/components/loader'

const useGetDefaultValues = (): { isLoading: boolean; data: ProfileFormType } => {
  const { data, isLoading } = useLoadUser()

  return {
    isLoading,
    data: {
      firstName: data?.payload?.firstName ?? '',
      lastName: data?.payload?.lastName ?? '',
      email: data?.payload?.email ?? '',
      phoneNumber: undefined
    }
  }
}

const ContactDetailsForm = () => {
  const { isLoading, data: defaultValues } = useGetDefaultValues()

  const methods = useForm<ProfileFormType>({ values: defaultValues })

  if (isLoading) return <Loader />

  const {
    handleSubmit,
    formState: { isDirty, dirtyFields }
  } = methods

  // TODO: hook api
  const onSubmit: SubmitHandler<ProfileFormType> = (data) => console.log(data)

  return (
    <StyledFormWrapper flexDirection="column" gap={tokens.space.md}>
      <CustomForm methods={methods}>{renderFormFields()}</CustomForm>

      <FlexContainer justifyContent="flex-start">
        <Button onClick={handleSubmit(onSubmit)} disabled={!isDirty || !dirtyFields}>
          Save
        </Button>
      </FlexContainer>
    </StyledFormWrapper>
  )
}

export { ContactDetailsForm }

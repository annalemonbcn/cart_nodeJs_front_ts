import { useForm, type SubmitHandler } from 'react-hook-form'
import type { ProfileFormType } from './types'
import CustomForm from '@/components/customForm'
import { tokens } from '@/variables/styles'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import { renderFormFields } from './utils'
import Loader from '@/components/loader'
import { useGetDefaultValues } from '../../hooks'

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
    <FlexContainer flexDirection="column" gap={tokens.space.md}>
      <CustomForm methods={methods}>{renderFormFields()}</CustomForm>

      <FlexContainer justifyContent="flex-start">
        <Button onClick={handleSubmit(onSubmit)} disabled={!isDirty || !dirtyFields}>
          Save
        </Button>
      </FlexContainer>
    </FlexContainer>
  )
}

export { ContactDetailsForm }

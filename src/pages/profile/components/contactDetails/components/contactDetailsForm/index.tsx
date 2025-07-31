import { useForm, type SubmitHandler } from 'react-hook-form'
import type { ProfileFormType } from './types'
import CustomForm from '@/components/customForm'
import { tokens } from '@/variables/styles'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import { renderFormFields } from './utils'
import Loader from '@/components/loader'
import { useGetDefaultValues } from '../../hooks'
import { useUserServices } from '@/services/user'
import { useMutation } from '@tanstack/react-query'
import { useGetUserId } from '@/hooks/useLoadUser'
import { toast } from 'sonner'
import { getErrorMessage } from '@/utils/objects'
import type { AxiosError } from 'axios'
import type { ApiErrorResponse } from '@/variables/types/global.types'
import type { UpdateUserDto } from '@/services/user/types'

const useUpdateUser = () => {
  const { updateUserInfo } = useUserServices()
  const userId = useGetUserId()

  const { mutate, isPending } = useMutation({
    ...updateUserInfo(userId),
    onSuccess: () => {
      toast.success('User updated successfully')
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      toast.error(getErrorMessage(error))
    }
  })

  return { mutate, isPending }
}

const ContactDetailsForm = () => {
  const { isLoading, data: defaultValues } = useGetDefaultValues()

  const methods = useForm<ProfileFormType>({ values: defaultValues })

  const { mutate, isPending } = useUpdateUser()

  if (isLoading) return <Loader />

  const {
    handleSubmit,
    formState: { isDirty, dirtyFields }
  } = methods

  const onSubmit: SubmitHandler<ProfileFormType> = (data) => {
    const updatedFields = Object.keys(dirtyFields) as (keyof UpdateUserDto)[]

    const payload = updatedFields.reduce<UpdateUserDto>(
      (acc, field) => ({
        ...acc,
        [field]: data[field]
      }),
      { _id: data._id }
    )

    mutate(payload)
  }

  const shouldDisable = !isDirty || !dirtyFields || isPending

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

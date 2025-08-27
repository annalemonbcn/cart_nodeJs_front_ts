import { useLoadUser } from '@/hooks/useLoadUser'
import type { ProfileFormType } from '../components/contactDetailsForm/types'
import { useUserServices } from '@/services/user'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import type { AxiosError } from 'axios'
import type { ApiErrorResponse } from '@/variables/types/global.types'
import { getErrorMessage } from '@/utils/objects'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { UpdateUserDto } from '@/services/user/types'

const useGetDefaultValues = () => {
  const { data, isLoading, isError, refetch } = useLoadUser()

  return {
    isLoading,
    data: !data ? ({} as ProfileFormType) : data,
    isError,
    refetch
  }
}

const useUpdateUser = () => {
  const { refetch } = useLoadUser()
  const { updateUserInfo } = useUserServices()

  const { mutate, isPending } = useMutation({
    ...updateUserInfo(),
    onSuccess: () => {
      toast.success('User updated successfully')
      refetch()
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      toast.error(getErrorMessage(error))
    }
  })

  return { mutate, isPending }
}

const useContactDetailsFrom = () => {
  const { isLoading, data: defaultValues, isError, refetch } = useGetDefaultValues()
  const { mutate, isPending } = useUpdateUser()

  const noData = isError || !defaultValues || Object.keys(defaultValues).length === 0

  const methods = useForm<ProfileFormType>({ values: defaultValues })

  const {
    handleSubmit,
    formState: { isDirty, dirtyFields }
  } = methods

  const buildPayload = (data: ProfileFormType): UpdateUserDto => {
    const updatedFields = Object.keys(dirtyFields) as (keyof UpdateUserDto)[]
    return updatedFields.reduce<UpdateUserDto>(
      (acc, field) => ({
        ...acc,
        [field]: data[field]
      }),
      { _id: data._id }
    )
  }

  const onSubmit: SubmitHandler<ProfileFormType> = (data) => {
    mutate(buildPayload(data))
  }

  const shouldDisable = !isDirty || isPending

  return {
    isLoading,
    noData,
    refetch,
    methods,
    handleSubmit,
    onSubmit,
    shouldDisable,
    isPending
  }
}

export { useContactDetailsFrom }

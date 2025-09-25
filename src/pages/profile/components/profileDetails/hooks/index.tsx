import { useLoadUser } from '@/hooks/useLoadUser'
import type { ProfileDetailsFormType } from '../components/profileDetailsForm/types'
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
    data: !data ? ({} as ProfileDetailsFormType) : data,
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

const useProfileDetailsFrom = () => {
  const { isLoading, data: defaultValues, isError, refetch } = useGetDefaultValues()
  const { mutate, isPending } = useUpdateUser()

  const noData = isError || !defaultValues || Object.keys(defaultValues).length === 0

  const methods = useForm<ProfileDetailsFormType>({ values: defaultValues })

  const {
    handleSubmit,
    formState: { isDirty, dirtyFields }
  } = methods

  const buildPayload = (data: ProfileDetailsFormType): UpdateUserDto => {
    const updatedFields = Object.keys(dirtyFields) as (keyof ProfileDetailsFormType)[]

    return updatedFields.reduce<UpdateUserDto>(
      (acc, field) => ({
        ...acc,
        [field]: data[field]
      }),
      {}
    )
  }

  const onSubmit: SubmitHandler<ProfileDetailsFormType> = (data) => mutate(buildPayload(data))

  const updateUserInfo = handleSubmit(onSubmit)

  const shouldDisable = !isDirty || isPending

  return {
    isLoading,
    noData,
    refetch,
    methods,
    handleSubmit: updateUserInfo,
    shouldDisable,
    isPending
  }
}

export { useProfileDetailsFrom }

import { routeMap } from '@/routes/utils'
import { useAddressServices } from '@/services/address'
import { getErrorMessage } from '@/utils/objects'
import type { ApiErrorResponse } from '@/variables/types/global.types'
import { useMutation, useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { formDefaultValues } from '../constants'
import { mapAddressDtoToFormShape } from './utils'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { AddressFormShape, FormAction } from '../types'
import { validateUserAddresses } from '../validations'
import { useGetAddress } from '@/hooks/useGetAddress'
import type { AddressInputDto } from '@/services/address/types'
import { useMemo } from 'react'

const useGetDefaultValues = () => {
  const { addressId } = useParams()

  const { getAddressById } = useAddressServices()
  const { data, isLoading, isError } = useQuery(getAddressById(addressId))

  const defaultValues = useMemo(
    () => (!data?.payload ? formDefaultValues : mapAddressDtoToFormShape(data.payload)),
    [data]
  )

  const action: FormAction = addressId ? 'edit' : 'add'

  return { data: defaultValues, action, isLoading, isError }
}

const useAddressMutation = (action: FormAction) => {
  const { addAddress, updateAddress } = useAddressServices()

  const navigate = useNavigate()

  const mutationConfig = action === 'add' ? addAddress() : updateAddress()

  const { mutate, isPending } = useMutation({
    ...mutationConfig,
    onSuccess: () => {
      toast.success(`Address ${action === 'add' ? 'added' : 'updated'} successfully`)
      navigate(routeMap.profile.path)
    },
    onError: (error: AxiosError<ApiErrorResponse>) => toast.error(getErrorMessage(error))
  })

  return { mutate, isPending }
}

const useAddressForm = () => {
  const { data: defaultValues, action, isLoading, isError } = useGetDefaultValues()

  const methods = useForm<AddressFormShape>({ values: defaultValues })

  const { handleSubmit, formState } = methods
  const { isDirty } = formState

  const { data: userAddresses } = useGetAddress()

  const { mutate, isPending } = useAddressMutation(action)

  const onSubmit: SubmitHandler<AddressFormShape> = (data) => {
    const errorMessage = validateUserAddresses(data, userAddresses)
    if (errorMessage) {
      toast.error(errorMessage)
      return
    }

    const { id, ...rest } = data

    const convertedData: AddressInputDto = {
      ...rest,
      tags: !data.tags ? [] : data.tags?.split(',').map((tag) => tag.trim())
    }

    mutate({ addressId: id, data: convertedData })

    return false
  }

  const updateAddress = () => handleSubmit(onSubmit)()

  const shouldDisableBtn = !isDirty || isPending

  const navigate = useNavigate()
  const goToProfile = () => navigate(routeMap.profile.path)

  return {
    isLoading,
    isPending,
    isError,
    methods,
    handleSubmit: updateAddress,
    shouldDisableBtn,
    goToProfile
  }
}

export { useAddressForm }

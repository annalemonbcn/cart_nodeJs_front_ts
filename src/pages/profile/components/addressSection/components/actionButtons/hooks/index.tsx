import { useAddressServices } from '@/services/address'
import type { ApiErrorResponse } from '@/variables/types/global.types'
import { getErrorMessage } from '@/utils/objects'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import type { AxiosError } from 'axios'
import type { ActionButton } from '../types'
import { useLoadUser } from '@/hooks/useLoadUser'
import { useNavigate } from 'react-router-dom'
import { routeMap } from '@/routes/utils'

const useDeleteAddress = () => {
  const { refetch } = useLoadUser()
  const { deleteAddress } = useAddressServices()

  const { mutate, isPending } = useMutation({
    ...deleteAddress(),
    onSuccess: () => {
      toast.success('Address deleted successfully')
      refetch()
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      toast.error(getErrorMessage(error))
    }
  })

  return { mutate, isPending }
}

const useEditAddress = () => {
  const navigate = useNavigate()

  return {
    mutate: (addressId: string) => navigate(routeMap.addressEdit.path.replace(':addressId', addressId))
  }
}

const useSetAsDefault = () => {
  const { refetch } = useLoadUser()
  const { updateIsDefault } = useAddressServices()

  const { mutate, isPending } = useMutation({
    ...updateIsDefault(),
    onSuccess: (_data, variables) => {
      const { isDefault } = variables
      const message = !isDefault ? 'Address removed from default' : 'Address set as default successfully'
      toast.success(message)
      refetch()
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      toast.error(getErrorMessage(error))
    }
  })

  return { mutate, isPending }
}

const useGetActionButtons = (addressId: string, isDefault: boolean) => {
  const { mutate: deleteAddress, isPending: deletePending } = useDeleteAddress()
  const { mutate: editAddress } = useEditAddress()
  const { mutate: setAsDefault, isPending: setAsDefaultPending } = useSetAsDefault()

  const actionButtons: ActionButton[] = [
    {
      action: 'edit',
      label: 'Edit',
      onClick: () => editAddress(addressId)
    },
    {
      action: 'delete',
      label: 'Delete',
      onClick: () => deleteAddress(addressId)
    },
    {
      action: 'setAsDefault',
      label: isDefault ? 'Remove default' : 'Set as default',
      onClick: () => setAsDefault({ addressId, isDefault: !isDefault })
    }
  ]

  const isPending = deletePending || setAsDefaultPending

  return { actionButtons, isPending }
}

export { useGetActionButtons }

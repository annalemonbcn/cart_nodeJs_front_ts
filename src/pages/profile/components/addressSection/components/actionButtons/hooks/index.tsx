import { useAddressServices } from '@/services/address'
import type { ApiErrorResponse } from '@/variables/types/global.types'
import { getErrorMessage } from '@/utils/objects'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import type { AxiosError } from 'axios'
import type { ActionButton } from '../types'
import { useLoadUser } from '@/hooks/useLoadUser'

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

const useEditAddress = () => ({
  mutate: () => console.log('edit'),
  isPending: false
})

const useSetAsDefault = () => ({
  mutate: () => console.log('setAsDefault'),
  isPending: false
})

const useGetActionButtons = (id: string, isDefault: boolean): { actionButtons: ActionButton[]; isPending: boolean } => {
  const { mutate: deleteAddress, isPending: deletePending } = useDeleteAddress()
  const { mutate: editAddress, isPending: editPending } = useEditAddress()
  const { mutate: setAsDefault, isPending: setAsDefaultPending } = useSetAsDefault()

  const baseActions: ActionButton[] = [
    {
      action: 'edit',
      onClick: () => editAddress()
    },
    {
      action: 'delete',
      onClick: () => deleteAddress(id)
    }
  ]

  const extraActions: ActionButton[] = !isDefault
    ? [
        {
          action: 'setAsDefault',
          onClick: () => setAsDefault()
        }
      ]
    : []

  const actionButtons: ActionButton[] = [...baseActions, ...extraActions]

  return { actionButtons, isPending: deletePending || editPending || setAsDefaultPending }
}

export { useGetActionButtons }

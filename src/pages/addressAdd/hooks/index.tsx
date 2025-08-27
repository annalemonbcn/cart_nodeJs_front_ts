import { routeMap } from '@/routes/utils'
import { useAddressServices } from '@/services/address'
import { getErrorMessage } from '@/utils/objects'
import type { ApiErrorResponse } from '@/variables/types/global.types'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const useAddAddress = () => {
  const { addAddress } = useAddressServices()

  const navigate = useNavigate()

  const { mutate, isPending } = useMutation({
    ...addAddress(),
    onSuccess: () => {
      toast.success('Address added successfully')
      navigate(routeMap.profile.path)
    },
    onError: (error: AxiosError<ApiErrorResponse>) => toast.error(getErrorMessage(error))
  })

  return { mutate, isPending }
}

export { useAddAddress }

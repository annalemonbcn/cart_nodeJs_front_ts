import { useAuthContext } from '@/auth/provider/useAuthContext'
import { useUserServices } from '@/services/user'
import { getErrorMessage } from '@/utils/objects'
import type { ApiErrorResponse } from '@/variables/types/global.types'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { toast } from 'sonner'

const useDeleteAccount = () => {
  const { deleteUser } = useUserServices()
  const { logout } = useAuthContext()

  const { mutate, isPending } = useMutation({
    ...deleteUser(),
    onSuccess: () => {
      toast.success('Account deleted successfully')
      logout()
    },
    onError: (error: AxiosError<ApiErrorResponse>) => toast.error(getErrorMessage(error))
  })

  return { mutate, isPending }
}

export { useDeleteAccount }

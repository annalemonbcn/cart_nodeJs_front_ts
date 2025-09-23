import { useAuthServices } from '@/services/auth'
import { useUserServices } from '@/services/user'
import { getErrorMessage } from '@/utils/objects'
import type { ApiErrorResponse } from '@/variables/types/global.types'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { toast } from 'sonner'

const useResetPassword = () => {
  const { resetPassword } = useAuthServices()

  const { mutate, isPending } = useMutation({
    ...resetPassword(),
    onSuccess: () => toast.success('Password updated successfully'),
    onError: (error: AxiosError<ApiErrorResponse>) => {
      toast.error(getErrorMessage(error))
    }
  })

  return { mutate, isPending }
}

const useChangePassword = () => {
  const { changePassword } = useUserServices()

  const { mutate, isPending } = useMutation({
    ...changePassword(),
    onSuccess: () => toast.success('Password updated successfully'),
    onError: (error: AxiosError<ApiErrorResponse>) => {
      toast.error(getErrorMessage(error))
    }
  })

  return { mutate, isPending }
}

export { useResetPassword, useChangePassword }

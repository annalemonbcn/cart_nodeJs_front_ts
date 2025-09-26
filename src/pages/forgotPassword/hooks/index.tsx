import { useAuthServices } from '@/services/auth'
import { getErrorMessage } from '@/utils/objects'
import type { ApiErrorResponse } from '@/variables/types/global.types'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { toast } from 'sonner'

const useForgotPassword = () => {
  const { forgotPassword } = useAuthServices()

  const { mutate, isPending } = useMutation({
    ...forgotPassword(),
    onSuccess: () => toast.success('Password reset email sent successfully'),
    onError: (error: AxiosError<ApiErrorResponse>) => {
      toast.error(getErrorMessage(error))
    }
  })

  return { mutate, isPending }
}

export { useForgotPassword }

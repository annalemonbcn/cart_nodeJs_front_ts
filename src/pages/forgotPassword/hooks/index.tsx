import { useMutation } from '@tanstack/react-query'
import { type UseFormReset } from 'react-hook-form'
import { toast } from 'sonner'
import { useAuthServices } from '@/services/auth'
import { getErrorMessage } from '@/utils/objects'
import type { ForgotPasswordFormShape } from '../types'
import type { ApiErrorResponse } from '@/variables/types/global.types'
import type { AxiosError } from 'axios'

const useForgotPassword = (resetForm: UseFormReset<ForgotPasswordFormShape>) => {
  const { forgotPassword } = useAuthServices()

  const { mutate, isPending } = useMutation({
    ...forgotPassword(),
    onSuccess: () => toast.success('Password reset email sent successfully'),
    onError: (error: AxiosError<ApiErrorResponse>) => {
      toast.error(getErrorMessage(error))
    },
    onSettled: () => resetForm()
  })

  return { mutate, isPending }
}

export { useForgotPassword }

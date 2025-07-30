import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useAuthServices } from '@/services/auth'
import { routeMap } from '@/routes/utils'
import { useNavigate } from 'react-router-dom'
import type { AxiosError } from 'axios'
import type { ApiErrorResponse } from '@/variables/types/global.types'
import { getErrorMessage } from '@/utils/objects'

const useRegisterUser = () => {
  const { registerUser } = useAuthServices()

  const navigate = useNavigate()

  const mutation = useMutation({
    ...registerUser(),
    onSuccess: () => {
      toast.success('Registration successful! 🎉')
      navigate(routeMap.login.path)
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      toast.error(getErrorMessage(error))
    }
  })

  return mutation
}

export { useRegisterUser }

import { useAuthContext } from '@/auth/provider/useAuthContext'
import { useAuthServices } from '@/services/auth'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { routeMap } from '@/routes/utils'
import { STORAGE_KEYS } from '@/variables/constants'
import type { AxiosError } from 'axios'
import type { ApiErrorResponse } from '@/variables/types/global.types'
import { getErrorMessage } from '@/utils/objects'

const useLoginUser = () => {
  const navigate = useNavigate()
  const { loginUser } = useAuthServices()
  const { setToken } = useAuthContext()

  const mutation = useMutation({
    ...loginUser(),
    onSuccess: (data) => {
      const token = data.payload.token || ''
      localStorage.setItem(STORAGE_KEYS.token, token)
      localStorage.removeItem(STORAGE_KEYS.manualLogout)
      setToken(token)
      toast.success('Login successful! 🎉')
      navigate(routeMap.myAccount.path, { replace: true })
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      toast.error(getErrorMessage(error))
    }
  })

  return mutation
}

export { useLoginUser }

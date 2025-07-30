import { useAuthContext } from '@/auth/provider/useAuthContext'
import { useAuthServices } from '@/services/auth'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { routeMap } from '@/routes/utils'
import { STORAGE_KEYS } from '@/variables/constants'

const useLoginUser = () => {
  const navigate = useNavigate()
  const { loginUser } = useAuthServices()
  const { setToken } = useAuthContext()

  const mutation = useMutation({
    ...loginUser(),
    onSuccess: (data) => {
      const token = data.payload?.token || ''
      localStorage.setItem(STORAGE_KEYS.token, token)
      setToken(token)
      toast.success('Login successful! 🎉')
      navigate(routeMap.myAccount.path, { replace: true })
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      const errorMsg = error?.response?.data?.message || 'Unexpected error occurred'
      toast.error(errorMsg)
    }
  })

  return mutation
}

export { useLoginUser }

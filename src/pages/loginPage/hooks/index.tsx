import { useAuthContext } from '@/auth/provider/useAuthContext'
import { useAuthServices } from '@/services/auth'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import routes from '@/routes/routes'

const useLoginUser = () => {
  const navigate = useNavigate()
  const { loginUser } = useAuthServices()
  const { setToken } = useAuthContext()

  const mutation = useMutation({
    ...loginUser(),
    onSuccess: (data) => {
      const token = data.payload?.token || ''
      localStorage.setItem('token', token)
      setToken(token)
      toast.success('Login successful! 🎉')
      navigate(routes.myAccount.path, { replace: true })
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

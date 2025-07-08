import { useAuthContext } from '@/auth/provider/useAuthContext'
import { useAuthServices } from '@/services/auth'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

const useLoginUser = () => {
  const { loginUser } = useAuthServices()
  const { setToken } = useAuthContext()

  const mutation = useMutation({
    ...loginUser(),
    onSuccess: (data) => {
      const token = data.payload?.token || ''
      localStorage.setItem('token', token)
      setToken(token)
      toast.success('Login successful! 🎉')
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

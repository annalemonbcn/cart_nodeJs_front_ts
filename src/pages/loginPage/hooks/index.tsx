import { useAuthServices } from '@/services/auth'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

const useLoginUser = () => {
  const { loginUser } = useAuthServices()

  const mutation = useMutation({
    ...loginUser(),
    onSuccess: (data) => {
      localStorage.setItem('token', data.payload?.token || '')
      toast.success('Login successful! 🎉')
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      localStorage.removeItem('token')
      const errorMsg = error?.response?.data?.message || 'Unexpected error occurred'
      toast.error(errorMsg)
    }
  })

  return mutation
}

export { useLoginUser }

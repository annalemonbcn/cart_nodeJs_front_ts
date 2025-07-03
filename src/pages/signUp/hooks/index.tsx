import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useAuthServices } from '@/services/auth'

const useRegisterUser = () => {
  const { registerUser } = useAuthServices()

  const mutation = useMutation({
    ...registerUser(),
    onSuccess: () => {
      // Puedes redirigir, mostrar un toast, etc.
      toast.success('User registered successfully! 🎉')
    },
    onError: (error: any) => {
      const errorMsg = error?.response?.data?.message || 'Unexpected error occurred'
      toast.error(errorMsg)
    }
  })

  return mutation
}

export { useRegisterUser }

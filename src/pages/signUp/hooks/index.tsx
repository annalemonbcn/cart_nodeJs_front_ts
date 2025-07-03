import { useMutation } from '@tanstack/react-query'
import api from '@/lib/axios'
import { toast } from 'sonner'
import type { SignUpFormType } from '../types'

const registerUserService = () => ({
  mutationKey: ['auth', 'register'],
  mutationFn: async (data: SignUpFormType) => {
    const response = await api.post('/auth/register', data)
    return response.data
  }
})

const useRegisterUser = () => {
  const mutation = useMutation({
    ...registerUserService(),
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

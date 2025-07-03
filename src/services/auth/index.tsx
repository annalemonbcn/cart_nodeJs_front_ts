import type { LoginFormType, SignUpFormType } from './types'
import api from '@/lib/axios'

const COMMON_KEYS = ['auth']

const registerUser = () => ({
  mutationKey: [...COMMON_KEYS, 'register'],
  mutationFn: async (data: SignUpFormType) => {
    const response = await api.post('/auth/register', data)
    return response.data
  }
})

const loginUser = () => ({
  mutationKey: [...COMMON_KEYS, 'login'],
  mutationFn: async (data: LoginFormType) => {
    const response = await api.post('/auth/login', data)
    return response.data
  }
})

const useAuthServices = () => ({
  registerUser,
  loginUser
})

export { useAuthServices }

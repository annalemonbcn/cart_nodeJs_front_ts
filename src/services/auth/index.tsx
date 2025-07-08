import type { LoginFormType, LoginResponse, SignUpFormType } from './types'
import apiClient from '@/lib/axios'

const COMMON_KEYS = ['auth']

const registerUser = () => ({
  mutationKey: [...COMMON_KEYS, 'register'],
  mutationFn: async (data: SignUpFormType) => {
    const response = await apiClient.post('/auth/register', data)
    return response.data
  }
})

const loginUser = () => ({
  mutationKey: [...COMMON_KEYS, 'login'],
  mutationFn: async (data: LoginFormType): Promise<LoginResponse> => {
    const response = await apiClient.post('/auth/login', data)
    return response.data
  }
})

const useAuthServices = () => ({
  registerUser,
  loginUser
})

export { useAuthServices }

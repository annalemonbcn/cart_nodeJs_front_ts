import apiClient from '@/lib/axios'
import type { LoginType, LoginApiResponse, SignUpApiResponse, SignUpType } from './types'
import { API_ROUTES } from '@/routes/apiRoutes'

const COMMON_KEYS = ['auth']

const registerUser = () => ({
  mutationKey: [...COMMON_KEYS, 'registerUser'],
  mutationFn: async (data: SignUpType): Promise<SignUpApiResponse> => {
    const response = await apiClient.post(API_ROUTES.registerUser, data)
    return response.data
  }
})

const loginUser = () => ({
  mutationKey: [...COMMON_KEYS, 'loginUser'],
  mutationFn: async (data: LoginType): Promise<LoginApiResponse> => {
    const response = await apiClient.post(API_ROUTES.loginUser, data)
    return response.data
  }
})

const useAuthServices = () => ({
  registerUser,
  loginUser
})

export { useAuthServices }

import apiClient from '@/lib/axios'
import type {
  LoginType,
  LoginApiResponse,
  SignUpApiResponse,
  SignUpType,
  ForgotPasswordType,
  ForgotPasswordApiResponse,
  ResetPasswordType,
  ResetPasswordApiResponse
} from './types'
import { API_ROUTES } from '@/services/constants'

const COMMON_KEYS = ['auth']

const registerUser = () => ({
  mutationKey: [...COMMON_KEYS, 'registerUser'],
  mutationFn: async (data: SignUpType): Promise<SignUpApiResponse> => {
    const response = await apiClient.post(API_ROUTES.auth.registerUser(), data)
    return response.data
  }
})

const loginUser = () => ({
  mutationKey: [...COMMON_KEYS, 'loginUser'],
  mutationFn: async (data: LoginType): Promise<LoginApiResponse> => {
    const response = await apiClient.post(API_ROUTES.auth.loginUser(), data)
    return response.data
  }
})

const forgotPassword = () => ({
  mutationKey: [...COMMON_KEYS, 'forgotPassword'],
  mutationFn: async (data: ForgotPasswordType): Promise<ForgotPasswordApiResponse> => {
    const response = await apiClient.post(API_ROUTES.auth.forgotPassword(), data)
    return response.data
  }
})

const resetPassword = () => ({
  mutationKey: [...COMMON_KEYS, 'resetPassword'],
  mutationFn: async (data: ResetPasswordType): Promise<ResetPasswordApiResponse> => {
    const response = await apiClient.post(API_ROUTES.auth.resetPassword(), data)
    return response.data
  }
})

const useAuthServices = () => ({
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword
})

export { useAuthServices }

import apiClient from '@/lib/axios'
import type {
  ChangePasswordApiResponse,
  ChangePasswordType,
  DeleteUserResponseDto,
  UpdateUserDto,
  UpdateUserResponseDto,
  UserResponseDto
} from './types'
import { API_ROUTES } from '@/services/constants'

const COMMON_KEYS = ['user']

const getUserInfo = () => ({
  queryKey: [...COMMON_KEYS, 'getUserInfo'],
  queryFn: async (): Promise<UserResponseDto> => {
    const response = await apiClient.get(API_ROUTES.user.getUserProfile)
    return response.data
  }
})

const updateUserInfo = () => ({
  mutationKey: [...COMMON_KEYS, 'updateUserInfo'],
  mutationFn: async (data: UpdateUserDto): Promise<UpdateUserResponseDto> => {
    const response = await apiClient.put(API_ROUTES.user.getUserProfile, data)
    return response.data
  }
})

const changePassword = () => ({
  mutationKey: [...COMMON_KEYS, 'changePassword'],
  mutationFn: async (data: ChangePasswordType): Promise<ChangePasswordApiResponse> => {
    const response = await apiClient.patch(API_ROUTES.user.changePassword, data)
    return response.data
  }
})

const deleteUser = () => ({
  mutationKey: [...COMMON_KEYS, 'deleteUser'],
  mutationFn: async (): Promise<DeleteUserResponseDto> => {
    const response = await apiClient.delete(API_ROUTES.user.deleteUser)
    return response.data
  }
})

const useUserServices = () => ({
  getUserInfo,
  updateUserInfo,
  changePassword,
  deleteUser
})

export { useUserServices }

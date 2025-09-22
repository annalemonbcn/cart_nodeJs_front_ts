import apiClient from '@/lib/axios'
import type { DeleteUserResponseDto, UpdateUserDto, UpdateUserResponseDto, UserResponseDto } from './types'

const COMMON_KEYS = ['user']

const getUserInfo = () => ({
  queryKey: [...COMMON_KEYS, 'getUserInfo'],
  queryFn: async (): Promise<UserResponseDto> => {
    const response = await apiClient.get('/user/me')
    return response.data
  }
})

const updateUserInfo = () => ({
  mutationKey: [...COMMON_KEYS, 'updateUserInfo'],
  mutationFn: async (data: UpdateUserDto): Promise<UpdateUserResponseDto> => {
    const response = await apiClient.put(`/user`, data)
    return response.data
  }
})

const deleteUser = () => ({
  mutationKey: [...COMMON_KEYS, 'deleteUser'],
  mutationFn: async (): Promise<DeleteUserResponseDto> => {
    const response = await apiClient.delete(`/user/soft`)
    return response.data
  }
})

const useUserServices = () => ({
  getUserInfo,
  updateUserInfo,
  deleteUser
})

export { useUserServices }

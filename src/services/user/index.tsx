import apiClient from '@/lib/axios'
import type { UpdateUserDto, UpdateUserResponseDto, UserResponseDto } from './types'

const COMMON_KEYS = ['user']

const getUserInfo = () => ({
  queryKey: [...COMMON_KEYS, 'getUserInfo'],
  queryFn: async (): Promise<UserResponseDto> => {
    const response = await apiClient.get('/user/me')
    return response.data
  }
})

const updateUserInfo = (uid: string) => ({
  mutationKey: [...COMMON_KEYS, 'updateUserInfo', uid],
  mutationFn: async (data: UpdateUserDto): Promise<UpdateUserResponseDto> => {
    const response = await apiClient.put(`/user/${uid}`, data)
    return response.data
  }
})

const useUserServices = () => ({
  getUserInfo,
  updateUserInfo
})

export { useUserServices }

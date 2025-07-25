import apiClient from '@/lib/axios'
import type { UserResponseDto } from './types'

const COMMON_KEYS = ['user']

// TODO: update UserResponseDto, not correct
const getUserInfo = () => ({
  queryKey: [...COMMON_KEYS, 'getUserInfo'],
  queryFn: async (): Promise<UserResponseDto> => {
    const response = await apiClient.get('/users/me')
    return response.data
  }
})

const useUserServices = () => ({
  getUserInfo
})

export { useUserServices }

import apiClient from '@/lib/axios'
import type { User } from './types'

const COMMON_KEYS = ['user']

const getUserInfo = () => ({
  queryKey: [...COMMON_KEYS, 'register'],
  queryFn: async (): Promise<User> => {
    const response = await apiClient.get('/user')
    return response.data
  }
})

const useUserServices = () => ({
  getUserInfo
})

export { useUserServices }

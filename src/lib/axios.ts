import { STORAGE_KEYS } from '@/variables/constants'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEYS.token)

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem(STORAGE_KEYS.token)
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default apiClient

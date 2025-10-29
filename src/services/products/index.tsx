import apiClient from '@/lib/axios'
import { API_ROUTES } from '../constants'
import type { AllProductsResponse } from './types'

const COMMON_KEYS = ['products']

const getAllProducts = {
  queryKey: [...COMMON_KEYS, 'getAllProducts'],
  queryFn: async (): Promise<AllProductsResponse> => {
    const response = await apiClient.get(API_ROUTES.products.getAllProducts())
    return response.data
  }
}

const productServices = () => ({
  getAllProducts
})

export { productServices }

import apiClient from '@/lib/axios'
import { API_ROUTES } from '../constants'
import type { AllProductsResponse } from './types'
import type { Params } from '@/domain/params/types'

const COMMON_KEYS = ['products']

const getAllProducts = (params?: Partial<Record<Params, string>>) => ({
  queryKey: [...COMMON_KEYS, 'getAllProducts', params ?? {}],
  queryFn: async (): Promise<AllProductsResponse> => {
    const response = await apiClient.get(API_ROUTES.products.getAllProducts(), { params })
    return response.data
  }
})

const productServices = () => ({
  getAllProducts
})

export { productServices }

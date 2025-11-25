import apiClient from '@/lib/axios'
import { API_ROUTES } from '../constants'
import type { AllProductsResponse, FiltersResponse } from './types'
import type { GenderParam, Params } from '@/domain/params/types'

const COMMON_KEYS = ['products']

const getFilters = (params: Record<'gender', GenderParam>) => ({
  queryKey: [...COMMON_KEYS, 'getFilters'],
  queryFn: async (): Promise<FiltersResponse> => {
    const response = await apiClient.get(API_ROUTES.products.getFilters(), { params })
    return response.data
  }
})

const getAllProducts = (params?: Partial<Record<Params, string>>) => ({
  queryKey: [...COMMON_KEYS, 'getAllProducts', params ?? {}],
  queryFn: async (): Promise<AllProductsResponse> => {
    const response = await apiClient.get(API_ROUTES.products.getAllProducts(), { params })
    return response.data
  }
})

const productServices = () => ({
  getFilters,
  getAllProducts
})

export { productServices }

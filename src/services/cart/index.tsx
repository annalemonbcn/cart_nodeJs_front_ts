import apiClient from '@/lib/axios'
import { API_ROUTES } from '../constants'
import type { CartResponseDto } from './types'

const COMMON_KEYS = ['cart']

const getCart = (cartId: string) => ({
  queryKey: [...COMMON_KEYS, 'getCart', cartId],
  queryFn: async (): Promise<CartResponseDto> => {
    const response = await apiClient.get(API_ROUTES.cart.getCartById(cartId))
    return response.data
  }
})

const useCartServices = () => ({
  getCart
})

export { useCartServices }

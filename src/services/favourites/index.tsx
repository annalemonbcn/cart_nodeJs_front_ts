import apiClient from '@/lib/axios'
import { API_ROUTES } from '../constants'
import type { FavouriteResponseDto, FavouriteToggledResponseDto } from './types'

const COMMON_KEYS = ['favourites']

const getFavourites = () => ({
  queryKey: [...COMMON_KEYS, 'getFavourites'],
  queryFn: async (): Promise<FavouriteResponseDto> => {
    const response = await apiClient.get(API_ROUTES.favourites.getFavourites())
    return response.data
  }
})

const toggleFavourite = () => ({
  mutationKey: [...COMMON_KEYS, 'toggleFavourite'],
  mutationFn: async (productId: string): Promise<FavouriteToggledResponseDto> => {
    const response = await apiClient.patch(API_ROUTES.favourites.toggleFavourite(productId))
    return response.data
  }
})

const favouritesServices = () => ({
  getFavourites,
  toggleFavourite
})

export { favouritesServices }

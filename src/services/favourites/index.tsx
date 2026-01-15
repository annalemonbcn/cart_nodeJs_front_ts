import apiClient from '@/lib/axios'
import { API_ROUTES } from '../constants'
import type { FavouritesIdsResponseDto, FavouritesPopulatedResponseDto, FavouriteToggledResponseDto } from './types'

const COMMON_KEYS = ['favourites']

const getFavouriteIds = () => ({
  queryKey: [...COMMON_KEYS, 'getFavourites', 'ids'],
  queryFn: async (): Promise<FavouritesIdsResponseDto> => {
    const response = await apiClient.get(API_ROUTES.favourites.getFavourites())
    return response.data
  }
})

const getFavouriteProducts = () => ({
  queryKey: [...COMMON_KEYS, 'getFavourites', 'products'],
  queryFn: async (): Promise<FavouritesPopulatedResponseDto> => {
    const response = await apiClient.get(API_ROUTES.favourites.getFavourites({ populate: true }))
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
  getFavouriteIds,
  getFavouriteProducts,
  toggleFavourite
})

export { favouritesServices }

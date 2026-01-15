import type { components } from '@/variables/types/openapi'

type FavouritesIdsResponseDto = components['schemas']['FavouritesIdsResponse']
type FavouritesPopulatedResponseDto = components['schemas']['FavouritesPopulatedResponse']

type FavouriteToggledResponseDto = components['responses']['FavouriteToggledResponse']['content']['application/json']

export type { FavouritesIdsResponseDto, FavouritesPopulatedResponseDto, FavouriteToggledResponseDto }

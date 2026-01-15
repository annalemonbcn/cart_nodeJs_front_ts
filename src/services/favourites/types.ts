import type { components } from '@/variables/types/openapi'

type FavouriteResponseDto = components['responses']['FavouritesFound']['content']['application/json']

type FavouriteToggledResponseDto = components['responses']['FavouriteToggledResponse']['content']['application/json']

export type { FavouriteResponseDto, FavouriteToggledResponseDto }

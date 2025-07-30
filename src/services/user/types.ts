import type { components } from '@/variables/types/openapi'

type UserProfileDto = components['schemas']['UserProfileOutput']
type UserResponseDto = components['responses']['UserProfileFound']['content']['application/json']

type UpdateUserResponseDto = components['responses']['UserProfileUpdated']['content']['application/json']

export type { UserProfileDto, UserResponseDto, UpdateUserResponseDto }

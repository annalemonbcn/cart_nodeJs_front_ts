import type { components } from '@/variables/types/openapi'

type UserProfileDto = components['schemas']['UserProfileOutput']
type UserResponseDto = components['responses']['UserProfileFound']['content']['application/json']

type UpdateUserDto = components['schemas']['UserProfileInput']
type UpdateUserResponseDto = components['responses']['UserProfileUpdated']['content']['application/json']

type UserAddressDto = components['schemas']['AddressOutput']

export type { UserProfileDto, UserResponseDto, UpdateUserDto, UpdateUserResponseDto, UserAddressDto }

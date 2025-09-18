import type { components } from '@/variables/types/openapi'

type UserProfileDto = components['schemas']['UserProfileOutput']
type UserResponseDto = components['responses']['UserProfileFound']['content']['application/json']

type UpdateUserDto = components['schemas']['UserProfileInput']
type UpdateUserResponseDto = components['responses']['UserProfileUpdated']['content']['application/json']

type DeleteUserResponseDto = components['responses']['UserProfileDeleted']['content']['application/json']

export type { UserProfileDto, UserResponseDto, UpdateUserDto, UpdateUserResponseDto, DeleteUserResponseDto }

import type { paths } from '@/variables/types/openapi'

type UserResponseDto = paths['/api/users/me']['get']['responses']['200']['content']['application/json']

export type { UserResponseDto }

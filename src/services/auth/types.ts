import type { paths } from '@/variables/types/openapi'

type SignUpFormType = paths['/api/auth/register']['post']['requestBody']['content']['application/json']
type LoginFormType = paths['/api/auth/login']['post']['requestBody']['content']['application/json']
type LoginResponse = paths['/api/auth/login']['post']['responses']['200']['content']['application/json']

export type { SignUpFormType, LoginFormType, LoginResponse }

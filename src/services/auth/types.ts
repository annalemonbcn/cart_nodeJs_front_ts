import type { paths } from '@/types/openapi'

type SignUpFormType = paths['/api/auth/register']['post']['requestBody']['content']['application/json']

export type { SignUpFormType }

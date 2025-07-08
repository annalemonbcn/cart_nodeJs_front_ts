import type { paths } from '@/variables/types/openapi'

type LoginFormType = paths['/api/auth/login']['post']['requestBody']['content']['application/json']

export type { LoginFormType }

import type { paths } from '@/variables/types/openapi'

type User = paths['/api/user']['get']['responses']['200']['content']['application/json']

export type { User }

import type { ReactNode } from 'react'
import type { components } from './openapi'

type PropsWithChildren<P = unknown> = P & { children: ReactNode }

type ApiErrorResponse = components['schemas']['ErrorResponse']

export type { PropsWithChildren, ApiErrorResponse }

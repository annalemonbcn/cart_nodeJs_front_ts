import type { ApiErrorResponse } from '@/variables/types/global.types'
import type { AxiosError } from 'axios'

const getNestedValue = (obj: any, path: string) => path.split('.').reduce((acc, part) => acc?.[part], obj)

const isAxiosError = <T,>(error: unknown): error is AxiosError<T> => !!(error as AxiosError<T>)?.isAxiosError

const getErrorMessage = (error: unknown, fallback = 'An unexpected error occurred'): string => {
  if (isAxiosError<ApiErrorResponse>(error)) {
    if (error.response?.data?.message) {
      return error.response.data.message
    }
    return fallback
  }

  if (error instanceof Error) {
    return error.message || fallback
  }

  return fallback
}

export { getNestedValue, isAxiosError, getErrorMessage }

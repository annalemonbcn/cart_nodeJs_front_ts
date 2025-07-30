import type { ApiErrorResponse } from "@/variables/types/global.types"
import type { AxiosError } from "axios"

const getNestedValue = (obj: any, path: string) => path.split('.').reduce((acc, part) => acc?.[part], obj)

const isAxiosError = <T,>(error: unknown): error is AxiosError<T> => !!(error as AxiosError<T>)?.isAxiosError

const getErrorMessage = (error: unknown, fallback = 'Unexpected error occurred') => {
  if (isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data?.message || fallback
  }

  if (error instanceof Error) {
    return error.message
  }

  return fallback
}

export { getNestedValue, isAxiosError, getErrorMessage }

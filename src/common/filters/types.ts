import { type UrlParams } from '@/domain/params/types'

type FiltersURL = UrlParams

type FiltersUI = Exclude<FiltersURL, 'minPrice' | 'maxPrice'> | 'price'

type Value = string | number | boolean | (string | number)[]

type FiltersStateProps = {
  registerState: (path: string, value: Value, force?: boolean) => void
  getStateValue: (path: string, defaultValue?: string) => string | string[] | undefined
  setStateValue: (path: string, value: Value) => void
  setMany: (patch: Record<string, Value>) => void
  getAll: () => Record<string, string | string[]>
}

export type { FiltersStateProps, Value, FiltersURL, FiltersUI }

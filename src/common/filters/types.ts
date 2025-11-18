import { type UrlParams } from '@/domain/params/types'
import type { FilterSectionBaseProps } from '../filterSection/types'

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

type CommonFilterProps = FilterSectionBaseProps & {
  filterName: FiltersURL
  noDataText: string
}

type ListFilterProps = CommonFilterProps & {
  list: string[]
  useAll?: boolean
}

type RangeFilterProps = CommonFilterProps & {
  minPrice: number
  maxPrice: number
}

export type { FiltersStateProps, Value, FiltersURL, FiltersUI, CommonFilterProps, ListFilterProps, RangeFilterProps }

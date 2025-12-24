import type { SelectorOption } from '@/common/filters/components/selectorFilter/types'
import type { FiltersUI } from '@/common/filters/types'
import type { PriceRange, Size } from '@/domain/filters/types'

interface FiltersSidePanelProps {
  filters?: FiltersUI[] | undefined
}

type CleanedFiltersData = {
  categories: string[]
  prices: PriceRange
  brands: SelectorOption[]
  colors: string[]
  sizes: Size[]
}

// TODO: ?
interface CommonFilterRenderProps {
  filters: FiltersUI[]
  // cleanedData: CleanedFiltersData
}

export type { FiltersSidePanelProps, CleanedFiltersData, CommonFilterRenderProps }

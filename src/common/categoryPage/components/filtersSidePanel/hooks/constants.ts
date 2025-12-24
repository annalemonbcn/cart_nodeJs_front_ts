import type { FiltersData } from '@/domain/filters/types'

const EMPTY_FILTERS: FiltersData = {
  categories: [],
  brands: [],
  colors: [],
  sizes: [],
  prices: { min: 0, max: 0 }
}

export { EMPTY_FILTERS }

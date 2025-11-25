import { SIZE_ORDER } from '@/domain/filters/constants'
import { capitalize } from '@/utils/string'
import type { CleanedFiltersData } from './types'
import type { SelectorOption } from '@/common/filters/components/selectorFilter/types'
import type { FiltersData, Size } from '@/domain/filters/types'

const brandToOption = (brand: string): SelectorOption => ({
  id: brand,
  value: brand,
  label: capitalize(brand)
})

const sortedSized = (sizes: Size[]): Size[] => [...sizes].sort((a, b) => SIZE_ORDER.indexOf(a) - SIZE_ORDER.indexOf(b))

const cleanFiltersData = (data: FiltersData): CleanedFiltersData => ({
  categories: data.categories.map(capitalize),
  prices: { min: data.prices.min, max: data.prices.max },
  brands: data.brands.map(brandToOption),
  colors: data.colors,
  sizes: sortedSized(data.sizes)
})

export { cleanFiltersData }

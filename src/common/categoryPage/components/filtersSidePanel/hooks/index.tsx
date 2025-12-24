import { useQuery } from '@tanstack/react-query'
import { productServices } from '@/services/products'
import { EMPTY_FILTERS } from './constants'
import { cleanFiltersData } from '../utils'
import type { UseGetFiltersDataReturn } from './types'
import type { FiltersUI } from '@/common/filters/types'

const useGetFiltersData = (): UseGetFiltersDataReturn => {
  const { getFilters } = productServices()

  const { data, isLoading } = useQuery(getFilters({ gender: 'women' }))

  return {
    data: cleanFiltersData(data?.payload ?? EMPTY_FILTERS),
    isLoading
  }
}

const useGetUniqueFilters = (filters: FiltersUI[]) => {
  const withCategory: FiltersUI[] =
    filters.length === 0 || !filters.includes('category') ? ['category', ...filters] : filters

  return Array.from(new Set(withCategory))
}

export { useGetFiltersData, useGetUniqueFilters }

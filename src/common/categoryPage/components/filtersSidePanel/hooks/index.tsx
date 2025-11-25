import { useQuery } from '@tanstack/react-query'
import { productServices } from '@/services/products'
import { EMPTY_FILTERS } from './constants'
import type { UseGetFiltersDataReturn } from './types'

const useGetFiltersData = (): UseGetFiltersDataReturn => {
  const { getFilters } = productServices()

  const { data, isLoading } = useQuery(getFilters({ gender: 'women' }))

  return {
    data: data?.payload ?? EMPTY_FILTERS,
    isLoading
  }
}

export { useGetFiltersData }

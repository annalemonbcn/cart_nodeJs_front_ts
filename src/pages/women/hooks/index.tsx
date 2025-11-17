import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useFiltersState } from '@/common/filters/hooks/useFiltersState'
import { searchParamsToParamsRecord } from '@/domain/params/utils'
import { productServices } from '@/services/products'
import type { Product } from '@/common/categoryPage/types'

const useGetWomenProducts = () => {
  const { getAll } = useFiltersState()

  const urlFilters = getAll()
  const safeParams = searchParamsToParamsRecord(urlFilters)

  const { getAllProducts } = productServices()
  const { data, isLoading, isError } = useQuery(getAllProducts(safeParams))

  const womenProducts: Product[] = useMemo(() => {
    if (!data || isLoading || isError) return []

    return data.payload
  }, [data, isError, isLoading])

  return { products: womenProducts, isLoading }
}

export { useGetWomenProducts }

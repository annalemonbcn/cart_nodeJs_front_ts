import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useFiltersState } from '@/common/filters/hooks/useFiltersState'
import { searchParamsToParamsRecord } from '@/domain/params/utils'
import { productServices } from '@/services/products'
import type { Product } from '@/common/categoryPage/types'
import type { GenderParam } from '@/domain/params/types'

const withGenderParam = (params: Record<string, string | string[]>, gender: GenderParam) => ({
  ...params,
  gender
})

const useWomenProductsQuery = () => {
  const { getAll } = useFiltersState()
  const urlFilters = getAll()
  const safeParams = withGenderParam(searchParamsToParamsRecord(urlFilters), 'women')

  const { getAllProducts } = productServices()

  return useQuery(getAllProducts(safeParams))
}

const useGetWomenProducts = () => {
  const { data, isLoading, isError } = useWomenProductsQuery()

  const womenProducts: Product[] = useMemo<Product[]>(() => {
    if (!data || isLoading || isError) return []

    return Array.isArray(data.payload) ? data.payload : []
  }, [data, isError, isLoading])

  return { products: womenProducts, isLoading }
}

export { useWomenProductsQuery, useGetWomenProducts }

import type { Product } from '@/common/categoryPage/types'
import { productServices } from '@/services/products'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

const useGetWomenProducts = () => {
  const { getAllProducts } = productServices()
  const { data, isLoading, isError } = useQuery(getAllProducts)

  const womenProducts: Product[] = useMemo(() => {
    if (!data || isLoading || isError) return []

    return data.payload
  }, [data, isError, isLoading])

  return { products: womenProducts, isLoading }
}

export { useGetWomenProducts }

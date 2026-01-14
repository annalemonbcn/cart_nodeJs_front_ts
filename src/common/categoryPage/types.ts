import type { ProductOutput } from '@/services/products/types'

type Product = ProductOutput

interface CategoryPageProps {
  title: string
  products: Product[]
  isLoading: boolean
}

export type { Product, CategoryPageProps }

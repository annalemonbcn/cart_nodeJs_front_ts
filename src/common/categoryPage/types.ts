import type { ProductOutput } from '@/services/products/types'

type Product = ProductOutput

interface ICategoryPageProps {
  title: string
  products: Product[]
  isLoading: boolean
}

export type { Product, ICategoryPageProps }

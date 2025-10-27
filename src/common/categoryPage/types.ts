type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

interface ICategoryPageProps {
  title: string
  products: Product[]
}

export type { Product, ICategoryPageProps }

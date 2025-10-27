import CategoryPage from '@/common/categoryPage'
import type { Product } from '@/common/categoryPage/types'

const WomenPage = () => {
  const mockWomensData: Product[] = [
    {
      id: '1',
      name: 'T-Shirt',
      description: 'A comfortable T-Shirt',
      price: 19.99,
      image: '/images/sample_product.png'
    },
    {
      id: '2',
      name: 'T-Shirt',
      description: 'A comfortable T-Shirt',
      price: 19.99,
      image: '/images/sample_product.png'
    },
    {
      id: '3',
      name: 'T-Shirt',
      description: 'A comfortable T-Shirt',
      price: 19.99,
      image: '/images/sample_product.png'
    }
  ]

  return <CategoryPage title="Women's clothing" products={mockWomensData} />
}

export { WomenPage }

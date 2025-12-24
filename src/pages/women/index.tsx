import CategoryPage from '@/common/categoryPage'
import { useGetWomenProducts } from './hooks'

const WomenPage = () => {
  const queryData = useGetWomenProducts()

  return <CategoryPage title="Women's clothing" {...queryData} />
}

export { WomenPage }

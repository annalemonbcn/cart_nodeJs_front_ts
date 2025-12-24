import SkeletonLoader from '@/components/skeleton'
import Text from '@/components/text'
import { ProductRender } from './components/productRender'
import {
  StyledBodyArea,
  StyledCategoryLayout,
  StyledFiltersArea,
  StyledHeader,
  StyledHeaderArea,
  StyledProductList
} from './styles'
import BaseLayout from '../layouts/baseLayout'
import NoDataRender from '../noDataRender'
import { FiltersSidePanel } from './components/filtersSidePanel'
import type { ICategoryPageProps } from './types'

const ProductList = ({ products }: Pick<ICategoryPageProps, 'products'>) => {
  if (products.length === 0)
    return (
      <NoDataRender
        title="No products found"
        description="We couldn't find any products matching your search criteria. Please try again with different keywords."
      />
    )

  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductRender key={`product-${product.id}`} product={product} />
      ))}
    </StyledProductList>
  )
}

const CategoryHeader = ({
  title,
  numberOfProducts
}: Pick<ICategoryPageProps, 'title'> & { numberOfProducts: number }) => (
  <StyledHeader>
    <Text size="s5" weight="bold" color="darkNeutral">
      {title} ({numberOfProducts})
    </Text>
  </StyledHeader>
)

const CategoryPage = ({ isLoading, title, products }: ICategoryPageProps) => (
  <BaseLayout showBreadcrumb={false}>
    <StyledCategoryLayout>
      <StyledHeaderArea>
        <CategoryHeader title={title} numberOfProducts={products.length} />
      </StyledHeaderArea>

      <StyledFiltersArea>
        <FiltersSidePanel />
      </StyledFiltersArea>

      <StyledBodyArea>
        {isLoading && <SkeletonLoader />}
        {!isLoading && <ProductList products={products} />}
      </StyledBodyArea>
    </StyledCategoryLayout>
  </BaseLayout>
)

export default CategoryPage

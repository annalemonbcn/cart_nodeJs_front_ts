import FlexContainer from '@/components/flexContainer'
import SkeletonLoader from '@/components/skeleton'
import Text from '@/components/text'
import { ProductRender } from './components/productRender'
import { StyledCategoryBody, StyledHeader, StyledProductList } from './styles'
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

const CategoryHeader = ({ title }: Pick<ICategoryPageProps, 'title'>) => (
  <StyledHeader>
    <Text size="s5" weight="bold" color="darkNeutral">
      {title}
    </Text>
  </StyledHeader>
)

const CategoryPage = ({ isLoading, title, products }: ICategoryPageProps) => (
  <BaseLayout showBreadcrumb={false}>
    <FlexContainer>
      <FiltersSidePanel />

      <StyledCategoryBody flexDirection="column">
        <CategoryHeader title={title} />

        {isLoading && <SkeletonLoader />}
        {!isLoading && <ProductList products={products} />}
      </StyledCategoryBody>
    </FlexContainer>
  </BaseLayout>
)

export default CategoryPage

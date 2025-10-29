import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import type { ICategoryPageProps, Product } from './types'
import { StyledCategoryBody, StyledHeader, StyledProductList } from './styles'
import { ProductRender } from './components/productRender'
import BaseLayout from '../layouts/baseLayout'
import { FiltersSidePanel } from './components/filtersSidePanel'
import SkeletonLoader from '@/components/skeleton'

const ProductList = ({ products }: { products: Product[] }) => (
  <StyledProductList>
    {products.map((product) => (
      <ProductRender key={`product-${product.id}`} product={product} />
    ))}
  </StyledProductList>
)

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

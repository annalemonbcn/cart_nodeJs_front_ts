import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import type { ICategoryPageProps, Product } from './types'
import { StyledCategoryBody, StyledHeader } from './styles'
import { ProductRender } from './components/productRender'
import BaseLayout from '../layouts/baseLayout'
import { FiltersSidePanel } from './components/filtersSidePanel'

const CategoryHeader = ({ title }: Pick<ICategoryPageProps, 'title'>) => (
  <StyledHeader>
    <Text size="s5" weight="bold" color="darkNeutral">
      {title}
    </Text>
  </StyledHeader>
)

const ProductList = ({ products }: { products: Product[] }) => (
  <FlexContainer wrap="wrap" justifyContent="space-between">
    {products.map((product) => (
      <ProductRender key={product.id} product={product} />
    ))}
  </FlexContainer>
)

const CategoryBody = ({ title, products }: ICategoryPageProps) => (
  <StyledCategoryBody flexDirection="column">
    <CategoryHeader title={title} />

    <ProductList products={products} />
  </StyledCategoryBody>
)

const CategoryPage = (props: ICategoryPageProps) => (
  <BaseLayout showBreadcrumb={false}>
    <FlexContainer>
      <FiltersSidePanel />

      <CategoryBody {...props} />
    </FlexContainer>
  </BaseLayout>
)

export default CategoryPage

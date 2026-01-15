import SkeletonLoader from '@/components/skeleton'
import Text from '@/components/text'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { theme } from '@/theme'
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
import type { CategoryPageProps } from './types'

const ProductList = ({ products }: Pick<CategoryPageProps, 'products'>) => {
  if (products.length === 0)
    return (
      <NoDataRender
        title="No products found"
        description="We couldn't find any products matching your search criteria. Please try again with different filters."
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
}: Pick<CategoryPageProps, 'title'> & { numberOfProducts: number }) => (
  <StyledHeader>
    <Text size="s5" weight="bold" color="darkNeutral">
      {title} ({numberOfProducts})
    </Text>
  </StyledHeader>
)

const CategoryPage = ({ products, isLoading, title }: CategoryPageProps) => {
  const isTablet = useMediaQuery(theme.mq.js.up('md'))
  const isDesktop = useMediaQuery(theme.mq.js.up('lg'))

  const skeletonCount = isDesktop ? 5 : isTablet ? 4 : 2

  return (
    <BaseLayout showBreadcrumb={false}>
      <StyledCategoryLayout>
        <StyledHeaderArea>
          <CategoryHeader title={title} numberOfProducts={products?.length || 0} />
        </StyledHeaderArea>

        <StyledFiltersArea>
          <FiltersSidePanel />
        </StyledFiltersArea>

        <StyledBodyArea>
          {isLoading && <SkeletonLoader count={skeletonCount} />}
          {!isLoading && <ProductList products={products} />}
        </StyledBodyArea>
      </StyledCategoryLayout>
    </BaseLayout>
  )
}

export default CategoryPage

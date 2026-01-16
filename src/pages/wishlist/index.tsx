import { useNavigate } from 'react-router-dom'
import { ProductRender } from '@/common/categoryPage/components/productRender'
import { MyAccountOutletLayout } from '@/common/layouts/myAccountOutletLayout'
import NoDataRender from '@/common/noDataRender'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import SkeletonLoader from '@/components/skeleton'
import { routeMap } from '@/routes/utils'
import { useGetFavouritesProducts } from './hooks'
import { ContinueShoppingButtonContainer, ProductsContainer, SkeletonContainer } from './styles'

const NoData = () => {
  const navigate = useNavigate()

  return (
    <NoDataRender
      title="Your wishlist is empty."
      description="You don't have any products on your wishlist yet. You will find a lot of interesting products on our Shop page."
      children={
        <ContinueShoppingButtonContainer>
          <Button onClick={() => navigate(routeMap.women.path)}>Continue Shopping</Button>
        </ContinueShoppingButtonContainer>
      }
      align="left"
    />
  )
}

const Wishlist = () => {
  const { data: favourites, isLoading } = useGetFavouritesProducts()

  if (isLoading)
    return (
      <SkeletonContainer>
        <SkeletonLoader count={3} />
      </SkeletonContainer>
    )

  if (!favourites || favourites.length === 0) return <NoData />

  return (
    <MyAccountOutletLayout title="Wishlist">
      <FlexContainer flexDirection="column" gap="xl">
        <ProductsContainer>
          {favourites.map((product) => (
            <ProductRender key={`product-${product.id}`} product={product} />
          ))}
        </ProductsContainer>
      </FlexContainer>
    </MyAccountOutletLayout>
  )
}

export { Wishlist }

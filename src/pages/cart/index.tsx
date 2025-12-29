import { useNavigate } from 'react-router-dom'
import BaseLayout from '@/common/layouts/baseLayout'
import Title from '@/common/titles/title'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import Loader from '@/components/loader'
import Text from '@/components/text'
import { routeMap } from '@/routes/utils'
import { useGetCartProducts } from './hooks'
import { StyledImg } from './styles'

const EmptyCartRender = () => {
  const navigate = useNavigate()

  return (
    <FlexContainer flexDirection="column" alignItems="center" gap="xl3">
      <StyledImg src="/images/cart_empty.png" alt="empty cart" />

      <FlexContainer flexDirection="column" gap="sm">
        <Title title="Your cart is empty and sad :(" />
        <Text>Add an article to your cart to make it happy</Text>
      </FlexContainer>

      <Button onClick={() => navigate(routeMap.home.path)}>Continue Shopping</Button>
    </FlexContainer>
  )
}

const Cart = () => {
  const { data: products, isLoading } = useGetCartProducts()

  if (isLoading) return <Loader />

  return (
    <BaseLayout>
      {(!products || products.length === 0) && <EmptyCartRender />}
      {products && products.length > 0 && <div>Products</div>}
    </BaseLayout>
  )
}

export { Cart }

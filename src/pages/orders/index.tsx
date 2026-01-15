import { useNavigate } from 'react-router-dom'
import { MyAccountOutletLayout } from '@/common/layouts/myAccountOutletLayout'
import NoDataRender from '@/common/noDataRender'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import SkeletonLoader from '@/components/skeleton'
import { routeMap } from '@/routes/utils'
import { useGetOrders } from './hooks'
import { ContinueShoppingButtonContainer, OrdersContainer, SkeletonContainer } from './styles'

const NoData = () => {
  const navigate = useNavigate()

  return (
    <NoDataRender
      title="You haven't created any orders yet."
      description="Start buying to create an order now!"
      align="left"
      children={
        <ContinueShoppingButtonContainer>
          <Button onClick={() => navigate(routeMap.home.path)}>Continue Shopping</Button>
        </ContinueShoppingButtonContainer>
      }
    />
  )
}

const Orders = () => {
  const { data: orders, isLoading } = useGetOrders()

  if (isLoading)
    return (
      <SkeletonContainer>
        <SkeletonLoader count={3} />
      </SkeletonContainer>
    )

  if (!orders || orders.length === 0) return <NoData />

  return (
    <MyAccountOutletLayout title="Orders">
      <FlexContainer flexDirection="column" gap="xl">
        <OrdersContainer>
          {/* map orders */}
          Orders here
        </OrdersContainer>
      </FlexContainer>
    </MyAccountOutletLayout>
  )
}

export { Orders }

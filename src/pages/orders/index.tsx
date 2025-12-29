import { useNavigate } from 'react-router-dom'
import Title from '@/common/titles/title'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { routeMap } from '@/routes/utils'

const Orders = () => {
  const navigate = useNavigate()

  return (
    <FlexContainer flexDirection="column" gap="xl">
      <FlexContainer flexDirection="column" gap="sm">
        <Title title="Your haven't created any orders yet" />
        <Text>Start buying to create an order now!</Text>
      </FlexContainer>

      <div>
        <Button onClick={() => navigate(routeMap.home.path)}>Continue Shopping</Button>
      </div>
    </FlexContainer>
  )
}

export { Orders }

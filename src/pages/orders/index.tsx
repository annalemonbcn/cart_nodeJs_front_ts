import FlexContainer from '@/components/flexContainer'
import Title from '@/common/titles/title'
import Text from '@/components/text'
import { tokens } from '@/variables/styles'
import { routeMap } from '@/routes/utils'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/button'

const Orders = () => {
  const navigate = useNavigate()

  return (
    <FlexContainer flexDirection="column" gap={tokens.space.xl}>
      <FlexContainer flexDirection="column" gap={tokens.space.sm}>
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

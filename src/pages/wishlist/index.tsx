import { useNavigate } from 'react-router-dom'
import Title from '@/common/titles/title'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import Text from '@/components/text'
import { routeMap } from '@/routes/utils'

const Wishlist = () => {
  const navigate = useNavigate()

  return (
    <FlexContainer flexDirection="column" gap="xl">
      <FlexContainer flexDirection="column" gap="sm">
        <Title title="Your wishlist is empty." />
        <Text>
          You don't have any products on your wishlist yet. You will find a lot of interesting products on our Shop
          page.
        </Text>
      </FlexContainer>

      <div>
        <Button onClick={() => navigate(routeMap.home.path)}>Continue Shopping</Button>
      </div>
    </FlexContainer>
  )
}

export { Wishlist }

import FlexContainer from '@/components/flexContainer'
import Title from '@/common/titles/title'
import Text from '@/components/text'
import { tokens } from '@/variables/styles'
import { routeMap } from '@/routes/utils'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/button'

const Wishlist = () => {
  const navigate = useNavigate()

  return (
    <FlexContainer flexDirection="column" gap={tokens.space.xl}>
      <FlexContainer flexDirection="column" gap={tokens.space.sm}>
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

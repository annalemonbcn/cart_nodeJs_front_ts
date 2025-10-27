import { tokens } from '@/variables/styles'
import type { Product } from '../../types'
import Text from '@/components/text'
import FlexContainer from '@/components/flexContainer'
import { Tag } from '@/components/tag'

const ProductRender = ({ product }: { product: Product }) => (
  <FlexContainer flexDirection="column" gap={tokens.space.xl}>
    <img src={product.image} alt={product.name} />

    <FlexContainer justifyContent="space-between" alignItems="center">
      <FlexContainer flexDirection="column" gap={tokens.space.xs2}>
        <Text weight="bold" color="darkNeutral">
          {product.name}
        </Text>
        <Text size="s3" weight="medium">
          {product.description}
        </Text>
      </FlexContainer>
      <Tag text={`$${String(product.price)}`} />
    </FlexContainer>
  </FlexContainer>
)

export { ProductRender }

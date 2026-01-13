import FlexContainer from '@/components/flexContainer'
import { Tag } from '@/components/tag'
import Text from '@/components/text'
import { NoImage, StyledImageContainer, StyledImg, StyledProduct, StyledTextContainer } from './styles'
import type { IProductRenderProps } from './types'

// TODO: test noImageRender with more than 1 product in db
const NoImageRender = () => (
  <NoImage>
    <Text size="s3" weight="medium">
      No image available
    </Text>
  </NoImage>
)

const ProductRender = ({ product }: IProductRenderProps) => {
  const displayNoImage = product.thumbnails.length === 0

  // eslint-disable-next-line no-console
  const handleClick = () => console.log('open productPageeee')

  return (
    <StyledProduct flexDirection="column" gap="xl" onClick={handleClick}>
      <StyledImageContainer>
        {displayNoImage ? <NoImageRender /> : <StyledImg src={product.thumbnails.at(0)} />}
      </StyledImageContainer>

      <FlexContainer justifyContent="space-between" alignItems="center" gap="xl">
        <StyledTextContainer flexDirection="column" gap="xs2">
          <Text weight="bold" color="darkNeutral" clamp>
            {product.title}
          </Text>
          <Text size="s3" weight="medium" clamp>
            {product.description}
          </Text>
        </StyledTextContainer>

        <Tag text={`$${String(product.price)}`} variant="grey" />
      </FlexContainer>
    </StyledProduct>
  )
}

export { ProductRender }

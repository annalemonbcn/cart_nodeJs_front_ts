import FlexContainer from '@/components/flexContainer'
import { Tag } from '@/components/tag'
import Text from '@/components/text'
import HeartIcon from '@/icons/heart.svg?react'
import {
  NoImage,
  StyledFavouriteButton,
  StyledImageContainer,
  StyledImg,
  StyledProduct,
  StyledTextContainer
} from './styles'
import { useGetFavourites, useToggleFavourite } from '../../hooks'
import type { ProductRenderProps } from './types'

const NoImageRender = () => (
  <NoImage>
    <Text size="s3" weight="medium">
      No image available
    </Text>
  </NoImage>
)

const Favourite = ({ productId }: { productId: string }) => {
  const { toggleFavourite, isPending } = useToggleFavourite()
  const { favourites, isLoading } = useGetFavourites()

  const isFavourited = favourites.includes(productId)

  const handleToggleFavourite = () => toggleFavourite(productId)

  return (
    <StyledFavouriteButton
      variant="tertiary"
      fitContent
      onClick={handleToggleFavourite}
      disabled={isPending || isLoading}
    >
      <HeartIcon width={16} height={16} fill={isFavourited ? '#807d7e' : '#ffffff'} />
    </StyledFavouriteButton>
  )
}

const ProductRender = ({ product }: ProductRenderProps) => {
  const displayNoImage = product.thumbnails.length === 0

  return (
    <StyledProduct flexDirection="column" gap="xl">
      <Favourite productId={product.id} />
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

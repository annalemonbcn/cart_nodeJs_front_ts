import { tokens } from '@/variables/styles'
import { StyledBanner, ImageContainer, StyledTextContainer, StyledButtonContainer } from './styles'
import Text from '@/components/text'
import type { IBannerProps } from './types'
import { withLineBreaks } from './utils'
import Button from '@/components/button'

const Banner = ({ imgSrc, h1, description, topText, button }: IBannerProps) => (
  <StyledBanner>
    <ImageContainer imgSrc={imgSrc} />
    <StyledTextContainer flexDirection="column" gap={tokens.space.xl2}>
      <Text as="p" size="s6" color="white">
        {topText}
      </Text>
      <Text as="h1" size="s10" weight="bold" color="white">
        {h1}
      </Text>
      <Text as="h2" size="s6" color="white">
        {withLineBreaks(description)}
      </Text>

      <StyledButtonContainer>
        <Button variant="tertiary" onClick={button.onClick}>
          <Text weight="medium">{button.label}</Text>
        </Button>
      </StyledButtonContainer>
    </StyledTextContainer>
  </StyledBanner>
)

export default Banner

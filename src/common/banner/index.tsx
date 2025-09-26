import { tokens } from '@/variables/styles'
import { StyledBanner, ImageContainer, StyledTextContainer, StyledButtonContainer } from './styles'
import Text from '@/components/text'
import type { IBannerProps } from './types'
import { withLineBreaks } from './utils'
import Button from '@/components/button'

const Banner = ({ content, button, bannerProps }: IBannerProps) => (
  <StyledBanner>
    <ImageContainer imgSrc={content.imgSrc} />
    <StyledTextContainer flexDirection="column" gap={tokens.space.xl2} align={bannerProps?.align}>
      <Text as="p" size="s6" color={bannerProps?.textColor}>
        {content.topText}
      </Text>
      <Text as="h1" size="s10" weight="bold" color={bannerProps?.textColor}>
        {content.h1}
      </Text>
      <Text as="h2" size="s6" color={bannerProps?.textColor}>
        {withLineBreaks(content.description)}
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

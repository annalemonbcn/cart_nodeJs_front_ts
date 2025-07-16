import { socialPlatforms } from '@/utils/constants'
import type { ISocialBtnProps } from './types'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { StyledIcon } from './styles'
import { capitalize } from '@/utils/string'
import Text from '@/components/text'

// TODO: make this link to be opened in a popup
const SocialBtn = ({ socialPlatform: { icon, link, name } }: ISocialBtnProps) => (
  <Button variant="secondary" onClick={() => window.open(link, '_blank')}>
    <FlexContainer justifyContent="center" alignItems="center" gap={tokens.space.sm}>
      <StyledIcon src={icon} alt={`${name}-icon`} />
      <Text as="span">Continue with {capitalize(name)}</Text>
    </FlexContainer>
  </Button>
)

const SocialLogin = () => (
  <FlexContainer flexDirection="column" gap={tokens.space.md}>
    {socialPlatforms.map((platform) => (
      <SocialBtn key={`platform-${platform.name}`} socialPlatform={platform} />
    ))}
  </FlexContainer>
)

export { SocialLogin }

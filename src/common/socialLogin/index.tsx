import { socialPlatforms } from '@/utils/constants'
import type { ISocialBtnProps } from './types'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { StyledIcon, StyledSocialButtonWrapper } from './styles'
import { capitalize } from '@/utils/string'
import Text from '@/components/text'
import Link from '@/components/link'
import Disabler from '@/components/disabler'

const SocialBtn = ({ socialPlatform: { icon, link, name } }: ISocialBtnProps) => (
  <Disabler>
    <StyledSocialButtonWrapper>
      <Button variant="secondary">
        <Link to={link} underline={false}>
          <FlexContainer justifyContent="center" alignItems="center" gap={tokens.space.sm}>
            <StyledIcon src={icon} alt={`${name}-icon`} />
            <Text as="span">Continue with {capitalize(name)}</Text>
          </FlexContainer>
        </Link>
      </Button>
    </StyledSocialButtonWrapper>
  </Disabler>
)

const SocialLogin = () => (
  <FlexContainer flexDirection="column" gap={tokens.space.md}>
    {socialPlatforms.map((platform) => (
      <SocialBtn key={`platform-${platform.name}`} socialPlatform={platform} />
    ))}
  </FlexContainer>
)

export { SocialLogin }

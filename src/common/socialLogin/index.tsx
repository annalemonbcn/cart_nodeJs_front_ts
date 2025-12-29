import Button from '@/components/button'
import Disabler from '@/components/disabler'
import FlexContainer from '@/components/flexContainer'
import Link from '@/components/link'
import Text from '@/components/text'
import { socialPlatforms } from '@/utils/constants'
import { capitalize } from '@/utils/string'
import { StyledIcon, StyledSocialButtonWrapper } from './styles'
import type { ISocialBtnProps } from './types'

const SocialBtn = ({ socialPlatform: { icon, link, name } }: ISocialBtnProps) => (
  <Disabler>
    <StyledSocialButtonWrapper>
      <Button variant="secondary">
        <Link to={link} underline={false}>
          <FlexContainer justifyContent="center" alignItems="center" gap="sm">
            <StyledIcon src={icon} alt={`${name}-icon`} />
            <Text as="span">Continue with {capitalize(name)}</Text>
          </FlexContainer>
        </Link>
      </Button>
    </StyledSocialButtonWrapper>
  </Disabler>
)

const SocialLogin = () => (
  <FlexContainer flexDirection="column" gap="md">
    {socialPlatforms.map((platform) => (
      <SocialBtn key={`platform-${platform.name}`} socialPlatform={platform} />
    ))}
  </FlexContainer>
)

export { SocialLogin }

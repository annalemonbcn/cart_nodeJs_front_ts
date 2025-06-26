import { SOCIAL_PLATFORMS } from '@/utils/constants'
import type { ISocialBtnProps } from './types'
import Button from '@/components/button'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables'
import { StyledIcon } from './styles'
import { capitalize } from '@/utils/string'
import Text from '@/components/text'

const SocialBtn = ({ socialPlatform }: ISocialBtnProps) => {
  const iconPath = `/icons/${socialPlatform}.svg`

  return (
    <Button variant="secondary">
      <FlexContainer justifyContent="center" alignItems="center" gap={tokens.space.sm}>
        <StyledIcon src={iconPath} alt={`${socialPlatform}-icon`} />
        <Text as="span">Continue with {capitalize(socialPlatform)}</Text>
      </FlexContainer>
    </Button>
  )
}

const SocialLogin = () => (
  <FlexContainer flexDirection="column" gap={tokens.space.md}>
    {SOCIAL_PLATFORMS.map((socialPlatform) => (
      <SocialBtn key={socialPlatform} socialPlatform={socialPlatform} />
    ))}
  </FlexContainer>
)

export { SocialLogin }

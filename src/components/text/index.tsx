import type { ITextProps } from './types'
import { StyledText } from './styles'

const Text = ({
  children,
  size = 's4',
  weight = 'regular',
  color,
  as = 'p',
  underline = false,
  clamp = false,
  ...rest
}: ITextProps) => (
  <StyledText as={as} size={size} weight={weight} color={color} underline={underline} clamp={clamp} {...rest}>
    {children}
  </StyledText>
)
Text.displayName = 'Text'

export default Text

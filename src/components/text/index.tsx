import type { ITextProps } from './types'
import { StyledText } from './styles'

const Text = ({ children, size = 's4', weight = 'regular', color, as = 'p', ...rest }: ITextProps) => (
  <StyledText as={as} size={size} weight={weight} color={color} {...rest}>
    {children}
  </StyledText>
)
Text.displayName = 'Text'

export default Text

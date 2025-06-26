import type { ITextProps } from './types'
import { StyledText } from './styles'

const Text = ({ children, size = 's4', weight = 'regular', color, as = 'p', ...rest }: ITextProps) => (
  <StyledText as={as} fontSizeProp={size} fontWeightProp={weight} textColorProp={color} {...rest}>
    {children}
  </StyledText>
)
Text.displayName = 'Text'

export default Text

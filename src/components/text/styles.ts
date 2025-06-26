import styled from 'styled-components'
import { colors, tokens } from '@/variables'
import type { FontSize, FontWeight, TextColor } from './types'

const StyledText = styled.p<{
  fontSizeProp?: FontSize
  fontWeightProp?: FontWeight
  textColorProp?: TextColor
}>`
  font-size: ${({ fontSizeProp }) => fontSizeProp && tokens.font.size[fontSizeProp]};
  font-weight: ${({ fontWeightProp }) => fontWeightProp && tokens.font.weight[fontWeightProp]};
  margin: 0;
  color: ${({ textColorProp }) => (textColorProp ? colors[textColorProp] : 'inherit')};
`

export { StyledText }

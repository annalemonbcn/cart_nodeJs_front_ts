import styled from 'styled-components'
import { colors, tokens } from '@/variables'
import type { ITextProps } from './types'

const StyledText = styled.p<Partial<ITextProps>>`
  font-size: ${({ size }) => size && tokens.font.size[size]};
  font-weight: ${({ weight }) => weight && tokens.font.weight[weight]};
  margin: 0;
  color: ${({ color }) => (color ? colors[color] : 'inherit')};
`

export { StyledText }

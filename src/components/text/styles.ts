import styled, { css } from 'styled-components'
import { colors, dangerShades, tokens } from '@/variables/styles'
import type { ITextProps } from './types'

const clampStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StyledText = styled.p<Partial<ITextProps>>`
  font-size: ${({ size }) => size && tokens.font.size[size]};
  font-weight: ${({ weight }) => weight && tokens.font.weight[weight]};
  margin: 0;
  color: ${({ color }) => {
    if (!color) return 'inherit'

    if (color.startsWith('danger.')) {
      const shade = color.split('.')[1] as unknown as keyof typeof dangerShades
      return dangerShades[shade]
    }

    return colors[color as keyof typeof colors]
  }};

  ${({ underline }) => underline && 'text-decoration: underline'};

  ${({ clamp }) => clamp && clampStyles}
`

export { StyledText }

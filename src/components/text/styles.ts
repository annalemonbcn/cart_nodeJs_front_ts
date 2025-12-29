import styled, { css } from 'styled-components'
import { t } from '@/styles/themeHelpers'
import type { StyledTextProps } from './types'

const clampStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StyledText = styled.p<StyledTextProps>`
  font-size: ${({ size }) => size && t.fontSize(size)};
  font-weight: ${({ weight }) => weight && t.fontWeight(weight)};
  margin: 0;

  color: ${({ theme, color }) => {
    if (!color || color === 'inherit') return 'inherit'

    if (color.startsWith('danger.')) {
      const shade = Number(color.split('.')[1]) as keyof typeof theme.colors.danger
      return theme.colors.danger[shade]
    }

    return theme.colors[color as keyof typeof theme.colors] as string
  }};

  ${({ underline }) => underline && 'text-decoration: underline'};

  ${({ clamp }) => clamp && clampStyles}
`

export { StyledText }

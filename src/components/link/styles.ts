import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'
import { t } from '@/styles/themeHelpers'
import type { StyledLinkProps } from './types'

const StyledLink = styled(RouterLink).withConfig({
  shouldForwardProp: (prop) => prop !== 'underline'
})<StyledLinkProps>`
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  font-size: ${({ size }) => (size ? t.fontSize(size) : 'inherit')};
  font-weight: ${({ weight }) => (weight ? t.fontWeight(weight) : 'inherit')};

  color: ${({ theme, color }) => {
    if (!color || color === 'inherit') return 'inherit'

    if (color.startsWith('danger.')) {
      const shade = Number(color.split('.')[1]) as keyof typeof theme.colors.danger
      return theme.colors.danger[shade]
    }

    return theme.colors[color as keyof typeof theme.colors] as string
  }};

  margin: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  white-space: nowrap;
`

export { StyledLink }

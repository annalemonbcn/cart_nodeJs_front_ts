import { colors, dangerShades, tokens } from '@/variables/styles'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import type { LinkProps } from './types'

const getColor = (color?: LinkProps['color']) => {
  if (!color) return 'inherit'

  const [key, shade] = color.split('.') as [keyof typeof colors, keyof typeof dangerShades]

  if (shade && typeof colors[key] === 'object') {
    return (colors[key] as any)[shade]
  }

  return colors[key as keyof typeof colors]
}

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== 'underline'
})<Partial<LinkProps>>`
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  font-size: ${({ size }) => size && tokens.font.size[size]};
  font-weight: ${({ weight }) => weight && tokens.font.weight[weight]};
  color: ${({ color }) => (color && getColor(color)) || 'inherit'};
  margin: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export { StyledLink }

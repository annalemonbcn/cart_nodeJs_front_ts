import { colors, tokens } from '@/variables/styles'
import { Link } from 'react-router'
import styled from 'styled-components'
import type { LinkProps } from './types'

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== 'underline'
})<Partial<LinkProps>>`
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  font-size: ${({ size }) => size && tokens.font.size[size]};
  font-weight: ${({ weight }) => weight && tokens.font.weight[weight]};
  color: ${({ color }) => color && colors[color] || 'inherit'};
  margin: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export { StyledLink }

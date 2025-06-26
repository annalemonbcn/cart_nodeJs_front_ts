import { tokens } from '@/variables'
import { Link } from 'react-router'
import styled from 'styled-components'
import type { LinkProps } from './types'

const StyledLink = styled(Link)<Partial<LinkProps>>`
  text-decoration: underline;

  font-size: ${({ size }) => size && tokens.font.size[size]};
  font-weight: ${({ weight }) => weight && tokens.font.weight[weight]};
  color: ${({ color }) => color || 'inherit'};
  margin: 0;

  &:hover {
    opacity: 0.8;
  }
`

export { StyledLink }

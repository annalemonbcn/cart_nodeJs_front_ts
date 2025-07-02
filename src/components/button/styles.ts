import styled, { css } from 'styled-components'
import type { IButtonProps } from './types'
import { colors, tokens } from '@/variables'

const primaryStyles = css`
  background-color: ${colors.primary};
  color: ${colors.white};
`

const secondaryStyles = css`
  background-color: ${colors.white};
  border: 1px solid ${colors.darkNeutral};
  color: ${colors.primary};
`
const StyledButton = styled.button<Partial<IButtonProps>>`
  min-width: 140px;

  padding: ${tokens.space.sm} ${tokens.space.xl2};
  border-radius: ${tokens.borders.radius.sm};

  ${({ variant }) => variant === 'primary' && primaryStyles};
  ${({ variant }) => variant === 'secondary' && secondaryStyles};
  ${({ isRounded }) => isRounded && `border-radius: ${tokens.borders.radius.full}`}

  &:hover {
    opacity: 0.8;
  }
`

export { StyledButton }

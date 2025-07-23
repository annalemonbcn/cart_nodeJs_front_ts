import styled, { css } from 'styled-components'
import { tokens, colors } from '@/variables/styles'
import type { IInputProps } from './types'

const primaryStyles = css`
  border-radius: ${tokens.borders.radius.sm};
  border: ${tokens.borders.size.xs} solid ${colors.darkNeutral};
`

const secondaryStyles = css`
  border: none;
  padding-left: 0;
  font-size: ${tokens.font.size.s4};
  font-weight: ${tokens.font.weight.bold};
  color: ${colors.darkNeutral};
`

const StyledInput = styled.input<Pick<IInputProps, 'variant'>>`
  min-width: 140px;
  padding: ${tokens.space.sm};
  background-color: ${colors.white};

  ${({ variant }) => variant === 'primary' && primaryStyles};
  ${({ variant }) => variant === 'secondary' && secondaryStyles};

  &:focus {
    outline: none;
  }
`

export { StyledInput }

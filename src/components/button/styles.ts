import styled, { css } from 'styled-components'
import type { IButtonProps } from './types'
import { colors, tokens } from '@/variables/styles'

const primaryStyles = css`
  background-color: ${colors.primary};
  color: ${colors.white};
`

const secondaryStyles = css`
  background-color: ${colors.white};
  border: 1px solid ${colors.darkNeutral};
  color: ${colors.primary};
`

const tertiaryStyles = css`
  border: none;
  background-color: ${colors.whiteSmoke};
`

const fitContentStyles = css`
  min-width: fit-content;
  padding: ${tokens.space.md};
`

const StyledButton = styled.button<Partial<IButtonProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${tokens.borders.radius.sm};

  min-width: 140px;
  padding: ${tokens.space.sm} ${tokens.space.xl2};
  ${({ fitContent }) => fitContent && fitContentStyles}

  ${({ variant }) => variant === 'primary' && primaryStyles};
  ${({ variant }) => variant === 'secondary' && secondaryStyles};
  ${({ variant }) => variant === 'tertiary' && tertiaryStyles};
  ${({ isRounded }) => isRounded && `border-radius: ${tokens.borders.radius.full}`}

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

export { StyledButton }

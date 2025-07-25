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
  font-weight: ${tokens.font.weight.medium};
`

const textStyles = css`
  font-weight: ${tokens.font.weight.bold};
  padding: 0;
  min-width: fit-content;
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

  ${({ variant }) => variant === 'primary' && primaryStyles};
  ${({ variant }) => variant === 'secondary' && secondaryStyles};
  ${({ variant }) => variant === 'tertiary' && tertiaryStyles};
  ${({ variant }) => variant === 'text' && textStyles};

  ${({ fitContent }) => fitContent && fitContentStyles}
  ${({ isRounded }) => isRounded && `border-radius: ${tokens.borders.radius.full}`}
  font-weight: ${({ fontWeight }) => fontWeight && tokens.font.weight[fontWeight]};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

export { StyledButton }

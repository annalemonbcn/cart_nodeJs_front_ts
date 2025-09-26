import styled, { css } from 'styled-components'
import { tokens, colors } from '@/variables/styles'
import type { IInputProps } from './types'

const primaryStyles = css`
  border-radius: ${tokens.borders.radius.sm};
  border: ${tokens.borders.size.xs} solid ${colors.darkNeutral};
`

const secondaryStyles = (hasError?: boolean) => css`
  border: none;
  padding-left: 0;
  font-size: ${tokens.font.size.s4};
  font-weight: ${tokens.font.weight.bold};

  transition: all 0.2s ease-in-out;

  ${hasError && secondaryErrorStyles}

  &:focus {
    background-color: ${colors.whiteSmoke};
    padding-left: ${tokens.space.sm2};
  }
`

const secondaryErrorStyles = css`
  padding-left: ${tokens.space.sm2};
  background: linear-gradient(65deg, ${colors.danger[100]} 0%, ${colors.white} 100%);
  color: ${colors.danger[800]};
`

const tertiaryStyles = (hasError?: boolean) => css`
  border: none;
  background-color: ${colors.whiteSmoke};
  padding-left: ${tokens.space.sm2};

  ${hasError && tertiaryErrorStyles}
`

const tertiaryErrorStyles = css`
  border-bottom: ${tokens.borders.size.xs} solid ${colors.danger[800]};
  background-color: ${colors.danger[100]};
`

const StyledInput = styled.input<Pick<IInputProps, 'variant' | 'fitContent' | 'hasError'>>`
  min-width: 140px;
  padding: ${tokens.space.sm};
  color: ${colors.darkNeutral};
  background-color: ${colors.white};

  ${({ variant }) => variant === 'primary' && primaryStyles};
  ${({ variant, hasError }) => variant === 'secondary' && secondaryStyles(hasError)};
  ${({ variant, hasError }) => variant === 'tertiary' && tertiaryStyles(hasError)};

  ${({ fitContent }) => fitContent && `min-width: fit-content`};

  &:focus {
    outline: none;
  }
`

export { StyledInput }

import styled, { css } from 'styled-components'
import { t } from '@/styles/themeHelpers'
import type { IButtonProps } from './types'

const primaryStyles = css`
  background-color: ${t.color('primary')};
  color: ${t.color('white')};
`

const secondaryStyles = css`
  background-color: ${t.color('white')};
  border: 1px solid ${t.color('darkNeutral')};
  color: ${t.color('primary')};
`

const tertiaryStyles = css`
  border: none;
  background-color: ${t.color('whiteSmoke')};
  font-weight: ${t.fontWeight('medium')};
`

const textStyles = css`
  font-weight: ${t.fontWeight('bold')};
  padding: 0;
  min-width: fit-content;
`

const fitContentStyles = css`
  min-width: fit-content;
  padding: ${t.space('md')};
`

const StyledButton = styled.button<Partial<IButtonProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${t.borderRadius('sm')};

  min-width: 140px;
  padding: ${t.space('sm')} ${t.space('xl2')};

  ${({ variant }) => variant === 'primary' && primaryStyles};
  ${({ variant }) => variant === 'secondary' && secondaryStyles};
  ${({ variant }) => variant === 'tertiary' && tertiaryStyles};
  ${({ variant }) => variant === 'text' && textStyles};

  ${({ fitContent }) => fitContent && fitContentStyles}
  ${({ isRounded }) => isRounded && `border-radius: ${t.borderRadius('full')}`}
  font-weight: ${({ fontWeight }) => fontWeight && t.fontWeight(fontWeight)};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

export { StyledButton }

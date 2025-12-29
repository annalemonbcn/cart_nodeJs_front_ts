import styled, { css } from 'styled-components'
import { t } from '@/styles/themeHelpers'
import type { IInputProps } from './types'

const primaryStyles = css`
  border-radius: ${t.borderRadius('sm')};
  border: ${t.borderSize('xs')} solid ${t.color('darkNeutral')};
`

const secondaryStyles = (hasError?: boolean) => css`
  border: none;
  padding-left: 0;
  font-size: ${t.fontSize('s4')};
  font-weight: ${t.fontWeight('bold')};

  transition: all 0.2s ease-in-out;

  ${hasError && secondaryErrorStyles}

  &:focus {
    background-color: ${t.color('whiteSmoke')};
    padding-left: ${t.space('sm2')};
  }
`

const secondaryErrorStyles = css`
  padding-left: ${t.space('sm2')};
  background: linear-gradient(65deg, ${t.color('danger', 100)} 0%, ${t.color('white')} 100%);
  color: ${t.color('danger', 800)};
`

const tertiaryStyles = (hasError?: boolean) => css`
  border: none;
  background-color: ${t.color('whiteSmoke')};
  padding-left: ${t.space('sm2')};

  ${hasError && tertiaryErrorStyles}
`

const tertiaryErrorStyles = css`
  border-bottom: ${t.borderSize('xs')} solid ${t.color('danger', 800)};
  background-color: ${t.color('danger', 100)};
`

const StyledInput = styled.input<Pick<IInputProps, 'variant' | 'fitContent' | 'hasError'>>`
  min-width: 140px;
  padding: ${t.space('sm')};
  color: ${t.color('darkNeutral')};
  background-color: ${t.color('white')};

  ${({ variant }) => variant === 'primary' && primaryStyles};
  ${({ variant, hasError }) => variant === 'secondary' && secondaryStyles(hasError)};
  ${({ variant, hasError }) => variant === 'tertiary' && tertiaryStyles(hasError)};

  ${({ fitContent }) => fitContent && `min-width: fit-content`};

  &:focus {
    outline: none;
  }
`

export { StyledInput }

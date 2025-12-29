import styled, { css } from 'styled-components'
import { t } from '@/styles/themeHelpers'
import type { FormFieldVariant } from './types'

const primaryStyles = css`
  color: ${t.color('darkNeutral')};
`

const secondaryStyles = css`
  font-weight: ${t.fontWeight('medium')};
`

const tertiaryStyles = css`
  color: ${t.color('darkNeutral')};
  font-weight: ${t.fontWeight('medium')};
`

const errorStyles = css`
  color: ${t.color('danger', 800)};
`

const StyledLabel = styled.label<{ variant: FormFieldVariant; hasError?: boolean }>`
  font-size: ${t.fontSize('s3')};

  ${({ variant }) => variant === 'primary' && primaryStyles};
  ${({ variant }) => variant === 'secondary' && secondaryStyles};
  ${({ variant }) => variant === 'tertiary' && tertiaryStyles};

  ${({ hasError }) => hasError && errorStyles};
`

const StyledErrorTextContainer = styled.div`
  margin-top: ${t.space('xs2')};
`

export { StyledLabel, StyledErrorTextContainer }

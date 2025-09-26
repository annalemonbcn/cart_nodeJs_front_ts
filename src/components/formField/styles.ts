import { colors, tokens } from '@/variables/styles'
import styled, { css } from 'styled-components'
import type { FormFieldVariant } from './types'

const primaryStyles = css`
  color: ${colors.darkNeutral};
`

const secondaryStyles = css`
  font-weight: ${tokens.font.weight.medium};
`

const tertiaryStyles = css`
  color: ${colors.darkNeutral};
  font-weight: ${tokens.font.weight.medium};
`

const errorStyles = css`
  color: ${colors.danger[800]};
`

const StyledLabel = styled.label<{ variant: FormFieldVariant; hasError?: boolean }>`
  font-size: ${tokens.font.size.s3};

  ${({ variant }) => variant === 'primary' && primaryStyles};
  ${({ variant }) => variant === 'secondary' && secondaryStyles};
  ${({ variant }) => variant === 'tertiary' && tertiaryStyles};

  ${({ hasError }) => hasError && errorStyles};
`

const StyledErrorTextContainer = styled.div`
  margin-top: ${tokens.space.xs2};
`

export { StyledLabel, StyledErrorTextContainer }

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

const StyledLabel = styled.label<{ variant: FormFieldVariant }>`
  font-size: ${tokens.font.size.s3};

  ${({ variant }) => variant === 'primary' && primaryStyles};
  ${({ variant }) => variant === 'secondary' && secondaryStyles};
  ${({ variant }) => variant === 'tertiary' && tertiaryStyles};
`

export { StyledLabel }

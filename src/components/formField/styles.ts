import { colors, tokens } from '@/variables/styles'
import styled, { css } from 'styled-components'
import type { FormFieldVariant } from './types'

const primaryStyles = css`
  font-size: ${tokens.font.size.s3};
  color: ${colors.darkNeutral};
`

const secondaryStyles = css`
  font-size: ${tokens.font.size.s3};
  font-weight: ${tokens.font.weight.medium};
  /* color: ${colors.mediumNeutral}; */
`

const StyledLabel = styled.label<{ variant: FormFieldVariant }>`
  ${({ variant }) => variant === 'primary' && primaryStyles}
  ${({ variant }) => variant === 'secondary' && secondaryStyles}
`

export { StyledLabel }

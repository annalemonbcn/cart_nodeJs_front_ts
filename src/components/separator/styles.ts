import styled from 'styled-components'
import FlexContainer from '../flexContainer'
import { colors, tokens } from '@/variables'
import type { ISeparatorProps } from './types'

const StyledSeparator = styled(FlexContainer)<ISeparatorProps>`
  width: 100%;

  &::before {
    content: '';
    flex: 1;
    border-bottom: ${tokens.borders.size.xs} solid ${colors.lightNeutral};
    margin-right: ${({ displayText }) => (displayText ? `${tokens.space.sm2}` : '0')};
  }

  &::after {
    content: '';
    flex: 1;
    border-bottom: ${tokens.borders.size.xs} solid ${colors.lightNeutral};
    margin-left: ${({ displayText }) => (displayText ? `${tokens.space.sm2}` : '0')};
  }

  ${({ displayText }) =>
    !displayText &&
    `
    &::after {
      flex: 0;
      margin-left: 0;
    }
  `}
`

export { StyledSeparator }

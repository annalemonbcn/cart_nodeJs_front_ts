import styled from 'styled-components'
import { t } from '@/styles/themeHelpers'
import FlexContainer from '../flexContainer'
import type { ISeparatorProps } from './types'

const StyledSeparator = styled(FlexContainer)<ISeparatorProps>`
  width: 100%;

  &::before {
    content: '';
    flex: 1;
    border-bottom: ${t.borderSize('xs')} solid ${t.color('lightNeutral')};
    margin-right: ${({ displayText }) => (displayText ? `${t.space('sm2')}` : '0')};
  }

  &::after {
    content: '';
    flex: 1;
    border-bottom: ${t.borderSize('xs')} solid ${t.color('lightNeutral')};
    margin-left: ${({ displayText }) => (displayText ? `${t.space('sm2')}` : '0')};
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

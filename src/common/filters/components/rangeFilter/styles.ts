import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { t } from '@/styles/themeHelpers'

const StyledContainer = styled(FlexContainer)<{ isActive: boolean }>`
  width: 100px;
  max-width: 100px;
  padding: ${t.space('xs')};
  border: ${t.borderSize('xs')} solid ${t.color('lightNeutral')};
  border-radius: ${t.borderRadius('sm')};
  background-color: ${({ isActive }) => isActive && t.color('lightPrimary')};
`

export { StyledContainer }

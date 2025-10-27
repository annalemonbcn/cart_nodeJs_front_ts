import FlexContainer from '@/components/flexContainer'
import { colors, tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledContainer = styled(FlexContainer)<{ isActive: boolean }>`
  width: 100px;
  max-width: 100px;
  padding: ${tokens.space.xs};
  border: ${tokens.borders.size.xs} solid ${colors.lightNeutral};
  border-radius: ${tokens.borders.radius.sm};
  background-color: ${({ isActive }) => isActive && colors.lightPrimary};
`

export { StyledContainer }

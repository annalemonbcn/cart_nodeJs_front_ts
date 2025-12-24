import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { colors, tokens } from '@/variables/styles'

const isActiveStyles = css`
  border: ${tokens.borders.size.xs} solid ${colors.darkNeutral};
  background-color: ${colors.lightPrimary};
`

const StyledSize = styled(FlexContainer)<{ isActive: boolean }>`
  border: ${tokens.borders.size.xs} solid ${colors.lightNeutral};
  border-radius: ${tokens.borders.radius.sm};
  padding: ${tokens.space.xs};
  cursor: pointer;

  ${({ isActive }) => isActive && isActiveStyles}
`

const StyledContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px ${tokens.space.md};
`

export { StyledSize, StyledContainer }

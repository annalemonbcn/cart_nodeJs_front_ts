import { colors, tokens } from '@/variables/styles'
import styled, { css } from 'styled-components'

const whiteColorStyles = css`
  border: ${tokens.borders.size.xs} solid ${colors.lightNeutral};
`

const isActiveStyles = css`
  border: ${tokens.borders.size.xs} solid ${colors.darkNeutral};
`

const StyledColor = styled.div<{ color: string; isActive: boolean }>`
  width: ${tokens.space.xl};
  height: ${tokens.space.xl};
  background-color: ${({ color }) => color && color};
  border-radius: ${tokens.borders.radius.md};

  ${({ color }) => (color === 'all' || color === 'white') && whiteColorStyles};
  ${({ isActive }) => isActive && isActiveStyles};

  cursor: pointer;
`

const StyledContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px ${tokens.space.md};
`

export { StyledColor, StyledContainer }

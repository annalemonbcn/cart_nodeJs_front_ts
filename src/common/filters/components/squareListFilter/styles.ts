import styled, { css } from 'styled-components'
import { t } from '@/styles/themeHelpers'

const whiteColorStyles = css`
  border: ${t.borderSize("xs")} solid ${t.color("lightNeutral")};
`

const isActiveStyles = css`
  border: ${t.borderSize("xs")} solid ${t.color("darkNeutral")};
`

const StyledColor = styled.div<{ color: string; isActive: boolean }>`
  width: ${t.space("xl")};
  height: ${t.space("xl")};
  background-color: ${({ color }) => color && color};
  border-radius: ${t.borderRadius("md")};

  ${({ color }) => (color === 'all' || color === 'white') && whiteColorStyles};
  ${({ isActive }) => isActive && isActiveStyles};

  cursor: pointer;
`

const StyledContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px ${t.space('md')};
`

export { StyledColor, StyledContainer }

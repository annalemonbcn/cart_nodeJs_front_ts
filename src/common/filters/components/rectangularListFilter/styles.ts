import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { t } from '@/styles/themeHelpers'

const isActiveStyles = css`
  border: ${t.borderSize('xs')} solid ${t.color('darkNeutral')};
  background-color: ${t.color('lightPrimary')};
`

const StyledSize = styled(FlexContainer)<{ isActive: boolean }>`
  border: ${t.borderSize('xs')} solid ${t.color('lightNeutral')};
  border-radius: ${t.borderRadius('sm')};
  padding: ${t.space('xs')};
  cursor: pointer;

  ${({ isActive }) => isActive && isActiveStyles}
`

const StyledContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px ${t.space('md')};
`

export { StyledSize, StyledContainer }

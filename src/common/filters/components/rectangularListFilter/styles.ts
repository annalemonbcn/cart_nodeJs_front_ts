import styled from 'styled-components'
import { t } from '@/styles/themeHelpers'

const StyledContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px ${t.space('md')};
`

export { StyledContainer }

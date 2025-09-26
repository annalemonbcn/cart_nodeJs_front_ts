import { tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${tokens.space.lg};
`

export { StyledContainer }

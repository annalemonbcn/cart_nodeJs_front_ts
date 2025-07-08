import styled from 'styled-components'
import { tokens, colors } from '@/variables/styles'

const StyledInput = styled.input`
  min-width: 140px;
  padding: ${tokens.space.sm};
  border-radius: ${tokens.borders.radius.sm};
  background-color: ${colors.white};
  border: ${tokens.borders.size.xs} solid ${colors.darkNeutral};
`

export { StyledInput }

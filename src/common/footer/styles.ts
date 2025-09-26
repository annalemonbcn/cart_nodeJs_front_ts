import FlexContainer from '@/components/flexContainer'
import { colors, tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledFooter = styled(FlexContainer)`
  grid-area: footer;
  background-color: ${colors.darkNeutral};
  padding: ${tokens.space.lg};
`

export { StyledFooter }

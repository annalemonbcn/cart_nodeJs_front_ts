import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { colors, tokens } from '@/variables/styles'

const StyledContainer = styled(FlexContainer)`
  padding: ${tokens.space.xl};
  border: ${tokens.borders.size.sm} dashed ${colors.lightNeutral};
  align-items: center;
`

export { StyledContainer }

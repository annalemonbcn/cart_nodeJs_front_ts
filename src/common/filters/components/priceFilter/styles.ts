import FlexContainer from '@/components/flexContainer'
import { colors, tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledContainer = styled(FlexContainer)`
  width: 100px;
  max-width: 100px;
  padding: ${tokens.space.sm2};
  border: ${tokens.borders.size.xs} solid ${colors.lightNeutral};
  border-radius: ${tokens.borders.radius.md};
`

export { StyledContainer }

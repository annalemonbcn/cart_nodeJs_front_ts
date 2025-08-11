import FlexContainer from '@/components/flexContainer'
import { colors, tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledAddressContainer = styled(FlexContainer)`
  background-color: ${colors.whiteSmoke};
  padding: ${tokens.space.lg} ${tokens.space.xl2};
  border-radius: ${tokens.borders.radius.md};
`

export { StyledAddressContainer }

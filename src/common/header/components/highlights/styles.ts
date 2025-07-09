import FlexContainer from '@/components/flexContainer'
import { colors, tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledHighlightedItem = styled(FlexContainer)`
  background-color: ${colors.whiteSmoke};
  padding: ${tokens.space.md};
  border-radius: ${tokens.borders.radius.sm};
`

export { StyledHighlightedItem }

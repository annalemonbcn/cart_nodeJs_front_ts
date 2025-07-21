import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'

const StyledBaseLayout = styled(FlexContainer)`
  min-height: 100%;
  padding: 0 ${tokens.space.xl6};
`

export { StyledBaseLayout }

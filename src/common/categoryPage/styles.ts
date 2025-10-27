import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledCategoryBody = styled(FlexContainer)`
  flex: 1;
`

const StyledHeader = styled.div`
  padding: ${tokens.space.xl2};
`

export { StyledHeader, StyledCategoryBody }

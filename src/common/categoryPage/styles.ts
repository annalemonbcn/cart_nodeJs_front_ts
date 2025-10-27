import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledCategoryBody = styled(FlexContainer)`
  flex: 1;
  padding: 0 ${tokens.space.xl};
`

const StyledHeader = styled.div`
  padding: ${tokens.space.xl2} 0;
`

export { StyledHeader, StyledCategoryBody }

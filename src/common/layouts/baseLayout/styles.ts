import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import { MAX_VIEW_WIDTH } from '@/variables/styles/globalStyles'

const StyledBaseLayout = styled(FlexContainer)`
  min-height: 100%;
  padding: 0 ${tokens.space.xl6};

  max-width: ${MAX_VIEW_WIDTH};
  margin: 0 auto;
`

export { StyledBaseLayout }

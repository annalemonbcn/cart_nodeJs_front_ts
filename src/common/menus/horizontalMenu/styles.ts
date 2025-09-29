import FlexContainer from '@/components/flexContainer'
import { tokens } from '@/variables/styles'
import styled from 'styled-components'

const StyledMenuWrapper = styled(FlexContainer)`
  overflow-x: auto;
  max-width: calc(100vw - (${tokens.space.lg}*2));
  -webkit-overflow-scrolling: touch;

  padding-bottom: ${tokens.space.xs};
`

export { StyledMenuWrapper }

import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { t } from '@/styles/themeHelpers'

const StyledMenuWrapper = styled(FlexContainer)`
  overflow-x: auto;
  max-width: calc(100vw - (${t.space('lg')}*2));
  -webkit-overflow-scrolling: touch;

  padding-bottom: ${t.space('xs')};
`

export { StyledMenuWrapper }

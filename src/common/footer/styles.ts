import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { t } from '@/styles/themeHelpers'

const StyledFooter = styled(FlexContainer)`
  grid-area: footer;
  background-color: ${t.color('darkNeutral')};
  padding: ${t.space('lg')};
`

export { StyledFooter }

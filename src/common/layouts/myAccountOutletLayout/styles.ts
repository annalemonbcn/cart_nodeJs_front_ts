import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { t } from '@/styles/themeHelpers'

const StyledContainer = styled(FlexContainer)`
  width: 100%;
  padding-bottom: ${t.space('xl2')};
`

export { StyledContainer }

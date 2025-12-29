import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { t } from '@/styles/themeHelpers'

const StyledContainer = styled(FlexContainer)`
  padding: ${t.borderSize('sm')} dashed ${t.color('lightNeutral')};
  align-items: center;
`

export { StyledContainer }

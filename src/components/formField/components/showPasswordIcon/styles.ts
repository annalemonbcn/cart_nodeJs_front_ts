import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { t } from '@/styles/themeHelpers'

const StyledShowPasswordIcon = styled(FlexContainer)`
  cursor: pointer;
`

const StyledIcon = styled.img`
  width: ${t.space('md')};
  height: ${t.space('md')};
`

export { StyledIcon, StyledShowPasswordIcon }

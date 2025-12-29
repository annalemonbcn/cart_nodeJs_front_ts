import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media } from '@/styles/themeHelpers'

const StyledSideMenu = styled(FlexContainer)`
  ${media.tablet(css`
    width: 295px;
  `)}
`

export { StyledSideMenu }

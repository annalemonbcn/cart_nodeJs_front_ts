import FlexContainer from '@/components/flexContainer'
import { media } from '@/theme'
import styled, { css } from 'styled-components'

const StyledSideMenu = styled(FlexContainer)`
  ${media.mobile(
    css`
      width: 100%;
    `
  )}
  width: 295px;
`

export { StyledSideMenu }

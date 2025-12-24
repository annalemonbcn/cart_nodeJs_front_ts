import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media } from '@/theme'

const StyledDesktopFiltersSidePanel = styled(FlexContainer)`
  width: 300px;

  ${media.mobile(css`
    display: none;
  `)}
`

export { StyledDesktopFiltersSidePanel }

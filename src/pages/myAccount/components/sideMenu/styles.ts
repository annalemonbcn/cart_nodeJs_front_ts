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

const MobileOnly = styled.div`
  display: none;

  ${media.mobile(
    css`
      display: block;
    `
  )}
`

const TabletDesktopOnly = styled.div`
  display: none;

  ${media.tablet(
    css`
      display: block;
    `
  )}

  ${media.desktop(
    css`
      display: block;
    `
  )}
`

export { StyledSideMenu, MobileOnly, TabletDesktopOnly }

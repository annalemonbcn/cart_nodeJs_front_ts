import styled from 'styled-components'
import { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media } from '@/theme'
import { tokens } from '@/variables/styles'
import { MAX_VIEW_WIDTH } from '@/variables/styles/globalStyles'
import type { IBaseLayoutProps } from './types'

const mobilePadding = css`
  padding: 0 ${tokens.space.lg};
`

const tabletPadding = css`
  padding: 0 ${tokens.space.xl3};
`

const desktopPadding = css`
  padding: 0 ${tokens.space.xl6};
`

const StyledBaseLayout = styled(FlexContainer)<Pick<IBaseLayoutProps, 'isHome'>>`
  min-height: 100%;
  max-width: ${MAX_VIEW_WIDTH};
  margin: 0 auto;

  ${({ isHome }) =>
    isHome
      ? css`
          padding: 0;
        `
      : css`
          ${media.mobile(mobilePadding)}
          ${media.tablet(tabletPadding)}
          ${media.desktop(desktopPadding)}
        `}
`

export { StyledBaseLayout }

import styled from 'styled-components'
import { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media, t } from '@/styles/themeHelpers'
import { MAX_VIEW_WIDTH } from '@/variables/styles/globalStyles'
import type { IBaseLayoutProps } from './types'

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
          padding: 0 ${t.space('lg')};
          ${media.tablet(
            css`
              padding: 0 ${t.space('xl3')};
            `
          )};
          ${media.desktop(css`
            padding: 0 ${t.space('xl6')};
          `)};
        `}
`

export { StyledBaseLayout }

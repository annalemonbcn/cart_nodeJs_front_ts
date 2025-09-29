import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { MAX_VIEW_WIDTH } from '@/variables/styles/globalStyles'
import { tokens } from '@/variables/styles'
import type { IBaseLayoutProps } from './types'
import { media } from '@/theme'
import { css } from 'styled-components'

const StyledBaseLayout = styled(FlexContainer)<Pick<IBaseLayoutProps, 'isHome'>>`
  min-height: 100%;

  padding: ${({ isHome }) => (isHome ? '0' : `0 ${tokens.space.xl6}`)};
  ${({ isHome }) =>
    media.mobile(
      isHome
        ? css`
            padding: 0;
          `
        : css`
            padding: 0 ${tokens.space.lg};
          `
    )}

  max-width: ${MAX_VIEW_WIDTH};
  margin: 0 auto;
`

export { StyledBaseLayout }

import styled from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { MAX_VIEW_WIDTH } from '@/variables/styles/globalStyles'
import { tokens } from '@/variables/styles'
import type { IBaseLayoutProps } from './types'

const StyledBaseLayout = styled(FlexContainer)<Pick<IBaseLayoutProps, 'isHome'>>`
  min-height: 100%;
  padding: 0 ${tokens.space.xl6};
  ${({ isHome }) => isHome && `padding: 0`};

  max-width: ${MAX_VIEW_WIDTH};
  margin: 0 auto;
`

export { StyledBaseLayout }

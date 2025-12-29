import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media, t } from '@/styles/themeHelpers'

const StyledFlexContainer = styled(FlexContainer)`
  flex-wrap: wrap;
  gap: ${t.space('lg')};
  justify-content: center;

  ${media.desktop(css`
    gap: auto;
    justify-content: space-between;
  `)}
`

export { StyledFlexContainer }

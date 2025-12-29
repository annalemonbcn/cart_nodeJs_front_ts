import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media } from '@/styles/themeHelpers'

const StyledFlexContainer = styled(FlexContainer)`
  flex-direction: column;

  ${media.tablet(
    css`
      flex-direction: row;
    `
  )}
`

export { StyledFlexContainer }

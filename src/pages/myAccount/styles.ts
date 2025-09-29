import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media } from '@/theme'

const StyledFlexContainer = styled(FlexContainer)`
  ${media.mobile(
    css`
      flex-direction: column;
    `
  )}
  flex-direction: row;
`

export { StyledFlexContainer }

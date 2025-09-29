import FlexContainer from '@/components/flexContainer'
import { media } from '@/theme'
import { tokens } from '@/variables/styles'
import styled, { css } from 'styled-components'

const StyledFlexContainer = styled(FlexContainer)`
  ${media.tablet(
    css`
      flex-wrap: wrap;
      gap: ${tokens.space.lg};
      justify-content: center;
    `
  )}
`

export { StyledFlexContainer }

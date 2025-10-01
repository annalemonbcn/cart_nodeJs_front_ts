import FlexContainer from '@/components/flexContainer'
import { media } from '@/theme'
import { tokens } from '@/variables/styles'
import styled, { css } from 'styled-components'

const StyledFooter = styled(FlexContainer)`
  ${media.mobile(
    css`
      margin-top: ${tokens.space.sm2};
      flex-direction: column;
      gap: ${tokens.space.sm2};
    `
  )}
  flex-direction: row;
`

export { StyledFooter }

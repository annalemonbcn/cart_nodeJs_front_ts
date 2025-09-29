import { tokens } from '@/variables/styles'
import styled, { css } from 'styled-components'
import FlexContainer from '@/components/flexContainer'
import { media } from '@/theme'

const Content = styled(FlexContainer)`
  ${media.mobile(
    css`
      padding: 0 ${tokens.space.lg};
    `
  )}
  ${media.tablet(
    css`
      padding: 0 ${tokens.space.xl3};
    `
  )}
  padding: 0 ${tokens.space.xl6};
`

export { Content }
